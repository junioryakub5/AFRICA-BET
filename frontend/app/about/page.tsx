import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

/* ── Static data ──────────────────────────────────────────────── */

const stats = [
  { value: "87%", label: "Win Rate", color: "#D4A017", glow: "rgba(212,160,23,0.35)" },
  { value: "500+", label: "Predictions", color: "#CC1500", glow: "rgba(204,21,0,0.3)" },
  { value: "100%", label: "Verified", color: "#34d399", glow: "rgba(52,211,153,0.3)" },
  { value: "2", label: "Countries", color: "#a3e635", glow: "rgba(163,230,53,0.3)" },
];

const steps = [
  {
    number: "01",
    title: "Choose a Prediction",
    desc: "Browse today's expert-curated football tips. Filter by odds category — 2+, 5+, 10+, or 20+ — and pick the slip that fits your betting style.",
    badge: null,
    icon: "🎯",
  },
  {
    number: "02",
    title: "Secure Payment via Paystack",
    desc: "Complete your purchase through Paystack — the leading payment gateway in West Africa. Your card details are never stored by Africa Tips.",
    badge: "Secure Payment",
    badgeColor: "#10b981",
    badgeBg: "rgba(16,185,129,0.1)",
    badgeBorder: "rgba(16,185,129,0.25)",
    icon: "🔒",
  },
  {
    number: "03",
    title: "Instant Access to Your Bet Slip",
    desc: "The moment payment is verified, your full prediction unlocks immediately — no waiting, no delays. Place your bet and track the game.",
    badge: "Instant Access",
    badgeColor: "#f59e0b",
    badgeBg: "rgba(245,158,11,0.1)",
    badgeBorder: "rgba(245,158,11,0.25)",
    icon: "⚡",
  },
];

const testimonials = [
  {
    name: "Kwame A.",
    country: "🇬🇭 Ghana",
    rating: 5,
    text: "I've been following Africa Tips for 3 months now. Won GHS 4,800 from a single 10+ odds slip last week. The tips are seriously researched — this isn't guesswork.",
  },
  {
    name: "Emeka O.",
    country: "🇳🇬 Nigeria",
    rating: 5,
    text: "Best football prediction service I've used in Nigeria. The Paystack payment is smooth and the slip unlocks instantly. No stress. Won ₦62,000 last Saturday.",
  },
  {
    name: "Abena M.",
    country: "🇬🇭 Ghana",
    rating: 5,
    text: "I was skeptical at first but my friend convinced me. The 5+ odds card hit 4 weeks in a row. Cashing out consistently now. Africa Tips is the real deal.",
  },
  {
    name: "Chidi N.",
    country: "🇳🇬 Nigeria",
    rating: 5,
    text: "The instant access after payment is what sold me. No waiting for a reply on WhatsApp — the slip appears immediately. Professional service from start to finish.",
  },
  {
    name: "Ama K.",
    country: "🇬🇭 Ghana",
    rating: 5,
    text: "87% win rate is no joke. I track my bets in a spreadsheet and my personal win rate with their tips is 84% over 6 weeks. Absolutely worth the price.",
  },
  {
    name: "Tunde B.",
    country: "🇳🇬 Nigeria",
    rating: 5,
    text: "I tried free tips before and kept losing. Switched to Africa Tips and haven't looked back. The premium quality is clear — every pick has reasoning behind it.",
  },
];

