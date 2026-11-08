"use client";

import React, { useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function TiltCard({
  as: Component = "article",
  className = "",
  children,
  intensity = 4.0,
  disabled = false,
}) {
  const { motionPaused } = useLanguage();
  const cardRef = useRef(null);
  const spotRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    const spotEl = spotRef.current;
    const glowEl = glowRef.current;
    if (!el) return;

    const coarseMedia = window.matchMedia("(hover: none) and (pointer: coarse)");
    if (motionPaused || disabled || coarseMedia.matches) {
      el.style.transition = "transform 420ms cubic-bezier(0.22, 1, 0.36, 1)";
      el.style.transform =
        "perspective(1100px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)";
      if (glowEl) glowEl.style.opacity = "0";
      if (spotEl) spotEl.style.opacity = "0";
      const clearTimer = setTimeout(() => {
        if (el) {
          el.style.transition = "";
          el.style.transform = "";
        }
      }, 430);
      return () => clearTimeout(clearTimer);
    }

    el.style.transition = "";

    let rafId = null;
    let isHovered = false;
    let rectCache = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;
    let targetLift = 0;
    let currentLift = 0;

    const animate = () => {
      // Smooth exponential damping for silky slow-motion response
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      currentRotX += (targetRotX - currentRotX) * 0.1;
      currentRotY += (targetRotY - currentRotY) * 0.1;
      currentLift += (targetLift - currentLift) * 0.11;

      el.style.transform = `perspective(1100px) rotateX(${currentRotX.toFixed(
        2
      )}deg) rotateY(${currentRotY.toFixed(2)}deg) translate3d(0, ${(
        -currentLift * 3.0
      ).toFixed(2)}px, 0)`;

      if (glowEl) {
        glowEl.style.opacity = currentLift.toFixed(3);
      }
      if (spotEl) {
        spotEl.style.opacity = currentLift.toFixed(3);
        spotEl.style.transform = `translate3d(${(currentX - 220).toFixed(
          1
        )}px, ${(currentY - 220).toFixed(1)}px, 0)`;
      }

      const stillMoving =
        Math.abs(targetRotX - currentRotX) > 0.015 ||
        Math.abs(targetRotY - currentRotY) > 0.015 ||
        Math.abs(targetLift - currentLift) > 0.01;

      if (stillMoving || isHovered) {
        rafId = window.requestAnimationFrame(animate);
      } else {
        el.style.transform = "";
        rafId = null;
      }
    };

    const startLoop = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(animate);
      }
    };

    const handlePointerEnter = (e) => {
      rectCache = el.getBoundingClientRect();
      targetX = e.clientX - rectCache.left;
      targetY = e.clientY - rectCache.top;
      currentX = targetX;
      currentY = targetY;
      isHovered = true;
      targetLift = 1;
      startLoop();
    };

    const handlePointerMove = (e) => {
      if (!rectCache) {
        rectCache = el.getBoundingClientRect();
      }
      if (!rectCache.width || !rectCache.height) return;

      const x = e.clientX - rectCache.left;
      const y = e.clientY - rectCache.top;
      const nx = Math.min(Math.max(x / rectCache.width, 0), 1);
      const ny = Math.min(Math.max(y / rectCache.height, 0), 1);

      targetX = x;
      targetY = y;
      targetRotX = (0.5 - ny) * intensity * 2;
      targetRotY = (nx - 0.5) * intensity * 2;
      targetLift = 1;
      isHovered = true;
      startLoop();
    };

    const handlePointerLeave = () => {
      isHovered = false;
      rectCache = null;
      targetRotX = 0;
      targetRotY = 0;
      targetLift = 0;
      startLoop();
    };

    const invalidateRect = () => {
      rectCache = null;
    };

    el.addEventListener("pointerenter", handlePointerEnter, { passive: true });
    el.addEventListener("pointermove", handlePointerMove, { passive: true });
    el.addEventListener("pointerleave", handlePointerLeave, { passive: true });
    window.addEventListener("scroll", invalidateRect, { passive: true });

    return () => {
      el.removeEventListener("pointerenter", handlePointerEnter);
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("scroll", invalidateRect);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
        rafId = null;
      }
    };
  }, [motionPaused, intensity, disabled]);

  return (
    <Component ref={cardRef} className={`card-3d ${className}`}>
      <div ref={glowRef} className="card-3d-glow" aria-hidden="true" />
      <div className="card-3d-inner">
        <div ref={spotRef} className="card-3d-spot" aria-hidden="true" />
        <div className="relative z-10 h-full">{children}</div>
      </div>
    </Component>
  );
}
