import React from "react";
import AmbientCursor from "@/components/AmbientCursor";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import ServicesBento from "@/components/ServicesBento";
import Workflow from "@/components/Workflow";
import CreatorStrip from "@/components/CreatorStrip";
import OutroContact from "@/components/OutroContact";
import FloatingDock from "@/components/FloatingDock";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-han-dark text-han-light">
      <SmoothScroll />
      <AmbientCursor />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Showcase />
        <ServicesBento />
        <Workflow />
        <CreatorStrip />
      </main>
      <OutroContact />
      <FloatingDock />
    </div>
  );
}
