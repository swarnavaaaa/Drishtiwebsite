import React from 'react';
import { LogoMark } from './LogoMark';
import { websiteContent } from '../data/websiteContent';

export const Footer = () => {
  const { finalCta, navigation } = websiteContent;

  return (
    <footer className="bg-charcoal text-cream-dark py-12 border-t border-charcoal-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-charcoal-muted/30">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <LogoMark theme="dark" />
          </div>

          {/* Quick links with min 44px touch targets + accessible focus */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-sm text-cream/85 font-medium">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center min-h-[44px] px-2.5 hover:text-mint transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-cream/80 text-center sm:text-left">
          <p>{finalCta.copyright}</p>
          <p className="font-mono text-xs sm:text-sm text-cream/70">
            Designed with craft for founders across industries.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
