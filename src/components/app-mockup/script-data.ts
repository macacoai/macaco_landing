export type ToolCallStatus = "executing" | "completed";
export type WorkerStatus = "running" | "done";

export type ContentBlock =
  | { kind: "text"; content: string }
  | {
      kind: "tool_call";
      id: string;
      toolName: string;
      args: Record<string, string>;
      status: ToolCallStatus;
    }
  | {
      kind: "worker";
      id: string;
      name: string;
      strategy: string;
      objective: string;
      progress: string;
      teamShape: string[];
      status: WorkerStatus;
      summary?: string;
      testsGenerated?: number;
    };

export type ChatMessage =
  | { role: "user"; content: string }
  | { role: "assistant"; blocks: ContentBlock[] };

export const CODE_SNIPPET = `import { test, expect } from '@playwright/test';

test('login redirects to dashboard', async ({ page }) => {
  await page.goto('https://app.example.com/login');
  await page.fill('input[name=email]', 'qa@team.io');
  await page.fill('input[name=password]', 's3cret');
  await page.click('button:has-text("Sign in")');
  await expect(page).toHaveURL(/dashboard/);
});`;

export const TOOL_CALL_STATIC = {
  id: "tool-1",
  toolName: "browser_navigate",
  args: {
    url: "https://app.example.com/login",
    waitUntil: "networkidle",
  },
};

export const WORKER_STATIC = {
  id: "worker-1",
  strategy: "execute_scenario",
  testsGenerated: 1,
};
