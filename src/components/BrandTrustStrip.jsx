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
              className="flex-shrink-0 flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 bg-white border border-charcoal-border/80 hover:border-forest/60 hover:shadow-xs transition-all duration-200 group cursor-default"
            >
              {brand.logo ? (
                <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center shrink-0">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="w-2 h-2 rounded-full bg-forest shrink-0" />
              )}
              <span className="font-sans font-bold text-sm sm:text-base text-charcoal tracking-tight group-hover:text-forest transition-colors whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
          {brandLogosRow.brands.map((brand, idx) => (
            <div
              key={`b2-${idx}`}
              aria-hidden="true"
              className="flex-shrink-0 flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 bg-white border border-charcoal-border/80 hover:border-forest/60 hover:shadow-xs transition-all duration-200 group cursor-default"
            >
              {brand.logo ? (
                <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center shrink-0">
                  <img
                    src={brand.logo}
                    alt=""
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="w-2 h-2 rounded-full bg-forest shrink-0" />
              )}
              <span className="font-sans font-bold text-sm sm:text-base text-charcoal tracking-tight group-hover:text-forest transition-colors whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandTrustStrip;
