import React from 'react';
import { websiteContent } from '../data/websiteContent';

export const BrandTrustStrip = () => {
  const { brandLogosRow } = websiteContent;
  // Duplicate array for seamless infinite looping marquee
  const marqueeBrands = [...brandLogosRow.brands, ...brandLogosRow.brands];

  return (
    <section className="py-8 sm:py-10 bg-cream-subtle/80 border-b border-charcoal-border/70 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        {/* Label */}
        <p className="text-center text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-charcoal-muted">
          {brandLogosRow.heading}
        </p>
      </div>

      {/* Marquee Wrapper with soft edge fade masks */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right gradient fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-cream-subtle to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-cream-subtle to-transparent z-10 pointer-events-none" />

        {/* Continuous Animated Marquee Track */}
        <div className="animate-marquee py-2 flex items-center gap-3 sm:gap-4 select-none">
          {marqueeBrands.map((brand, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 px-5 py-3 bg-white border border-charcoal-border/80 text-center hover:border-forest/60 hover:shadow-xs transition-all duration-200 group cursor-default min-w-[130px] sm:min-w-[150px]"
            >
              <div className="font-sans font-extrabold text-xs sm:text-sm text-charcoal tracking-tight group-hover:text-forest transition-colors">
                {brand.name}
              </div>
              <div className="text-[9px] sm:text-[10px] text-charcoal-light uppercase tracking-wider font-mono mt-0.5">
                {brand.category.split(' ')[0]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandTrustStrip;
