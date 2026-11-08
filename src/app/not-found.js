"use client";

import React from "react";
import Link from "next/link";
import { HanVisualsLockup } from "@/components/BrandLogos";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-han-dark text-han-light flex flex-col items-center justify-center px-5 py-16">
      <div className="w-full max-w-lg rounded-3xl bg-[#181B24] border border-white/10 p-8 sm:p-10 text-center space-y-6 shadow-2xl">
        <div className="flex justify-center">
          <HanVisualsLockup size={36} voidColor="#FDFCF9" />
        </div>

        <div className="space-y-2">
          <span className="inline-block rounded-lg bg-han-turquoise/15 border border-han-turquoise/40 px-3 py-1 font-mono text-xs font-extrabold text-han-turquoise">
            404 • PAGE NOT FOUND
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-han-light">
            This page does not exist.
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            The link you followed may be broken or the page may have been moved.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="min-h-[46px] inline-flex items-center justify-center rounded-xl bg-han-turquoise hover:bg-han-light px-6 py-2.5 text-sm font-extrabold text-han-dark transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/pricing"
            className="min-h-[46px] inline-flex items-center justify-center rounded-xl bg-[#13151C] hover:bg-han-slate border border-white/10 px-5 py-2.5 text-sm font-bold text-han-light transition-colors"
          >
            View Packages
          </Link>
        </div>
      </div>
    </main>
  );
}
