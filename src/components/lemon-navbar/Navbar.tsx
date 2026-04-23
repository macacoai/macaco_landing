"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MacacoLogoMark } from "./icons";
import { cn } from "./utils";
import { useCopy, useLanguage } from "@/lib/LanguageContext";
import { handleHashClick } from "@/lib/smoothScrollToHash";

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const c = useCopy();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const activeLanguage = lang === "es" ? "ES" : "EN";

  return (
    <nav
      className="fixed top-[30px] left-0 right-0 pointer-events-none px-4 sm:px-6 lg:px-8"
      style={{ zIndex: 100 }}
      aria-label="Main navigation"
    >
      <div
        className={cn(
          "pointer-events-auto flex items-center justify-between px-6 transition-all duration-300 mx-auto",
        )}
        style={{
          width: "100%",
          maxWidth: "1280px",
          height: "58px",
          backgroundColor: "rgba(217, 217, 217, 0.1)",
          backdropFilter: "blur(16px)",
          borderColor: "rgba(255, 255, 255, 0.4)",
          borderRadius: "40px",
          opacity: 1,
          borderBottomWidth: "1px",
          borderLeftWidth: "1px",
          borderRightWidth: "1px",
          borderTopWidth: "1px",
          borderStyle: "solid",
        }}
      >
        {/* Logo */}
        <Link
          href={isHome ? "#hero" : "/"}
          onClick={isHome ? handleHashClick : undefined}
          className="flex items-center gap-2.5 shrink-0"
        >
          <MacacoLogoMark size={36} />
          <span
            className="text-black"
            style={{
                fontFamily: "var(--font-audiowide)",
                fontSize: "22px",
                fontWeight: 400,
                color: "#fff912",
          }}
          >
            Macaco
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link
              href="#why-macaco"
              onClick={handleHashClick}
              className="text-white hover:text-white/80 transition-colors"
              style={{ fontFamily: "var(--font-google-sans-flex)", fontWeight: 420, fontSize: "16px" }}
            >
              {c.nav.link}
            </Link>
          </li>
          <li>
            <Link
              href="#community"
              onClick={handleHashClick}
              className="text-white hover:text-white/80 transition-colors"
              style={{ fontFamily: "var(--font-google-sans-flex)", fontWeight: 420, fontSize: "16px" }}
            >
              {c.nav.linkCommunity}
            </Link>
          </li>
          <li>
            <Link
              href="#team"
              onClick={handleHashClick}
              className="text-white hover:text-white/80 transition-colors"
              style={{ fontFamily: "var(--font-google-sans-flex)", fontWeight: 420, fontSize: "16px" }}
            >
              {c.nav.linkTeam}
            </Link>
          </li>
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3 shrink-0">
          <div
            className="hidden md:flex relative items-center p-1"
            style={{
              height: "36px",
              width: "92px",
              borderRadius: "999px",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.14)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute top-1 left-1 bottom-1 rounded-full"
              style={{
                background: "linear-gradient(180deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.08) 100%)",
                boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.08), 0 6px 14px rgba(0, 0, 0, 0.1)",
                width: "calc(50% - 4px)",
                transform: activeLanguage === "ES" ? "translateX(0)" : "translateX(100%)",
                transition: "transform 420ms cubic-bezier(0.22, 1, 0.36, 1), background 220ms ease, box-shadow 220ms" +
                    " ease",
              }}
            />

            <button
              type="button"
              onClick={() => setLang("es")}
              className="relative z-10 flex h-full flex-1 items-center justify-center"
              style={{
                fontFamily: "var(--font-google-sans-flex)",
                fontWeight: 500,
                fontSize: "12px",
                letterSpacing: "0.03em",
                color: activeLanguage === "ES" ? "#ffffff" : "rgba(255, 255, 255, 0.48)",
                transition: "color 220ms ease, transform 220ms ease",
                transform: activeLanguage === "ES" ? "translateY(-0.5px)" : "translateY(0)",
              }}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className="relative z-10 flex h-full flex-1 items-center justify-center"
              style={{
                fontFamily: "var(--font-google-sans-flex)",
                fontWeight: 500,
                fontSize: "12px",
                letterSpacing: "0.03em",
                color: activeLanguage === "EN" ? "#ffffff" : "rgba(255, 255, 255, 0.48)",
                transition: "color 220ms ease, transform 220ms ease",
                transform: activeLanguage === "EN" ? "translateY(-0.5px)" : "translateY(0)",
              }}
            >
              EN
            </button>
          </div>

          <Link
            href="#get-started"
            onClick={handleHashClick}
            className="btn-primary flex items-center justify-center"
            style={{
              fontFamily: "var(--font-google-sans-flex)",
              fontWeight: 300,
              fontSize: "18px",
              padding: "8px 20px",
              borderRadius: "100px",
            }}
          >
            {c.nav.cta}
          </Link>
        </div>
      </div>
    </nav>
  );
}
