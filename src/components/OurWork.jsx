import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { websiteContent } from '../data/websiteContent';

export const OurWork = ({ onOpenBooking }) => {
  const { ourWork } = websiteContent;

  return (
    <section id="our-work" className="py-16 md:py-24 bg-cream border-b border-charcoal-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-mint/50 border border-sage/40 text-forest text-xs font-semibold uppercase tracking-wider">
            {ourWork.heading}
          </div>

          <p className="text-xs font-mono text-forest uppercase tracking-wider">
            {ourWork.eyebrow}
          </p>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal tracking-tight leading-[1.15]">
            Different industries. Different voices.{' '}
            <span className="italic font-light text-forest">One hand.</span>
          </h2>

          <p className="text-sm sm:text-base text-charcoal-muted max-w-2xl pt-1">
            {ourWork.subtitle}
          </p>
        </div>

        {/* 8 Confidential Engagements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 items-stretch mb-12">
          {ourWork.items.map((item, idx) => (
            <div
              key={item.id || idx}
              className="p-7 sm:p-8 bg-white border border-charcoal-border hover:border-forest/50 transition-all shadow-card flex flex-col justify-between group"
            >
              <div>
                {/* Card Top Strip */}
                <div className="flex items-center justify-between pb-4 border-b border-charcoal-border/50">
                  <span className="font-mono text-xs font-bold text-forest">
                    0{idx + 1}.
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-charcoal-muted uppercase">
                    <Shield className="w-3 h-3 text-sage-dark" />
                    Confidential
                  </span>
                </div>

                {/* Engagement Title */}
                <h3 className="font-display text-xl sm:text-2xl text-charcoal font-semibold tracking-tight mt-4 mb-3 group-hover:text-forest transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Engagement Description */}
                <p className="text-sm sm:text-base text-charcoal/85 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-5 mt-6 border-t border-charcoal-border/30 flex items-center justify-between text-xs font-mono text-charcoal-light">
                <span>Executive & Company Presence</span>
                <span className="text-forest font-semibold">netwerked.io</span>
              </div>
            </div>
          ))}
        </div>

        {/* Confidentiality Standard Banner */}
        <div className="p-8 bg-cream-subtle border border-charcoal-border text-center max-w-4xl mx-auto space-y-4">
          <p className="font-display text-lg sm:text-xl text-charcoal font-medium italic">
            “{ourWork.closing}”
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-forest text-cream text-xs font-bold uppercase tracking-wider hover:bg-forest-light transition-colors"
            >
              <span>Book a Discovery Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurWork;
