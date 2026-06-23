"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

/* ── FAQ data ─────────────────────────────────────────────────── */

const faqs = [
  {
    id: "how-it-works",
    question: "How does Africa Tips work?",
    answer: (
      <>
        <p>
          Africa Tips publishes premium football prediction slips every day. Each slip is
          independently researched by our analysts using form data, team news, head-to-head records,
          and statistical models.
        </p>
        <p>
          Predictions are locked until you purchase them. Once you pay, the full bet slip —
          including all match selections and reasoning — is revealed instantly. You then place
          the bet yourself with your preferred bookmaker.
        </p>
      </>
    ),
  },
  {
    id: "how-to-pay",
    question: "How do I pay for a prediction?",
    answer: (
      <>
        <p>
          Click on any prediction card on the home page and tap the <strong>Unlock</strong> button.
          You will be directed to a Paystack-powered checkout page where you can pay using:
        </p>
        <ul>
          <li>Debit or credit card (Visa, Mastercard)</li>
          <li>Mobile money (MTN, Vodafone — Ghana)</li>
          <li>Bank transfer (Nigeria)</li>
        </ul>
        <p>
          The process takes under 60 seconds and your slip unlocks immediately after payment.
        </p>
      </>
    ),
  },
  {
    id: "payment-secure",
    question: "Is my payment secure?",
    answer: (
      <>
        <p>
          Yes — completely. All payments are processed by{" "}
          <strong style={{ color: "#10b981" }}>Paystack</strong>, one of West Africa&apos;s most trusted
          payment platforms. Paystack is PCI DSS Level 1 compliant and uses bank-grade encryption.
        </p>
        <p>
          Africa Tips does <strong>not</strong> store, see, or have any access to your card details
          or bank information. Your financial data stays entirely within Paystack&apos;s secure system.
        </p>
      </>
    ),
    badge: "Secure Payment",
    badgeColor: "#10b981",
    badgeBg: "rgba(16,185,129,0.1)",
    badgeBorder: "rgba(16,185,129,0.25)",
  },
  {
    id: "instant-access",
    question: "How do I get instant access after payment?",
    answer: (
      <>
        <p>
          The moment Paystack confirms your payment, the prediction slip is unlocked automatically
          in real time — no manual verification, no waiting for a reply, no WhatsApp messages needed.
        </p>
        <p>
          The full prediction appears on the same page immediately. If for any reason you do not
          see the unlocked content after a successful payment, refresh the page or contact us via
          Telegram with your payment reference.
        </p>
      </>
    ),
    badge: "Instant Access",
    badgeColor: "#f59e0b",
    badgeBg: "rgba(245,158,11,0.1)",
    badgeBorder: "rgba(245,158,11,0.25)",
  },
  {
    id: "currencies",
    question: "What currencies do you accept?",
    answer: (
      <>
        <p>
          We accept payments in <strong>GHS (Ghanaian Cedis)</strong> and{" "}
          <strong>NGN (Nigerian Naira)</strong>. The price for each prediction card is shown in your
          local currency on the checkout page.
        </p>
        <p>
          Currency detection is automatic based on your location, but you can also select your
          currency during checkout. Paystack handles all foreign exchange processing.
        </p>
      </>
    ),
  },
  {
    id: "restore-access",
    question: "I already paid but lost access — how do I restore it?",
    answer: (
      <>
        <p>
          If you paid successfully but can no longer see the prediction (e.g., you closed the tab
          or cleared your browser), please contact us immediately with:
        </p>
        <ul>
          <li>Your Paystack payment reference number</li>
          <li>The date and time of purchase</li>
          <li>The name or odds of the prediction you purchased</li>
        </ul>
        <p>
          Reach us on{" "}
          <a href="https://t.me/mr_kinghh" target="_blank" rel="noopener noreferrer" style={{ color: "#D4A017" }}>
            Telegram @mr_kinghh
          </a>{" "}
          or email <a href="mailto:boadufelix086@icloud.com" style={{ color: "#D4A017" }}>boadufelix086@icloud.com</a>.
          We typically restore access within minutes.
        </p>
      </>
    ),
  },
  {
    id: "odds-categories",
    question: "What odds categories do you offer?",
    answer: (
      <>
        <p>
          We publish predictions across four odds tiers to suit different betting strategies:
        </p>
        <ul>
          <li><strong>2+ Odds</strong> — Safer, lower-risk single or double bets</li>
          <li><strong>5+ Odds</strong> — Moderate risk with solid returns</li>
          <li><strong>10+ Odds</strong> — High value accumulators with strong research</li>
          <li><strong>20+ Odds</strong> — High stakes, high reward multi-leg slips</li>
        </ul>
        <p>
          Each category has different pricing. Use the filter on the home page to browse predictions
          by odds tier.
        </p>
      </>
    ),
  },
  {
    id: "refunds",
    question: "Do you offer refunds?",
    answer: (
      <>
        <p>
          Due to the digital and time-sensitive nature of our predictions, we operate a strict
          <strong> no-refund policy</strong> once a prediction has been unlocked and revealed.
        </p>
        <p>
          This policy exists because the core value of our service — the prediction data — is
          delivered immediately and cannot be returned. We encourage you to review our past
          performance in the History section before making your first purchase.
        </p>
        <p>
          The only exception is a technical failure on our end that prevents you from accessing a
          slip you paid for — in which case, contact us and we will resolve it immediately.
        </p>
      </>
    ),
  },
  {
    id: "accuracy",
    question: "How accurate are your predictions?",
    answer: (
      <>
        <p>
          Our overall win rate stands at <strong style={{ color: "#D4A017" }}>87%</strong> across
          500+ published predictions. This rate is calculated based on whether the predicted outcome
          won — regardless of the specific odds.
        </p>
        <p>
          You can verify our track record by visiting the{" "}
          <Link href="/history" style={{ color: "#D4A017" }}>History page</Link>, which lists all
          past predictions with results. We believe in full transparency.
        </p>
        <p>
          <em style={{ color: "#52525b" }}>
            Note: Past performance does not guarantee future results. Please bet responsibly.
          </em>
        </p>
      </>
    ),
  },
  {
    id: "contact-support",
    question: "How do I contact support?",
    answer: (
      <>
        <p>You can reach our support team through two channels:</p>
        <ul>
          <li>
            <strong>Telegram (fastest):</strong>{" "}
            <a href="https://t.me/mr_kinghh" target="_blank" rel="noopener noreferrer" style={{ color: "#D4A017" }}>
              @mr_kinghh
            </a>
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:boadufelix086@icloud.com" style={{ color: "#D4A017" }}>
              boadufelix086@icloud.com
            </a>
          </li>
        </ul>
        <p>We are available every day and aim to respond within 1–2 hours on Telegram.</p>
      </>
    ),
  },
];

