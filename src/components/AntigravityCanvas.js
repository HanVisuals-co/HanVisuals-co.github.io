"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

// Official brand palette (Sun-Drenched Bold Spectrum)
const BRAND_COLORS = [
  "#51B8B9", // Vivid Turquoise
  "#FFDC56", // Sunshine Yellow
  "#FA9F1B", // Warm Tangerine
  "#FA7C83", // Flamingo Coral
  "#EA4C56", // Coral Crimson
];

// Helper to pre-render shapes onto offscreen canvases (GPU sprite caching)
const spriteCache = new Map();

function getCachedSprite(color, shapeType) {
  const key = `${color}_${shapeType}`;
  if (spriteCache.has(key)) {
    return spriteCache.get(key);
  }

  const size = 64;
  const center = size / 2;
  const drawSize = 26;

  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;

  // Soft ambient depth shadow
  ctx.shadowColor = "rgba(0, 0, 0, 0.35)";
  ctx.shadowBlur = 8;
  ctx.shadowOffsetY = 3;
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;

  ctx.translate(center, center);
  ctx.beginPath();

  if (shapeType === 0) {
    // 0: Play Triangle with rounded vertices (echoes the Han Visuals brand mark)
    const r = drawSize * 0.58;
    const p1 = { x: r * 0.95, y: 0 };
    const p2 = { x: -r * 0.7, y: -r * 0.85 };
    const p3 = { x: -r * 0.7, y: r * 0.85 };

    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);
    ctx.closePath();
    ctx.lineJoin = "round";
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.fill();
  } else if (shapeType === 1) {
    // 1: Circle
    ctx.arc(0, 0, drawSize * 0.44, 0, Math.PI * 2);
    ctx.fill();
  } else if (shapeType === 2) {
    // 2: Rounded pill / capsule
    const w = drawSize * 0.9;
    const h = drawSize * 0.44;
    const rad = h / 2;
    ctx.roundRect(-w / 2, -h / 2, w, h, rad);
    ctx.fill();
  } else if (shapeType === 3) {
    // 3: Donut / Hollow ring
    ctx.lineWidth = 3.5;
    ctx.arc(0, 0, drawSize * 0.38, 0, Math.PI * 2);
    ctx.stroke();
  } else {
    // 4: Diamond (4-point tilted square)
    const d = drawSize * 0.46;
    ctx.moveTo(0, -d);
    ctx.lineTo(d, 0);
    ctx.lineTo(0, d);
    ctx.lineTo(-d, 0);
    ctx.closePath();
    ctx.lineJoin = "round";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fill();
  }

  spriteCache.set(key, canvas);
  return canvas;
}

export default function AntigravityCanvas({
  enabled = true,
  density = "normal",
  className = "",
  showToggle = false,
}) {
  const { motionPaused } = useLanguage();
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [active, setActive] = useState(enabled);

  // Sync state if prop changes
  useEffect(() => {
    setActive(enabled);
  }, [enabled]);

  useEffect(() => {
    if (!active || motionPaused) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Check system prefers-reduced-motion
    const mediaReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaReduced.matches) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
      desynchronized: true,
    });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let rafId = null;
    let isVisible = true;

    // Responsive particle count (quiet, crafted density)
    const getTargetCount = () => {
      const isMobile = window.innerWidth < 768;
      if (density === "sparse") return isMobile ? 8 : 14;
      if (density === "dense") return isMobile ? 16 : 28;
      return isMobile ? 10 : 20;
    };

    // Particle representation
    class FloatingShape {
      constructor(isInitial = false) {
        this.reset(isInitial);
      }

      reset(isInitial = false) {
        this.x = Math.random() * width;
        // Float upward: initial particles populate throughout, respawned start near bottom
        this.y = isInitial ? Math.random() * height : height + 35;

        // Visual size between 8px and 18px (refined, non-distracting)
        this.visualSize = Math.random() * 10 + 8;
        this.depth = Math.random() * 0.5 + 0.7; // 0.7x to 1.2x depth
        this.opacity = Math.random() * 0.25 + 0.35; // 0.35 to 0.60 quiet backdrop opacity

        // Floating buoyancy & subtle drift
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = -(Math.random() * 0.35 + 0.28); // gentle upward float

        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.015;

        // Sinusoidal wave parameters for organic weightless feel
        this.phase = Math.random() * Math.PI * 2;
        this.frequency = Math.random() * 0.002 + 0.001;

        // Shape and color selection
        this.shapeType = Math.floor(Math.random() * 5);
        this.color =
          BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)];
        this.sprite = getCachedSprite(this.color, this.shapeType);
      }

      update(time, mouseX, mouseY) {
        // Natural weightless sway
        this.vx += Math.sin(time * this.frequency + this.phase) * 0.02;

        // Upward antigravity float
        this.x += this.vx * this.depth;
        this.y += this.vy * this.depth;
        this.rotation += this.rotationSpeed;

        // Cursor repulsion physics
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const dist = Math.hypot(dx, dy);
        const radius = 135;

        if (dist > 0 && dist < radius) {
          const force = ((radius - dist) / radius) * 2.6;
          const angle = Math.atan2(dy, dx);
          this.vx += Math.cos(angle) * force;
          this.vy += Math.sin(angle) * force;
        }

        // Damping / friction
        this.vx *= 0.96;
        this.vy *= 0.97;

        // Bound checks: soft loop
        if (this.x < -40) this.x = width + 40;
        if (this.x > width + 40) this.x = -40;

        // When floating above the top edge, respawn at the bottom
        if (this.y < -45) {
          this.reset(false);
        }
      }

      draw(context) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.rotation);
        context.globalAlpha = this.opacity;

        const scale = (this.visualSize * this.depth) / 26;
        const renderSize = 64 * scale;

        context.drawImage(
          this.sprite,
          -renderSize / 2,
          -renderSize / 2,
          renderSize,
          renderSize
        );
        context.restore();
      }
    }

    let particles = [];

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Re-populate particles to match current container dimensions
      const targetCount = getTargetCount();
      particles = [];
      for (let i = 0; i < targetCount; i++) {
        particles.push(new FloatingShape(true));
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Mouse tracking relative to canvas
    let mouseX = -9999;
    let mouseY = -9999;

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handlePointerLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave, { passive: true });

    // Handle tab visibility to pause computation when hidden
    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // Main animation loop
    const animate = (time) => {
      if (!isVisible) {
        rafId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(time, mouseX, mouseY);
        particles[i].draw(ctx);
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [active, density, motionPaused]);

  if (!active) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden select-none [mask-image:radial-gradient(ellipse_at_center,black_65%,transparent_98%)] ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
