"use client";

import Link from "next/link";
import HeroAuroraScene from "@/components/HeroAuroraScene";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import { useCopy } from "@/lib/LanguageContext";
import { handleHashClick } from "@/lib/smoothScrollToHash";

export default function Hero() {
  const c = useCopy();
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "radial-gradient(75% 100% at 49.1% 0,#284961 0%,#00142B 100%)",
    }}
    >
      <HeroAuroraScene />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          maskImage: "radial-gradient(34% 34% at 50% 50%, black 0%, rgba(0, 0, 0, 0.92) 46%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(34% 34% at 50% 50%, black 0%, rgba(0, 0, 0, 0.92) 46%, transparent 100%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(72% 52% at 50% 0%, #002038 0%, rgba(0, 32, 56, 0.94) 18%, rgba(0, 32, 56, 0.76) 38%, rgba(0, 32, 56, 0.42) 58%, rgba(0, 32, 56, 0.14) 74%, rgba(0, 32, 56, 0) 100%)",
          transform: "translateY(-12%) scale(1.12)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(0, 32, 56, 0.38) 0%, rgba(0, 32, 56, 0.16) 28%, rgba(0, 32, 56, 0) 64%)",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "35%",
          background:
            "linear-gradient(to bottom, rgba(0, 20, 43, 0) 55%, rgba(0, 20, 43, 0.85) 90%," +
              " #00142B 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 min-w-0">
        <div className="animate-fade-in-up">
          <div
            className="inline-flex items-center mb-8"
            style={{
              gap: "14px",
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
            <span>{c.hero.eyebrow}</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              {c.hero.h1Main}
            </span>
            <br />
            <span style={{ color: "#FFF912" }}>
              {c.hero.h1Accent}
            </span>
          </h1>

          <p className="text-xl sm:text-2xl max-w-4xl mx-auto mb-12 text-white/70 leading-relaxed font-light">
            {c.hero.leadMain}{" "}
            <span className="font-medium" style={{ color: "#FFF912" }}>
              {c.hero.leadAccent}
            </span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-16">
            <Link
              href="#get-started"
              onClick={handleHashClick}
              className="group btn-primary px-8 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center"
            >
              {c.hero.ctaPrimary}
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="#why-macaco"
              onClick={handleHashClick}
              className="group btn-glass px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
              style={{
                color: "rgba(255,255,255,0.78)",
              }}
            >
              {c.hero.ctaSecondary}
            </Link>
          </div>

          <FeaturesCarousel items={[...c.hero.chips]} />
        </div>
      </div>
    </section>
  );
}
