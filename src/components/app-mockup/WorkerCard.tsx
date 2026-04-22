"use client";

import { CheckIcon, LayersIcon } from "./icons";
import type { WorkerStatus } from "./script-data";
import { useCopy } from "@/lib/LanguageContext";

interface WorkerCardProps {
  name: string;
  strategy: string;
  objective: string;
  progress: string;
  teamShape: string[];
  status: WorkerStatus;
  summary?: string;
  testsGenerated?: number;
}

export default function WorkerCard({
  name,
  strategy,
  objective,
  progress,
  teamShape,
  status,
  summary,
  testsGenerated,
}: WorkerCardProps) {
  const c = useCopy();
  const workerCopy = c.mockup.chat.worker;
  const isRunning = status === "running";

  return (
    <div
      className="my-1.5 min-w-0 max-w-full slide-in-up"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: 12,
        borderRadius: 14,
        border: `1px solid ${isRunning ? "rgba(255,249,18,0.35)" : "var(--border-quiet)"}`,
        background: "rgba(255,249,18,0.04)",
        transition: "border-color 240ms var(--ease-toggle)",
      }}
    >
      {isRunning && (
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 2,
            background: "var(--color-accent)",
          }}
        />
      )}
      <div className="flex items-center gap-2.5 min-w-0 w-full">
        <div
          className="flex items-center justify-center shrink-0"
          style={{
            width: 28,
            height: 28,
            borderRadius: 8,
            background: "var(--color-accent)",
            color: "#00142B",
          }}
        >
          <LayersIcon style={{ width: 14, height: 14 }} />
        </div>
        <div className="flex-1 min-w-0">
          <div
            className="truncate"
            style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)" }}
          >
            {name}
          </div>
          <div
            className="truncate"
            style={{
              fontSize: 10.5,
              color: "var(--text-muted)",
              fontFamily: "var(--font-google-sans-flex)",
              letterSpacing: "0.03em",
              textTransform: "uppercase",
            }}
          >
            {strategy.replace(/_/g, " ")}
          </div>
        </div>
        {isRunning ? (
          <span
            className="macaco-chip macaco-chip-accent"
            style={{ padding: "2px 8px" }}
          >
            {workerCopy.workingChip}
          </span>
        ) : (
          <span className="macaco-chip macaco-chip-success" style={{ padding: "2px 8px" }}>
            <CheckIcon style={{ width: 10, height: 10 }} />
            {workerCopy.doneChip}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2" style={{ paddingTop: 8 }}>
        {isRunning && (
          <div
            className="flex items-center gap-2"
            style={{
              fontSize: 11.5,
              color: "var(--text-tertiary)",
              fontStyle: "italic",
            }}
          >
            <span className="worker-progress-bar" />
            {progress}
          </div>
        )}
        <div className="flex flex-wrap gap-1.5">
          {teamShape.map((role) => (
            <span
              key={role}
              className="macaco-chip macaco-chip-neutral"
              style={{ padding: "2px 8px", fontSize: 10 }}
            >
              {role}
            </span>
          ))}
        </div>
        <div>
          <span
            style={{
              fontSize: 9.5,
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: "var(--text-muted)",
              fontFamily: "var(--font-google-sans-flex)",
              textTransform: "uppercase",
            }}
          >
            {workerCopy.objectiveLabel}
          </span>
          <p
            className="mt-1"
            style={{
              fontSize: 12,
              lineHeight: 1.55,
              color: "var(--text-secondary)",
              fontFamily: "var(--font-mono)",
              margin: 0,
            }}
          >
            {objective}
          </p>
        </div>
        {!isRunning && summary && (
          <div>
            <span
              style={{
                fontSize: 9.5,
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
                fontFamily: "var(--font-google-sans-flex)",
                textTransform: "uppercase",
              }}
            >
              {workerCopy.summaryLabel}
            </span>
            <p
              className="mt-1"
              style={{
                fontSize: 12,
                lineHeight: 1.55,
                color: "var(--text-secondary)",
                margin: 0,
              }}
            >
              {summary}
            </p>
          </div>
        )}
        {!isRunning && testsGenerated != null && (
          <div
            className="flex items-center gap-1.5"
            style={{
              fontSize: 10.5,
              color: "var(--text-tertiary)",
              fontFamily: "var(--font-google-sans-flex)",
              textTransform: "uppercase",
              letterSpacing: "0.03em",
            }}
          >
            <CheckIcon style={{ width: 10, height: 10 }} />
            {testsGenerated}{" "}
            {testsGenerated === 1 ? workerCopy.testSingular : workerCopy.testPlural}
          </div>
        )}
      </div>
    </div>
  );
}
