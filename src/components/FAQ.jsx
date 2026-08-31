import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { websiteContent } from '../data/websiteContent';

export const FAQ = ({ onOpenBooking }) => {
  const { faq } = websiteContent;
  const [openIndex, setOpenIndex] = useState(0); // First FAQ opened by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-transparent border-b border-charcoal-border/80 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-2xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-mint/50 border border-sage/40 text-forest text-xs font-semibold uppercase tracking-wider">
            {faq.heading}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal tracking-tight">
            Clear answers to common questions.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted">
            Everything you need to know about partnering with netwerked for executive ghostwriting.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border transition-colors duration-200 ${
                  isOpen
                    ? 'bg-white border-forest/60 shadow-brand'
                    : 'bg-white/85 backdrop-blur-xs border-charcoal-border hover:border-forest/40 shadow-card'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-7 min-h-[56px] text-left flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`font-sans font-bold text-base sm:text-lg tracking-tight transition-colors duration-200 ${
                    isOpen ? 'text-forest' : 'text-charcoal'
                  }`}>
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                      isOpen ? 'bg-forest text-cream rotate-180' : 'bg-mint/50 text-forest'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-7 pb-6 text-sm text-charcoal/85 leading-relaxed border-t border-charcoal-border/40 pt-4 font-normal">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Question Help */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-charcoal-muted">
            Have a specific scenario not covered above?{' '}
            <button
              onClick={onOpenBooking}
              className="text-forest font-bold underline underline-offset-4 hover:text-forest-dark cursor-pointer"
            >
              Ask Drishti directly on a discovery call
            </button>
          </p>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
