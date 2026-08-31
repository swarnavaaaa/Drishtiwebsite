import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogoMark } from './LogoMark';
import { websiteContent } from '../data/websiteContent';

export const Navbar = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Track scroll position for navbar styling & active section scrollspy
  useEffect(() => {
    const sectionIds = websiteContent.navigation.map((item) => item.href.replace('#', ''));

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scrollspy calculation
      const scrollPosition = window.scrollY + 120;
      let currentActive = '';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentActive = `#${id}`;
            break;
          }
        }
      }

      if (currentActive) {
        setActiveSection(currentActive);
      } else if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md border-b border-charcoal-border/80 shadow-xs py-1'
            : 'bg-cream/80 backdrop-blur-xs border-b border-transparent py-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand Logo */}
            <a
              href="#"
              onClick={(e) => {
                if (window.location.hash) {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  window.history.pushState(null, '', ' ');
                }
              }}
              className="flex items-center group py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              aria-label="netwerked home"
            >
              <LogoMark />
            </a>

            {/* Desktop Navigation with Active Scrollspy */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {websiteContent.navigation.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`relative px-3.5 py-2 text-sm font-medium transition-colors tracking-tight ${
                      isActive ? 'text-forest font-semibold' : 'text-charcoal/80 hover:text-forest'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-2 right-2 h-[2px] bg-forest rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Button (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] bg-forest text-cream text-xs font-bold uppercase tracking-wider hover:bg-forest-light hover:shadow-brand active:scale-[0.98] transition-all border border-forest-dark"
              >
                <span>Book a Call</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button (Min 44px tap target) */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-11 h-11 flex items-center justify-center text-charcoal hover:bg-mint/40 active:scale-95 transition-all focus:outline-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer with Backdrop Blur & Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-start">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-charcoal/50 backdrop-blur-xs"
            />

            {/* Slide Down Menu Content */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="relative z-10 w-full bg-cream border-b border-charcoal-border shadow-2xl px-6 pt-5 pb-8 space-y-6 max-h-[85vh] overflow-y-auto"
            >
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-3 border-b border-charcoal-border/50">
                <LogoMark textSize="text-lg" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-11 h-11 flex items-center justify-center text-charcoal hover:bg-mint/40 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links (Min 48px touch target each) */}
              <nav className="flex flex-col space-y-1">
                {websiteContent.navigation.map((item) => {
                  const isActive = activeSection === item.href;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between min-h-[48px] px-3 py-3 text-base font-semibold transition-colors border-b border-charcoal-border/20 ${
                        isActive ? 'text-forest bg-mint/30' : 'text-charcoal hover:text-forest'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-4 h-4 text-sage-dark opacity-60" />
                    </a>
                  );
                })}
              </nav>

              {/* Action Button inside mobile menu */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3.5 bg-forest text-cream text-xs font-bold uppercase tracking-wider hover:bg-forest-light active:scale-[0.99] transition-all shadow-brand"
                >
                  <span>Book a Discovery Call</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

