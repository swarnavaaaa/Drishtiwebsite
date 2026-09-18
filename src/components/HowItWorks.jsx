import React from 'react';
import { motion } from 'framer-motion';
import { websiteContent } from '../data/websiteContent';

export const HowItWorks = () => {
  const { process } = websiteContent;

  return (
    <section className="py-16 md:py-24 bg-transparent border-b border-charcoal-border/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-mint/50 border border-sage/40 text-forest text-xs sm:text-sm font-bold uppercase tracking-wider">
            {process.heading}
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-charcoal font-normal tracking-tight leading-[1.12]">
            A simple, <span className="italic font-light text-forest">proven process.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-charcoal-muted max-w-2xl pt-1 leading-relaxed">
            Designed for busy founders who want executive output with minimal operational overhead.
          </p>
        </motion.div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.steps.map((step, index) => (
            <div
              key={index}
              className="p-7 sm:p-8 bg-white/90 backdrop-blur-xs border border-charcoal-border hover:border-forest/60 hover:shadow-brand hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between shadow-card relative group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-charcoal-border/50 mb-5">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-forest group-hover:text-forest-dark transition-colors">
                    {step.number}
                  </span>
                  <span className="px-2.5 py-1 bg-mint/50 border border-sage/40 text-xs font-mono text-forest font-bold uppercase tracking-wider">
                    Phase 0{index + 1}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-xl sm:text-2xl text-charcoal tracking-tight mb-3 group-hover:text-forest transition-colors duration-200">
                  {step.title}
                </h3>

                <p className="text-base text-charcoal leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-5 border-t border-charcoal-border/40">
                <div className="w-full h-1.5 bg-mint/50 overflow-hidden">
                  <div
                    style={{ width: `${(index + 1) * 25}%` }}
                    className="h-full bg-forest transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
