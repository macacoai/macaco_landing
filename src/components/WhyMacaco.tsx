"use client";

import AppMockup from "./app-mockup/AppMockup";
import { useCopy } from "@/lib/LanguageContext";

const FEATURE_ICONS = [
  (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="icon-0">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="icon-1">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="icon-2">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  ),
];

export default function WhyMacaco() {
  const c = useCopy();
  return (
    <section
      id="why-macaco"
      className="py-24 sm:py-32"
      style={{ backgroundColor: "var(--color-dark-deepest)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div
            className="inline-flex items-center"
            style={{
              gap: "14px",
              marginBottom: "20px",
              fontFamily: "var(--font-google-sans-flex)",
              fontWeight: 500,
              fontSize: "12px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: "28px",
                height: "1px",
                background: "#FFF912",
                boxShadow: "0 0 8px rgba(255,249,18,0.6)",
              }}
            />
            <span>{c.why.eyebrow}</span>
          </div>
          <h2
            className="text-white mb-6"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 700,
              fontSize: "clamp(36px, 4.5vw, 56px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            {c.why.h2Line1}{" "}
            <span style={{ color: "#FFF912" }}>{c.why.h2Line2Accent}</span>{" "}
            {c.why.h2Line3}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              fontSize: "20px",
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.7)",
              maxWidth: "720px",
              margin: "0 auto 64px",
            }}
          >
            {c.why.lead}
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto w-full" style={{ maxWidth: "1280px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/macaco-4.png"
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              top: -243,
              left: 5,
              maxHeight: 250,
              width: "auto",
              zIndex: 0,
              pointerEvents: "none",
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/macaco-5.png"
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              top: -243,
              right: 5,
              maxHeight: 250,
              width: "auto",
              zIndex: 0,
              pointerEvents: "none",
            }}
          />
          <AppMockup />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul
          className="list-none p-0 m-0 grid grid-cols-1 md:grid-cols-3"
          style={{ gap: "24px", marginTop: "72px" }}
        >
          {c.why.features.map((f, i) => (
            <li
              key={f.title}
              style={{
                padding: "28px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "rgba(255,249,18,0.08)",
                  border: "1px solid rgba(255,249,18,0.24)",
                  color: "#FFF912",
                  marginBottom: "18px",
                }}
              >
                {FEATURE_ICONS[i]}
              </div>
              <h3
                className="text-white"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 600,
                  fontSize: "18px",
                  letterSpacing: "-0.01em",
                  margin: "0 0 8px",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.62)",
                  margin: 0,
                }}
              >
                {f.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
