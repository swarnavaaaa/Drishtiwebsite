import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { websiteContent } from '../data/websiteContent';

export const OurWork = ({ onOpenBooking }) => {
  const { ourWork, brand } = websiteContent;

  return (
    <section id="our-work" className="py-16 md:py-24 bg-transparent border-b border-charcoal-border/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-4xl mb-12 sm:mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-mint/50 border border-sage/40 text-forest text-xs sm:text-sm font-semibold uppercase tracking-wider">
            {ourWork.heading}
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-charcoal font-normal tracking-tight leading-[1.12]">
            Different industries. Different voices.{' '}
            <span className="italic font-light text-forest">One hand.</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-charcoal-muted max-w-3xl pt-2 leading-relaxed">
            {ourWork.subtitle}
          </p>
        </motion.div>

        {/* 8 Confidential Engagements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 items-stretch mb-14">
          {ourWork.items.map((item, idx) => (
            <div
              key={item.id || idx}
              className="p-7 sm:p-9 bg-white/85 backdrop-blur-xs border border-charcoal-border hover:border-forest/60 hover:shadow-brand hover:-translate-y-1 transition-all duration-200 shadow-card flex flex-col justify-between group"
            >
              <div>
                {/* Card Top Strip */}
                <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-charcoal-border/50 mb-5">
                  <span className="font-mono text-2xl sm:text-3xl lg:text-4xl font-extrabold text-forest group-hover:text-forest-dark transition-colors leading-none">
                    {item.number || `0${idx + 1}`}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-mint/40 border border-sage/30 text-[11px] font-mono text-forest font-bold uppercase tracking-wider">
                    <Shield className="w-3 h-3 text-forest" />
                    CONFIDENTIAL
                  </span>
                </div>

                {/* Engagement Title */}
                <h3 className="font-sans font-bold text-xl sm:text-2xl text-charcoal tracking-tight mb-3 group-hover:text-forest transition-colors duration-200 leading-snug">
                  {item.title}
                </h3>

                {/* Engagement Description */}
                <p className="text-[15px] sm:text-base text-charcoal/85 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Card Footer Tag */}
              <div className="pt-5 mt-6 border-t border-charcoal-border/40 flex items-center justify-between">
                <span className="text-xs sm:text-sm font-mono text-forest font-bold uppercase tracking-wider">
                  {item.tag}
                </span>
                <span className="text-xs font-mono text-charcoal-light opacity-0 group-hover:opacity-100 transition-opacity">
                  netwerked.io
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* End quote + CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="p-8 sm:p-12 bg-white/90 backdrop-blur-xs border border-charcoal-border text-center max-w-4xl mx-auto space-y-6 shadow-card hover:border-forest/40 transition-all"
        >
          <div className="space-y-2">
            <p className="font-display text-xl sm:text-2xl md:text-3xl text-charcoal font-normal italic leading-relaxed">
              {ourWork.quote}
            </p>
            <span className="text-xs sm:text-sm font-mono text-forest font-bold uppercase tracking-widest block pt-1">
              — {ourWork.quoteAuthor}
            </span>
          </div>

          <div className="pt-2">
            <a
              href={brand?.calendlyUrl || websiteContent.brand.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 min-h-[50px] px-8 py-4 bg-forest text-cream text-xs sm:text-sm font-mono font-bold uppercase tracking-wider hover:bg-forest-light hover:shadow-brand hover:-translate-y-0.5 active:translate-y-0 transition-all border border-forest-dark cursor-pointer"
            >
              <span>{ourWork.ctaText || "BOOK A DISCOVERY CALL"}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default OurWork;
