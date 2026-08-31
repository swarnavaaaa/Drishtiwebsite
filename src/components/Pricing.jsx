import React from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { websiteContent } from '../data/websiteContent';

export const Pricing = ({ onOpenBooking }) => {
  const { pricing } = websiteContent;

  const inclusions = [
    "Full Profile Optimisation (Headline, About, Banner, Featured)",
    "Bespoke Content Strategy aligned to your niche & goals",
    "Ghostwriting in your authentic voice (zero AI shortcuts)",
    "Targeted manual outreach to ideal buyers & investors",
    "Monthly transparent reporting (posts, connections, growth)",
    "Dedicated async channel & monthly strategy calibration calls",
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-cream-subtle border-b border-charcoal-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-mint/50 border border-sage/40 text-forest text-xs font-semibold uppercase tracking-wider">
            {pricing.heading}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal tracking-tight">
            Three <span className="italic font-light text-forest">ways in.</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted max-w-2xl">
            Retainers calibrated to your desired growth velocity. Every tier is managed with full confidentiality and bespoke voice craftsmanship.
          </p>
        </div>

        {/* 3 Pricing Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {pricing.tiers.map((tier, index) => {
            const isFeatured = tier.isPopular;
            return (
              <div
                key={index}
                className={`p-8 flex flex-col justify-between transition-all relative ${
                  isFeatured
                    ? 'bg-forest text-cream border-2 border-forest-dark shadow-xl scale-[1.02] z-10'
                    : 'bg-white text-charcoal border border-charcoal-border hover:border-forest/50 shadow-card'
                }`}
              >
                {/* Popular Badge */}
                {tier.badge && (
                  <div className="absolute -top-3.5 right-6">
                    <span
                      className={`px-3 py-1 text-[11px] font-bold uppercase tracking-wider font-mono border ${
                        isFeatured
                          ? 'bg-mint text-forest border-sage'
                          : 'bg-cream-subtle text-charcoal border-charcoal-border'
                      }`}
                    >
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Tier Title & Volume */}
                  <div className="pb-4 border-b border-current/15">
                    <h3 className="font-display text-2xl font-medium tracking-tight">
                      {tier.name}
                    </h3>
                    <div
                      className={`font-mono text-sm font-bold uppercase tracking-wider mt-1 ${
                        isFeatured ? 'text-mint' : 'text-forest'
                      }`}
                    >
                      {tier.volume}
                    </div>
                  </div>

                  {/* Pitch & Ideal Fit */}
                  <div className="space-y-3">
                    <p className="font-sans font-bold text-base tracking-tight leading-snug">
                      {tier.pitch}
                    </p>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed font-normal ${
                        isFeatured ? 'text-cream/80' : 'text-charcoal/80'
                      }`}
                    >
                      {tier.idealFor}
                    </p>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-8 mt-8 border-t border-current/15">
                  <button
                    onClick={onOpenBooking}
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                      isFeatured
                        ? 'bg-mint text-forest hover:bg-cream'
                        : 'bg-forest text-cream hover:bg-forest-light'
                    }`}
                  >
                    <span>{pricing.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p
                    className={`text-center text-[11px] mt-2.5 font-mono ${
                      isFeatured ? 'text-mint/70' : 'text-charcoal-light'
                    }`}
                  >
                    Investment shared on discovery call
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* All Inclusions Checklist Card */}
        <div className="p-8 bg-white border border-charcoal-border shadow-xs">
          <div className="max-w-3xl mb-6">
            <h4 className="font-display text-xl text-charcoal font-medium">
              Every retainer tier includes the complete netwerked infrastructure:
            </h4>
            <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
              {pricing.inclusionsNote}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {inclusions.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-charcoal/90">
                <Check className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
