"use client";
import { useEffect } from "react";

export function ScheduleEvent() {
  useEffect(() => {
    let fired = false;
    const fire = () => {
      if (fired || !window.fbq) return;
      fired = true;
      window.fbq("track", "Schedule");
    };

    if (window.fbq) {
      fire();
    } else {
      // wait for pixel to load
      const id = setInterval(() => {
        if (window.fbq || fired) {
          fire();
          clearInterval(id);
        }
      }, 50);
      setTimeout(() => clearInterval(id), 5000);
    }
  }, []);

  return null;
}
