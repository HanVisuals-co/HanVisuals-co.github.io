"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import AntigravityCanvas from "@/components/AntigravityCanvas";
import {
  PrismCopyGlyph,
  PrismCheckGlyph,
  PrismInstagramGlyph,
  PrismWhatsAppGlyph,
  PrismExternalGlyph,
} from "@/components/BrandLogos";

export default function Hero() {
  const { t, motionPaused } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [floatingShapes, setFloatingShapes] = useState(false);

  const heroTrackRef = useRef(null);
  const videoRef = useRef(null);
  const videoLayerRef = useRef(null);
  const overlayLayerRef = useRef(null);
  const textContentRef = useRef(null);

  // Sync video play/pause & set calm playback rate
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0; // Native silky 60fps Remotion playback
      if (motionPaused || !isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
    }
  }, [motionPaused, isVideoPlaying]);

  // Load floating shapes preference from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("hanvisuals_floating_shapes");
      if (saved !== null) {
        setFloatingShapes(saved === "true");
      }
    } catch {
      // Storage access safety
    }
  }, []);

  // 60FPS Scroll-driven choreography (Zero React re-render lag)
  // At scroll 0: Animation is 100% visible, text is completely hidden (opacity: 0).
  // As user scrolls: Animation dissolves to 0, text blooms to 1.0 centered in 100vh.
  useEffect(() => {
    const track = heroTrackRef.current;
    if (!track) return;

    let rafId = null;

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const rect = track.getBoundingClientRect();
        const scrollDist = -rect.top;
        const maxScroll = rect.height - window.innerHeight;

        if (maxScroll <= 0) return;

        const progress = Math.min(Math.max(scrollDist / maxScroll, 0), 1);

        // 1. Video opacity: 1.0 at scroll 0, dissolves to 0 around progress 0.75
        const videoOpacity = Math.max(0, 1 - progress * 1.35);
        if (videoLayerRef.current) {
          videoLayerRef.current.style.opacity = videoOpacity.toFixed(3);
        }

        // 2. Dark overlay opacity: minimal at start (0.06), darkens to 0.98 as video fades
        const overlayOpacity = Math.min(0.98, 0.06 + progress * 0.92);
        if (overlayLayerRef.current) {
          overlayLayerRef.current.style.opacity = overlayOpacity.toFixed(3);
        }

        // 3. Text opacity & transform: 0.0 at scroll 0 (animation unobstructed),
        // starts appearing after progress 0.12 and blooms to 1.0 at progress ~0.70
        let textOpacity = 0;
        if (progress > 0.12) {
          textOpacity = Math.min(1, (progress - 0.12) / 0.58);
        }

        const translateY = Math.max(0, 32 * (1 - textOpacity));
        const scale = 0.96 + textOpacity * 0.04;

        if (textContentRef.current) {
          textContentRef.current.style.opacity = textOpacity.toFixed(3);
          textContentRef.current.style.transform = `translate3d(0, ${translateY.toFixed(
            1
          )}px, 0) scale(${scale.toFixed(3)})`;
          textContentRef.current.style.pointerEvents =
            textOpacity > 0.4 ? "auto" : "none";
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const toggleVideoPlayback = () => {
    setIsVideoPlaying((prev) => !prev);
  };

  const toggleFloatingShapes = () => {
    setFloatingShapes((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("hanvisuals_floating_shapes", String(next));
      } catch {}
      return next;
    });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("muhammadroihannn@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = "mailto:muhammadroihannn@gmail.com";
    }
  };

  return (
    <div
      ref={heroTrackRef}
      id="top"
      className="relative w-full h-[190vh] md:h-[200vh]"
    >
      {/* Pinned 100vh Fullscreen Viewport */}
      <section className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden pt-6 pb-6 md:pt-10 md:pb-8">
        {/* 1. Full-Bleed Ambient Background Video Layer */}
        <div
          ref={videoLayerRef}
          className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none transition-opacity duration-150 will-change-[opacity]"
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster="/videos/hero-bg-poster.png"
            className="absolute inset-0 w-full h-full object-cover object-center"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>

        {/* 2. Dynamic Cinematic Overlay Layer */}
        <div
          ref={overlayLayerRef}
          className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-[#13151B] via-[#13151B]/75 to-[#13151B]/40 will-change-[opacity]"
        />

        {/* 3. Optional Antigravity Shapes Layer */}
        <AntigravityCanvas enabled={floatingShapes} />

        {/* 4. Centered Full-Screen Hero Typography & Actions (Initially hidden at scroll 0) */}
        <div className="relative z-10 mx-auto max-w-5xl w-full px-5 sm:px-8 lg:px-12 my-auto text-center flex flex-col items-center justify-center">
          <div
            ref={textContentRef}
            style={{
              opacity: 0,
              transform: "translate3d(0, 32px, 0)",
              pointerEvents: "none",
            }}
            className="space-y-6 flex flex-col items-center will-change-[transform,opacity]"
          >
            <h1 className="text-fluid-h1 font-bold text-han-light drop-shadow-md max-w-4xl mx-auto">
              {/* Line 1: Single clean line on tablet & desktop */}
              <span className="block text-han-light sm:whitespace-nowrap">
                {t.hero.headlinePrefix || t.hero.anchorPrefix}
              </span>
              {/* Line 2: Highlighted punchline */}
              <span className="block text-han-turquoise mt-1.5 sm:whitespace-nowrap">
                {t.hero.headlineHighlight || ""}
              </span>
              {/* Line 3: Audience specification */}
              <span className="block text-slate-200 mt-2 text-[0.78em] sm:text-[0.84em] font-medium sm:whitespace-nowrap mx-auto">
                {t.hero.headlineSuffix || t.hero.anchorSuffix}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow-sm text-balance">
              {t.hero.sub}
            </p>

            <div className="space-y-3 pt-2 flex flex-col items-center">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://wa.me/6281334535073?text=Halo%20hanvisuals,%20saya%20ingin%20berdiskusi%20mengenai%20proyek."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[46px] inline-flex items-center gap-2.5 rounded-xl bg-han-turquoise px-6 py-2.5 text-sm sm:text-base font-bold text-han-dark hover:bg-han-light transition-colors duration-200 shadow-xl"
                >
                  <PrismWhatsAppGlyph className="w-5 h-5" />
                  <span>{t.hero.ctaWhatsApp}</span>
                </a>

                <a
                  href="https://www.instagram.com/hanvisuals._?cplk=MWhkOGE0cGYzajAwOA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[46px] inline-flex items-center gap-2 rounded-xl bg-[#1E222D]/85 hover:bg-[#252A38] border border-white/[0.08] hover:border-han-turquoise/40 px-5 py-2.5 text-sm sm:text-base font-semibold text-slate-200 hover:text-han-light transition-colors duration-200 backdrop-blur-sm"
                >
                  <PrismInstagramGlyph className="w-4 h-4 text-han-turquoise" />
                  <span>{t.hero.ctaPrimary}</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-han-light transition-colors py-1"
                  title="Copy email: muhammadroihannn@gmail.com"
                >
                  {copied ? (
                    <>
                      <PrismCheckGlyph className="w-3.5 h-3.5 text-han-turquoise" />
                      <span className="text-han-turquoise font-medium">
                        {t.hero.copiedShort}
                      </span>
                    </>
                  ) : (
                    <>
                      <PrismCopyGlyph className="w-3.5 h-3.5" />
                      <span>muhammadroihannn@gmail.com</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 6. Bottom Controls Bar */}
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-5 sm:px-8 lg:px-12 flex flex-wrap items-center justify-between gap-4 text-xs pt-3 border-t border-white/[0.08]">
          <div className="flex items-center gap-3 text-slate-300">
            <button
              type="button"
              onClick={toggleVideoPlayback}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#181B23]/80 backdrop-blur-sm border border-white/10 text-slate-200 hover:text-han-turquoise transition-colors"
            >
              <span>{isVideoPlaying ? "❚❚ Pause Latar" : "▶ Putar Latar"}</span>
            </button>
            <span className="hidden sm:inline text-slate-400 font-medium">
              Han Visuals Prism Ambient • 60FPS
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleFloatingShapes}
              title="Toggle Antigravity Floating Shapes Animation"
              aria-label={`Floating shapes animation: ${
                floatingShapes ? "Active" : "Disabled"
              }`}
              className="min-h-[32px] inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#181B23]/80 backdrop-blur-sm border border-white/10 text-[11px] font-medium text-slate-400 hover:text-han-light transition-colors"
            >
              <span
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  floatingShapes ? "bg-han-turquoise" : "bg-slate-500"
                }`}
                aria-hidden="true"
              />
              <span>{floatingShapes ? "Shapes: ON" : "Shapes: OFF"}</span>
            </button>

            <Link
              href="/pricing"
              className="min-h-[32px] inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#181B23]/80 hover:bg-[#202430] border border-white/10 text-[11px] font-semibold text-han-turquoise hover:text-han-light transition-colors"
            >
              <span>{t.hero.viewPricing}</span>
              <PrismExternalGlyph className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
