import React from 'react';
import { ArrowUpRight, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { websiteContent } from '../data/websiteContent';
import { CountUp } from './CountUp';

export const AboutDrishti = ({ onOpenBooking }) => {
  const { about, brand } = websiteContent;

  return (
    <section id="about" className="py-16 md:py-24 border-b border-charcoal-border/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-mint/50 border border-sage/40 text-forest text-xs font-semibold uppercase tracking-wider mb-6"
        >
          {about.eyebrow}
        </motion.div>

        {/* Editorial Narrative Layout */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Main Greeting & Bio */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="space-y-6"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal tracking-tight leading-[1.15]">
              {about.greeting}
            </h2>

            <div className="space-y-5 text-sm sm:text-base text-charcoal/85 leading-relaxed font-normal">
              {about.paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={idx === 0 ? 'text-base sm:text-lg text-charcoal font-medium leading-relaxed' : ''}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Credibility Summary Ribbon */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="p-6 sm:p-7 bg-white/90 backdrop-blur-xs border border-charcoal-border shadow-card space-y-3.5 hover:border-forest/40 transition-colors"
          >
            <div className="text-xs font-bold uppercase tracking-wider text-forest font-mono">
              Verified Track Record
            </div>
            <div className="flex flex-wrap gap-2.5 text-xs font-medium text-charcoal">
              <span className="px-3 py-1.5 bg-mint/50 border border-sage/40 hover:bg-mint transition-colors">
                <strong className="text-forest"><CountUp value="92,700+" /></strong> Organic Followers
              </span>
              <span className="px-3 py-1.5 bg-mint/50 border border-sage/40 hover:bg-mint transition-colors">
                <strong className="text-forest"><CountUp value="200+" /></strong> Brand Partnerships
              </span>
              <span className="px-3 py-1.5 bg-mint/50 border border-sage/40 hover:bg-mint transition-colors">
                <strong className="text-forest"><CountUp value="3M+" />/mo</strong> Impressions
              </span>
              <span className="px-3 py-1.5 bg-mint/50 border border-sage/40 hover:bg-mint transition-colors">
                <strong className="text-forest">#2</strong> Sports Content on Favikon
              </span>
              <span className="px-3 py-1.5 bg-mint/50 border border-sage/40 hover:bg-mint transition-colors">
                Deloitte & KPMG Alum
              </span>
            </div>
          </motion.div>

          {/* Action Channels (All 3 Buttons with min 48px touch target) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5"
          >
            {/* Primary Action: Book a Discovery Call */}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3.5 bg-forest text-cream text-xs font-bold uppercase tracking-wider hover:bg-forest-light hover:shadow-brand hover:-translate-y-0.5 active:translate-y-0 transition-all border border-forest-dark cursor-pointer"
            >
              <span>Book a Discovery Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* LinkedIn Profile Button */}
            <a
              href={brand.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3.5 bg-mint text-forest hover:bg-forest hover:text-cream border border-sage/50 text-xs font-bold uppercase tracking-wider hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-2xs"
            >
              <Linkedin className="w-4 h-4" />
              <span>Drishti's LinkedIn Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Email Contact Button */}
            <a
              href={`mailto:${brand.email}`}
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3.5 bg-white/90 hover:bg-white text-charcoal text-xs font-semibold tracking-wide border border-charcoal-border hover:border-forest/40 hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-2xs"
            >
              <Mail className="w-3.5 h-3.5 text-sage-dark" />
              <span>{brand.email}</span>
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutDrishti;
