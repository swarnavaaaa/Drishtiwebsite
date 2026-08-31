import React from 'react';
import { LogoMark } from './LogoMark';
import { websiteContent } from '../data/websiteContent';

export const Footer = () => {
  const { finalCta, navigation, brand } = websiteContent;

  return (
    <footer className="bg-charcoal text-cream-dark py-12 border-t border-charcoal-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-charcoal-muted/30">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <LogoMark theme="dark" />
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-cream/70">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-mint transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p>{finalCta.copyright}</p>
          <p className="font-mono text-[11px]">
            Designed with craft for founders across industries.
          </p>
        </div>
      </div>
    </footer>
  );
};
