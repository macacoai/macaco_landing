import type { MouseEvent } from "react";

const NAVBAR_OFFSET = 88;
const DURATION = 500;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true;

export function smoothScrollToHash(hash: string): void {
  if (typeof window === "undefined" || !hash.startsWith("#") || hash.length < 2) return;

  const target = document.getElementById(hash.slice(1));
  if (!target) return;

  const startY = window.scrollY;
  const targetY = Math.max(
    0,
    target.getBoundingClientRect().top + startY - NAVBAR_OFFSET,
  );

  const finish = () => {
    if (window.location.hash !== hash) {
      history.pushState(null, "", hash);
    }
  };

  if (prefersReducedMotion()) {
    window.scrollTo(0, targetY);
    finish();
    return;
  }

  const distance = targetY - startY;
  if (distance === 0) {
    finish();
    return;
  }

  const startTime = performance.now();
  const step = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / DURATION);
    const eased = easeOutCubic(progress);
    window.scrollTo(0, startY + distance * eased);
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      finish();
    }
  };
  requestAnimationFrame(step);
}

export function handleHashClick(e: MouseEvent<HTMLAnchorElement>): void {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
  const href = e.currentTarget.getAttribute("href");
  if (!href || !href.startsWith("#")) return;
  e.preventDefault();
  smoothScrollToHash(href);
}
