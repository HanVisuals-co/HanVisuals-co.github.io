import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://hanvisuals.dev"),
  title: "hanvisuals | Creative Video Production & Web Studio",
  description:
    "Creative studio producing commercial 9:16 video edits, warm editorial color grading, and interactive web applications.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "hanvisuals | Creative Video Production & Web Studio",
    description:
      "Creative studio producing commercial 9:16 video edits, warm editorial color grading, and interactive web applications.",
    type: "website",
    siteName: "hanvisuals",
  },
  twitter: {
    card: "summary_large_image",
    title: "hanvisuals | Creative Video Production & Web Studio",
    description:
      "Creative studio producing commercial 9:16 video edits, warm editorial color grading, and interactive web applications.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#15171E",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="font-sans antialiased bg-han-dark text-han-light selection:bg-han-tangerine selection:text-han-dark">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-xl focus:bg-han-yellow focus:px-4 focus:py-2.5 focus:text-sm focus:font-extrabold focus:text-han-dark"
        >
          Skip to main content
        </a>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
