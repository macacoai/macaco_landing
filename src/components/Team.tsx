"use client";

import Image from "next/image";
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

export default function Team() {
  const c = useCopy();

  return (
    <section
      id="team"
      className="relative z-10 py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up flex flex-col items-center">
          <div style={EYEBROW}>
            <span aria-hidden="true" style={EYEBROW_DASH} />
            <span>{c.team.eyebrow}</span>
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
            {c.team.h2Main} <span style={{ color: "#FFF912" }}>{c.team.h2Accent}</span>
          </h2>
          <p
            className="max-w-3xl mx-auto"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {c.team.lead}
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row justify-center max-w-5xl mx-auto"
          style={{ gap: "64px" }}
        >
          {c.team.members.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center flex-1 animate-fade-in-up"
            >
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                style={{
                  display: "inline-block",
                  borderRadius: "9999px",
                  padding: "4px",
                  border: "2px solid transparent",
                  transition: "border-color 200ms ease, transform 200ms ease",
                }}
              >
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={128}
                  height={128}
                  style={{
                    width: "128px",
                    height: "128px",
                    borderRadius: "9999px",
                    objectFit: "cover",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
                  }}
                />
              </a>
              <h3
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 700,
                  fontSize: "20px",
                  color: "#fff",
                  marginTop: "16px",
                }}
              >
                {member.name}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 600,
                  fontSize: "14px",
                  color: "#FFF912",
                  marginTop: "4px",
                  marginBottom: "12px",
                }}
              >
                {member.role}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.7)",
                  maxWidth: "320px",
                }}
              >
                {member.bio}
              </p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn · ${member.name}`}
                style={{
                  marginTop: "14px",
                  color: "rgba(255,255,255,0.45)",
                  transition: "color 200ms ease",
                  display: "inline-flex",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFF912")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >
                <svg
                  style={{ width: "20px", height: "20px" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
