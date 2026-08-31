import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { websiteContent } from '../data/websiteContent';

export const WhoThisIsFor = () => {
  const { whoThisIsFor } = websiteContent;

  return (
    <section className="py-16 md:py-24 border-b border-charcoal-border/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Context (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-5 space-y-5 lg:sticky lg:top-28"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-mint/50 border border-sage/40 text-forest text-xs font-semibold uppercase tracking-wider">
              {whoThisIsFor.heading}
            </div>

            <h2 className="font-display text-3xl sm:text-4xl text-charcoal font-normal tracking-tight leading-[1.2]">
              Built for founders and senior leaders who are{' '}
              <span className="italic font-light text-forest">done being invisible.</span>
            </h2>

            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
              When your company is innovating, your online voice should match the standard of your boardroom.
            </p>

            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest hover:text-forest-dark underline underline-offset-4 hover:translate-x-1 transition-transform"
              >
                <span>{whoThisIsFor.conclusion}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: 4 Distinct Pain Points (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            {whoThisIsFor.points.map((point, index) => (
              <div
                key={index}
                className="p-6 sm:p-7 bg-white/85 backdrop-blur-xs border border-charcoal-border hover:border-forest/60 hover:shadow-brand hover:-translate-y-0.5 transition-transform transition-shadow duration-200 shadow-card group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-mint/60 border border-sage/40 text-forest flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-forest group-hover:text-cream transition-colors duration-200">
                    <span className="font-mono text-xs font-bold">0{index + 1}</span>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-sans font-bold text-base sm:text-lg text-charcoal tracking-tight group-hover:text-forest transition-colors duration-200">
                      {point.title}
                    </h3>
                    <p className="text-sm text-charcoal/80 leading-relaxed font-normal">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhoThisIsFor;
