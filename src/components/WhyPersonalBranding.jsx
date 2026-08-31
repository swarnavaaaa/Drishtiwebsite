import React from 'react';
import { websiteContent } from '../data/websiteContent';

export const WhyPersonalBranding = () => {
  const { whyPersonalBranding } = websiteContent;

  return (
    <section className="py-16 md:py-24 bg-cream-subtle border-b border-charcoal-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-mint/50 border border-sage/40 text-forest text-xs font-semibold uppercase tracking-wider">
            {whyPersonalBranding.heading}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal tracking-tight">
            The right opportunities <span className="italic font-light text-forest">start finding you.</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted max-w-2xl">
            When you publish your authentic thinking consistently, inbound leverage replaces outbound friction.
          </p>
        </div>

        {/* 6-Card Grid (Varied Rhythms & Numbered Blocks) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyPersonalBranding.benefits.map((benefit, index) => (
            <div
              key={index}
              className={`p-7 bg-white border border-charcoal-border hover:border-forest/50 transition-all flex flex-col justify-between group shadow-card ${
                index === 0 ? 'md:col-span-2 lg:col-span-1 bg-mint-light/40 border-sage/50' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-charcoal-border/50 mb-4">
                  <span className="font-mono text-xs font-bold text-forest group-hover:text-forest-dark transition-colors">
                    {benefit.number}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-sage group-hover:bg-forest transition-colors" />
                </div>
                <h3 className="font-sans font-bold text-lg text-charcoal tracking-tight mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-charcoal/80 leading-relaxed font-normal">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-charcoal-border/30">
                <span className="text-[11px] font-mono text-sage-dark uppercase tracking-wider font-semibold">
                  Compounding Asset
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
