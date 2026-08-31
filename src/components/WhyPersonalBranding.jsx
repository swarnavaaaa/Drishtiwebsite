import React from 'react';
import { motion } from 'framer-motion';
import { websiteContent } from '../data/websiteContent';

export const WhyPersonalBranding = () => {
  const { whyPersonalBranding } = websiteContent;

  return (
    <section className="py-16 md:py-24 bg-transparent border-b border-charcoal-border/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl mb-12 sm:mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-mint/50 border border-sage/40 text-forest text-xs font-semibold uppercase tracking-wider">
            {whyPersonalBranding.heading}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal tracking-tight">
            The right opportunities <span className="italic font-light text-forest">start finding you.</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted max-w-2xl">
            When you publish your authentic thinking consistently, inbound leverage replaces outbound friction.
          </p>
        </motion.div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyPersonalBranding.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              className={`p-7 sm:p-8 bg-white/90 backdrop-blur-xs border border-charcoal-border hover:border-forest/60 hover:shadow-brand hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group shadow-card ${
                index === 0 ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-b from-mint-light/50 to-white/95 border-sage/50' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-charcoal-border/50 mb-4">
                  <span className="font-mono text-xs font-bold text-forest group-hover:text-forest-dark transition-colors">
                    {benefit.number}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-sage group-hover:bg-forest group-hover:scale-125 transition-all duration-200" />
                </div>
                <h3 className="font-sans font-bold text-lg text-charcoal tracking-tight mb-2 group-hover:text-forest transition-colors duration-200">
                  {benefit.title}
                </h3>
                <p className="text-sm text-charcoal/80 leading-relaxed font-normal">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-charcoal-border/30 flex items-center justify-between">
                <span className="text-[11px] font-mono text-sage-dark uppercase tracking-wider font-semibold">
                  Compounding Asset
                </span>
                <span className="text-[11px] font-mono text-charcoal-light opacity-0 group-hover:opacity-100 transition-opacity">
                  netwerked.io
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyPersonalBranding;
