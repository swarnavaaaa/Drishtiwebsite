import React from 'react';
import { websiteContent } from '../data/websiteContent';

export const HowItWorks = () => {
  const { process } = websiteContent;

  return (
    <section className="py-16 md:py-24 bg-cream border-b border-charcoal-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-mint/50 border border-sage/40 text-forest text-xs font-semibold uppercase tracking-wider">
            {process.heading}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal tracking-tight">
            A simple, <span className="italic font-light text-forest">proven process.</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted max-w-2xl">
            Designed for busy founders who want executive output with minimal operational overhead.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.steps.map((step, index) => (
            <div
              key={index}
              className="p-7 bg-white border border-charcoal-border hover:border-forest/50 transition-all flex flex-col justify-between shadow-card relative group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-charcoal-border/40 mb-4">
                  <span className="font-mono text-lg font-bold text-forest">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono text-charcoal-light uppercase tracking-wider">
                    Phase 0{index + 1}
                  </span>
                </div>

                <h3 className="font-sans font-bold text-lg text-charcoal tracking-tight mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-charcoal-border/30">
                <div className="w-full h-1 bg-mint/50 overflow-hidden">
                  <div
                    className="h-full bg-forest transition-all duration-300 group-hover:w-full"
                    style={{ width: `${(index + 1) * 25}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
