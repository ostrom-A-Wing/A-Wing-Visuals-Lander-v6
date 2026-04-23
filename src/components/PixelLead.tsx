"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function sendLead() {
  if (typeof window === "undefined" || !window.fbq) return false;
  try {
    window.fbq("track", "Lead");
    return true;
  } catch {
    return false;
  }
}

export default function PixelLead() {
  useEffect(() => {
    let cancelled = false;
    let attempts = 0;

    const fire = () => {
      if (cancelled) return false;
      return sendLead();
    };

    if (fire()) {
      return () => {
        cancelled = true;
      };
    }

    const interval = window.setInterval(() => {
      attempts += 1;
      if (fire() || attempts >= 120) {
        window.clearInterval(interval);
      }
    }, 50);

    window.addEventListener("load", fire);

    return () => {
      cancelled = true;
      window.clearInterval(interval);
      window.removeEventListener("load", fire);
    };
  }, []);

  return null;
}
