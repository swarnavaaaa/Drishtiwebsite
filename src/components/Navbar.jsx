import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { LogoMark } from './LogoMark';
import { websiteContent } from '../data/websiteContent';

export const Navbar = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-cream/95 border-b border-charcoal-border/80 shadow-xs'
          : 'bg-cream border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center group py-2" aria-label="netwerked home">
            <LogoMark />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {websiteContent.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-charcoal/85 hover:text-forest transition-colors tracking-tight relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-forest hover:after:w-full after:transition-all after:duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest text-cream text-xs font-bold uppercase tracking-wider hover:bg-forest-light transition-all border border-forest-dark"
            >
              <span>Book a Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal hover:bg-mint/40 transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-charcoal-border bg-cream-subtle px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-3 pt-2">
            {websiteContent.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-charcoal hover:text-forest py-1.5 border-b border-charcoal-border/30"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-forest text-cream text-xs font-bold uppercase tracking-wider hover:bg-forest-light transition-colors"
            >
              <span>Book a Discovery Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
