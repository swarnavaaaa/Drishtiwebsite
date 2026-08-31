import React from 'react';
import { ArrowRight, ArrowDownRight } from 'lucide-react';
import { websiteContent } from '../data/websiteContent';

export const Hero = ({ onOpenBooking }) => {
  const { hero } = websiteContent;

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 border-b border-charcoal-border/80 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Typography & Positioning (7 Cols) */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Tag / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-mint/60 border border-sage/50 text-forest text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />
              <span>{hero.eyebrow}</span>
            </div>

            {/* Main Display Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-charcoal font-normal tracking-tight leading-[1.12]">
              Your best work <br className="hidden sm:inline" />
              <span className="italic font-light text-forest">deserves</span> an audience.
            </h1>

            {/* Sharp Positioning Copy */}
            <p className="text-base sm:text-lg text-charcoal/85 leading-relaxed max-w-2xl font-normal">
              {hero.description}
            </p>

            {/* Actions Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-forest text-cream text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-forest-light transition-all shadow-brand hover:shadow-brand-hover active:translate-y-0.5 border border-forest-dark"
              >
                <span>{hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#our-work"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/70 hover:bg-white text-charcoal text-xs sm:text-sm font-semibold tracking-wide border border-charcoal-border hover:border-forest/40 transition-colors"
              >
                <span>{hero.secondaryCta}</span>
                <ArrowDownRight className="w-4 h-4 text-sage-dark" />
              </a>
            </div>

            {/* Stats Ticker */}
            <div className="pt-6 border-t border-charcoal-border/60 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg">
              {hero.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-display text-2xl sm:text-3xl text-forest font-semibold tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-charcoal-muted uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Editorial Portrait Placeholder (5 Cols) */}
          <div className="lg:col-span-5 relative">
            
            {/* Decorative architectural background accent block */}
            <div className="absolute -top-3 -right-3 w-full h-full bg-mint/50 border border-sage/30 pointer-events-none" />

            {/* Editorial Portrait Frame */}
            <div className="relative bg-white border-2 border-forest/20 shadow-2xl overflow-hidden group">
              
              {/* Portrait Container */}
              <div className="aspect-[4/5] w-full bg-gradient-to-br from-cream-subtle via-mint-light/40 to-sage-tint relative flex flex-col justify-between p-6 sm:p-8 overflow-hidden">
                
                {/* Background ambient watermarks */}
                <div className="absolute -right-8 -top-8 w-40 h-40 opacity-15 pointer-events-none">
                  <img
                    src="/brand/04_symbol_only_transparent.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Top Header Tag */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/90 backdrop-blur-xs border border-charcoal-border/70 text-[11px] font-mono font-bold uppercase tracking-wider text-forest shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-forest" />
                    <span>Founder & Ghostwriter</span>
                  </div>

                  <span className="font-mono text-[11px] text-charcoal-light uppercase tracking-widest bg-white/80 px-2 py-0.5 border border-charcoal-border/40">
                    Est. 2023
                  </span>
                </div>

                {/* Center: Editorial Portrait Placeholder Art / Silhouette */}
                <div className="my-auto py-8 text-center relative z-10 flex flex-col items-center justify-center space-y-4">
                  {/* Portrait Placeholder Avatar Frame */}
                  <div className="relative">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-none bg-forest text-cream font-display text-4xl sm:text-5xl font-medium flex items-center justify-center border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300">
                      DB
                    </div>
                    {/* Verified badge */}
                    <div className="absolute -bottom-2 -right-2 bg-mint border-2 border-forest text-forest px-2 py-0.5 text-[10px] font-mono font-bold uppercase">
                      Verified
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-display text-2xl text-charcoal font-semibold tracking-tight">
                      Drishti Bagla
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-wider text-forest font-bold">
                      Founder, netwerked.io
                    </p>
                    <p className="text-xs text-charcoal-muted max-w-[220px] mx-auto">
                      Ex-Deloitte & KPMG Risk Consultant
                    </p>
                  </div>
                </div>

                {/* Bottom Floating Stats Strip */}
                <div className="relative z-10 bg-white/95 backdrop-blur-sm border border-charcoal-border/80 p-3.5 shadow-sm space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-charcoal-muted uppercase tracking-wider">Reach</span>
                    <span className="font-bold text-forest">3M+ Impressions / mo</span>
                  </div>
                  <div className="w-full bg-cream-dark h-1">
                    <div className="bg-forest h-1 w-[92%]" />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-charcoal-light">
                    <span>92,700+ Community</span>
                    <span>#2 Favikon Sports</span>
                  </div>
                </div>

              </div>

              {/* Photo prompt note */}
              <div className="p-2.5 bg-forest text-cream text-[11px] font-mono text-center flex items-center justify-center gap-2">
                <span>✦</span>
                <span>Portrait Image Placeholder</span>
                <span>✦</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
