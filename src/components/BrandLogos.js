"use client";

import React, { useId } from "react";

export function PlayPrismMark({
  size = 36,
  voidColor = "#FDFCF9",
  className = "",
}) {
  const clipId = useId();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="24 8 116 152"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M 45 18 L 125 76 C 133 82, 133 86, 125 92 L 45 150 C 37 156, 32 152, 32 142 L 32 26 C 32 16, 37 12, 45 18 Z" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <path d="M 28 60 L 28 110 L 60 95 L 60 75 Z" fill="#51B8B9" />
        <path d="M 28 10 L 80 10 L 60 75 L 28 60 Z" fill="#FFDC56" />
        <path d="M 80 10 L 140 84 L 100 84 L 60 75 Z" fill="#FA9F1B" />
        <path d="M 28 160 L 80 160 L 60 95 L 28 110 Z" fill="#FA7C83" />
        <path d="M 80 160 L 140 84 L 100 84 L 60 95 Z" fill="#EA4C56" />
      </g>
      <path
        d="M 64 61 L 92 81 C 95 83, 95 85, 92 87 L 64 107 C 61 109, 58 107, 58 103 L 58 65 C 58 61, 61 59, 64 61 Z"
        fill={voidColor}
      />
    </svg>
  );
}

export function HanVisualsLockup({
  size = 34,
  showSubline = false,
  voidColor = "#FDFCF9",
  className = "",
}) {
  return (
    <span className={`inline-flex items-center gap-3 select-none ${className}`}>
      <PlayPrismMark size={size} voidColor={voidColor} className="shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-sans font-extrabold tracking-[-0.02em] text-han-light text-xl md:text-2xl lowercase">
          hanvisuals
        </span>
        {showSubline && (
          <span className="text-[10px] font-bold tracking-[0.18em] text-slate-300 uppercase mt-1">
            Visual Storytelling &amp; Motion Lab
          </span>
        )}
      </span>
    </span>
  );
}

export function PrismCopyGlyph({ className = "w-4 h-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="16"
      height="16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="7"
        y="7"
        width="10"
        height="10"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M13 7V4.5C13 3.67 12.33 3 11.5 3H4.5C3.67 3 3 3.67 3 4.5V11.5C3 12.33 3.67 13 4.5 13H7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PrismCheckGlyph({ className = "w-4 h-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="16"
      height="16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 10.5L8.2 14.5L16 5.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PrismInstagramGlyph({ className = "w-4 h-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="16"
      height="16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="2.5"
        y="2.5"
        width="15"
        height="15"
        rx="4.2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="10" cy="10" r="3.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="14.4" cy="5.6" r="1" fill="currentColor" />
    </svg>
  );
}

export function PrismWhatsAppGlyph({ className = "w-4 h-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="16"
      height="16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10 2.5C5.86 2.5 2.5 5.76 2.5 9.78C2.5 11.22 2.93 12.56 3.68 13.68L2.7 17.3L6.46 16.34C7.52 16.96 8.72 17.3 10 17.3C14.14 17.3 17.5 14.04 17.5 10.02C17.5 6 14.14 2.5 10 2.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M7.6 7.2C7.4 6.8 7.15 6.8 6.95 6.8C6.78 6.8 6.58 6.8 6.38 7C6.18 7.2 5.75 7.6 5.75 8.45C5.75 9.3 6.38 10.12 6.47 10.24C6.56 10.36 7.7 12.15 9.5 12.88C10.98 13.48 11.35 13.36 11.72 13.3C12.1 13.24 12.88 12.8 13.05 12.34C13.22 11.88 13.22 11.48 13.16 11.38C13.1 11.28 12.94 11.22 12.7 11.1C12.46 10.98 11.3 10.4 11.08 10.32C10.86 10.24 10.7 10.2 10.54 10.44C10.38 10.68 9.95 11.16 9.8 11.32C9.66 11.48 9.52 11.5 9.28 11.38C9.04 11.26 8.26 11 7.34 10.18C6.62 9.54 6.14 8.74 6 8.5C5.86 8.26 5.98 8.12 6.1 8C6.21 7.89 6.34 7.72 6.46 7.58C6.58 7.44 6.62 7.34 6.7 7.18C6.78 7.02 6.74 6.88 6.68 6.76L7.6 7.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PrismMailGlyph({ className = "w-4 h-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="16"
      height="16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="2.5"
        y="4"
        width="15"
        height="12"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M3.5 5.5L10 10.5L16.5 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PrismExternalGlyph({ className = "w-4 h-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="16"
      height="16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 14L14 6M14 6H7.5M14 6V12.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PrismArrowRightGlyph({ className = "w-5 h-5" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="20"
      height="20"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 10H16M16 10L11 5M16 10L11 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PrismArrowLeftGlyph({ className = "w-5 h-5" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="20"
      height="20"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 10H4M4 10L9 5M4 10L9 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PrismCloseGlyph({ className = "w-5 h-5" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="20"
      height="20"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 5L15 15M15 5L5 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PrismVolumeGlyph({ muted = true, className = "w-4 h-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width="16"
      height="16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M9.5 4.5L5.8 7.5H3.2C2.8 7.5 2.5 7.8 2.5 8.2V11.8C2.5 12.2 2.8 12.5 3.2 12.5H5.8L9.5 15.5C10 15.9 10.8 15.5 10.8 14.9V5.1C10.8 4.5 10 4.1 9.5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {muted ? (
        <path
          d="M13.5 8L17.5 12M17.5 8L13.5 12"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      ) : (
        <>
          <path
            d="M13.5 7.5C14.3 8.2 14.8 9.1 14.8 10C14.8 10.9 14.3 11.8 13.5 12.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M15.8 5.5C17.1 6.7 17.8 8.3 17.8 10C17.8 11.7 17.1 13.3 15.8 14.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}
