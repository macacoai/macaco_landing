"use client";

import Image from "next/image";
import Link from "next/link";
import { useCopy } from "@/lib/LanguageContext";

const LOGO_SRC = "/images/logo-20260329.png";

export default function Footer() {
  const c = useCopy();
  return (
    <footer
      className="relative text-white py-12"
      style={{ backgroundColor: "var(--color-dark-deepest)" }}
    >
      <Image
        src="/images/wall.jpg"
        alt=""
        width={6000}
        height={3800}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-full h-auto select-none"
        style={{objectFit: "cover", opacity: 1
      }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center justify-center md:justify-start">
            <Image
              src={LOGO_SRC}
              alt="Macaco Logo"
              width={32}
              height={32}
              className="rounded-lg mr-3"
            />
            <span className="text-xl font-bold">Macaco</span>
          </div>

          <div className="flex justify-center space-x-6">
            <Link href="/terms" className="text-white/60 hover:text-[var(--color-accent)] transition-colors duration-200 text-sm">
              {c.footer.linkTerms}
            </Link>
            <Link href="/privacy" className="text-white/60 hover:text-[var(--color-accent)] transition-colors duration-200 text-sm">
              {c.footer.linkPrivacy}
            </Link>
          </div>

          <p className="text-sm text-white/60 text-center md:text-right">
            {c.footer.taglineLine1}
            <br />
            {c.footer.taglineLine2}
          </p>
        </div>
      </div>
    </footer>
  );
}
