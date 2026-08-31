import React, { useState } from 'react';
import { ArrowRight, Mail, Linkedin, Globe, Check, Copy } from 'lucide-react';
import { motion } from 'framer-motion';
import { LogoMark } from './LogoMark';
import { websiteContent } from '../data/websiteContent';

export const FinalCTA = ({ onOpenBooking }) => {
  const { finalCta, brand } = websiteContent;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(brand.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-forest text-cream relative overflow-hidden border-t-2 border-forest-dark">
      
      {/* Subtle architectural geometric accent */}
      <div className="absolute top-0 right-0 w-96 h-96 border-b border-l border-sage/20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 border-t border-r border-sage/20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Brand Mark in Hero scale */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <LogoMark className="w-14 h-14" variant="symbol" theme="dark" />
        </motion.div>

        {/* Big Display Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-6xl text-cream font-normal tracking-tight max-w-4xl mx-auto leading-[1.12]"
        >
          Let's write the version of your story{' '}
          <span className="italic font-light text-mint">the internet remembers.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm sm:text-base text-cream/80 max-w-xl mx-auto font-normal"
        >
          Whether you are launching a venture, scaling an advisory practice, or elevating executive thought leadership, your voice starts here.
        </motion.p>

        {/* Primary CTAs (Min 48px tap targets) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 min-h-[48px] px-8 py-3.5 bg-mint text-forest text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-cream hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer shadow-brand"
          >
            <span>{finalCta.buttonText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleCopyEmail}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3.5 bg-forest-surface hover:bg-forest-dark text-cream text-xs sm:text-sm font-medium tracking-wide border border-sage/40 hover:border-sage/70 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-mint" />
                <span className="text-mint font-semibold">Copied ({brand.email})</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 text-sage-light" />
                <span>{brand.email}</span>
                <Copy className="w-3.5 h-3.5 text-sage-light ml-1 opacity-60" />
              </>
            )}
          </button>
        </motion.div>

        {/* Direct Channels Bar */}
        <div className="pt-10 border-t border-sage/25 flex flex-wrap items-center justify-center gap-4 sm:gap-10 text-xs sm:text-sm text-cream/80">
          <a
            href={`mailto:${brand.email}`}
            className="inline-flex items-center gap-1.5 min-h-[44px] px-2 hover:text-mint transition-colors font-mono"
          >
            <Mail className="w-3.5 h-3.5 text-sage-light" />
            <span>{brand.email}</span>
          </a>

          <span className="hidden sm:inline text-sage/40">·</span>

          <a
            href={`https://${brand.domain}`}
            className="inline-flex items-center gap-1.5 min-h-[44px] px-2 hover:text-mint transition-colors font-mono"
          >
            <Globe className="w-3.5 h-3.5 text-sage-light" />
            <span>{brand.domain}</span>
          </a>

          <span className="hidden sm:inline text-sage/40">·</span>

          <a
            href={brand.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 min-h-[44px] px-2 hover:text-mint transition-colors font-mono underline underline-offset-4"
          >
            <Linkedin className="w-3.5 h-3.5 text-sage-light" />
            <span>{brand.linkedinUrl.replace('https://', '')}</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
