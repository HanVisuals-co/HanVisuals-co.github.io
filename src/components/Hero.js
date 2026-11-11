"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import TiltCard from "@/components/TiltCard";
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
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [playingReel, setPlayingReel] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [floatingShapes, setFloatingShapes] = useState(true);

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

  const handleStartReel = () => {
    setIframeLoaded(false);
    setPlayingReel(true);
  };

  const handleStopReel = () => {
    setPlayingReel(false);
    setIframeLoaded(false);
  };

  return (
    <section
      id="top"
      className="relative z-10 mx-auto max-w-[1440px] w-full px-5 sm:px-8 lg:px-12 pt-8 pb-14 md:pt-12 md:pb-20"
    >
      <AntigravityCanvas enabled={floatingShapes} />
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-fluid-h1 font-bold text-han-light">
            <span className="block text-han-light">
              {t.hero.headlinePrefix || t.hero.anchorPrefix}
            </span>
            <span className="block text-han-turquoise mt-1">
              {t.hero.headlineHighlight || ""}
            </span>
            <span className="block text-slate-300 mt-1 text-[0.88em] font-medium">
              {t.hero.headlineSuffix || t.hero.anchorSuffix}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            {t.hero.sub}
          </p>

          <div className="space-y-3 pt-1">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/6281334535073?text=Halo%20hanvisuals,%20saya%20ingin%20berdiskusi%20mengenai%20proyek."
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[46px] inline-flex items-center gap-2.5 rounded-xl bg-han-turquoise px-6 py-2.5 text-sm sm:text-base font-bold text-han-dark hover:bg-han-light transition-colors duration-200"
              >
                <PrismWhatsAppGlyph className="w-5 h-5" />
                <span>{t.hero.ctaWhatsApp}</span>
              </a>

              <a
                href="https://www.instagram.com/hanvisuals._?cplk=MWhkOGE0cGYzajAwOA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[46px] inline-flex items-center gap-2 rounded-xl bg-[#1E222D] hover:bg-[#252A38] border border-white/[0.08] hover:border-han-turquoise/40 px-5 py-2.5 text-sm sm:text-base font-semibold text-slate-200 hover:text-han-light transition-colors duration-200"
              >
                <PrismInstagramGlyph className="w-4 h-4 text-han-turquoise" />
                <span>{t.hero.ctaPrimary}</span>
              </a>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-han-light transition-colors py-1"
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

        <div className="lg:col-span-5">
          <TiltCard disabled={playingReel}>
            <div className="p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between gap-2 text-xs text-slate-300">
                <span className="inline-flex items-center gap-2 font-medium">
                  <span
                    className="w-2 h-2 rounded-full bg-han-tangerine"
                    aria-hidden="true"
                  />
                  <span>{t.hero.reelLabel}</span>
                </span>
                {playingReel ? (
                  <button
                    type="button"
                    onClick={handleStopReel}
                    className="text-xs font-semibold text-han-turquoise hover:text-han-light transition-colors"
                  >
                    {t.showcase.closePreview}
                  </button>
                ) : (
                  <span className="text-slate-400 font-normal">
                    Videographer + CapCut
                  </span>
                )}
              </div>

              <div className="relative aspect-video w-full rounded-xl bg-[#111319] overflow-hidden border border-white/[0.08] group">
                <img
                  src="/portfolio/showreel-thumb.jpg"
                  alt={t.hero.reelTitle}
                  width="640"
                  height="360"
                  fetchPriority="high"
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    playingReel && iframeLoaded
                      ? "opacity-0 pointer-events-none"
                      : "opacity-90 group-hover:opacity-100"
                  }`}
                />

                {!playingReel && (
                  <div
                    onClick={handleStartReel}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleStartReel();
                      }
                    }}
                    aria-label={`${t.hero.reelWatch}: ${t.hero.reelTitle}`}
                    className="absolute inset-0 cursor-pointer bg-gradient-to-t from-[#111319]/95 via-[#111319]/20 to-transparent flex flex-col justify-between p-4 transition-opacity duration-200"
                  >
                    <div className="flex justify-end">
                      <span className="rounded-lg bg-[#181B23]/90 border border-white/[0.08] px-2.5 py-1 text-[11px] font-medium text-slate-300">
                        16:9 Long-Form
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm sm:text-base font-semibold text-han-light">
                        {t.hero.reelTitle}
                      </p>
                      <span className="min-h-[40px] inline-flex items-center gap-2 rounded-xl bg-han-turquoise group-hover:bg-han-light px-4 py-2 text-xs font-bold text-han-dark transition-colors duration-200 shrink-0">
                        <PlayPrismMark size={14} voidColor="#111319" />
                        <span>{t.hero.reelWatch}</span>
                      </span>
                    </div>
                  </div>
                )}

                {playingReel && (
                  <iframe
                    src="https://www.youtube.com/embed/PsygIflVrgU?autoplay=1&rel=0"
                    title={t.hero.reelTitle}
                    onLoad={() => setIframeLoaded(true)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-300 ${
                      iframeLoaded ? "opacity-100" : "opacity-0"
                    }`}
                  />
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
                <a
                  href="https://youtu.be/PsygIflVrgU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[38px] inline-flex items-center gap-1.5 text-slate-400 hover:text-han-turquoise font-medium transition-colors"
                >
                  <span>{t.hero.reelYoutube}</span>
                  <PrismExternalGlyph className="w-3.5 h-3.5" />
                </a>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={toggleFloatingShapes}
                    title="Toggle Antigravity Floating Shapes Animation"
                    aria-label={`Floating shapes animation: ${floatingShapes ? "Active" : "Disabled"}`}
                    className="min-h-[34px] inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-[11px] font-medium text-slate-400 hover:text-han-light transition-colors duration-200"
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
                    className="min-h-[38px] inline-flex items-center gap-1.5 text-han-turquoise hover:text-han-light font-semibold transition-colors"
                  >
                    <span>{t.hero.viewPricing}</span>
                    <PrismExternalGlyph className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
