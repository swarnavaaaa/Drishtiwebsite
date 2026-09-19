import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { websiteContent } from '../data/websiteContent';

export const Pricing = ({ onOpenBooking }) => {
  const { pricing, brand } = websiteContent;

  return (
    <section id="pricing" className="py-16 md:py-24 bg-transparent border-b border-charcoal-border/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-4xl mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-mint/50 border border-sage/40 text-forest text-xs sm:text-sm font-semibold uppercase tracking-wider">
            {pricing.eyebrow || "Packages"}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-charcoal font-normal tracking-tight leading-[1.12]">
            Three <span className="italic font-light text-forest">ways in.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-charcoal-muted max-w-3xl pt-2 leading-relaxed">
            {pricing.subtext}
          </p>
        </motion.div>

        {/* 3 Pricing Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-14">
          {pricing.tiers.map((tier, index) => {
            const isFeatured = tier.isPopular;
            return (
              <div
                key={index}
                className={`p-7 sm:p-9 flex flex-col justify-between transition-all duration-200 relative ${
                  isFeatured
                    ? 'bg-forest text-cream border-2 border-forest-dark shadow-2xl scale-[1.01] lg:scale-[1.03] z-10 hover:shadow-brand-hover'
                    : 'bg-white/85 backdrop-blur-xs text-charcoal border border-charcoal-border hover:border-forest/60 hover:shadow-brand hover:-translate-y-1 shadow-card'
                }`}
              >
                {/* Popular / Status Badge */}
                {tier.badge && (
                  <div className="absolute -top-3.5 right-6">
                    <span
                      className={`px-3 py-1 text-xs font-bold uppercase tracking-wider font-mono border shadow-2xs ${
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
                    <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight">
                      {tier.name}
                    </h3>
                    <div
                      className={`font-mono text-sm sm:text-base font-bold uppercase tracking-wider mt-1.5 ${
                        isFeatured ? 'text-mint' : 'text-forest'
                      }`}
                    >
                      {tier.volume}
                    </div>
                  </div>

                  {/* Pitch & Ideal Fit */}
                  <div className="space-y-3">
                    <p className="font-sans font-bold text-lg sm:text-xl tracking-tight leading-snug">
                      {tier.pitch}
                    </p>
                    <p
                      className={`text-base leading-relaxed font-normal ${
                        isFeatured ? 'text-cream/90' : 'text-charcoal'
                      }`}
                    >
                      {tier.idealFor}
                    </p>
                  </div>
                </div>

                {/* Card Bottom CTA (Min 48px tap target + accessible focus ring) */}
                <div className="pt-8 mt-8 border-t border-current/15">
                  <a
                    href={brand?.calendlyUrl || websiteContent.brand.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3.5 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                      isFeatured
                        ? 'bg-mint text-forest hover:bg-cream active:scale-[0.99] focus-visible:ring-mint focus-visible:ring-offset-forest'
                        : 'bg-forest text-cream hover:bg-forest-light active:scale-[0.99] focus-visible:ring-forest'
                    }`}
                  >
                    <span>{pricing.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <p
                    className={`text-center text-xs mt-2.5 font-mono ${
                      isFeatured ? 'text-mint/80 font-medium' : 'text-charcoal-muted font-medium'
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
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="p-7 sm:p-9 bg-white/95 backdrop-blur-xs border border-charcoal-border shadow-card hover:border-forest/40 transition-colors space-y-6"
        >
          <div className="max-w-3xl">
            <h4 className="font-display text-2xl sm:text-3xl text-charcoal font-medium tracking-tight">
              {pricing.inclusionsTitle}
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {pricing.inclusions.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-base text-charcoal font-medium">
                <Check className="w-4 h-4 text-forest flex-shrink-0 mt-1 stroke-[2.5]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Add-ons Box within the bigger box */}
          <div className="p-4 sm:p-5 bg-cream-subtle/70 border border-charcoal-border/70 hover:border-forest/40 transition-colors flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <span className="px-2.5 py-1 bg-mint/60 border border-sage/50 text-forest font-mono font-bold text-xs uppercase tracking-wider shrink-0">
              Add-Ons
            </span>
            <span className="text-xs sm:text-sm font-mono text-charcoal font-medium leading-relaxed">
              {pricing.addonsNote}
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Pricing;
