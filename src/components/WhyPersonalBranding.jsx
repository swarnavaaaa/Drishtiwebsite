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
          className="max-w-4xl mb-12 sm:mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-mint/50 border border-sage/40 text-forest text-xs sm:text-sm font-semibold uppercase tracking-wider">
            {whyPersonalBranding.heading}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-charcoal font-normal tracking-tight leading-[1.12]">
            The right opportunities and people{" "}
            <span className="italic font-light text-forest">start finding you.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-charcoal-muted max-w-3xl leading-relaxed">
            {whyPersonalBranding.subtext}
          </p>
        </motion.div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {whyPersonalBranding.benefits.map((benefit, index) => (
            <div
              key={index}
              className={`p-7 sm:p-8 lg:p-9 bg-white/85 backdrop-blur-xs border border-charcoal-border hover:border-forest/60 hover:shadow-brand hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group shadow-card ${
                index === 0 ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-b from-mint-light/60 to-white/90 border-sage/50' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-charcoal-border/50 mb-5 sm:mb-6">
                  <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-extrabold text-forest group-hover:text-forest-dark transition-colors tracking-tight leading-none">
                    {benefit.number}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-sage group-hover:bg-forest group-hover:scale-125 transition-all duration-200" />
                </div>
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-charcoal tracking-tight mb-3 group-hover:text-forest transition-colors duration-200">
                  {benefit.title}
                </h3>
                <p className="text-base sm:text-lg text-charcoal leading-relaxed font-normal">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-charcoal-border/40 flex items-center justify-between">
                <span className="text-xs sm:text-sm font-mono text-forest font-bold uppercase tracking-wider">
                  {benefit.tag}
                </span>
                <span className="text-xs font-mono text-charcoal-muted opacity-0 group-hover:opacity-100 transition-opacity">
                  netwerked.io
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyPersonalBranding;
