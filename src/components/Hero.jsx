import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { websiteContent } from '../data/websiteContent';
import { CountUp } from './CountUp';

export const Hero = ({ onOpenBooking }) => {
  const { hero } = websiteContent;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 border-b border-charcoal-border/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typography & Positioning (7 Cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 sm:space-y-7"
          >
            {/* Tag / Eyebrow */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-mint/60 border border-sage/50 text-forest text-xs sm:text-sm font-bold uppercase tracking-wider shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />
                <span>{hero.eyebrow}</span>
              </div>
            </motion.div>

            {/* Main Display Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl md:text-6xl text-charcoal font-normal tracking-tight leading-[1.12]"
            >
              Your best work <br className="hidden sm:inline" />
              <span className="italic font-light text-forest">deserves</span> an audience.
            </motion.h1>

            {/* Sharp Positioning Copy */}
            <motion.div
              variants={itemVariants}
              className="space-y-3 text-base sm:text-lg text-charcoal leading-relaxed max-w-2xl font-normal"
            >
              <p>{hero.description}</p>
              {hero.descriptionSecondary && (
                <p>{hero.descriptionSecondary}</p>
              )}
            </motion.div>

            {/* Actions Row (Min 48px tap targets + visible focus rings) */}
            <motion.div
              variants={itemVariants}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4"
            >
              <a
                href={websiteContent.brand.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 min-h-[48px] px-7 py-3.5 bg-forest text-cream text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-forest-light transition-all shadow-brand hover:shadow-brand-hover hover:-translate-y-0.5 active:translate-y-0 border border-forest-dark cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
              >
                <span>{hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#our-work"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3.5 bg-white/90 hover:bg-white text-charcoal text-xs sm:text-sm font-semibold tracking-wide border border-charcoal-border hover:border-forest/40 hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2"
              >
                <span>{hero.secondaryCta}</span>
                <ArrowDown className="w-4 h-4 text-forest" />
              </a>
            </motion.div>

            {/* Stats Ticker with Animated CountUp */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-charcoal-border/60 grid grid-cols-3 gap-3 sm:gap-8 max-w-lg"
            >
              {hero.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-display text-2xl sm:text-3xl text-forest font-semibold tracking-tight">
                    <CountUp value={stat.value} duration={2} />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-charcoal-muted uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

          </motion.div>

          {/* Right Column: Editorial Portrait Placeholder (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              
              {/* Decorative architectural background accent block */}
              <div className="absolute -top-2.5 -right-2.5 w-full h-full bg-mint/50 border border-sage/30 pointer-events-none transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />

              {/* Editorial Portrait Frame */}
              <div className="relative bg-white border-2 border-forest/20 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                
                {/* Portrait Container */}
                <div className="aspect-[4/5] w-full bg-gradient-to-br from-cream-subtle via-mint-light/40 to-sage-tint relative flex flex-col justify-between p-5 sm:p-6 overflow-hidden">
                  
                  {/* Background ambient watermarks */}
                  <div className="absolute -right-6 -top-6 w-32 h-32 opacity-15 pointer-events-none group-hover:rotate-6 transition-transform duration-500">
                    <img
                      src="/brand/04_symbol_only_transparent.png"
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Top Header Tag */}
                  <div className="relative z-10 flex items-center justify-start">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-xs border border-charcoal-border/70 text-xs font-mono font-bold uppercase tracking-wider text-forest shadow-2xs">
                      <span className="w-2 h-2 rounded-full bg-forest" />
                      <span>Founder and Growth Strategist</span>
                    </div>
                  </div>

                  {/* Center: Editorial Portrait Placeholder Art / Silhouette */}
                  <div className="my-auto py-4 text-center relative z-10 flex flex-col items-center justify-center space-y-3">
                    {/* Portrait Avatar Frame */}
                    <div className="relative">
                      <img
                        src="/me.jpg"
                        alt="Drishti Bagla"
                        className="w-48 h-48 sm:w-56 sm:h-56 object-cover border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Verified badge */}
                      <div className="absolute -bottom-2 -right-2 bg-mint border border-forest text-forest px-2.5 py-1 text-xs font-mono font-bold uppercase shadow-2xs">
                        VERIFIED
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-display text-xl sm:text-2xl text-charcoal font-semibold tracking-tight">
                        Drishti Bagla
                      </h3>
                      <p className="text-xs sm:text-sm font-mono tracking-wider text-forest font-bold">
                        FOUNDER, Netwerked
                      </p>
                      <p className="text-xs sm:text-sm text-charcoal font-medium max-w-[220px] mx-auto">
                        Ex-Deloitte & KPMG Risk Consultant
                      </p>
                    </div>
                  </div>



                </div>

              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;

