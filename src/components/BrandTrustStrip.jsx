import React from 'react';
import { websiteContent } from '../data/websiteContent';

export const BrandTrustStrip = () => {
  const { brandLogosRow } = websiteContent;

  return (
    <section className="py-10 bg-cream-subtle border-b border-charcoal-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Label */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-charcoal-muted mb-6">
          {brandLogosRow.heading}
        </p>

        {/* Brands Grid / Marquee */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 items-center">
          {brandLogosRow.brands.map((brand, idx) => (
            <div
              key={idx}
              className="px-3 py-3 bg-white border border-charcoal-border/80 text-center hover:border-forest/50 transition-colors group"
            >
              <div className="font-sans font-extrabold text-xs sm:text-sm text-charcoal tracking-tight group-hover:text-forest transition-colors">
                {brand.name}
              </div>
              <div className="text-[10px] text-charcoal-light uppercase tracking-wider font-mono mt-0.5">
                {brand.category.split(' ')[0]}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
