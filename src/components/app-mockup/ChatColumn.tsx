"use client";

import { useEffect, useRef } from "react";
import { HistoryIcon, MessageCircleIcon, PlusIcon, SendIcon, UserIcon, UsersIcon } from "./icons";
import ToolCallCard from "./ToolCallCard";
import WorkerCard from "./WorkerCard";
import type { ChatMessage, ContentBlock } from "./script-data";
import type { ChatScriptState } from "./useChatScript";
import { useCopy } from "@/lib/LanguageContext";

interface ChatColumnProps {
  script: ChatScriptState;
}

function AssistantHeader() {
  return (
    <div className="flex items-center gap-2 mb-2">
      <span
        className="flex items-center justify-center shrink-0"
        style={{
          width: 18,
          height: 18,
          borderRadius: 5,
          background: "var(--color-accent)",
          color: "#00142B",
          fontFamily: "var(--font-audiowide)",
          fontSize: 11,
          fontWeight: 800,
        }}
      >
        M
      </span>
      <span
        style={{
          fontFamily: "var(--font-audiowide)",
          fontSize: 12,
          color: "var(--color-accent-bright)",
          letterSpacing: "0.04em",
        }}
      >
        Macaco
      </span>
    </div>
  );
}

function TextBlock({ content }: { content: string }) {
  const codeMatch = content.match(/```(\w+)?\n([\s\S]+?)```/);
  if (codeMatch) {
    const before = content.slice(0, codeMatch.index).trim();
    const lang = codeMatch[1] ?? "";
    const code = codeMatch[2];
    const after = content.slice((codeMatch.index ?? 0) + codeMatch[0].length).trim();
    return (
      <>
        {before && (
          <p
            style={{
              fontSize: 13,
              lineHeight: 1.6,
              color: "var(--text-primary)",
              margin: "0 0 8px",
              whiteSpace: "pre-wrap",
            }}
          >
            {before}
          </p>
        )}
        <div
          className="rounded-lg overflow-hidden my-2"
          style={{
            background: "#1e1e2e",
            border: "1px solid #313244",
          }}
        >
          {lang && (
            <div
              className="flex items-center justify-between px-3"
              style={{
                height: 26,
                borderBottom: "1px solid #313244",
                fontSize: 10,
                color: "#a6adc8",
                fontFamily: "var(--font-google-sans-flex)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              <span>{lang}</span>
              <span style={{ color: "#6c7086" }}>playwright</span>
            </div>
          )}
          <pre
            className="overflow-x-auto"
            style={{
              margin: 0,
              padding: "10px 12px",
              fontSize: 11.5,
              lineHeight: 1.55,
              color: "#cdd6f4",
              fontFamily: "var(--font-mono)",
              whiteSpace: "pre",
            }}
          >
            {code}
          </pre>
        </div>
        {after && (
          <p
            style={{
              fontSize: 13,
              lineHeight: 1.6,
              color: "var(--text-primary)",
              margin: "8px 0 0",
              whiteSpace: "pre-wrap",
            }}
          >
            {after}
          </p>
        )}
      </>
    );
  }

  return (
    <p
      style={{
        fontSize: 13,
        lineHeight: 1.6,
        color: "var(--text-primary)",
        margin: 0,
        whiteSpace: "pre-wrap",
      }}
    >
      {content}
    </p>
  );
}

function renderBlock(block: ContentBlock, isLast: boolean, isStreaming: boolean) {
  if (block.kind === "text") {
    return (
      <div>
        <TextBlock content={block.content} />
        {isLast && isStreaming && (
          <span className="inline-flex items-center gap-1" style={{ marginLeft: 4 }}>
            <span className="flex" style={{ gap: 3 }}>
              <span
                className="rounded-full animate-bounce"
                style={{ width: 4, height: 4, background: "var(--color-accent)", animationDelay: "0ms", animationDuration: "1.2s" }}
              />
              <span
                className="rounded-full animate-bounce"
                style={{ width: 4, height: 4, background: "var(--color-accent)", animationDelay: "180ms", animationDuration: "1.2s" }}
              />
              <span
                className="rounded-full animate-bounce"
                style={{ width: 4, height: 4, background: "var(--color-accent)", animationDelay: "360ms", animationDuration: "1.2s" }}
              />
            </span>
          </span>
        )}
      </div>
    );
  }
  if (block.kind === "tool_call") {
    return (
      <ToolCallCard toolName={block.toolName} args={block.args} status={block.status} />
    );
  }
  return (
    <WorkerCard
      name={block.name}
      strategy={block.strategy}
      objective={block.objective}
      progress={block.progress}
      teamShape={block.teamShape}
      status={block.status}
      summary={block.summary}
      testsGenerated={block.testsGenerated}
    />
  );
}

function MessageRow({ message }: { message: ChatMessage }) {
  if (message.role === "user") {
    return (
      <div className="slide-in-up flex min-w-0 justify-end" style={{ padding: "10px 16px" }}>
        <div
          className="max-w-full overflow-hidden"
          style={{
            maxWidth: "82%",
            padding: "10px 14px",
            borderRadius: "14px 14px 4px 14px",
            background: "rgba(255,249,18,0.09)",
            border: "1px solid rgba(255,249,18,0.22)",
            color: "var(--text-primary)",
            fontSize: 13,
            lineHeight: 1.5,
          }}
        >
          {message.content}
        </div>
      </div>
    );
  }

  return (
    <div className="slide-in-up flex min-w-0 justify-start" style={{ padding: "10px 16px" }}>
      <div className="w-full min-w-0 overflow-hidden">
        <AssistantHeader />
        <div style={{ paddingLeft: 26 }}>
          {message.blocks.map((block, idx) => (
            <div key={idx}>{renderBlock(block, false, false)}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ChatColumn({ script }: ChatColumnProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const c = useCopy();
  const chatCopy = c.mockup.chat;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [script.messages, script.streamingBlocks, script.typingPrompt]);

  return (
    <section
      className="h-full flex flex-col min-w-0"
      style={{ background: "var(--surface-1)" }}
    >
      <header
        className="flex items-center justify-between px-4"
        style={{
          height: 52,
          borderBottom: "1px solid var(--border-quiet)",
        }}
      >
        <span
          className="truncate"
          style={{
            fontSize: 15,
            fontWeight: 600,
            color: "var(--text-primary)",
            minHeight: "1em",
            display: "inline-block",
          }}
        >
          {script.chatTitle}
        </span>
        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            className="inline-flex items-center justify-center rounded-md"
            style={{
              width: 28,
              height: 28,
              color: "var(--text-tertiary)",
              background: "transparent",
            }}
          >
            <HistoryIcon style={{ width: 14, height: 14 }} />
          </button>
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            className="inline-flex items-center justify-center rounded-md"
            style={{
              width: 28,
              height: 28,
              color: "var(--text-tertiary)",
              background: "transparent",
            }}
          >
            <PlusIcon style={{ width: 14, height: 14 }} />
          </button>
        </div>
      </header>

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto overflow-x-hidden min-w-0 mockup-scroll"
      >
        {script.messages.length === 0 &&
          script.streamingBlocks.length === 0 && (
            <div
              className="flex flex-col items-center justify-center text-center"
              style={{ height: "100%", padding: 24 }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: "rgba(255,249,18,0.06)",
                  color: "var(--color-accent)",
                  marginBottom: 12,
                }}
              >
                <MessageCircleIcon style={{ width: 28, height: 28 }} />
              </div>
            </div>
          )}
        {script.messages.map((message, idx) => (
          <MessageRow key={idx} message={message} />
        ))}
        {script.streamingBlocks.length > 0 && (
          <div
            className="slide-in-up flex min-w-0 justify-start"
            style={{ padding: "10px 16px" }}
          >
            <div className="w-full min-w-0 overflow-hidden">
              <AssistantHeader />
              <div style={{ paddingLeft: 26 }}>
                {script.streamingBlocks.map((block, idx) => {
                  const isLastBlock = idx === script.streamingBlocks.length - 1;
                  return (
                    <div key={idx}>
                      {renderBlock(block, isLastBlock, script.isStreaming)}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        className="px-3 pt-3 pb-3"
        style={{
          borderTop: "1px solid var(--border-quiet)",
          background: "var(--surface-1)",
        }}
      >
        <div className="flex items-center gap-1 mb-2">
          <div
            className="inline-flex rounded-lg"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid var(--border-default)",
              padding: 2,
            }}
          >
            <div
              className="flex items-center gap-1.5 rounded-md"
              style={{
                padding: "4px 10px",
                background: "var(--color-accent)",
                color: "#00142B",
                fontSize: 11,
                fontWeight: 600,
                fontFamily: "var(--font-google-sans-flex)",
              }}
            >
              <UserIcon style={{ width: 12, height: 12 }} />
              <span>{chatCopy.solo}</span>
            </div>
            <div
              className="flex items-center gap-1.5 rounded-md"
              style={{
                padding: "4px 10px",
                color: "var(--text-tertiary)",
                fontSize: 11,
                fontWeight: 500,
                fontFamily: "var(--font-google-sans-flex)",
              }}
            >
              <UsersIcon style={{ width: 12, height: 12 }} />
              <span>{chatCopy.squad}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-1.5 items-end">
          <div
            className="flex-1 rounded-xl flex items-center"
            style={{
              minHeight: 44,
              padding: "10px 14px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid var(--border-default)",
              color: "var(--text-primary)",
              fontSize: 13,
              lineHeight: 1.4,
              fontFamily: "var(--font-inter)",
            }}
          >
            {script.typingPrompt.length === 0 && script.messages.length === 0 && !script.isStreaming ? (
              <span style={{ color: "var(--text-muted)" }}>{chatCopy.inputPlaceholder}</span>
            ) : (
              <span>
                <span>{script.typingPrompt}</span>
                {script.isTyping && <span className="typing-caret" />}
              </span>
            )}
          </div>
          <button
            type="button"
            aria-hidden="true"
            tabIndex={-1}
            className="inline-flex items-center justify-center rounded-xl shrink-0"
            style={{
              width: 44,
              height: 44,
              background: "var(--color-accent)",
              color: "#00142B",
            }}
          >
            <SendIcon style={{ width: 16, height: 16 }} />
          </button>
        </div>
      </div>
    </section>
  );
}
