import PricingClient from "./PricingClient";

export const metadata = {
  title: "Pricing & Packages | hanvisuals",
  description:
    "Rate card for video editing, on-site videography, creative direction, and web development from hanvisuals. Per-project and monthly retainer packages.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return <PricingClient />;
}