/* ── Component ────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main style={{ background: "var(--bg, #09090b)", minHeight: "100vh" }}>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          className="pt-28 pb-16 relative overflow-hidden"
          style={{ background: "#09090b" }}
        >
          {/* Background atmosphere */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div style={{
              position: "absolute", top: "-15%", right: "-8%",
              width: "700px", height: "700px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(212,160,23,0.15) 0%, rgba(212,160,23,0.05) 50%, transparent 70%)",
              filter: "blur(70px)",
            }} />
            <div style={{
              position: "absolute", bottom: "0%", left: "-10%",
              width: "500px", height: "500px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(204,21,0,0.08) 0%, transparent 70%)",
              filter: "blur(60px)",
            }} />
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "linear-gradient(rgba(212,160,23,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.025) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
              maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 100%)",
            }} />
          </div>

          <div className="page-container relative z-10 text-center flex flex-col items-center">
            {/* Label pill */}
            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6 animate-fadeInUp"
              style={{
                background: "rgba(212,160,23,0.08)",
                border: "1px solid rgba(212,160,23,0.28)",
                color: "#D4A017",
              }}
            >
              <span style={{
                width: "6px", height: "6px", borderRadius: "50%",
                background: "#D4A017", boxShadow: "0 0 8px #D4A017",
                display: "inline-block", animation: "pulse 2s infinite",
              }} />
              About Africa Tips
            </div>

            <h1
              className="section-title animate-fadeInUp"
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 6vw, 4rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1.08,
                color: "#f4f4f5",
                maxWidth: "780px",
                marginBottom: "1.25rem",
              }}
            >
              Africa Tips —{" "}
              <span style={{
                background: "linear-gradient(135deg, #CC1500 0%, #D4A017 50%, #F5C030 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 24px rgba(212,160,23,0.35))",
                display: "inline-block",
              }}>
                Built for Smart Bettors
              </span>
            </h1>

            <p
              className="animate-fadeInUp"
              style={{
                color: "#a1a1aa",
                fontSize: "clamp(0.9rem, 2.2vw, 1.1rem)",
                maxWidth: "560px",
                lineHeight: 1.7,
                marginBottom: "3rem",
              }}
            >
              Expert football predictions tailored for bettors in{" "}
              <span style={{ color: "#f4f4f5", fontWeight: 600 }}>Ghana</span> and{" "}
              <span style={{ color: "#f4f4f5", fontWeight: 600 }}>Nigeria</span>.
              Statistic-driven tips, secure payments, and instant slip access — 365 days a year.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-2xl animate-fadeInUp">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-1 py-5 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <span style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(1.4rem, 4vw, 2rem)",
                    color: stat.color,
                    lineHeight: 1,
                    filter: `drop-shadow(0 0 14px ${stat.glow})`,
                  }}>
                    {stat.value}
                  </span>
                  <span style={{
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#3f3f46",
                    marginTop: "2px",
                  }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Glow divider ─────────────────────────────────────── */}
        <div className="glow-line" aria-hidden="true" />

        {/* ── Mission ──────────────────────────────────────────── */}
        <section className="py-20" style={{ background: "#09090b" }}>
          <div className="page-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-5xl mx-auto">
              {/* Text */}
              <div>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-4"
                  style={{ color: "#D4A017", letterSpacing: "0.12em" }}
                >
                  Our Mission
                </p>
                <h2
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                    letterSpacing: "-0.03em",
                    color: "#f4f4f5",
                    lineHeight: 1.15,
                    marginBottom: "1.25rem",
                  }}
                >
                  365 Days of{" "}
                  <span className="gradient-text">Winning Tips</span>
                </h2>
                <p style={{ color: "#a1a1aa", lineHeight: 1.75, marginBottom: "1rem", fontSize: "0.95rem" }}>
                  We started Africa Tips because we were tired of losing money on unreliable free tips. 
                  We built a system that combines deep statistical analysis, team form data, injury news, 
                  and head-to-head records to deliver predictions that actually win.
                </p>
                <p style={{ color: "#a1a1aa", lineHeight: 1.75, fontSize: "0.95rem" }}>
                  Our name says it all — we are here every single day of the year. Whether it's a midweek 
                  cup tie or a Sunday league classic, our analysts are watching, calculating, and 
                  giving you the best possible edge.
                </p>
              </div>

              {/* Feature cards */}
              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: "📊",
                    title: "Data-Driven Analysis",
                    desc: "Every prediction is backed by form tables, xG stats, and historical matchups.",
                    color: "rgba(212,160,23,0.12)",
                    border: "rgba(212,160,23,0.2)",
                  },
                  {
                    icon: "🏆",
                    title: "Consistent Track Record",
                    desc: "87% win rate maintained across 500+ published predictions — fully verifiable.",
                    color: "rgba(204,21,0,0.1)",
                    border: "rgba(204,21,0,0.2)",
                  },
                  {
                    icon: "🌍",
                    title: "Ghana & Nigeria Focus",
                    desc: "Prices in GHS and NGN. Payment via Paystack — no international hassle.",
                    color: "rgba(245,158,11,0.08)",
                    border: "rgba(245,158,11,0.18)",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: item.color,
                      border: `1px solid ${item.border}`,
                    }}
                  >
                    <span style={{ fontSize: "1.5rem", flexShrink: 0, lineHeight: 1.2 }}>{item.icon}</span>
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Sora', sans-serif",
                          fontWeight: 700,
                          fontSize: "0.9rem",
                          color: "#f4f4f5",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p style={{ color: "#a1a1aa", fontSize: "0.82rem", lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Glow divider ─────────────────────────────────────── */}
        <div className="glow-line" aria-hidden="true" />

        {/* ── How It Works ─────────────────────────────────────── */}
        <section className="py-20" style={{ background: "#09090b" }}>
          <div className="page-container text-center">
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#D4A017", letterSpacing: "0.12em" }}>
              Simple Process
            </p>
            <h2
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
                letterSpacing: "-0.03em",
                color: "#f4f4f5",
                lineHeight: 1.15,
                marginBottom: "0.75rem",
              }}
            >
              How It Works
            </h2>
            <p style={{ color: "#a1a1aa", fontSize: "0.92rem", marginBottom: "3.5rem" }}>
              From choosing a prediction to placing your bet in under 2 minutes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className="relative flex flex-col p-7 rounded-2xl text-left transition-all duration-300 hover:-translate-y-2"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {/* Connector line (desktop) */}
                  {i < steps.length - 1 && (
                    <div
                      className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10"
                      style={{ width: "2px", height: "40px", background: "rgba(212,160,23,0.2)" }}
                      aria-hidden="true"
                    />
                  )}

                  {/* Step number + icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      style={{
                        fontFamily: "'Sora', sans-serif",
                        fontWeight: 900,
                        fontSize: "0.65rem",
                        letterSpacing: "0.15em",
                        color: "rgba(212,160,23,0.5)",
                        textTransform: "uppercase",
                      }}
                    >
                      STEP {step.number}
                    </span>
                    <span style={{ fontSize: "1.4rem" }}>{step.icon}</span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Sora', sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#f4f4f5",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {step.title}
                  </h3>

                  <p style={{ color: "#a1a1aa", fontSize: "0.83rem", lineHeight: 1.7, marginBottom: step.badge ? "1rem" : 0 }}>
                    {step.desc}
                  </p>

                  {step.badge && (
                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full self-start"
                      style={{
                        background: step.badgeBg,
                        border: `1px solid ${step.badgeBorder}`,
                        color: step.badgeColor,
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        fontFamily: "'Sora', sans-serif",
                        letterSpacing: "0.04em",
                      }}
                    >
                      <span style={{
                        width: "5px", height: "5px", borderRadius: "50%",
                        background: step.badgeColor, display: "inline-block",
                      }} />
                      {step.badge}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Glow divider ─────────────────────────────────────── */}
        <div className="glow-line" aria-hidden="true" />

        {/* ── Testimonials ─────────────────────────────────────── */}
        <section className="py-20" style={{ background: "#09090b" }}>
          <div className="page-container">
            <div className="text-center mb-12">
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#D4A017", letterSpacing: "0.12em" }}>
                Real Winners
              </p>
              <h2
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
                  letterSpacing: "-0.03em",
                  color: "#f4f4f5",
                  lineHeight: 1.15,
                  marginBottom: "0.75rem",
                }}
              >
                What Our Customers Say
              </h2>
              <p style={{ color: "#a1a1aa", fontSize: "0.92rem" }}>
                Verified feedback from bettors across Ghana and Nigeria.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="flex flex-col p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} style={{ color: "#f59e0b", fontSize: "0.85rem" }}>★</span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p
                    style={{
                      color: "#a1a1aa",
                      fontSize: "0.875rem",
                      lineHeight: 1.7,
                      flexGrow: 1,
                      marginBottom: "1.25rem",
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, rgba(212,160,23,0.2), rgba(204,21,0,0.1))",
                        border: "1px solid rgba(212,160,23,0.25)",
                        fontFamily: "'Sora', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                        color: "#D4A017",
                      }}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: "0.82rem", color: "#f4f4f5" }}>
                        {t.name}
                      </p>
                      <p style={{ fontSize: "0.72rem", color: "#52525b" }}>{t.country}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Glow divider ─────────────────────────────────────── */}
        <div className="glow-line" aria-hidden="true" />

        {/* ── Contact ──────────────────────────────────────────── */}
        <section className="py-20" style={{ background: "#09090b" }}>
          <div className="page-container text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#D4A017", letterSpacing: "0.12em" }}>
              Get in Touch
            </p>
            <h2
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
                letterSpacing: "-0.03em",
                color: "#f4f4f5",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              Need Help or Have Questions?
            </h2>
            <p style={{ color: "#a1a1aa", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
              Our support team is available every day. Reach us on Telegram or email — we respond fast.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://t.me/mr_kinghh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #CC1500, #D4A017)",
                  color: "#ffffff",
                  fontFamily: "'Sora', sans-serif",
                  boxShadow: "0 4px 20px rgba(212,160,23,0.35)",
                  textDecoration: "none",
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>✈️</span>
                Telegram: @mr_kinghh
              </a>

              <a
                href="mailto:boadufelix086@icloud.com"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#a1a1aa",
                  fontFamily: "'Sora', sans-serif",
                  textDecoration: "none",
                }}
              >
                <span style={{ fontSize: "1rem" }}>✉️</span>
                boadufelix086@icloud.com
              </a>
            </div>

            {/* Footer links */}
            <div className="flex items-center justify-center gap-6">
              <Link
                href="/terms"
                className="text-sm font-medium transition-colors duration-200 hover:text-[#D4A017]"
                style={{ color: "#52525b" }}
              >
                Terms of Service
              </Link>
              <span style={{ color: "#3f3f46" }}>·</span>
              <Link
                href="/faq"
                className="text-sm font-medium transition-colors duration-200 hover:text-[#D4A017]"
                style={{ color: "#52525b" }}
              >
                FAQ
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
