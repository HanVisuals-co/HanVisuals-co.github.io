"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  HanVisualsLockup,
  PrismWhatsAppGlyph,
  PrismInstagramGlyph,
  PrismMailGlyph,
  PrismCopyGlyph,
  PrismCheckGlyph,
  PrismExternalGlyph,
} from "@/components/BrandLogos";

export default function OutroContact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("muhammadroihannn@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = "mailto:muhammadroihannn@gmail.com";
    }
  };

  return (
    <footer
      id="contact"
      className="relative z-10 mx-auto max-w-[1440px] w-full px-5 sm:px-8 lg:px-12 pt-10 pb-24"
    >
      <div className="rounded-3xl bg-[#181B23] border border-white/[0.08] p-7 sm:p-10 lg:p-12 space-y-8 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-xl space-y-3.5">
            <HanVisualsLockup size={36} voidColor="#FDFCF9" />
            <h2 className="text-fluid-h2 font-bold text-han-light pt-2">
              {t.outro.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t.outro.sub}
            </p>
          </div>

          <Link
            href="/pricing"
            className="min-h-[44px] inline-flex items-center gap-2 rounded-xl bg-[#202430] hover:bg-[#282E3E] border border-han-turquoise/40 px-5 py-2.5 text-sm font-bold text-han-turquoise hover:text-han-light transition-colors self-start lg:self-auto"
          >
            <span>{t.outro.pricingBtn}</span>
            <PrismExternalGlyph className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://wa.me/6281334535073?text=Halo%20hanvisuals,%20saya%20ingin%20berdiskusi%20mengenai%20proyek."
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[46px] inline-flex items-center gap-2.5 rounded-xl bg-han-turquoise hover:bg-han-light px-6 py-2.5 text-sm sm:text-base font-bold text-han-dark transition-colors"
          >
            <PrismWhatsAppGlyph className="w-5 h-5" />
            <span>{t.outro.waBtn}</span>
          </a>

          <a
            href="https://www.instagram.com/hanvisuals._?cplk=MWhkOGE0cGYzajAwOA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[46px] inline-flex items-center gap-2.5 rounded-xl bg-[#202430] hover:bg-[#282E3E] border border-white/[0.08] hover:border-han-turquoise/40 px-5 py-2.5 text-sm sm:text-base font-semibold text-slate-200 transition-colors"
          >
            <PrismInstagramGlyph className="w-4 h-4 text-han-turquoise" />
            <span>{t.outro.dmBtn}</span>
          </a>

          <a
            href="mailto:muhammadroihannn@gmail.com"
            className="min-h-[46px] inline-flex items-center gap-2.5 rounded-xl bg-[#202430] hover:bg-[#282E3E] border border-white/[0.08] hover:border-han-turquoise/40 px-5 py-2.5 text-sm sm:text-base font-semibold text-slate-200 transition-colors"
          >
            <PrismMailGlyph className="w-4 h-4 text-han-turquoise" />
            <span>{t.outro.emailBtn}</span>
          </a>

          <button
            type="button"
            onClick={handleCopy}
            className="min-h-[46px] min-w-[140px] inline-flex items-center justify-center gap-2 rounded-xl bg-[#202430] hover:bg-[#282E3E] border border-white/[0.08] hover:border-han-turquoise/40 px-5 py-2.5 text-sm sm:text-base font-semibold text-slate-200 transition-colors"
          >
            {copied ? (
              <>
                <PrismCheckGlyph className="w-4 h-4 text-han-turquoise" />
                <span className="text-han-turquoise">{t.outro.copied}</span>
              </>
            ) : (
              <>
                <PrismCopyGlyph className="w-4 h-4 text-han-turquoise" />
                <span>{t.outro.copyBtn}</span>
              </>
            )}
          </button>
        </div>

        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <img
              src="/logos/04_wordmark/hanvisuals_wordmark_white.svg"
              alt="hanvisuals wordmark"
              width="104"
              height="22"
              className="h-5 w-auto opacity-90"
            />
            <span>• Creative &amp; Web Production Studio</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-slate-300">
            <Link
              href="/#works"
              className="min-h-[40px] inline-flex items-center hover:text-han-turquoise"
            >
              {t.nav.works}
            </Link>
            <Link
              href="/#services"
              className="min-h-[40px] inline-flex items-center hover:text-han-turquoise"
            >
              {t.nav.services}
            </Link>
            <Link
              href="/#process"
              className="min-h-[40px] inline-flex items-center hover:text-han-turquoise"
            >
              {t.nav.workflow}
            </Link>
            <Link
              href="/pricing"
              className="min-h-[40px] inline-flex items-center hover:text-han-turquoise"
            >
              {t.nav.pricing}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
