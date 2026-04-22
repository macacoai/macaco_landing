"use client";

import {
  CheckCircleIcon,
  CloudUploadIcon,
  FileCodeIcon,
  FlaskIcon,
  FolderOpenIcon,
  GlobeIcon,
  HistoryIcon,
  KeyRoundIcon,
  PlayCircleIcon,
  PlayIcon,
  SearchIcon,
  SettingsIcon,
  TerminalIcon,
} from "./icons";
import { useCopy } from "@/lib/LanguageContext";

function ToolbarIconButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      tabIndex={-1}
      aria-hidden="true"
      className="inline-flex items-center justify-center rounded-md"
      style={{
        width: 28,
        height: 28,
        color: "var(--text-secondary)",
        background: "transparent",
      }}
    >
      {children}
    </button>
  );
}

export default function TestsListPanel() {
  const c = useCopy();
  const t = c.mockup.tests;

  return (
    <section
      className="h-full flex flex-col min-w-0"
      style={{ background: "var(--surface-1)" }}
    >
      <header
        className="px-4 pt-4 pb-3 flex items-center gap-2"
        style={{ borderBottom: "1px solid var(--border-quiet)" }}
      >
        <div
          className="flex items-center justify-center shrink-0"
          style={{
            width: 34,
            height: 34,
            borderRadius: 10,
            background: "rgba(255,249,18,0.08)",
            color: "var(--color-accent)",
          }}
        >
          <GlobeIcon style={{ width: 17, height: 17 }} />
        </div>
        <h1
          className="m-0 shrink-0"
          style={{
            fontSize: 17,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            color: "var(--text-primary)",
          }}
        >
          {t.projectTitle}
        </h1>

        <div className="flex-1 min-w-0" />

        <div className="mockup-search shrink-0" style={{ width: 180 }}>
          <span className="mockup-search__icon">
            <SearchIcon style={{ width: 13, height: 13 }} />
          </span>
          <div className="mockup-search__input flex items-center" aria-hidden="true">
            <span style={{ color: "var(--text-muted)" }}>{t.searchPlaceholder}</span>
          </div>
        </div>

        <div
          className="flex items-center shrink-0"
          style={{
            padding: 2,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid var(--border-quiet)",
            borderRadius: 10,
            gap: 2,
          }}
        >
          <ToolbarIconButton>
            <FolderOpenIcon style={{ width: 14, height: 14 }} />
          </ToolbarIconButton>
          <ToolbarIconButton>
            <TerminalIcon style={{ width: 14, height: 14 }} />
          </ToolbarIconButton>
          <ToolbarIconButton>
            <KeyRoundIcon style={{ width: 14, height: 14 }} />
          </ToolbarIconButton>
          <ToolbarIconButton>
            <SettingsIcon style={{ width: 14, height: 14 }} />
          </ToolbarIconButton>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            className="inline-flex items-center gap-1.5"
            style={{
              padding: "0 10px",
              height: 32,
              borderRadius: 10,
              border: "1px solid rgba(124,227,139,0.25)",
              background: "rgba(124,227,139,0.12)",
              color: "var(--status-success)",
              fontSize: 12,
              fontWeight: 600,
              fontFamily: "var(--font-inter)",
              whiteSpace: "nowrap",
            }}
          >
            <CloudUploadIcon style={{ width: 13, height: 13 }} />
            <span>{t.sync}</span>
          </button>
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            className="inline-flex items-center gap-1.5"
            style={{
              padding: "0 10px",
              height: 32,
              borderRadius: 10,
              background: "var(--color-accent)",
              color: "#00142B",
              fontSize: 12,
              fontWeight: 700,
              fontFamily: "var(--font-inter)",
              whiteSpace: "nowrap",
            }}
          >
            <PlayCircleIcon style={{ width: 13, height: 13 }} />
            <span>{t.runAll}</span>
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto overflow-x-hidden min-w-0 mockup-scroll px-4 py-4">
        <div className="flex flex-col gap-3">
          {t.items.map((test) => (
            <article
              key={test.id}
              className="min-w-0"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid var(--border-quiet)",
                borderRadius: 14,
                padding: 16,
              }}
            >
              <div className="flex items-start justify-between gap-4 min-w-0">
                <div className="flex-1 min-w-0 overflow-hidden">
                  <div className="flex items-start gap-3 min-w-0">
                    <div
                      className="flex items-center justify-center shrink-0"
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: "rgba(255,249,18,0.1)",
                        color: "var(--color-accent)",
                      }}
                    >
                      <FlaskIcon style={{ width: 16, height: 16 }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4
                        style={{
                          fontSize: 15,
                          fontWeight: 600,
                          lineHeight: 1.3,
                          color: "var(--text-primary)",
                          margin: 0,
                        }}
                      >
                        {test.title}
                      </h4>
                      <p
                        className="mt-1"
                        style={{
                          fontSize: 12,
                          lineHeight: 1.5,
                          color: "var(--text-tertiary)",
                          margin: "4px 0 0",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {test.summary}
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-3 flex-wrap"
                    style={{ marginLeft: 48, marginTop: 10 }}
                  >
                    <span className="macaco-chip macaco-chip-success" style={{ padding: "2px 8px" }}>
                      <CheckCircleIcon style={{ width: 11, height: 11 }} />
                      {t.chipLabel}
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 truncate"
                      style={{
                        fontSize: 11,
                        color: "var(--text-muted)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      <FileCodeIcon style={{ width: 12, height: 12 }} />
                      <span className="truncate">{test.fileName}</span>
                    </span>
                  </div>

                  <div
                    className="flex items-center gap-2"
                    style={{ marginLeft: 48, marginTop: 8 }}
                  >
                    <button
                      type="button"
                      tabIndex={-1}
                      aria-hidden="true"
                      className="inline-flex items-center gap-1.5 rounded-md"
                      style={{
                        padding: "4px 8px",
                        fontSize: 11.5,
                        color: "var(--text-secondary)",
                        background: "transparent",
                        fontFamily: "var(--font-inter)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13, flexShrink: 0 }}>
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                        <path d="M15 3v18" />
                      </svg>
                      {t.viewDetails}
                    </button>
                    <button
                      type="button"
                      tabIndex={-1}
                      aria-hidden="true"
                      className="inline-flex items-center gap-1.5 rounded-md"
                      style={{
                        padding: "4px 8px",
                        fontSize: 11.5,
                        color: "var(--text-secondary)",
                        background: "transparent",
                        fontFamily: "var(--font-inter)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <HistoryIcon style={{ width: 13, height: 13, flexShrink: 0 }} />
                      {t.versionHistory}
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="inline-flex items-center gap-1.5 shrink-0"
                  style={{
                    padding: "0 16px",
                    height: 32,
                    borderRadius: 10,
                    background: "var(--color-accent)",
                    color: "#00142B",
                    fontSize: 12.5,
                    fontWeight: 700,
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  <PlayIcon style={{ width: 12, height: 12 }} />
                  <span>{t.run}</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
