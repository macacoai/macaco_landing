"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  CODE_SNIPPET,
  ChatMessage,
  ContentBlock,
  TOOL_CALL_STATIC,
  WORKER_STATIC,
} from "./script-data";

export type ChatScriptCopy = {
  initialTitle: string;
  derivedTitle: string;
  userPrompt: string;
  assistantIntro: string;
  assistantOutro: string;
  worker: {
    name: string;
    objective: string;
    progress: string;
    teamShape: readonly string[];
    summary: string;
  };
};

export type ChatScriptState = {
  typingPrompt: string;
  messages: ChatMessage[];
  streamingBlocks: ContentBlock[];
  isStreaming: boolean;
  isTyping: boolean;
  chatTitle: string;
};

const TYPE_PROMPT_CHAR_MS = 38;
const STREAM_TEXT_CHAR_MS = 26;
const STEP_GAP_MS = 504;
const TOOL_EXECUTING_MS = 1680;
const POST_WORKER_GAP_MS = 1800;
const LOOP_PAUSE_MS = 3120;

type Timer = ReturnType<typeof setTimeout>;

export function useChatScript(enabled: boolean, copy: ChatScriptCopy): ChatScriptState {
  const initialState = useMemo<ChatScriptState>(
    () => ({
      typingPrompt: "",
      messages: [],
      streamingBlocks: [],
      isStreaming: false,
      isTyping: false,
      chatTitle: copy.initialTitle,
    }),
    [copy.initialTitle],
  );

  const [state, setState] = useState<ChatScriptState>(initialState);
  const timersRef = useRef<Timer[]>([]);
  const runScriptRef = useRef<() => void>(() => undefined);

  const schedule = useCallback((fn: () => void, ms: number) => {
    const handle = setTimeout(fn, ms);
    timersRef.current.push(handle);
  }, []);

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  }, []);

  const updateStreaming = useCallback(
    (updater: (blocks: ContentBlock[]) => ContentBlock[]) => {
      setState((prev) => ({
        ...prev,
        streamingBlocks: updater(prev.streamingBlocks),
      }));
    },
    [],
  );

  const streamText = useCallback(
    (text: string, onDone: () => void) => {
      let i = 0;
      updateStreaming((blocks) => [...blocks, { kind: "text", content: "" }]);

      const tick = () => {
        if (i >= text.length) {
          onDone();
          return;
        }
        i += 1;
        const next = text.slice(0, i);
        setState((prev) => {
          const blocks = [...prev.streamingBlocks];
          const last = blocks[blocks.length - 1];
          if (last && last.kind === "text") {
            blocks[blocks.length - 1] = { kind: "text", content: next };
          }
          return { ...prev, streamingBlocks: blocks };
        });
        schedule(tick, STREAM_TEXT_CHAR_MS);
      };

      schedule(tick, STREAM_TEXT_CHAR_MS);
    },
    [schedule, updateStreaming],
  );

  const streamTitle = useCallback(
    (text: string) => {
      let i = 0;
      setState((prev) => ({ ...prev, chatTitle: "" }));

      const tick = () => {
        i += 1;
        const next = text.slice(0, i);
        setState((prev) => ({ ...prev, chatTitle: next }));
        if (i < text.length) {
          schedule(tick, STREAM_TEXT_CHAR_MS);
        }
      };

      schedule(tick, STREAM_TEXT_CHAR_MS);
    },
    [schedule],
  );

  const typePrompt = useCallback(
    (onDone: () => void) => {
      let i = 0;
      const text = copy.userPrompt;
      setState((prev) => ({ ...prev, isTyping: true, typingPrompt: "" }));

      const tick = () => {
        if (i >= text.length) {
          onDone();
          return;
        }
        i += 1;
        const next = text.slice(0, i);
        setState((prev) => ({ ...prev, typingPrompt: next }));
        schedule(tick, TYPE_PROMPT_CHAR_MS);
      };

      schedule(tick, TYPE_PROMPT_CHAR_MS);
    },
    [copy.userPrompt, schedule],
  );

  const runScript = useCallback(() => {
    typePrompt(() => {
      schedule(() => {
        setState((prev) => ({
          ...prev,
          isTyping: false,
          typingPrompt: "",
          messages: [...prev.messages, { role: "user", content: copy.userPrompt }],
        }));
        streamTitle(copy.derivedTitle);

        schedule(() => {
          setState((prev) => ({ ...prev, isStreaming: true, streamingBlocks: [] }));

          streamText(copy.assistantIntro, () => {
            schedule(() => {
              updateStreaming((blocks) => [
                ...blocks,
                {
                  kind: "tool_call",
                  id: TOOL_CALL_STATIC.id,
                  toolName: TOOL_CALL_STATIC.toolName,
                  args: TOOL_CALL_STATIC.args,
                  status: "executing",
                },
              ]);

              schedule(() => {
                updateStreaming((blocks) =>
                  blocks.map((b) =>
                    b.kind === "tool_call" && b.id === TOOL_CALL_STATIC.id
                      ? { ...b, status: "completed" }
                      : b,
                  ),
                );

                schedule(() => {
                  updateStreaming((blocks) => [
                    ...blocks,
                    {
                      kind: "worker",
                      id: WORKER_STATIC.id,
                      name: copy.worker.name,
                      strategy: WORKER_STATIC.strategy,
                      objective: copy.worker.objective,
                      progress: copy.worker.progress,
                      teamShape: [...copy.worker.teamShape],
                      status: "running",
                    },
                  ]);

                  schedule(() => {
                    streamText(`\n\n${copy.assistantOutro}`, () => {
                      schedule(() => {
                        updateStreaming((blocks) => [
                          ...blocks,
                          { kind: "text", content: `\n\n\`\`\`ts\n${CODE_SNIPPET}\n\`\`\`` },
                        ]);

                        schedule(() => {
                          updateStreaming((blocks) =>
                            blocks.map((b) =>
                              b.kind === "worker" && b.id === WORKER_STATIC.id
                                ? {
                                    ...b,
                                    status: "done",
                                    summary: copy.worker.summary,
                                    testsGenerated: WORKER_STATIC.testsGenerated,
                                  }
                                : b,
                            ),
                          );

                          schedule(() => {
                            setState((prev) => ({
                              ...prev,
                              isStreaming: false,
                              streamingBlocks: [],
                              messages: [
                                ...prev.messages,
                                { role: "assistant", blocks: prev.streamingBlocks },
                              ],
                            }));

                            schedule(() => {
                              setState(initialState);
                              schedule(() => runScriptRef.current(), 400);
                            }, LOOP_PAUSE_MS);
                          }, POST_WORKER_GAP_MS);
                        }, STEP_GAP_MS);
                      }, STEP_GAP_MS);
                    });
                  }, STEP_GAP_MS);
                }, TOOL_EXECUTING_MS);
              }, TOOL_EXECUTING_MS);
            }, STEP_GAP_MS);
          });
        }, STEP_GAP_MS);
      }, STEP_GAP_MS);
    });
  }, [
    copy.assistantIntro,
    copy.assistantOutro,
    copy.derivedTitle,
    copy.userPrompt,
    copy.worker.name,
    copy.worker.objective,
    copy.worker.progress,
    copy.worker.summary,
    copy.worker.teamShape,
    initialState,
    schedule,
    streamText,
    streamTitle,
    typePrompt,
    updateStreaming,
  ]);

  useEffect(() => {
    runScriptRef.current = runScript;
  }, [runScript]);

  useEffect(() => {
    if (!enabled) {
      clearAllTimers();
      const reset = setTimeout(() => setState(initialState), 0);
      timersRef.current.push(reset);
      return () => {
        clearAllTimers();
      };
    }
    clearAllTimers();
    const kickoff = setTimeout(() => {
      setState(initialState);
      runScriptRef.current();
    }, 250);
    timersRef.current.push(kickoff);
    return () => {
      clearAllTimers();
    };
  }, [enabled, clearAllTimers, initialState]);

  return state;
}
