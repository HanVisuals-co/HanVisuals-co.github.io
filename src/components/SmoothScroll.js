"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function SmoothScroll() {
  const { motionPaused } = useLanguage();

  useEffect(() => {
    if (motionPaused) return;
    const reducedMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMedia.matches) return;

    let navRafId = null;

    const cancelActiveScroll = () => {
      if (navRafId) {
        window.cancelAnimationFrame(navRafId);
        navRafId = null;
      }
    };

    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href*="#"]');
      if (!anchor) return;
      const rawHref = anchor.getAttribute("href");
      if (!rawHref) return;
      const hashIndex = rawHref.indexOf("#");
      if (hashIndex === -1) return;
      const hash = rawHref.slice(hashIndex);
      if (!hash || hash === "#") return;
      const targetEl = document.querySelector(hash);
      if (!targetEl) return;

      e.preventDefault();
      cancelActiveScroll();

      const startY = window.scrollY;
      const rect = targetEl.getBoundingClientRect();
      const offsetTop =
        hash === "#top" ? 0 : Math.max(0, rect.top + startY - 88);
      const distance = offsetTop - startY;

      if (Math.abs(distance) < 4) {
        window.history.pushState(null, "", hash);
        return;
      }

      // Adaptive duration based on distance (480ms to 740ms) with smooth easeInOutCubic
      const duration = Math.min(740, Math.max(480, Math.abs(distance) * 0.42));
      const startTime = performance.now();

      const step = (now) => {
        const elapsed = Math.min((now - startTime) / duration, 1);
        const eased = easeInOutCubic(elapsed);
        window.scrollTo({
          top: startY + distance * eased,
          behavior: "instant",
        });

        if (elapsed < 1) {
          navRafId = window.requestAnimationFrame(step);
        } else {
          window.history.pushState(null, "", hash);
          navRafId = null;
        }
      };

      navRafId = window.requestAnimationFrame(step);
    };

    document.addEventListener("click", handleAnchorClick);
    window.addEventListener("wheel", cancelActiveScroll, { passive: true });
    window.addEventListener("touchstart", cancelActiveScroll, { passive: true });

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("wheel", cancelActiveScroll);
      window.removeEventListener("touchstart", cancelActiveScroll);
      cancelActiveScroll();
    };
  }, [motionPaused]);

  return null;
}
