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
  const { t, motionPaused } = useLanguage();
  const words = t.hero.words;

  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState(words[0].text);
  const [isDeleting, setIsDeleting] = useState(false);
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

  useEffect(() => {
    setWordIndex(0);
    setDisplayText(t.hero.words[0].text);
    setIsDeleting(false);
  }, [t]);

  useEffect(() => {
    if (motionPaused) {
      setDisplayText(words[wordIndex].text);
      return;
    }

    const currentWord = words[wordIndex].text;
    let timeoutId;

    if (!isDeleting && displayText === currentWord) {
      timeoutId = setTimeout(() => setIsDeleting(true), 2100);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const speed = isDeleting ? 28 : 52;
      timeoutId = setTimeout(() => {
        const nextText = isDeleting
          ? currentWord.slice(0, displayText.length - 1)
          : currentWord.slice(0, displayText.length + 1);
        setDisplayText(nextText);
      }, speed);
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, wordIndex, words, motionPaused]);

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
      className="relative z-10 mx-auto max-w-[1440px] w-full px-5 sm:px-8 lg:px-12 pt-10 pb-14 md:pt-14 md:pb-20"
    >
      <AntigravityCanvas enabled={floatingShapes} />
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-fluid-h1 font-extrabold text-han-light">
            <span className="block">{t.hero.anchorPrefix}</span>
            <span
              className="block min-h-[1.14em] text-han-turquoise mt-1"
              aria-live="polite"
            >
              <span>{displayText || "\u00A0"}</span>
              <span
                className="inline-block w-[3px] h-[0.84em] bg-han-turquoise/85 align-middle ml-1"
                aria-hidden="true"
              />
            </span>
            <span className="block mt-1">{t.hero.anchorSuffix}</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            {t.hero.sub}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://wa.me/6281334535073?text=Halo%20hanvisuals,%20saya%20ingin%20berdiskusi%20mengenai%20proyek."
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] inline-flex items-center gap-2.5 rounded-xl bg-han-turquoise px-6 py-3 text-sm sm:text-base font-extrabold text-han-dark hover:bg-han-light hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              <PrismWhatsAppGlyph className="w-5 h-5" />
              <span>{t.hero.ctaWhatsApp}</span>
            </a>

            <a
              href="https://www.instagram.com/hanvisuals._?cplk=MWhkOGE0cGYzajAwOA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] inline-flex items-center gap-2.5 rounded-xl bg-[#1D202C] hover:bg-han-slate/80 border border-white/10 hover:border-han-turquoise/40 px-5 py-3 text-sm sm:text-base font-bold text-han-light hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              <PrismInstagramGlyph className="w-4 h-4 text-han-turquoise" />
              <span>{t.hero.ctaPrimary}</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="min-h-[48px] min-w-[148px] inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#1D202C] hover:bg-han-slate/80 border border-white/10 hover:border-han-turquoise/40 px-5 py-3 text-sm sm:text-base font-bold text-han-light hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              {copied ? (
                <>
                  <PrismCheckGlyph className="w-4 h-4 text-han-turquoise" />
                  <span className="text-han-turquoise">
                    {t.hero.copiedShort}
                  </span>
                </>
              ) : (
                <>
                  <PrismCopyGlyph className="w-4 h-4 text-han-turquoise" />
                  <span>{t.hero.ctaSecondary}</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <TiltCard intensity={3.2} disabled={playingReel}>
            <div className="p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between gap-2 text-xs text-slate-300">
                <span className="inline-flex items-center gap-2 font-semibold">
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
                    className="text-xs font-bold text-han-turquoise hover:text-han-light transition-colors"
                  >
                    {t.showcase.closePreview}
                  </button>
                ) : (
                  <span className="text-slate-400 font-medium">
                    Videographer + CapCut
                  </span>
                )}
              </div>

              <div className="relative aspect-video w-full rounded-xl bg-[#12141B] overflow-hidden border border-white/[0.08] group">
                <img
                  src="/portfolio/showreel-thumb.jpg"
                  alt={t.hero.reelTitle}
                  width="640"
                  height="360"
                  fetchPriority="high"
                  className={`w-full h-full object-cover transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    playingReel && iframeLoaded
                      ? "opacity-0 scale-105 pointer-events-none"
                      : "opacity-90 group-hover:scale-[1.03]"
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
                    className="absolute inset-0 cursor-pointer bg-gradient-to-t from-[#12141B]/95 via-[#12141B]/25 to-transparent flex flex-col justify-between p-4 transition-opacity duration-300"
                  >
                    <div className="flex justify-end">
                      <span className="rounded-lg bg-[#15171E]/85 backdrop-blur-sm border border-white/10 px-2.5 py-1 text-[11px] font-semibold text-slate-200">
                        16:9 Long-Form
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm sm:text-base font-bold text-han-light">
                        {t.hero.reelTitle}
                      </p>
                      <span className="min-h-[42px] inline-flex items-center gap-2 rounded-xl bg-han-turquoise group-hover:bg-han-light px-4 py-2 text-xs font-extrabold text-han-dark transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] active:scale-95 shrink-0">
                        <PlayPrismMark size={16} voidColor="#15171E" />
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
                    className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
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
                  className="min-h-[40px] inline-flex items-center gap-1.5 text-slate-300 hover:text-han-turquoise font-semibold transition-colors"
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
                    className="min-h-[36px] inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 text-[11px] font-medium text-slate-400 hover:text-han-light transition-all duration-200"
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
                    className="min-h-[40px] inline-flex items-center gap-1.5 text-han-turquoise hover:text-han-light font-bold transition-colors"
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
