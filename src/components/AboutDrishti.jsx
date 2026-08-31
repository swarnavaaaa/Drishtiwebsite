import React from 'react';
import { ArrowUpRight, Linkedin, Award, TrendingUp, Briefcase, Users, Mail } from 'lucide-react';
import { websiteContent } from '../data/websiteContent';

export const AboutDrishti = ({ onOpenBooking }) => {
  const { about, brand } = websiteContent;

  return (
    <section id="about" className="py-16 md:py-24 bg-cream border-b border-charcoal-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-mint/50 border border-sage/40 text-forest text-xs font-semibold uppercase tracking-wider mb-6">
          {about.eyebrow}
        </div>

        {/* 2-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Drishti's Editorial Card / Visual Anchor (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="bg-forest text-cream p-8 sm:p-9 relative overflow-hidden shadow-xl border border-forest-dark">
              {/* Subtle architectural grid lines */}
              <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-sage/30 pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-cream text-forest font-display text-2xl font-bold flex items-center justify-center border-2 border-mint">
                    DB
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-cream font-medium">Drishti Bagla</h3>
                    <p className="text-xs text-mint uppercase tracking-wider font-mono">
                      Founder, netwerked.io
                    </p>
                    <p className="text-xs text-sage-light mt-0.5">
                      Ex-Deloitte & KPMG Risk Consultant
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-forest-dark/60 border border-sage/30 space-y-2">
                  <div className="text-xs font-mono text-mint uppercase tracking-widest">
                    Signature Voice
                  </div>
                  <p className="text-xs sm:text-sm text-cream/90 italic leading-relaxed">
                    “I write about how professionals can sound like themselves online while staying credible in the boardroom.”
                  </p>
                </div>

                {/* Verified Metrics Badge Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-forest-surface border border-sage/20">
                    <div className="font-display text-xl sm:text-2xl text-mint font-semibold">
                      92.7K+
                    </div>
                    <div className="text-[10px] text-sage-light uppercase tracking-wider">
                      Organic Community
                    </div>
                  </div>
                  <div className="p-3 bg-forest-surface border border-sage/20">
                    <div className="font-display text-xl sm:text-2xl text-mint font-semibold">
                      #2 Global
                    </div>
                    <div className="text-[10px] text-sage-light uppercase tracking-wider">
                      Favikon Sports Content
                    </div>
                  </div>
                  <div className="p-3 bg-forest-surface border border-sage/20">
                    <div className="font-display text-xl sm:text-2xl text-mint font-semibold">
                      3M+/mo
                    </div>
                    <div className="text-[10px] text-sage-light uppercase tracking-wider">
                      36 Mos Impressions
                    </div>
                  </div>
                  <div className="p-3 bg-forest-surface border border-sage/20">
                    <div className="font-display text-xl sm:text-2xl text-mint font-semibold">
                      200+
                    </div>
                    <div className="text-[10px] text-sage-light uppercase tracking-wider">
                      Brand Partnerships
                    </div>
                  </div>
                </div>

                {/* Direct LinkedIn Button */}
                <div className="pt-2">
                  <a
                    href={brand.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-mint text-forest hover:bg-cream transition-colors text-xs font-bold uppercase tracking-wider"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>View Drishti's LinkedIn Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Full Narrative Bio (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal tracking-tight leading-[1.15]">
              {about.greeting}
            </h2>

            <div className="space-y-5 text-sm sm:text-base text-charcoal/85 leading-relaxed font-normal">
              {about.paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={idx === 0 ? 'text-base sm:text-lg text-charcoal font-medium leading-relaxed' : ''}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Credibility Summary Ribbon */}
            <div className="p-5 bg-white border border-charcoal-border mt-8 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-forest font-mono">
                Verified Career Track
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-charcoal">
                <span className="px-2.5 py-1 bg-mint/50 border border-sage/40">92,700+ Organic Followers</span>
                <span className="px-2.5 py-1 bg-mint/50 border border-sage/40">200+ Brand Partnerships</span>
                <span className="px-2.5 py-1 bg-mint/50 border border-sage/40">#2 Sports Content on Favikon</span>
                <span className="px-2.5 py-1 bg-mint/50 border border-sage/40">Deloitte & KPMG Alum</span>
              </div>
            </div>

            {/* Conversation CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-forest text-cream text-xs font-bold uppercase tracking-wider hover:bg-forest-light transition-colors"
              >
                <span>Book a Discovery Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={`mailto:${brand.email}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-cream-subtle text-charcoal text-xs font-semibold tracking-wide border border-charcoal-border transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-sage-dark" />
                <span>drishti@netwerked.io</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
