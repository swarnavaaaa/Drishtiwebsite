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
    <section id="contact" className="py-12 md:py-16 bg-forest text-cream relative overflow-hidden border-t border-forest-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5 sm:space-y-6">
        
        {/* Brand Mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex justify-center"
        >
          <LogoMark className="w-10 h-10 sm:w-12 sm:h-12" variant="symbol" theme="dark" />
        </motion.div>

        {/* Big Display Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="font-display text-2xl sm:text-3xl md:text-5xl text-cream font-normal tracking-tight max-w-3xl mx-auto leading-[1.15]"
        >
          Let's write the version of your story{' '}
          <span className="italic font-light text-mint">the internet remembers.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-xs sm:text-sm text-cream/80 max-w-lg mx-auto font-normal leading-relaxed"
        >
          Whether you are launching a venture, scaling an advisory practice, or elevating executive thought leadership, your voice starts here.
        </motion.p>

        {/* Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 min-h-[44px] px-7 py-3 bg-mint text-forest text-xs font-bold uppercase tracking-wider hover:bg-cream hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer shadow-brand"
          >
            <span>{finalCta.buttonText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleCopyEmail}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-3 bg-forest-surface hover:bg-forest-dark text-cream text-xs font-medium tracking-wide border border-sage/40 hover:border-sage/70 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-mint" />
                <span className="text-mint font-semibold">Copied ({brand.email})</span>
              </>
            ) : (
              <>
                <Mail className="w-3.5 h-3.5 text-sage-light" />
                <span>{brand.email}</span>
                <Copy className="w-3 h-3 text-sage-light ml-1 opacity-60" />
              </>
            )}
          </button>
        </motion.div>

        {/* Direct Channels Bar */}
        <div className="pt-6 border-t border-sage/20 flex flex-wrap items-center justify-center gap-3 sm:gap-8 text-xs text-cream/80">
          <a
            href={`mailto:${brand.email}`}
            className="inline-flex items-center gap-1.5 min-h-[40px] px-2 hover:text-mint transition-colors font-mono text-[11px] sm:text-xs"
          >
            <Mail className="w-3 h-3 text-sage-light" />
            <span>{brand.email}</span>
          </a>

          <span className="hidden sm:inline text-sage/40">·</span>

          <a
            href={`https://${brand.domain}`}
            className="inline-flex items-center gap-1.5 min-h-[40px] px-2 hover:text-mint transition-colors font-mono text-[11px] sm:text-xs"
          >
            <Globe className="w-3 h-3 text-sage-light" />
            <span>{brand.domain}</span>
          </a>

          <span className="hidden sm:inline text-sage/40">·</span>

          <a
            href={brand.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 min-h-[40px] px-2 hover:text-mint transition-colors font-mono underline underline-offset-4 text-[11px] sm:text-xs"
          >
            <Linkedin className="w-3 h-3 text-sage-light" />
            <span>{brand.linkedinUrl.replace('https://', '')}</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
