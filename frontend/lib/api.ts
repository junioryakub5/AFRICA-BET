import axios from "axios";
import { ApiResponse, Prediction, UnlockData, RecentActivity, PaymentRecord, DailyRevenue } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "/api";

const api = axios.create({
  baseURL: API_URL,
  timeout: 30000,
});

// ─── Public Predictions ───────────────────────────────────────────────────────

export async function getActivePredictions(category?: string): Promise<Prediction[]> {
  const params = category && category !== "all" ? { category } : {};
  const res = await api.get<ApiResponse<Prediction[]>>("/predictions", { params });
  return res.data.data;
}

export async function getHistoryPredictions(): Promise<Prediction[]> {
  const res = await api.get<ApiResponse<Prediction[]>>("/predictions/history");
  return res.data.data;
}

// ─── Payment ──────────────────────────────────────────────────────────────────

export async function initiatePayment(
  email: string,
  predictionId: string
): Promise<{ reference: string; accessCode: string; authorizationUrl: string }> {
  const res = await api.post("/payment/initiate", { email, predictionId });
  return res.data;
}

export async function verifyPayment(
  reference: string,
  predictionId: string,
  email: string
): Promise<{ reference: string; accessToken: string }> {
  const res = await api.post("/payment/verify", { reference, predictionId, email });
  return res.data;
}

// ─── Access ───────────────────────────────────────────────────────────────────

export async function getUnlockedPrediction(reference: string): Promise<UnlockData> {
  const res = await api.get(`/access/${reference}`);
  const raw = res.data.data;
  // Backend returns the prediction directly — wrap it into UnlockData shape
  return {
    prediction: raw,
    payment: { reference, email: "", amount: raw.price || 0, expiresAt: "" },
  };
}

export async function restoreAccess(
  email: string,
  predictionId: string
): Promise<UnlockData> {
  const res = await api.post("/payment/restore", { email, predictionId });
  // Backend now returns { success, data: { payment, prediction } }
  const { payment, prediction } = res.data.data;
  return { payment, prediction };
}

// ─── Admin ────────────────────────────────────────────────────────────────────

function adminHeaders(token: string) {
  return { Authorization: `Bearer ${token}` };
}

/** Upload a file directly to Supabase via a signed URL issued by the backend.
 *  Step 1: ask backend for a signed upload URL (tiny GET, no proxy size issue).
 *  Step 2: PUT the file straight to Supabase CDN (no Vercel proxy, no size limit). */
export async function adminUploadImage(token: string, file: File): Promise<string> {
  // Step 1 — get signed URL from backend
  const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const { data } = await api.get<{ success: boolean; signedUrl: string; publicUrl: string }>(
    `/upload/signed-url`,
    { headers: { Authorization: `Bearer ${token}` }, params: { ext } }
  );

  // Step 2 — PUT file directly to Supabase (browser → Supabase, bypasses Vercel proxy)
  await axios.put(data.signedUrl, file, {
    headers: { "Content-Type": file.type },
    timeout: 120000,
  });

  return data.publicUrl;
}

export async function adminGetPredictions(token: string): Promise<Prediction[]> {
  const res = await api.get<ApiResponse<Prediction[]>>("/admin/predictions", {
    headers: adminHeaders(token),
  });
  return res.data.data;
}

export async function adminCreatePrediction(
  token: string,
  data: Partial<Prediction>
): Promise<Prediction> {
  const res = await api.post<ApiResponse<Prediction>>("/admin/predictions", data, {
    headers: adminHeaders(token),
  });
  return res.data.data;
}

export async function adminUpdatePrediction(
  token: string,
  id: string,
  data: Partial<Prediction>
): Promise<Prediction> {
  const res = await api.put<ApiResponse<Prediction>>(`/admin/predictions/${id}`, data, {
    headers: adminHeaders(token),
  });
  return res.data.data;
}

export async function adminDeletePrediction(token: string, id: string): Promise<void> {
  await api.delete(`/admin/predictions/${id}`, { headers: adminHeaders(token) });
}

export async function adminGetStats(token: string, opts?: { from?: string; to?: string }): Promise<{
  totalSlips: number;
  activeSlips: number;
  completedSlips: number;
  totalRevenue: number;
  totalSales: number;
  recentActivity: RecentActivity[];
  dailyBreakdown: DailyRevenue[];
}> {
  const params: Record<string, string> = {};
  if (opts?.from) params.from = opts.from;
  if (opts?.to)   params.to   = opts.to;
  const res = await api.get("/admin/stats", { headers: adminHeaders(token), params });
  return res.data.data;
}

export async function adminGetPayments(
  token: string,
  page = 1
): Promise<{ data: PaymentRecord[]; total: number; pages: number }> {
  const res = await api.get("/admin/payments", {
    params: { page, limit: 15 },
    headers: adminHeaders(token),
  });
  return { data: res.data.data, total: res.data.total, pages: res.data.pages };
}
