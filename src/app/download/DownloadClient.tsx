"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useCopy } from "@/lib/LanguageContext";
import { captureEvent } from "@/lib/analytics";
import { WindowsIcon, AppleIcon, LinuxIcon } from "./icons";

const RELEASES_ENDPOINT =
  "https://api.github.com/repos/macacoai/macaco-releases/releases/latest";
const DISCORD_INVITE_URL = "https://discord.gg/d5DTCwTTtJ";

type Links = {
  windows: string | null;
  mac: string | null;
  linux: string | null;
};

const EMPTY_LINKS: Links = { windows: null, mac: null, linux: null };

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

const NAV_GLASS: React.CSSProperties = {
  background: "rgba(217, 217, 217, 0.1)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(255, 255, 255, 0.4)",
};

async function getLatestDownloadLinks(signal: AbortSignal): Promise<Links> {
  try {
    const res = await fetch(RELEASES_ENDPOINT, {
      signal,
      headers: { Accept: "application/vnd.github+json" },
      cache: "no-store",
    });
    if (!res.ok) return EMPTY_LINKS;
    const release = await res.json();
    const out: Links = { ...EMPTY_LINKS };
    for (const asset of release?.assets ?? []) {
      const name: string = asset?.name ?? "";
      const url: string = asset?.browser_download_url ?? "";
      if (name.includes("Windows") && name.endsWith(".exe")) out.windows = url;
      else if (name.includes("Mac") && name.endsWith(".dmg")) out.mac = url;
      else if (name.includes("Linux") && name.endsWith(".AppImage")) out.linux = url;
    }
    return out;
  } catch {
    return EMPTY_LINKS;
  }
}

type CardProps = {
  Icon: React.ComponentType<{ className?: string }>;
  platform: string;
  description: string;
  url: string | null;
  loading: boolean;
  labels: { download: string; loading: string; unavailable: string };
};

function PlatformCard({ Icon, platform, description, url, loading, labels }: CardProps) {
  const disabled = !loading && !url;
  const pillClass =
    loading || !url
      ? "btn-glass px-5 py-2 rounded-full text-sm font-semibold text-white/40"
      : "btn-primary px-5 py-2 rounded-full text-sm font-semibold";
  const pillLabel = loading ? labels.loading : url ? labels.download : labels.unavailable;

  return (
    <a
      href={url ?? undefined}
      aria-disabled={disabled || loading}
      onClick={(e) => {
        if (!url) {
          e.preventDefault();
          return;
        }
        captureEvent("download_clicked", { platform });
      }}
      style={NAV_GLASS}
      className={`rounded-2xl p-5 flex flex-col items-center text-center transition ${
        disabled ? "opacity-60 cursor-not-allowed" : ""
      }`}
    >
      <Icon className="w-10 h-10 text-white/85 mb-3" />
      <h3 className="text-lg font-semibold text-white mb-1">{platform}</h3>
      <p className="text-xs text-white/60 mb-4">{description}</p>
      <span className={pillClass}>{pillLabel}</span>
    </a>
  );
}

export default function DownloadClient() {
  const c = useCopy();
  const [links, setLinks] = useState<Links>(EMPTY_LINKS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    captureEvent("download_page_viewed");
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    getLatestDownloadLinks(controller.signal)
      .then((result) => {
        if (active) setLinks(result);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
      controller.abort();
    };
  }, []);

  const pillLabels = {
    download: c.download.download,
    loading: c.download.loading,
    unavailable: c.download.unavailable,
  };

  return (
    <section
      className="relative z-10 flex flex-1 flex-col justify-center py-16 overflow-hidden"
      style={{ backgroundColor: "var(--color-dark-primary)" }}
    >
      <Image
        src="/images/wall.jpg"
        alt=""
        aria-hidden="true"
        width={6000}
        height={3800}
        sizes="100vw"
        priority={false}
        className="pointer-events-none select-none absolute inset-0 z-0 w-full h-full"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <Image
        src="/images/chimp-laydown.png"
        alt=""
        aria-hidden="true"
        width={1024}
        height={1024}
        sizes="(min-width: 1024px) 460px, (min-width: 640px) 340px, 240px"
        priority={false}
        className="pointer-events-none select-none absolute bottom-0 right-0 z-[1] w-[240px] sm:w-[340px] lg:w-[460px] h-auto"
      />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center animate-fade-in-up">
          <div style={EYEBROW}>
            <span aria-hidden="true" style={EYEBROW_DASH} />
            <span>{c.download.eyebrow}</span>
          </div>
          <h1
            className="text-white mb-4"
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 700,
              fontSize: "clamp(32px, 4.5vw, 56px)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            {c.download.h1Main}{" "}
            <span style={{ color: "#FFF912" }}>{c.download.h1Accent}</span>
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8 text-white/70 leading-relaxed font-light">
            {c.download.lead}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <PlatformCard
            Icon={WindowsIcon}
            platform={c.download.cards.windows.platform}
            description={c.download.cards.windows.description}
            url={links.windows}
            loading={loading}
            labels={pillLabels}
          />
          <PlatformCard
            Icon={AppleIcon}
            platform={c.download.cards.mac.platform}
            description={c.download.cards.mac.description}
            url={links.mac}
            loading={loading}
            labels={pillLabels}
          />
          <PlatformCard
            Icon={LinuxIcon}
            platform={c.download.cards.linux.platform}
            description={c.download.cards.linux.description}
            url={links.linux}
            loading={loading}
            labels={pillLabels}
          />
        </div>

        <div style={NAV_GLASS} className="rounded-2xl p-5 max-w-2xl mx-auto text-left">
          <h3 className="text-white font-semibold mb-2 text-sm">{c.download.help.title}</h3>
          <ol className="text-xs text-white/70 space-y-1">
            <li>{c.download.help.step1}</li>
            <li>{c.download.help.step2}</li>
            <li>{c.download.help.step3}</li>
          </ol>
          <div className="border-t border-white/10 mt-3 pt-3 text-xs text-white/60">
            {c.download.help.discordPrefix}
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFF912] hover:underline font-medium"
            >
              {c.download.help.discordLink}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
