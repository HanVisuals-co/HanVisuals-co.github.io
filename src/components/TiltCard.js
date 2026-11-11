"use client";

import React from "react";

export default function TiltCard({
  as: Component = "article",
  className = "",
  children,
}) {
  return (
    <Component
      className={`relative rounded-2xl bg-[#181B23] border border-white/[0.08] hover:border-white/[0.14] transition-colors duration-200 overflow-hidden ${className}`}
    >
      <div className="relative z-10 h-full">{children}</div>
    </Component>
  );
}
