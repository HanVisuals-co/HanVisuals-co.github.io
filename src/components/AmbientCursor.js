"use client";

import React, { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function AmbientCursor() {
  const { motionPaused } = useLanguage();
  const orbRef = useRef(null);

  useEffect(() => {
    const el = orbRef.current;
    if (!el || motionPaused) return;

    const coarseMedia = window.matchMedia("(hover: none) and (pointer: coarse)");
    if (coarseMedia.matches) return;

    let rafId = null;
    let targetX = window.innerWidth * 0.5;
    let targetY = window.innerHeight * 0.28;
    let currentX = targetX;
    let currentY = targetY;
    let isRunning = false;

    // Move a GPU-composited layer via translate3d instead of mutating root CSS variables.
    const tick = () => {
      const dx = targetX - currentX;
      const dy = targetY - currentY;
      currentX += dx * 0.08;
      currentY += dy * 0.08;

      el.style.transform = `translate3d(${(currentX - 340).toFixed(1)}px, ${(
        currentY - 340
      ).toFixed(1)}px, 0)`;

      if (Math.abs(dx) > 0.4 || Math.abs(dy) > 0.4) {
        rafId = window.requestAnimationFrame(tick);
      } else {
        isRunning = false;
        rafId = null;
      }
    };

    // Set initial position
    el.style.transform = `translate3d(${(currentX - 340).toFixed(1)}px, ${(
      currentY - 340
    ).toFixed(1)}px, 0)`;

    const handlePointerMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isRunning) {
        isRunning = true;
        rafId = window.requestAnimationFrame(tick);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [motionPaused]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div ref={orbRef} className="ambient-orb" />
    </div>
  );
}
