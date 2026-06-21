import posthog from "posthog-js";

/**
 * PostHog analytics for the marketing site.
 *
 * The previous static site had a PostHog snippet; the Next.js rewrite dropped it,
 * so site analytics went dark on ~Apr 20 2026. This restores it via the Next 16
 * `instrumentation-client` entrypoint (see src/instrumentation-client.ts).
 *
 * Disabled (no-op) until NEXT_PUBLIC_POSTHOG_KEY is set, so local/dev builds and
 * environments without a key are unaffected. Person profiles are `identified_only`
 * to match the privacy policy (anonymous visitors are not profiled).
 */

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

let enabled = false;

export function initAnalytics(): void {
  if (enabled || !KEY || typeof window === "undefined") return;
  posthog.init(KEY, {
    api_host: HOST,
    person_profiles: "identified_only",
    capture_pageview: false, // captured manually (initial + onRouterTransitionStart)
    capture_pageleave: true,
    autocapture: true,
  });
  enabled = true;
}

export function capturePageview(url?: string): void {
  if (!enabled) return;
  posthog.capture("$pageview", url ? { $current_url: url } : undefined);
}

export function captureEvent(event: string, properties?: Record<string, unknown>): void {
  if (!enabled) return;
  posthog.capture(event, properties);
}
