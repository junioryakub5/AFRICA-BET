import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

/* ── Sections data ────────────────────────────────────────────── */

const sections = [
  {
    id: "introduction",
    number: "1",
    title: "Introduction & Acceptance",
    content: (
      <>
        <p>
          Welcome to Africa Tips. By accessing or using our website and services, you agree to be
          bound by these Terms of Service (&ldquo;Terms&rdquo;). Please read them carefully before making
          any purchase.
        </p>
        <p>
          If you do not agree to these Terms, please do not use our services. These Terms apply to
          all visitors, users, and customers of Africa Tips.
        </p>
      </>
    ),
  },
  {
    id: "service-description",
    number: "2",
    title: "Service Description",
    content: (
      <>
        <p>
          Africa Tips provides premium football prediction tips (&ldquo;Predictions&rdquo;) to registered
          customers in Ghana and Nigeria. Our service includes:
        </p>
        <ul>
          <li>Expert-curated football bet slips across multiple odds categories (2+, 5+, 10+, 20+)</li>
          <li>Instant digital access to a locked bet slip upon successful payment</li>
          <li>A historical record of past predictions for transparency</li>
        </ul>
        <p>
          We are a prediction advisory service only. We do not operate as a bookmaker and we do not
          place bets on your behalf.
        </p>
      </>
    ),
  },
  {
    id: "payment-terms",
    number: "3",
    title: "Payment Terms",
    highlight: true,
    highlightColor: "#D4A017",
    highlightBg: "rgba(212,160,23,0.06)",
    highlightBorder: "rgba(212,160,23,0.15)",
    content: (
      <>
        <p>
          All payments are processed securely through <strong style={{ color: "#D4A017" }}>Paystack</strong>,
          a PCI DSS-compliant payment gateway trusted across West Africa.
        </p>
        <ul>
          <li>Prices are displayed in <strong>GHS (Ghanaian Cedis)</strong> and <strong>NGN (Nigerian Naira)</strong> depending on your region.</li>
          <li>The price for each prediction card is shown clearly before purchase.</li>
          <li>Payment must be completed in full before access is granted to any prediction.</li>
          <li>All transactions are final once payment verification is received.</li>
        </ul>
      </>
    ),
  },
  {
    id: "instant-access",
    number: "4",
    title: "Instant Access Policy",
    highlight: true,
    highlightColor: "#D4A017",
    highlightBg: "rgba(212,160,23,0.06)",
    highlightBorder: "rgba(212,160,23,0.15)",
    content: (
      <>
        <p>
          Upon successful payment verification by Paystack, your prediction slip will be unlocked
          and displayed to you <strong style={{ color: "#D4A017" }}>immediately</strong> — no manual
          approval or waiting period required.
        </p>
        <ul>
          <li>Access is granted automatically in real time after payment confirmation.</li>
          <li>If you experience any access issues, contact us immediately via Telegram or email.</li>
          <li>Access to a specific prediction is valid for the duration of the match day.</li>
        </ul>
      </>
    ),
  },
  {
    id: "secure-payment",
    number: "5",
    title: "Secure Payment",
    content: (
      <>
        <p>
          Your financial security is paramount to us. All payment processing is handled exclusively
          by Paystack, which uses industry-standard encryption and security protocols.
        </p>
        <ul>
          <li>Africa Tips does <strong>not</strong> collect, store, or have access to your card details.</li>
          <li>All payment data is encrypted end-to-end by Paystack.</li>
          <li>Paystack is licensed by the Central Bank of Nigeria and approved by the Bank of Ghana.</li>
        </ul>
        <p>
          We will never ask you to provide card numbers or bank details outside of the Paystack
          checkout interface.
        </p>
      </>
    ),
  },
  {
    id: "refund-policy",
    number: "6",
    title: "Refund Policy",
    content: (
      <>
        <p>
          Due to the digital and time-sensitive nature of our predictions, we maintain a strict
          no-refund policy once a prediction has been unlocked or revealed.
        </p>
        <ul>
          <li>Once your payment is verified and the bet slip is displayed, the purchase is final.</li>
          <li>No refund will be issued regardless of the outcome of the prediction.</li>
          <li>In the rare case of a technical error preventing access after successful payment, please
            contact support immediately and we will resolve the issue promptly.</li>
        </ul>
      </>
    ),
  },
  {
    id: "age-restriction",
    number: "7",
    title: "Age Restriction",
    content: (
      <>
        <p>
          Our services are intended <strong>strictly for individuals aged 18 years and older</strong>.
          By using Africa Tips, you confirm that you are at least 18 years of age.
        </p>
        <ul>
          <li>Sports betting is regulated in Ghana and Nigeria. You are responsible for compliance
            with the gambling laws in your jurisdiction.</li>
          <li>If you are under 18, you are not permitted to use this service.</li>
          <li>We reserve the right to terminate access to any account believed to belong to a minor.</li>
        </ul>
      </>
    ),
  },
  {
    id: "disclaimer",
    number: "8",
    title: "Disclaimer",
    content: (
      <>
        <p>
          Sports betting involves risk. Our predictions are based on rigorous statistical analysis
          and expert opinion, but <strong>no prediction is guaranteed</strong>.
        </p>
        <ul>
          <li>Past performance (including our 87% win rate) does not guarantee future results.</li>
          <li>Never bet more than you can afford to lose.</li>
          <li>Africa Tips is not responsible for any financial losses resulting from acting on our predictions.</li>
          <li>Please gamble responsibly. If you need support, contact the National Problem Gambling Helpline in your country.</li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    number: "9",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          All content on Africa Tips — including prediction slips, analysis, branding, design, and
          text — is the intellectual property of Africa Tips and is protected by applicable copyright laws.
        </p>
        <ul>
          <li>You may not reproduce, redistribute, resell, or share predictions with third parties.</li>
          <li>Each purchased prediction is licensed to the individual purchaser for personal use only.</li>
          <li>Unauthorised redistribution may result in immediate termination of access and legal action.</li>
        </ul>
      </>
    ),
  },
  {
    id: "changes-to-terms",
    number: "10",
    title: "Changes to Terms",
    content: (
      <>
        <p>
          We reserve the right to modify these Terms at any time. Changes will be effective
          immediately upon posting to this page.
        </p>
        <ul>
          <li>Continued use of our services after any changes constitutes your acceptance of the revised Terms.</li>
          <li>We recommend reviewing this page periodically for any updates.</li>
          <li>Material changes may be communicated via our Telegram channel.</li>
        </ul>
      </>
    ),
  },
  {
    id: "contact",
    number: "11",
    title: "Contact Information",
    content: (
      <>
        <p>
          For questions about these Terms or any aspect of our service, please reach us through the
          following channels:
        </p>
        <ul>
          <li>
            <strong>Telegram:</strong>{" "}
            <a
              href="https://t.me/mr_kinghh"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#D4A017", textDecoration: "none" }}
            >
              @mr_kinghh
            </a>
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:boadufelix086@icloud.com"
              style={{ color: "#D4A017", textDecoration: "none" }}
            >
              boadufelix086@icloud.com
            </a>
          </li>
        </ul>
        <p>We aim to respond to all enquiries within 24 hours.</p>
      </>
    ),
  },
];

