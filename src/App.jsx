import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandTrustStrip } from './components/BrandTrustStrip';
import { WhoThisIsFor } from './components/WhoThisIsFor';
import { WhyPersonalBranding } from './components/WhyPersonalBranding';
import { AboutDrishti } from './components/AboutDrishti';
import { OurWork } from './components/OurWork';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { AmbientBackground } from './components/AmbientBackground';
import { websiteContent } from './data/websiteContent';

export function App() {
  // Initialize luxury smooth inertia scroll (Lenis)
  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  const handleOpenBooking = () => {
    window.open(websiteContent.brand.calendlyUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen relative text-charcoal flex flex-col font-sans selection:bg-mint selection:text-forest overflow-x-hidden">
      {/* Accessible skip-link for keyboard & screen-reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-forest focus:text-cream focus:font-bold focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-mint"
      >
        Skip to main content
      </a>

      {/* Ambient background with floating gradient orbs and micro-grain texture */}
      <AmbientBackground />

      {/* Top Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main id="main-content" tabIndex="-1" className="flex-grow relative z-10 outline-none">
        {/* 1. Hero */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Brand Collaborations / Proof Ribbon */}
        <BrandTrustStrip />

        {/* 3. Who This Is For */}
        <WhoThisIsFor />

        {/* 4. Why Personal Branding Pays Off */}
        <WhyPersonalBranding />

        {/* 5. About Drishti & The Studio */}
        <AboutDrishti onOpenBooking={handleOpenBooking} />

        {/* 6. Services & Our Approach */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* 7. Proof of Work / Confidential Case Studies */}
        <OurWork onOpenBooking={handleOpenBooking} />

        {/* 8. How It Works (Process) */}
        <HowItWorks />

        {/* 9. Pricing */}
        <Pricing onOpenBooking={handleOpenBooking} />

        {/* 10. FAQs */}
        <FAQ onOpenBooking={handleOpenBooking} />

        {/* 11. Final CTA */}
        <FinalCTA onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