/* ── Component ────────────────────────────────────────────────── */

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>("how-it-works");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <Navbar />

      <main style={{ background: "var(--bg, #09090b)", minHeight: "100vh" }}>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          className="pt-28 pb-14 relative overflow-hidden"
          style={{ background: "#09090b" }}
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div style={{
              position: "absolute", top: "-20%", right: "-5%",
              width: "600px", height: "600px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(212,160,23,0.12) 0%, transparent 70%)",
              filter: "blur(70px)",
            }} />
            <div style={{
              position: "absolute", bottom: "0", left: "-10%",
              width: "400px", height: "400px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(204,21,0,0.07) 0%, transparent 70%)",
              filter: "blur(60px)",
            }} />
          </div>

          <div className="page-container relative z-10 text-center flex flex-col items-center">
            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
              style={{
                background: "rgba(212,160,23,0.08)",
                border: "1px solid rgba(212,160,23,0.25)",
                color: "#D4A017",
              }}
            >
              Help Centre
            </div>

            <h1
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 6vw, 3.5rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                color: "#f4f4f5",
                marginBottom: "1rem",
              }}
            >
              Frequently Asked{" "}
              <span style={{
                background: "linear-gradient(135deg, #CC1500 0%, #D4A017 60%, #F5C030 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Questions
              </span>
            </h1>

            <p style={{ color: "#a1a1aa", fontSize: "0.92rem", maxWidth: "480px", lineHeight: 1.7 }}>
              Everything you need to know about Africa Tips — from payments to predictions.
            </p>
          </div>
        </section>

        {/* ── Glow divider ─────────────────────────────────────── */}
        <div className="glow-line" aria-hidden="true" />

        {/* ── Accordion ────────────────────────────────────────── */}
        <section className="py-16" style={{ background: "#09090b" }}>
          <div className="page-container max-w-2xl mx-auto">
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {faqs.map((faq) => {
                const isOpen = openId === faq.id;

                return (
                  <div
                    key={faq.id}
                    id={faq.id}
                    style={{
                      background: isOpen
                        ? "rgba(212,160,23,0.04)"
                        : "rgba(255,255,255,0.02)",
                      border: `1px solid ${isOpen ? "rgba(212,160,23,0.2)" : "rgba(255,255,255,0.06)"}`,
                      borderRadius: "16px",
                      overflow: "hidden",
                      transition: "border-color 0.25s, background 0.25s",
                    }}
                  >
                    {/* Question header (button) */}
                    <button
                      id={`faq-btn-${faq.id}`}
                      onClick={() => toggle(faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        padding: "1.25rem 1.5rem",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flex: 1, minWidth: 0 }}>
                        <h2
                          style={{
                            fontFamily: "'Sora', sans-serif",
                            fontWeight: 700,
                            fontSize: "0.9rem",
                            color: isOpen ? "#f4f4f5" : "#a1a1aa",
                            margin: 0,
                            lineHeight: 1.4,
                            transition: "color 0.2s",
                          }}
                        >
                          {faq.question}
                        </h2>

                        {/* Badge (Secure Payment / Instant Access) */}
                        {faq.badge && (
                          <span
                            style={{
                              flexShrink: 0,
                              fontSize: "0.65rem",
                              fontWeight: 700,
                              fontFamily: "'Sora', sans-serif",
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              color: faq.badgeColor,
                              background: faq.badgeBg,
                              border: `1px solid ${faq.badgeBorder}`,
                              padding: "2px 8px",
                              borderRadius: "99px",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {faq.badge}
                          </span>
                        )}
                      </div>

                      {/* Chevron */}
                      <span
                        style={{
                          flexShrink: 0,
                          width: "28px",
                          height: "28px",
                          borderRadius: "8px",
                          background: isOpen ? "rgba(212,160,23,0.12)" : "rgba(255,255,255,0.04)",
                          border: `1px solid ${isOpen ? "rgba(212,160,23,0.25)" : "rgba(255,255,255,0.07)"}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: isOpen ? "#D4A017" : "#52525b",
                          fontSize: "0.75rem",
                          transition: "all 0.25s",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                        aria-hidden="true"
                      >
                        ▾
                      </span>
                    </button>

                    {/* Answer panel */}
                    <div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${faq.id}`}
                      style={{
                        maxHeight: isOpen ? "600px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <div
                        style={{
                          padding: "0 1.5rem 1.5rem",
                          color: "#a1a1aa",
                          fontSize: "0.875rem",
                          lineHeight: 1.8,
                          borderTop: "1px solid rgba(255,255,255,0.05)",
                          paddingTop: "1.25rem",
                          marginTop: "0",
                        }}
                        className="[&_p]:mb-3 [&_p:last-child]:mb-0 [&_ul]:pl-5 [&_ul]:mt-2 [&_ul]:mb-3 [&_li]:mb-1.5 [&_li]:list-disc [&_strong]:text-[#f4f4f5] [&_strong]:font-semibold [&_em]:italic [&_a]:underline-offset-2"
                      >
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact CTA */}
            <div
              className="mt-12 p-8 rounded-2xl text-center"
              style={{
                background: "rgba(212,160,23,0.05)",
                border: "1px solid rgba(212,160,23,0.15)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#f4f4f5",
                  marginBottom: "0.5rem",
                }}
              >
                Still have questions?
              </p>
              <p style={{ color: "#a1a1aa", fontSize: "0.85rem", marginBottom: "1.5rem" }}>
                Our team is available every day. We typically reply on Telegram within an hour.
              </p>
              <a
                href="https://t.me/mr_kinghh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #CC1500, #D4A017)",
                  color: "#ffffff",
                  fontFamily: "'Sora', sans-serif",
                  boxShadow: "0 4px 20px rgba(212,160,23,0.3)",
                  textDecoration: "none",
                }}
              >
                <span style={{ fontSize: "1rem" }}>✈️</span>
                Message Us on Telegram
              </a>
            </div>

            {/* Footer links */}
            <div className="flex items-center justify-center gap-6 mt-10 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <Link href="/about" className="text-sm font-medium transition-colors duration-200 hover:text-[#D4A017]" style={{ color: "#52525b" }}>
                About Us
              </Link>
              <span style={{ color: "#3f3f46" }}>·</span>
              <Link href="/terms" className="text-sm font-medium transition-colors duration-200 hover:text-[#D4A017]" style={{ color: "#52525b" }}>
                Terms of Service
              </Link>
              <span style={{ color: "#3f3f46" }}>·</span>
              <Link href="/" className="text-sm font-medium transition-colors duration-200 hover:text-[#D4A017]" style={{ color: "#52525b" }}>
                Home
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
