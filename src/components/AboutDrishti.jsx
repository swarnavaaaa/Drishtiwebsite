import React from 'react';
import { ArrowUpRight, Linkedin, Mail } from 'lucide-react';
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

        {/* Editorial Narrative Layout */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Main Greeting & Bio */}
          <div className="space-y-6">
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
          </div>

          {/* Credibility Summary Ribbon */}
          <div className="p-6 bg-white border border-charcoal-border shadow-xs space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-forest font-mono">
              Verified Track Record
            </div>
            <div className="flex flex-wrap gap-2.5 text-xs font-medium text-charcoal">
              <span className="px-3 py-1.5 bg-mint/50 border border-sage/40">92,700+ Organic Followers</span>
              <span className="px-3 py-1.5 bg-mint/50 border border-sage/40">200+ Brand Partnerships</span>
              <span className="px-3 py-1.5 bg-mint/50 border border-sage/40">3M+ Monthly Impressions</span>
              <span className="px-3 py-1.5 bg-mint/50 border border-sage/40">#2 Sports Content on Favikon</span>
              <span className="px-3 py-1.5 bg-mint/50 border border-sage/40">Deloitte & KPMG Alum</span>
            </div>
          </div>

          {/* Action Channels (All 3 Buttons) */}
          <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5">
            {/* Primary Action: Book a Discovery Call */}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-forest text-cream text-xs font-bold uppercase tracking-wider hover:bg-forest-light transition-all shadow-brand border border-forest-dark"
            >
              <span>Book a Discovery Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* LinkedIn Profile Button */}
            <a
              href={brand.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-mint text-forest hover:bg-forest hover:text-cream border border-sage/50 text-xs font-bold uppercase tracking-wider transition-all"
            >
              <Linkedin className="w-4 h-4" />
              <span>Drishti's LinkedIn Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Email Contact Button */}
            <a
              href={`mailto:${brand.email}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-cream-subtle text-charcoal text-xs font-semibold tracking-wide border border-charcoal-border hover:border-forest/40 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-sage-dark" />
              <span>{brand.email}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
