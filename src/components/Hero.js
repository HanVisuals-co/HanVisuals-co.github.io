"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import AntigravityCanvas from "@/components/AntigravityCanvas";
import {
  PlayPrismMark,
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
  const [showTheatreModal, setShowTheatreModal] = useState(false);
  const [floatingShapes, setFloatingShapes] = useState(false);

  const heroTrackRef = useRef(null);
  const videoRef = useRef(null);
  const videoLayerRef = useRef(null);
  const overlayLayerRef = useRef(null);
  const textContentRef = useRef(null);
  const scrollHintRef = useRef(null);

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

  // Handle ESC key for theatre modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && showTheatreModal) {
        setShowTheatreModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showTheatreModal]);

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

        // 1. Video opacity: vivid at scroll 0, smoothly dissolves to 0 at progress ~0.8
        const videoOpacity = Math.max(0, 1 - progress * 1.25);
        if (videoLayerRef.current) {
          videoLayerRef.current.style.opacity = videoOpacity.toFixed(3);
        }

        // 2. Dark overlay opacity: minimal at start, darkens to 0.98 as video fades
        const overlayOpacity = Math.min(0.98, 0.2 + progress * 0.78);
        if (overlayLayerRef.current) {
          overlayLayerRef.current.style.opacity = overlayOpacity.toFixed(3);
        }

        // 3. Text opacity & transform: soft teaser at start, blooms to 1.0 bold focus
        const textOpacity = Math.min(1, 0.16 + progress * 1.25);
        const translateY = Math.max(0, 24 * (1 - progress * 1.3));
        const scale = Math.min(1, 0.975 + progress * 0.025);

        if (textContentRef.current) {
          textContentRef.current.style.opacity = textOpacity.toFixed(3);
          textContentRef.current.style.transform = `translate3d(0, ${translateY.toFixed(
            1
          )}px, 0) scale(${scale.toFixed(3)})`;
        }

        // 4. Scroll indicator: fades away early
        if (scrollHintRef.current) {
          const hintOpacity = Math.max(0, 1 - progress * 3.2);
          scrollHintRef.current.style.opacity = hintOpacity.toFixed(3);
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
      className="relative w-full h-[180vh] md:h-[190vh]"
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

        {/* 4. Top Micro Bar: Status & Quality Hint */}
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-5 sm:px-8 lg:px-12 flex items-center justify-between text-xs pt-1">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#181B23]/80 backdrop-blur-md border border-white/10 px-3.5 py-1 text-xs font-mono text-slate-300">
            <span
              className="w-2 h-2 rounded-full bg-han-turquoise animate-pulse"
              aria-hidden="true"
            />
            <span>REMOTION MOTION • 60FPS</span>
          </div>

          <div
            ref={scrollHintRef}
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[11px] text-slate-300 bg-black/40 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full will-change-[opacity]"
          >
            <span>↓ Scroll untuk memfokuskan teks</span>
          </div>
        </div>

        {/* 5. Centered Full-Screen Hero Typography & Actions */}
        <div className="relative z-10 mx-auto max-w-4xl w-full px-5 sm:px-8 lg:px-12 my-auto text-center flex flex-col items-center justify-center">
          <div
            ref={textContentRef}
            className="space-y-6 flex flex-col items-center will-change-[transform,opacity]"
          >
            <h1 className="text-fluid-h1 font-bold text-han-light drop-shadow-md max-w-3xl">
              <span className="block text-han-light">
                {t.hero.headlinePrefix || t.hero.anchorPrefix}
              </span>
              <span className="block text-han-turquoise mt-1">
                {t.hero.headlineHighlight || ""}
              </span>
              <span className="block text-slate-200 mt-2 text-[0.8em] sm:text-[0.86em] font-medium max-w-2xl mx-auto">
                {t.hero.headlineSuffix || t.hero.anchorSuffix}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow-sm">
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

                <button
                  type="button"
                  onClick={() => setShowTheatreModal(true)}
                  className="min-h-[46px] inline-flex items-center gap-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.16] backdrop-blur-md border border-white/15 px-5 py-2.5 text-sm sm:text-base font-semibold text-han-light transition-colors duration-200 shadow-lg"
                >
                  <PlayPrismMark size={16} voidColor="#13151B" />
                  <span>Tonton dengan Audio</span>
                </button>

                <a
                  href="https://www.instagram.com/hanvisuals._?cplk=MWhkOGE0cGYzajAwOA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[46px] inline-flex items-center gap-2 rounded-xl bg-[#1E222D]/85 hover:bg-[#252A38] border border-white/[0.08] hover:border-han-turquoise/40 px-4 py-2.5 text-sm sm:text-base font-semibold text-slate-200 hover:text-han-light transition-colors duration-200 backdrop-blur-sm"
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

        {/* 7. Fullscreen Cinema Lightbox Modal */}
        {showTheatreModal && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Video Showreel Layar Penuh"
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200"
          >
            <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden bg-black border border-white/15 shadow-2xl">
              <button
                type="button"
                onClick={() => setShowTheatreModal(false)}
                className="absolute top-4 right-4 z-30 min-h-[38px] px-3.5 py-1.5 rounded-xl bg-[#13151B]/90 backdrop-blur-md border border-white/20 text-xs font-semibold text-slate-200 hover:text-han-turquoise transition-colors"
              >
                Tutup [ESC]
              </button>
              <iframe
                src="https://www.youtube.com/embed/PsygIflVrgU?autoplay=1&rel=0"
                title={t.hero.reelTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
