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
              className="flex-shrink-0 flex flex-col items-center justify-center min-w-[130px] sm:min-w-[155px] px-4 sm:px-5 py-3.5 sm:py-4 bg-white border border-charcoal-border/80 hover:border-forest/60 hover:shadow-xs transition-all duration-200 group cursor-default text-center"
            >
              <div className="h-9 sm:h-11 w-full flex items-center justify-center mb-2">
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-h-full max-w-[100px] sm:max-w-[120px] object-contain transition-transform duration-200 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-mint/60 border border-sage/50 flex items-center justify-center text-forest font-mono font-bold text-sm">
                    +
                  </div>
                )}
              </div>
              <span className="font-sans font-bold text-xs sm:text-sm text-charcoal tracking-tight group-hover:text-forest transition-colors whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
          {brandLogosRow.brands.map((brand, idx) => (
            <div
              key={`b2-${idx}`}
              aria-hidden="true"
              className="flex-shrink-0 flex flex-col items-center justify-center min-w-[130px] sm:min-w-[155px] px-4 sm:px-5 py-3.5 sm:py-4 bg-white border border-charcoal-border/80 hover:border-forest/60 hover:shadow-xs transition-all duration-200 group cursor-default text-center"
            >
              <div className="h-9 sm:h-11 w-full flex items-center justify-center mb-2">
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt=""
                    className="max-h-full max-w-[100px] sm:max-w-[120px] object-contain transition-transform duration-200 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-mint/60 border border-sage/50 flex items-center justify-center text-forest font-mono font-bold text-sm">
                    +
                  </div>
                )}
              </div>
              <span className="font-sans font-bold text-xs sm:text-sm text-charcoal tracking-tight group-hover:text-forest transition-colors whitespace-nowrap">
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