/* ── Component ────────────────────────────────────────────────── */

export default function TermsPage() {
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
              position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)",
              width: "700px", height: "500px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(212,160,23,0.1) 0%, transparent 70%)",
              filter: "blur(80px)",
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
              Legal
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
              Terms of{" "}
              <span style={{
                background: "linear-gradient(135deg, #CC1500 0%, #D4A017 60%, #F5C030 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Service
              </span>
            </h1>

            <p style={{ color: "#52525b", fontSize: "0.875rem", maxWidth: "480px", lineHeight: 1.7 }}>
              Last updated: June 2025. Please read these terms carefully before using our service.
            </p>
          </div>
        </section>

        {/* ── Glow divider ─────────────────────────────────────── */}
        <div className="glow-line" aria-hidden="true" />

        {/* ── Content ──────────────────────────────────────────── */}
        <section className="py-16" style={{ background: "#09090b" }}>
          <div className="page-container max-w-3xl mx-auto">

            {/* Table of Contents */}
            <div
              className="p-6 rounded-2xl mb-10"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <h2
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  color: "#f4f4f5",
                  marginBottom: "1rem",
                  letterSpacing: "0.02em",
                }}
              >
                Contents
              </h2>
              <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      style={{
                        color: "#52525b",
                        fontSize: "0.82rem",
                        textDecoration: "none",
                        transition: "color 0.15s",
                        display: "inline-flex",
                        gap: "0.5rem",
                      }}
                      className="hover:text-[#D4A017]"
                    >
                      <span style={{ color: "#3f3f46", minWidth: "1.4rem" }}>{s.number}.</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Sections */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {sections.map((section) => (
                <div
                  id={section.id}
                  key={section.id}
                  className="p-7 rounded-2xl scroll-mt-24"
                  style={{
                    background: section.highlight ? section.highlightBg : "rgba(255,255,255,0.02)",
                    border: `1px solid ${section.highlight ? section.highlightBorder : "rgba(255,255,255,0.06)"}`,
                  }}
                >
                  {/* Section header */}
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "8px",
                        background: section.highlight ? `${section.highlightColor}22` : "rgba(212,160,23,0.1)",
                        border: `1px solid ${section.highlight ? section.highlightBorder : "rgba(212,160,23,0.2)"}`,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'Sora', sans-serif",
                        fontWeight: 800,
                        fontSize: "0.7rem",
                        color: section.highlight ? section.highlightColor : "#D4A017",
                        flexShrink: 0,
                      }}
                    >
                      {section.number}
                    </span>
                    <h2
                      style={{
                        fontFamily: "'Sora', sans-serif",
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "#f4f4f5",
                        margin: 0,
                      }}
                    >
                      {section.title}
                    </h2>
                    {section.highlight && (
                      <span
                        className="ml-auto"
                        style={{
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          fontFamily: "'Sora', sans-serif",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: section.highlightColor,
                          background: `${section.highlightColor}18`,
                          border: `1px solid ${section.highlightBorder}`,
                          padding: "2px 8px",
                          borderRadius: "99px",
                        }}
                      >
                        {section.id === "instant-access" ? "Instant Access" : "Secure Payment"}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div
                    style={{
                      color: "#a1a1aa",
                      fontSize: "0.875rem",
                      lineHeight: 1.8,
                    }}
                    className="[&_p]:mb-3 [&_p:last-child]:mb-0 [&_ul]:pl-5 [&_ul]:mt-2 [&_ul]:mb-3 [&_li]:mb-1.5 [&_li]:list-disc [&_strong]:text-[#f4f4f5] [&_strong]:font-semibold"
                  >
                    {section.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer nav */}
            <div className="flex items-center justify-center gap-6 mt-12 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <Link href="/about" className="text-sm font-medium transition-colors duration-200 hover:text-[#D4A017]" style={{ color: "#52525b" }}>
                About Us
              </Link>
              <span style={{ color: "#3f3f46" }}>·</span>
              <Link href="/faq" className="text-sm font-medium transition-colors duration-200 hover:text-[#D4A017]" style={{ color: "#52525b" }}>
                FAQ
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
