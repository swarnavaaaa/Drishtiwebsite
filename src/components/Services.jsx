import React from 'react';
import { ArrowRight, Check, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { websiteContent } from '../data/websiteContent';

export const Services = ({ onOpenBooking }) => {
  const { services, brand } = websiteContent;

  return (
    <section id="services" className="py-16 md:py-24 bg-transparent border-b border-charcoal-border/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-4xl mb-14 sm:mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-mint/50 border border-sage/40 text-forest text-xs sm:text-sm font-semibold uppercase tracking-wider">
            {services.eyebrow || "SERVICES"}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-charcoal font-normal tracking-tight">
            {services.subheading}
          </h2>
          <div className="pt-1">
            <span className="font-display text-xl sm:text-2xl md:text-3xl text-forest font-light italic block">
              {services.tagline}
            </span>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-charcoal-muted max-w-3xl pt-2 leading-relaxed">
            {services.subtext}
          </p>
        </motion.div>

        {/* Section Title: Two Ways to Work */}
        <div className="flex items-center gap-3 mb-8 sm:mb-10">
          <h3 className="font-display text-2xl sm:text-3xl text-charcoal font-medium tracking-tight">
            {services.modelsSectionTitle}
          </h3>
          <div className="h-px bg-charcoal-border/80 flex-1 ml-2" />
        </div>

        {/* Two Models Grid (2 Large Side-by-Side Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-8 mb-14">
          {services.models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className={`p-7 sm:p-9 bg-white/85 backdrop-blur-xs border border-charcoal-border hover:border-forest/60 hover:shadow-brand hover:-translate-y-1 transition-all duration-200 shadow-card flex flex-col justify-between group ${
                index === 1 ? 'bg-gradient-to-b from-mint-light/40 to-white/95 border-sage/60' : ''
              }`}
            >
              <div>
                {/* Card Top Row: Number & Tag */}
                <div className="flex items-center justify-between pb-5 border-b border-charcoal-border/50 mb-6">
                  <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest group-hover:text-forest-dark transition-colors tracking-tight leading-none">
                    {model.number}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-sage group-hover:bg-forest group-hover:scale-125 transition-all duration-200" />
                </div>

                {/* Title & Description */}
                <h4 className="font-sans font-bold text-2xl sm:text-3xl text-charcoal tracking-tight mb-3 group-hover:text-forest transition-colors duration-200">
                  {model.title}
                </h4>

                <p className="text-base sm:text-lg text-charcoal leading-relaxed font-normal mb-7">
                  {model.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-3.5 pt-2">
                  {model.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-mint/80 text-forest flex items-center justify-center shrink-0 mt-0.5 border border-sage/60">
                        <Check className="w-3.5 h-3.5 text-forest stroke-[2.5]" />
                      </div>
                      <span className="text-base sm:text-[17px] text-charcoal font-medium leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Tag */}
              <div className="pt-6 mt-8 border-t border-charcoal-border/40 flex items-center justify-between">
                <span className="text-xs sm:text-sm font-mono text-forest font-bold uppercase tracking-wider">
                  {index === 0 ? "Collaborative & Hands-On" : "Full Done-For-You Delegation"}
                </span>
                <span className="text-xs font-mono text-charcoal-light opacity-0 group-hover:opacity-100 transition-opacity">
                  netwerked.io
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Included in Every Retainer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="p-7 sm:p-9 bg-white/90 backdrop-blur-xs border border-charcoal-border shadow-card mb-8 hover:border-forest/40 transition-all"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-charcoal-border/50 mb-6">
            <div>
              <span className="text-xs font-mono text-forest font-bold uppercase tracking-wider block mb-1">
                Standard Inclusions
              </span>
              <h4 className="font-display text-2xl sm:text-3xl text-charcoal font-medium tracking-tight">
                {services.includedTitle}
              </h4>
            </div>
            <span className="inline-flex items-center gap-1.5 self-start sm:self-center px-3 py-1 bg-mint/50 border border-sage/40 text-forest text-xs font-mono font-bold uppercase tracking-wider">
              Standard With Both Models
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.included.map((item, idx) => (
              <div key={idx} className="space-y-1.5 p-4 bg-cream-subtle/50 border border-charcoal-border/40 hover:border-forest/40 transition-colors">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-forest shrink-0" />
                  <span className="font-sans font-bold text-base text-charcoal tracking-tight">
                    {item.title}
                  </span>
                </div>
                <p className="text-sm text-charcoal-muted pl-4 leading-relaxed">
                  — {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Optional Add-ons & Additional Platform Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 mb-16">
          
          {/* Optional Add-ons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="p-7 sm:p-8 bg-white/85 backdrop-blur-xs border border-charcoal-border shadow-card hover:border-forest/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-charcoal-border/50 mb-5">
                <span className="text-xs sm:text-sm font-mono text-forest font-bold uppercase tracking-wider">
                  Enhance Your Retainer
                </span>
                <span className="px-2.5 py-1 bg-mint/50 border border-sage/40 text-forest text-xs font-mono font-bold uppercase">
                  Add-Ons
                </span>
              </div>

              <h4 className="font-display text-2xl sm:text-3xl text-charcoal font-medium tracking-tight mb-5">
                {services.addonsTitle}
              </h4>

              <div className="space-y-4">
                {services.addons.map((addon, idx) => (
                  <div key={idx} className="p-4 sm:p-4.5 bg-cream-subtle/60 border border-charcoal-border/50 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Plus className="w-4 h-4 text-forest shrink-0 stroke-[2.5]" />
                      <span className="font-sans font-bold text-base sm:text-lg text-charcoal">
                        {addon.title}
                      </span>
                    </div>
                    <p className="text-base text-charcoal-muted pl-6 leading-relaxed">
                      — {addon.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-charcoal-border/40 text-xs sm:text-sm font-mono text-charcoal-muted font-medium">
              Available alongside any active retainer
            </div>
          </motion.div>

          {/* Additional Platform */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="p-7 sm:p-8 bg-white/85 backdrop-blur-xs border border-charcoal-border shadow-card hover:border-forest/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-charcoal-border/50 mb-5">
                <span className="text-xs sm:text-sm font-mono text-forest font-bold uppercase tracking-wider">
                  Multi-Channel Reach
                </span>
                <span className="px-2.5 py-1 bg-mint/50 border border-sage/40 text-forest text-xs font-mono font-bold uppercase">
                  Expansion
                </span>
              </div>

              <h4 className="font-display text-2xl sm:text-3xl text-charcoal font-medium tracking-tight mb-5">
                {services.additionalPlatformTitle}
              </h4>

              <div className="p-5 bg-cream-subtle/60 border border-charcoal-border/50 space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xl sm:text-2xl font-extrabold text-forest px-3 py-1 bg-mint/60 border border-sage/50">
                    {services.additionalPlatform.platform}
                  </span>
                  <span className="font-sans font-bold text-lg sm:text-xl text-charcoal">
                    Platform Management
                  </span>
                </div>
                <p className="text-base sm:text-lg text-charcoal leading-relaxed pt-1">
                  — {services.additionalPlatform.description}
                </p>
              </div>
            </div>

            <div className="pt-5 mt-6 border-t border-charcoal-border/40 text-xs sm:text-sm font-mono text-charcoal-muted font-medium">
              Unified cross-channel narrative & execution
            </div>
          </motion.div>

        </div>

        {/* Our Approach (3 Core Beliefs Callout Block) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-forest text-cream p-8 sm:p-12 lg:p-14 border border-forest-dark relative overflow-hidden shadow-2xl space-y-10"
        >
          {/* Header */}
          <div className="max-w-3xl space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-mint/20 border border-mint/40 text-mint text-xs sm:text-sm font-mono font-bold uppercase tracking-widest">
              {services.approach.eyebrow}
            </div>
            <h3 className="font-display text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight leading-[1.12]">
              We read first, <span className="italic font-light text-mint">then we write.</span>
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-cream/90 max-w-3xl leading-relaxed pt-1">
              {services.approach.subtext}
            </p>
          </div>

          <div className="h-px bg-white/20 relative z-10" />

          {/* 3 Belief Cards Grid with White & Light Green Styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 relative z-10">
            {services.approach.beliefs.map((belief, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`p-7 sm:p-8 bg-white/95 text-charcoal border-2 border-mint/40 hover:border-mint hover:-translate-y-1 transition-all duration-200 shadow-xl flex flex-col justify-between group ${
                  idx === 1 ? 'bg-gradient-to-b from-mint-light/60 to-white border-mint/60' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-charcoal-border/50 mb-5">
                    <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest group-hover:text-forest-dark transition-colors tracking-tight leading-none">
                      {belief.number}
                    </span>
                    <span className="px-3 py-1 bg-mint/50 border border-sage/40 text-forest text-xs font-mono font-bold uppercase tracking-wider">
                      Belief {belief.number}
                    </span>
                  </div>

                  <h4 className="font-sans font-bold text-xl sm:text-2xl text-charcoal tracking-tight mb-3 group-hover:text-forest transition-colors">
                    {belief.title}
                  </h4>

                  <p className="text-base sm:text-lg text-charcoal leading-relaxed font-normal">
                    {belief.description}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-charcoal-border/30 text-xs sm:text-sm font-mono text-forest uppercase tracking-wider font-bold">
                  Netwerked Standard
                </div>
              </motion.div>
            ))}
          </div>

          <div className="h-px bg-white/20 relative z-10" />

          {/* Closing Line + CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
            <p className="text-lg sm:text-xl md:text-2xl text-white font-medium max-w-xl leading-snug">
              {services.approach.closingLine}
            </p>
            <a
              href={brand.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 min-h-[50px] px-7 py-4 bg-mint text-forest hover:bg-white hover:text-forest active:scale-[0.98] text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all shadow-brand cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
            >
              <span>{services.approach.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;

