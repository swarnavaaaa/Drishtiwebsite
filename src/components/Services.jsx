import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { websiteContent } from '../data/websiteContent';

export const Services = ({ onOpenBooking }) => {
  const { services } = websiteContent;

  return (
    <section id="services" className="py-16 md:py-24 bg-transparent border-b border-charcoal-border/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-mint/50 border border-sage/40 text-forest text-xs font-semibold uppercase tracking-wider">
            {services.heading}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal tracking-tight">
            {services.subheading}
          </h2>
          <div className="pt-1">
            <span className="font-display text-xl sm:text-2xl text-forest font-light italic block">
              {services.quote}
            </span>
          </div>
          <p className="text-sm sm:text-base text-charcoal-muted max-w-2xl pt-2">
            {services.description}
          </p>
        </motion.div>

        {/* 4 Pillars Grid (Asymmetrical 2x2 with deep content) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {services.pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
              className="p-7 sm:p-8 bg-white/90 backdrop-blur-xs border border-charcoal-border hover:border-forest/60 hover:shadow-brand hover:-translate-y-1 transition-all duration-200 shadow-card flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-charcoal-border/50">
                  <span className="font-mono text-sm font-bold text-forest">
                    {pillar.number}.
                  </span>
                  <span className="text-[11px] font-mono text-sage-dark uppercase tracking-wider font-semibold">
                    Core Capability
                  </span>
                </div>

                <h3 className="font-sans font-bold text-xl text-charcoal tracking-tight group-hover:text-forest transition-colors duration-200">
                  {pillar.title}
                </h3>

                <p className="text-sm text-charcoal/80 leading-relaxed font-normal">
                  {pillar.description}
                </p>

                <div className="pt-3 space-y-2">
                  {pillar.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-charcoal-muted">
                      <div className="w-1.5 h-1.5 rounded-full bg-forest" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-charcoal-border/30 flex items-center justify-between">
                <span className="text-xs font-mono text-charcoal-light">Included in all retainers</span>
                <span className="text-xs font-mono text-forest opacity-0 group-hover:opacity-100 transition-opacity">netwerked.io</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Our Approach (3 Core Beliefs Callout Block) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-forest text-cream p-8 sm:p-12 border border-forest-dark relative overflow-hidden shadow-2xl"
        >
          <div className="max-w-3xl mb-8 space-y-2 relative z-10">
            <div className="text-xs font-mono text-mint uppercase tracking-widest">
              {services.approach.heading}
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-cream font-medium tracking-tight">
              {services.approach.tagline}
            </h3>
            <p className="text-xs sm:text-sm text-cream/80 leading-relaxed">
              {services.approach.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-sage/30 relative z-10">
            {services.approach.beliefs.map((belief, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="space-y-2.5 p-5 bg-forest-surface border border-sage/20 hover:border-sage/50 transition-colors"
              >
                <div className="font-mono text-xs font-bold text-mint">
                  0{idx + 1}.
                </div>
                <h4 className="font-sans font-bold text-base text-cream tracking-tight">
                  {belief.title}
                </h4>
                <p className="text-xs text-cream/80 leading-relaxed font-normal">
                  {belief.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="pt-8 mt-8 border-t border-sage/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
            <p className="text-xs text-mint font-medium">
              Ready to replace generic content with authentic executive presence?
            </p>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 bg-mint text-forest hover:bg-cream active:scale-[0.98] text-xs font-bold uppercase tracking-wider transition-all shadow-brand cursor-pointer"
            >
              <span>Book a Discovery Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
