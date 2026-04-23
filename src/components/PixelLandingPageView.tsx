"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Fires Meta PageView only on the squeeze landing route (`/`).
 * Booking and thank-you pages do not emit PageView (Lead still fires on `/booking` via PixelLead).
 */
export default function PixelLandingPageView() {
  const pathname = usePathname();
  const sentForLandingVisit = useRef(false);

  useEffect(() => {
    if (pathname !== "/") {
      sentForLandingVisit.current = false;
      return;
    }

    if (sentForLandingVisit.current) return;

    let cancelled = false;
    let attempts = 0;

    const fire = () => {
      if (cancelled || sentForLandingVisit.current) return false;
      if (typeof window === "undefined" || !window.fbq) return false;
      try {
        window.fbq("track", "PageView");
        sentForLandingVisit.current = true;
        return true;
      } catch {
        return false;
      }
    };

    if (fire()) {
      return () => {
        cancelled = true;
      };
    }

    const interval = window.setInterval(() => {
      attempts += 1;
      if (fire() || attempts >= 160) {
        window.clearInterval(interval);
      }
    }, 50);

    const onLoad = () => fire();
    window.addEventListener("load", onLoad);

    return () => {
      cancelled = true;
      window.clearInterval(interval);
      window.removeEventListener("load", onLoad);
    };
  }, [pathname]);

  return null;
}
