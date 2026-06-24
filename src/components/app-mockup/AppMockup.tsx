"use client";

import { useEffect, useRef, useState } from "react";
import ChatColumn from "./ChatColumn";
import ProjectsPanel from "./ProjectsPanel";
import TestsListPanel from "./TestsListPanel";
import { useChatScript } from "./useChatScript";
import { ArrowUpCircleIcon, WifiIcon } from "./icons";
import { useCopy } from "@/lib/LanguageContext";

export default function AppMockup() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const c = useCopy();
  const script = useChatScript(active, {
    initialTitle: c.mockup.chat.initialTitle,
    derivedTitle: c.mockup.chat.derivedTitle,
    userPrompt: c.mockup.chat.userPrompt,
    assistantIntro: c.mockup.chat.assistantIntro,
    assistantOutro: c.mockup.chat.assistantOutro,
    worker: {
      name: c.mockup.chat.worker.name,
      objective: c.mockup.chat.worker.objective,
      progress: c.mockup.chat.worker.progress,
      teamShape: c.mockup.chat.worker.teamShape,
      summary: c.mockup.chat.worker.summary,
    },
  });

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        const visibleEnough = entry.isIntersecting && entry.intersectionRatio >= 0.35;
        setActive(visibleEnough);
      },
      { threshold: [0, 0.35, 0.6, 1] },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative overflow-hidden"
      style={{
        width: "100%",
        borderRadius: 18,
        border: "1px solid rgba(255,255,255,0.12)",
        background: "#00142B",
        boxShadow:
          "0 0 0 1px rgba(255,255,255,0.04) inset, 0 40px 80px -24px rgba(0,0,0,0.5)",
        aspectRatio: "16 / 7.38",
        minHeight: 398,
      }}
    >
      <div
        className="relative flex items-center"
        style={{
          height: 28,
          background: "#0b1a2e",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          padding: "0 12px",
        }}
      >
        <div className="flex items-center" style={{ gap: 6 }}>
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57" }} />
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#febc2e" }} />
          <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840" }} />
        </div>
        <div
          className="absolute inset-x-0 flex items-center justify-center pointer-events-none"
          style={{
            fontSize: 12,
            color: "var(--text-secondary)",
            fontFamily: "var(--font-inter)",
            fontWeight: 500,
          }}
        >
          Macaco
        </div>
      </div>

      <div
        className="flex items-center justify-between"
        style={{
          height: 52,
          padding: "0 16px",
          borderBottom: "1px solid var(--border-quiet)",
          background: "var(--color-dark-deepest)",
        }}
      >
        <div className="flex items-center" style={{ gap: 10 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/macaco-logo.png"
            alt="Macaco"
            style={{ width: 30, height: 30, objectFit: "contain" }}
          />
          <span className="macaco-wordmark" style={{ fontSize: 21 }}>
            Macaco
          </span>
        </div>
        <div className="flex items-center" style={{ gap: 12 }}>
          <span
            className="inline-flex items-center justify-center"
            style={{
              width: 30,
              height: 30,
              color: "var(--status-success)",
            }}
            aria-hidden="true"
          >
            <WifiIcon style={{ width: 16, height: 16 }} />
          </span>
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            className="inline-flex items-center justify-center rounded-md"
            style={{
              width: 30,
              height: 30,
              color: "var(--text-secondary)",
              background: "transparent",
            }}
          >
            <ArrowUpCircleIcon style={{ width: 17, height: 17 }} />
          </button>
          <div
            className="flex items-center justify-center rounded-full"
            style={{
              width: 26,
              height: 26,
              background: "var(--color-dark-contrast)",
              color: "var(--color-accent)",
              fontSize: 11,
              fontWeight: 600,
              fontFamily: "var(--font-inter)",
            }}
          >
            L
          </div>
        </div>
      </div>

      <div
        className="grid grid-cols-1 lg:grid-cols-[19%_1fr_29%]"
        style={{ height: "calc(100% - 28px - 52px)" }}
      >
        <div className="hidden lg:block h-full overflow-hidden min-w-0">
          <ProjectsPanel />
        </div>
        <div className="hidden lg:block h-full overflow-hidden min-w-0">
          <TestsListPanel />
        </div>
        <div className="h-full overflow-hidden min-w-0"
          style={{
            borderLeft: "1px solid var(--border-quiet)",
          }}
        >
          <ChatColumn script={script} />
        </div>
      </div>
    </div>
  );
}
