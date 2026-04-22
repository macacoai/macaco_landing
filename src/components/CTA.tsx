"use client";

import Image from "next/image";
import { useState } from "react";
import BetaAccessForm from "./BetaAccessForm";
import { useCopy } from "@/lib/LanguageContext";

const EYEBROW_DASH: React.CSSProperties = {
  width: "28px",
  height: "1px",
  background: "#FFF912",
  boxShadow: "0 0 8px rgba(255,249,18,0.6)",
};

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

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const c = useCopy();

  return (
    <section
      id="get-started"
      className="relative overflow-hidden text-white"
      style={{
        padding: "96px 24px",
        background: "var(--color-dark-deepest)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.18,
          backgroundImage: "radial-gradient(circle at 25px 25px, rgba(255,249,18,0.12) 2px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
      />

      <div
        className="relative mx-auto"
        style={{
          maxWidth: "1280px",
          borderRadius: "32px",
          background: "linear-gradient(135deg, #14344C 0%, #002038 70%, #001528 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          overflow: "hidden",
          minHeight: "760px",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgb(255, 249, 18) 0.01%, rgba(255,249,18,0.8) 0.05%, rgba(255,249,18,0) 55%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            left: "40px",
            bottom: "20px",
            width: "640px",
            height: "640px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,249,18,0.28) 0%, rgba(255,249,18,0.06) 42%, rgba(255,249,18,0) 70%)",
            filter: "blur(4px)",
          }}
        />

        <div
          className="absolute pointer-events-none select-none hidden lg:block"
          style={{
            left: "0px",
            bottom: "0px",
            height: "calc(100% - 48px)",
            width: "auto",
            maxWidth: "55%",
          }}
        >
          <Image
            src="/images/chimp-shades.png"
            alt="Macaco mascot in yellow sunglasses"
            width={2000}
            height={2000}
            sizes="(min-width: 1024px) 620px, 0px"
            priority={false}
            style={{
              height: "100%",
              width: "auto",
              maxWidth: "100%",
              objectFit: "contain",
              objectPosition: "left bottom",
              filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.45))",
            }}
          />
        </div>

        <div
          className="relative"
          style={{ padding: "72px 24px" }}
        >
          <div
            className="lg:ml-[52%] lg:pr-12 max-w-xl mx-auto lg:mx-0"
            style={{ paddingLeft: "5%" }}
          >
            <div style={EYEBROW}>
              <span aria-hidden="true" style={EYEBROW_DASH} />
              <span>{c.cta.eyebrow}</span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 700,
                fontSize: "clamp(36px, 4.5vw, 56px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                color: "#fff",
                margin: "0 0 20px",
              }}
            >
              {c.cta.h2Main}<br />
              <span style={{ color: "#FFF912" }}>{c.cta.h2Accent}</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 300,
                fontSize: "18px",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.7)",
                margin: "0 0 28px",
                maxWidth: "480px",
              }}
            >
              {c.cta.lead}
            </p>

            {!submitted ? (
              <BetaAccessForm onSuccess={() => setSubmitted(true)} />
            ) : (
              <div style={{ maxWidth: "480px" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "14px",
                    fontFamily: "var(--font-google-sans-flex)",
                    fontSize: "12px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#FFF912",
                    marginBottom: "24px",
                  }}
                >
                  <span aria-hidden="true" style={EYEBROW_DASH} />
                  <span>{c.cta.submittedMarker}</span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "18px",
                    lineHeight: 1.65,
                    color: "rgba(255,255,255,0.75)",
                    marginBottom: "32px",
                  }}
                >
                  {c.cta.submittedLead}
                </p>
                <div className="flex flex-wrap" style={{ gap: "24px" }}>
                  {c.cta.submittedChips.map((t) => (
                    <div
                      key={t}
                      className="inline-flex items-center"
                      style={{
                        gap: "8px",
                        fontFamily: "var(--font-inter)",
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      <svg className="w-4 h-4" style={{ color: "#FFF912" }} fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
