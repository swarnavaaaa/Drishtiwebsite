import React from 'react';
import { websiteContent } from '../data/websiteContent';

export const BrandTrustStrip = () => {
  const { brandLogosRow } = websiteContent;

  return (
    <section
      aria-label="Brands Drishti has collaborated with or written about"
      className="py-8 sm:py-10 bg-transparent border-b border-charcoal-border/70 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        {/* Label */}
        <p className="text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-charcoal">
          {brandLogosRow.heading}
        </p>
      </div>

      {/* Marquee Wrapper with soft edge fade masks */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right gradient fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-cream/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-cream/90 to-transparent z-10 pointer-events-none" />

        {/* Continuous Animated Marquee Track */}
        <div className="animate-marquee py-2 flex items-center gap-3 sm:gap-4 select-none">
          {brandLogosRow.brands.map((brand, idx) => (
            <div
              key={`b1-${idx}`}
              title={brand.name}
              className="flex-shrink-0 flex items-center justify-center min-w-[135px] sm:min-w-[165px] h-16 sm:h-[72px] px-5 sm:px-6 bg-white border border-charcoal-border/80 hover:border-forest/60 hover:shadow-xs transition-all duration-200 group cursor-default"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="max-h-8 sm:max-h-10 max-w-[105px] sm:max-w-[125px] w-auto h-auto object-contain transition-transform duration-200 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
          {brandLogosRow.brands.map((brand, idx) => (
            <div
              key={`b2-${idx}`}
              aria-hidden="true"
              title={brand.name}
              className="flex-shrink-0 flex items-center justify-center min-w-[135px] sm:min-w-[165px] h-16 sm:h-[72px] px-5 sm:px-6 bg-white border border-charcoal-border/80 hover:border-forest/60 hover:shadow-xs transition-all duration-200 group cursor-default"
            >
              <img
                src={brand.logo}
                alt=""
                className="max-h-8 sm:max-h-10 max-w-[105px] sm:max-w-[125px] w-auto h-auto object-contain transition-transform duration-200 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandTrustStrip;
