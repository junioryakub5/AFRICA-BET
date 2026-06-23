"use client";

import { useState, useEffect } from "react";
import { Filter, Loader2, CalendarX2, BarChart2, ShieldCheck, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PredictionCard from "@/components/PredictionCard";
import { getActivePredictions } from "@/lib/api";
import { Prediction } from "@/lib/types";

const FILTER_TABS = [
  { label: "All", value: "all" },
  { label: "2+ ODDS", value: "2+" },
  { label: "5+ ODDS", value: "5+" },
  { label: "10+ ODDS", value: "10+" },
  { label: "20+ ODDS", value: "20+" },
];

export default function HomePage() {
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [count, setCount] = useState(1);

  // Count-up animation: 1 → 365 over 1.8s with easeOut
  useEffect(() => {
    const target = 365;
    const duration = 1800;
    const startDelay = 300;
    let startTime: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOut cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * (target - 1) + 1));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    const timer = setTimeout(() => {
      raf = requestAnimationFrame(step);
    }, startDelay);

    return () => { clearTimeout(timer); cancelAnimationFrame(raf); };
  }, []);

  useEffect(() => {
    fetchPredictions("all");
  }, []);

  const fetchPredictions = async (category: string) => {
    setLoading(true);
    setError("");
    try {
      const data = await getActivePredictions(category === "all" ? undefined : category);
      setPredictions(data);
    } catch {
      setError("Failed to load predictions. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = (value: string) => {
    setActiveFilter(value);
    fetchPredictions(value);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen" style={{ background: "var(--bg, #09090b)" }}>

        {/* ── Hero ── */}
        <section
          className="pt-20 pb-6 relative overflow-hidden"
          style={{ background: "#09090b", display: "flex", flexDirection: "column", justifyContent: "center" }}
        >
          {/* ── Background: layered green glow atmosphere ── */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            {/* Primary top-right orb */}
            <div style={{
              position: "absolute", top: "-10%", right: "-5%",
              width: "700px", height: "700px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(212,160,23,0.18) 0%, rgba(212,160,23,0.06) 45%, transparent 70%)",
              filter: "blur(60px)",
            }} />
            {/* Secondary bottom-left orb */}
            <div style={{
              position: "absolute", bottom: "10%", left: "-10%",
              width: "500px", height: "500px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(204,21,0,0.1) 0%, rgba(204,21,0,0.03) 50%, transparent 70%)",
              filter: "blur(50px)",
            }} />
            {/* Centre subtle glow */}
            <div style={{
              position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)",
              width: "800px", height: "300px", borderRadius: "50%",
              background: "radial-gradient(ellipse, rgba(212,160,23,0.07) 0%, transparent 70%)",
              filter: "blur(40px)",
            }} />
            {/* Grid pattern */}
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "linear-gradient(rgba(212,160,23,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.03) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
              maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)",
            }} />
          </div>

          <div className="page-container relative z-10 text-center flex flex-col items-center">

            {/* Live badge */}
            <div className="flex justify-center mb-5 animate-fadeInUp">
              <div
                className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
                style={{
                  background: "rgba(212,160,23,0.08)",
                  border: "1px solid rgba(212,160,23,0.3)",
                  color: "#D4A017",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span style={{
                  width: "6px", height: "6px", borderRadius: "50%",
                  background: "#D4A017",
                  boxShadow: "0 0 8px #D4A017",
                  display: "inline-block",
                  animation: "pulse 2s infinite",
                }} />
                Premium Football Predictions
              </div>
            </div>

            {/* Main headline */}
            <h1
              className="animate-fadeInUp"
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.2rem, 7vw, 5.5rem)",
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                color: "#f4f4f5",
                maxWidth: "900px",
                marginBottom: "1.5rem",
                textTransform: "uppercase",
              }}
            >
              YOU CAN&apos;T BE{" "}
              <span style={{
                background: "linear-gradient(135deg, #CC1500 0%, #D4A017 50%, #F5C030 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 30px rgba(212,160,23,0.4))",
                display: "inline-block",
              }}>
                UNLUCKY
              </span>
              <br />
              <span style={{
                fontSize: "clamp(1.6rem, 5.5vw, 4.2rem)",
                color: "#a1a1aa",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}>
                FOR{" "}
                <span style={{
                    color: "#f4f4f5",
                    fontWeight: 900,
                    fontSize: "clamp(2.2rem, 7vw, 5.5rem)",
                  }}
                >
                  {count}
                </span>
                {" "}DAYS
              </span>
            </h1>

            {/* Sub-headline */}
            <p
              className="animate-fadeInUp"
              style={{
                color: "#52525b",
                fontSize: "clamp(0.85rem, 2vw, 1.05rem)",
                maxWidth: "420px",
                lineHeight: 1.65,
                marginBottom: "3rem",
                fontWeight: 500,
              }}
            >
              Expert-verified football tips. Unlock the slip, place the bet,{" "}
              <span style={{ color: "#D4A017", fontWeight: 700 }}>collect the money.</span>
            </p>

            {/* Stats row */}
            <div className="flex items-center justify-center gap-2 mb-6 animate-fadeInUp w-full">
              {[
                { value: "87%", label: "Win Rate", color: "#D4A017", glow: "rgba(212,160,23,0.3)" },
                { value: "500+", label: "Predictions", color: "#CC1500", glow: "rgba(204,21,0,0.3)" },
                { value: "100%", label: "Verified", color: "#34d399", glow: "rgba(52,211,153,0.3)" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-0.5 flex-1 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 900,
                      fontSize: "clamp(1.2rem, 4vw, 1.8rem)",
                      color: stat.color,
                      lineHeight: 1,
                      filter: `drop-shadow(0 0 12px ${stat.glow})`,
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#3f3f46",
                      marginTop: "4px",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Filter label */}
            <div
              className="flex items-center justify-center gap-2 text-xs mb-3 animate-fadeInUp"
              style={{ color: "#3f3f46", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}
            >
              <Filter size={12} />
              <span>Filter by odds</span>
            </div>

            {/* Filter pills */}
            <div className="relative w-full animate-fadeInUp">
              <div
                className="pointer-events-none absolute right-0 top-0 h-full w-12 z-10 md:hidden"
                style={{ background: "linear-gradient(to right, transparent, #09090b)" }}
                aria-hidden="true"
              />
              <div
                className="flex items-center gap-2 overflow-x-auto md:flex-wrap md:justify-center md:overflow-visible px-1 pb-1 scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                {FILTER_TABS.map((tab) => (
                  <button
                    key={tab.value}
                    onClick={() => handleFilter(tab.value)}
                    className="flex-shrink-0 text-xs font-bold px-5 py-2.5 rounded-full border transition-all duration-300"
                    style={
                      activeFilter === tab.value
                        ? {
                            background: "linear-gradient(135deg, #CC1500, #D4A017)",
                            color: "#ffffff",
                            borderColor: "transparent",
                            boxShadow: "0 4px 20px rgba(212,160,23,0.4)",
                            letterSpacing: "0.04em",
                          }
                        : {
                            background: "rgba(255,255,255,0.03)",
                            color: "#52525b",
                            borderColor: "rgba(255,255,255,0.06)",
                            letterSpacing: "0.04em",
                          }
                    }
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>


        </section>

        {/* ── Cards Grid ── */}
        <section
          className="pb-20 relative z-10"
          style={{ background: "#09090b" }}
        >
          <div className="page-container pt-4">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "rgba(212,160,23,0.08)",
                    border: "1px solid rgba(212,160,23,0.18)",
                  }}
                >
                  <Loader2 size={26} style={{ color: "#D4A017" }} className="animate-spin" />
                </div>
                <p style={{ color: "#52525b" }} className="text-sm">
                  Loading predictions...
                </p>
              </div>
            ) : error ? (
              <div className="text-center py-24">
                <p className="text-red-500 mb-4">{error}</p>
                <button
                  onClick={() => fetchPredictions(activeFilter)}
                  className="btn-outline-gold"
                >
                  Try Again
                </button>
              </div>
            ) : predictions.length === 0 ? (
              <div className="text-center py-24">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{
                    background: "#111117",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <CalendarX2 size={28} style={{ color: "#52525b" }} />
                </div>
                <p
                  className="text-lg mb-2 font-display font-semibold"
                  style={{ color: "#a1a1aa" }}
                >
                  No predictions available
                </p>
                <p className="text-sm" style={{ color: "#52525b" }}>
                  Check back soon — new tips are being prepared.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {predictions.map((pred, idx) => (
                    <PredictionCard
                      key={pred._id}
                      prediction={pred}
                      animationDelay={idx * 100}
                    />
                  ))}
                </div>

                {/* View History CTA */}
                <div className="text-center mt-14">
                  <a href="/history" className="btn-outline-gold">
                    View Past Results
                  </a>
                </div>
              </>
            )}
          </div>
        </section>

        {/* ── Trust Section ── */}
        <section
          className="py-10 md:py-20 relative z-10"
          style={{ background: "#09090b" }}
        >
          {/* Glow line divider */}
          <div className="glow-line mb-10 md:mb-16" aria-hidden="true" />

          <div className="page-container text-center">
            <h2
              className="font-display font-bold mb-2 md:mb-3"
              style={{
                fontSize: "clamp(1.4rem,5vw,2.8rem)",
                letterSpacing: "-0.03em",
                color: "#f4f4f5",
              }}
            >
              Why Trust{" "}
              <span className="gradient-text">Africa Tips?</span>
            </h2>
            <p
              className="text-xs md:text-sm max-w-md mx-auto mb-6 md:mb-14 leading-relaxed"
              style={{ color: "#a1a1aa" }}
            >
              Expert-verified predictions. Secure payments via Paystack. Instant access.
            </p>

            {/* 3-col grid */}
            <div className="grid grid-cols-3 gap-2 md:gap-5 max-w-4xl mx-auto">
              {[
                {
                  icon: <BarChart2 size={20} />,
                  title: "Expert Analysis",
                  desc: "Statistic-driven predictions backed by deep match research",
                  color: "#ff4500",
                  iconBg: "rgba(255,69,0,0.1)",
                  iconBorder: "rgba(255,69,0,0.18)",
                },
                {
                  icon: <ShieldCheck size={20} />,
                  title: "Secure Payments",
                  desc: "Paystack-powered payments — safe and instant",
                  color: "#10b981",
                  iconBg: "rgba(16,185,129,0.1)",
                  iconBorder: "rgba(16,185,129,0.18)",
                },
                {
                  icon: <Zap size={20} />,
                  title: "Instant Access",
                  desc: "Unlock your prediction immediately after payment",
                  color: "#f59e0b",
                  iconBg: "rgba(245,158,11,0.1)",
                  iconBorder: "rgba(245,158,11,0.18)",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center text-center p-3 md:p-7 rounded-xl md:rounded-2xl
                    transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 group"
                  style={{
                    background: "#111117",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    className="w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-2 md:mb-4
                      transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: item.iconBg,
                      border: `1px solid ${item.iconBorder}`,
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <h3
                      className="font-display font-bold text-[11px] md:text-sm mb-0.5 md:mb-2 tracking-wide"
                      style={{ color: "#f4f4f5" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[10px] md:text-xs leading-relaxed hidden md:block"
                      style={{ color: "#a1a1aa" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
