"use client";

import { GlobeIcon, PlusIcon, SearchIcon, SmartphoneIcon } from "./icons";
import { useCopy } from "@/lib/LanguageContext";

export default function ProjectsPanel() {
  const c = useCopy();
  const { header, searchPlaceholder, items } = c.mockup.projects;

  return (
    <aside
      className="h-full flex flex-col min-w-0"
      style={{
        background: "var(--surface-1)",
        borderRight: "1px solid var(--border-quiet)",
      }}
    >
      <div className="px-3 pt-4 pb-3">
        <div className="flex items-center justify-between mb-3 pl-1">
          <span
            className="text-[11px] font-semibold uppercase"
            style={{
              color: "var(--text-tertiary)",
              letterSpacing: "0.12em",
              fontFamily: "var(--font-google-sans-flex)",
            }}
          >
            {header}
          </span>
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            className="inline-flex items-center justify-center rounded-md"
            style={{
              width: 24,
              height: 24,
              color: "var(--text-tertiary)",
              background: "transparent",
            }}
          >
            <PlusIcon style={{ width: 14, height: 14 }} />
          </button>
        </div>
        <div className="mockup-search">
          <span className="mockup-search__icon">
            <SearchIcon style={{ width: 13, height: 13 }} />
          </span>
          <div
            className="mockup-search__input flex items-center"
            aria-hidden="true"
          >
            <span style={{ color: "var(--text-muted)" }}>{searchPlaceholder}</span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden px-2 pb-3 flex flex-col gap-[3px]">
        {items.map((p) => {
          const isWeb = p.type === "WEB";
          return (
            <div
              key={p.id}
              className="flex items-center gap-2.5 rounded-lg"
              style={{
                padding: "8px 10px",
                background: p.active ? "rgba(255,249,18,0.06)" : "transparent",
                border: p.active
                  ? "1px solid rgba(255,249,18,0.22)"
                  : "1px solid transparent",
              }}
            >
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  background: p.active
                    ? "rgba(255,249,18,0.12)"
                    : "rgba(255,255,255,0.05)",
                  color: p.active ? "var(--color-accent)" : "var(--text-muted)",
                }}
              >
                {isWeb ? (
                  <GlobeIcon style={{ width: 15, height: 15 }} />
                ) : (
                  <SmartphoneIcon style={{ width: 15, height: 15 }} />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div
                  className="truncate"
                  style={{
                    fontSize: 13,
                    fontWeight: p.active ? 600 : 500,
                    color: p.active ? "var(--text-primary)" : "var(--text-secondary)",
                  }}
                >
                  {p.name}
                </div>
                <div
                  className="truncate"
                  style={{
                    fontSize: 10.5,
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-google-sans-flex)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {p.type}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
