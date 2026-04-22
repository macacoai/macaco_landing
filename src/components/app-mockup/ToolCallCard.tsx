"use client";

import { CheckCircleIcon, LoaderIcon } from "./icons";
import type { ToolCallStatus } from "./script-data";
import { useCopy } from "@/lib/LanguageContext";

interface ToolCallCardProps {
  toolName: string;
  args: Record<string, string>;
  status: ToolCallStatus;
}

export default function ToolCallCard({ toolName, args, status }: ToolCallCardProps) {
  const c = useCopy();
  const entries = Object.entries(args);
  const isExecuting = status === "executing";

  return (
    <div className="my-1 min-w-0 max-w-full overflow-hidden slide-in-up">
      <div
        className="flex items-center gap-2"
        style={{
          padding: "6px 10px",
          borderRadius: 8,
          background: isExecuting ? "rgba(255,249,18,0.06)" : "rgba(255,255,255,0.03)",
          border: `1px solid ${isExecuting ? "rgba(255,249,18,0.22)" : "var(--border-quiet)"}`,
          fontSize: 12,
        }}
      >
        <span
          className="inline-flex items-center justify-center"
          style={{
            width: 14,
            height: 14,
            color: isExecuting ? "var(--color-accent)" : "var(--status-success)",
            animation: isExecuting ? "spin 1.2s linear infinite" : undefined,
          }}
        >
          {isExecuting ? (
            <LoaderIcon style={{ width: 14, height: 14 }} />
          ) : (
            <CheckCircleIcon style={{ width: 14, height: 14 }} />
          )}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--text-primary)",
            fontWeight: 500,
          }}
        >
          {toolName}
        </span>
        <span
          style={{
            fontSize: 10,
            color: "var(--text-muted)",
            fontFamily: "var(--font-google-sans-flex)",
            marginLeft: 2,
          }}
        >
          {isExecuting
            ? c.mockup.chat.toolCallExecutingLabel
            : c.mockup.chat.toolCallCompletedLabel}
        </span>
      </div>

      {!isExecuting && (
        <div className="mt-1">
          <div
            style={{
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: "var(--text-muted)",
              fontFamily: "var(--font-google-sans-flex)",
              textTransform: "uppercase",
              marginBottom: 4,
              paddingLeft: 2,
            }}
          >
            {c.mockup.chat.toolCallArgumentsLabel}
          </div>
          <div
            className="rounded-md overflow-hidden"
            style={{
              background: "#1e1e2e",
              border: "1px solid #313244",
            }}
          >
            {entries.map(([key, value], i) => (
              <div
                key={key}
                className="flex gap-3"
                style={{
                  padding: "5px 10px",
                  borderBottom: i < entries.length - 1 ? "1px solid #313244" : "none",
                }}
              >
                <span
                  className="shrink-0"
                  style={{
                    fontSize: 10.5,
                    fontFamily: "var(--font-mono)",
                    color: "#cba6f7",
                  }}
                >
                  {key}
                </span>
                <span
                  className="min-w-0"
                  style={{
                    fontSize: 10.5,
                    fontFamily: "var(--font-mono)",
                    color: "#cdd6f4",
                    wordBreak: "break-word",
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
