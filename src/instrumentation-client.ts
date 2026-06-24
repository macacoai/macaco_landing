import { capturePageview, initAnalytics } from "@/lib/analytics";

// Runs after the document loads and before React hydration (Next 16
// instrumentation-client). Initialize PostHog and record the first pageview.
try {
  initAnalytics();
  capturePageview(window.location.href);
} catch (err) {
  console.error("Analytics initialization failed:", err);
}

// Fires on client-side route changes (App Router). Capture SPA pageviews here
// since capture_pageview is disabled in init to avoid double counting.
export function onRouterTransitionStart(url: string) {
  try {
    capturePageview(url);
  } catch {
    // never let analytics break navigation
  }
}
