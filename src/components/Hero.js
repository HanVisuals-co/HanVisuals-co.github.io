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
  const videoRef = useRef(null);

  // Sync video play/pause with motionPaused
  useEffect(() => {
    if (videoRef.current) {
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
    <section
      id="top"
      className="relative min-h-[82vh] md:min-h-[88vh] flex flex-col justify-between overflow-hidden pt-8 pb-10 md:pt-12 md:pb-14"
    >
      {/* 1. Full-Bleed Ambient Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/portfolio/showreel-thumb.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.52] contrast-[1.12] transition-opacity duration-700"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Film Tint & Contrast Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#13151B] via-[#13151B]/78 to-[#13151B]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(19,21,27,0.72)_80%)]" />
      </div>

      {/* 2. Optional Antigravity Particle Layer */}
      <AntigravityCanvas enabled={floatingShapes} />

      {/* 3. Foreground Content: Text Overlay Directly on Top of Video */}
      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-5 sm:px-8 lg:px-12 my-auto py-10 md:py-16">
        <div className="max-w-3xl space-y-6">
          {/* Subtle Live Reel Indicator */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#181B23]/85 backdrop-blur-md border border-white/10 px-3.5 py-1 text-xs font-mono text-slate-300">
            <span
              className="w-2 h-2 rounded-full bg-han-turquoise animate-pulse"
              aria-hidden="true"
            />
            <span>SHOWREEL AMBIENT • 4K 24FPS</span>
          </div>

          <h1 className="text-fluid-h1 font-bold text-han-light drop-shadow-sm">
            <span className="block text-han-light">
              {t.hero.headlinePrefix || t.hero.anchorPrefix}
            </span>
            <span className="block text-han-turquoise mt-1">
              {t.hero.headlineHighlight || ""}
            </span>
            <span className="block text-slate-200 mt-1 text-[0.88em] font-medium">
              {t.hero.headlineSuffix || t.hero.anchorSuffix}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow-sm">
            {t.hero.sub}
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex flex-wrap items-center gap-3">
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

            <div className="flex items-center gap-2 pt-1">
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

      {/* 4. Bottom Controls Bar */}
      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-5 sm:px-8 lg:px-12 flex flex-wrap items-center justify-between gap-4 text-xs pt-4 border-t border-white/[0.08]">
        <div className="flex items-center gap-3 text-slate-300">
          <button
            type="button"
            onClick={toggleVideoPlayback}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#181B23]/80 backdrop-blur-sm border border-white/10 text-slate-200 hover:text-han-turquoise transition-colors"
          >
            <span>{isVideoPlaying ? "❚❚ Pause Latar" : "▶ Putar Latar"}</span>
          </button>
          <span className="hidden sm:inline text-slate-400 font-medium">
            Aftermovie Capacity Building • FK UMM
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

      {/* 5. Fullscreen Cinema Lightbox Modal */}
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
  );
}
