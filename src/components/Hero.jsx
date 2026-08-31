import React from 'react';
import { ArrowRight, ArrowDownRight, TrendingUp, Sparkles, Heart, MessageCircle, Repeat2, Send } from 'lucide-react';
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

          {/* Right Column: Ghostwriting Live Post Card (5 Cols) */}
          <div className="lg:col-span-5 relative">
            
            {/* Decorative background accent block */}
            <div className="absolute -top-3 -right-3 w-full h-full bg-mint/50 border border-sage/30 pointer-events-none" />

            {/* Authentic LinkedIn Post Card (Custom Styled, Not Generic) */}
            <div className="relative bg-white border-2 border-forest/15 p-6 sm:p-7 shadow-xl space-y-4">
              
              {/* Header: Author & Credentials */}
              <div className="flex items-start justify-between gap-3 pb-3 border-b border-charcoal-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-forest text-cream font-display font-medium text-lg flex items-center justify-center flex-shrink-0 border border-forest-dark">
                    DB
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-sans font-bold text-sm text-charcoal">
                        {hero.samplePost.author}
                      </h4>
                      <span className="inline-block px-1.5 py-0.5 bg-mint/60 text-[10px] font-semibold text-forest uppercase">
                        Ghostwriter
                      </span>
                    </div>
                    <p className="text-xs text-charcoal-muted line-clamp-1">
                      {hero.samplePost.role}
                    </p>
                    <p className="text-[11px] text-charcoal-light font-mono mt-0.5">
                      36 months · 3M+ monthly impressions
                    </p>
                  </div>
                </div>
              </div>

              {/* Post Content Excerpt */}
              <div className="text-xs sm:text-sm text-charcoal leading-relaxed whitespace-pre-line font-normal py-1">
                {hero.samplePost.content}
              </div>

              {/* Engagement Metrics Proof Bar */}
              <div className="pt-3 border-t border-charcoal-border/60 flex items-center justify-between text-xs text-charcoal-muted">
                <div className="flex items-center gap-1.5 text-forest font-semibold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{hero.samplePost.metrics.impressions} Views</span>
                </div>
                <div className="flex items-center gap-4 text-[11px] text-charcoal-muted">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 text-sage-dark fill-sage-dark/20" />
                    {hero.samplePost.metrics.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3 text-sage-dark" />
                    {hero.samplePost.metrics.comments}
                  </span>
                  <span className="flex items-center gap-1">
                    <Repeat2 className="w-3 h-3 text-sage-dark" />
                    {hero.samplePost.metrics.reposts}
                  </span>
                </div>
              </div>

              {/* Quality Note Badge */}
              <div className="p-2.5 bg-mint-light/70 border border-sage/40 flex items-center gap-2 text-[11px] text-forest">
                <Sparkles className="w-3.5 h-3.5 flex-shrink-0 text-sage-dark" />
                <span className="italic">Written for resonance first. Zero template filler.</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
