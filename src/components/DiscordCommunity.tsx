"use client";

import { useCopy } from "@/lib/LanguageContext";

const EYEBROW: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "14px",
  marginBottom: "20px",
  fontFamily: "var(--font-google-sans-flex)",
  fontWeight: 500,
  fontSize: "12px",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.55)",
};

const EYEBROW_DASH: React.CSSProperties = {
  width: "28px",
  height: "1px",
  background: "#FFF912",
  boxShadow: "0 0 8px rgba(255,249,18,0.6)",
};

export default function DiscordCommunity() {
  const c = useCopy();
  return (
    <section
      id="community"
      className="relative z-10 pt-24 pb-32"
      style={{ backgroundColor: "var(--color-dark-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up flex flex-col items-center">
          <div style={EYEBROW}>
            <span aria-hidden="true" style={EYEBROW_DASH} />
            <span>{c.discord.eyebrow}</span>
          </div>
          <h2
            className="text-white mb-6"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 700,
              fontSize: "clamp(36px, 4.5vw, 56px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            {c.discord.h2Main} <span style={{ color: "#FFF912" }}>{c.discord.h2Accent}</span>
          </h2>
          <p
            className="max-w-3xl mx-auto mb-8"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "18px",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {c.discord.lead}
          </p>
        </div>

        <div className="flex justify-center">
          <a
            href="https://discord.gg/d5DTCwTTtJ"
            target="_blank"
            rel="noopener noreferrer"
            className="group btn-primary flex items-center"
            style={{
              padding: "14px 28px",
              borderRadius: "999px",
              fontFamily: "var(--font-inter)",
              fontWeight: 600,
              fontSize: "16px",
              textDecoration: "none",
            }}
          >
            <svg
              className="mr-3"
              style={{ width: "24px", height: "24px", color: "#000000" }}
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            {c.discord.cta}
            <svg
              className="ml-2 group-hover:translate-x-1 transition-transform"
              style={{ width: "20px", height: "20px", color: "#000000" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
