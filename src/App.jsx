import React, { useState } from 'react';
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
import { BookingModal } from './components/BookingModal';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  return (
    <div className="min-h-screen bg-cream text-charcoal flex flex-col font-sans selection:bg-mint selection:text-forest">
      {/* Top Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main className="flex-grow">
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

        {/* 6. Proof of Work / Confidential Case Studies (Centerpiece) */}
        <OurWork onOpenBooking={handleOpenBooking} />

        {/* 7. Services & Approach */}
        <Services onOpenBooking={handleOpenBooking} />

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

      {/* Interactive Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}

export default App;
