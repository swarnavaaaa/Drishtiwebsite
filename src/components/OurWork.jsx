import React, { useState } from 'react';
import { Shield, Sparkles, CheckCircle2, ArrowRight, TrendingUp, Layers, BookOpen } from 'lucide-react';
import { websiteContent } from '../data/websiteContent';

export const OurWork = ({ onOpenBooking }) => {
  const { ourWork } = websiteContent;
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(1); // Default to Financial Modeling

  // Curated detailed post previews & before/after ghostwriting anatomy for the interactive centerpiece
  const sampleDemonstrations = {
    "financial-modeling": {
      clientType: "Founding Partner, Financial Advisory ($350M+ Raises)",
      objective: "Reposition complex financial engineering models into executive-level capital strategy dispatches on LinkedIn.",
      beforeApproach: "“Here is our latest 20-tab DCF template for renewable energy project financing...” (Dry, low engagement, overlooked by CFOs)",
      afterGhostwritten: {
        hook: "Most founders build financial models to impress investors. The best CFOs build them to stress-test their own survival.",
        body: `Last month, we analyzed a $42M infrastructure term sheet. On paper, the debt service coverage ratio looked clean at 1.4x.

Under a 150 bps rate hike stress-case? Cash flow turned negative by Month 18.

Here are the 3 structural covenant traps we see founders sign off on every quarter (and how to negotiate them out):

1. The Working Capital Cap Trap
2. Subordinated Debt Escalation Clauses
3. The Phantom Refinancing Cliff

Your financial model isn't a pitch deck accessory. It's your defensive moat.`,
        takeaway: "High-conviction authority that directly stimulated inbound DM inquiries from CFOs and private equity partners."
      }
    },
    "grc-advisory": {
      clientType: "Managing Director, Dubai GRC Advisory (ADGM / DIFC / VARA)",
      objective: "Establish unquestioned regulatory authority in the Middle East's rapidly evolving crypto & fintech jurisdictions.",
      beforeApproach: "“Pursuant to Circular No. 4/2024 published by the Regulatory Authority...” (Dense, ignored by busy founders)",
      afterGhostwritten: {
        hook: "If your Web3 company is expanding to Dubai this year, there is one VARA licensing nuance nobody warns you about in the brochures.",
        body: `Most legal teams treat the Rulebook on Market Conduct like a static checklist.

In practice? The custody segregation audit is where 70% of Series A crypto startups stall for 4+ months.

Here is the exact framework we use with founders to clear DIFC & VARA regulatory audits without delaying your launch window:

• Step 1: Pre-audit cryptographic key custody segregation
• Step 2: Third-party smart contract penetration attestations
• Step 3: Direct compliance mapping against UAE federal AML mandates

Speed in GRC isn't about cutting corners. It's about speaking the regulator's language on Day 1.`,
        takeaway: "Positioned the firm as the premier cross-border compliance team for foreign capital entering the UAE."
      }
    },
    "ai-venture": {
      clientType: "Founder & CEO, Human-Centric AI Venture",
      objective: "Cut through algorithmic noise to position the company's philosophy of AI as an amplifier of human wisdom.",
      beforeApproach: "“Introducing our new multimodal generative transformer pipeline with 99.2% accuracy...” (Generic tech noise)",
      afterGhostwritten: {
        hook: "We spent 14 months building an AI tool that does something counter-intuitive: it intentionally slows the user down.",
        body: `In the race for instant answers, software companies forgot how humans actually solve hard problems.

Calculations need speed. Strategy requires contemplation.

When we designed our architecture, our core constraint wasn't benchmark token generation. It was cognitive resonance:
→ Synthesizing disparate context without hallucinating certainty
→ Preserving the executive's nuanced voice
→ Surfacing blind spots rather than flattering preconceptions

The future of AI isn't replacing human judgment. It's defending it.`,
        takeaway: "Generated thousands of organic shares among tier-1 tech founders and venture investors."
      }
    }
  };

  const currentStudy = ourWork.caseStudies[selectedCaseIndex];
  const activeDemoKey = currentStudy.id in sampleDemonstrations ? currentStudy.id : "financial-modeling";
  const activeDemo = sampleDemonstrations[activeDemoKey];

  return (
    <section id="our-work" className="py-16 md:py-24 bg-cream border-b border-charcoal-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-mint/50 border border-sage/40 text-forest text-xs font-semibold uppercase tracking-wider">
            {ourWork.heading}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal tracking-tight">
            Different industries. Different voices.{' '}
            <span className="italic font-light text-forest">One hand.</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted max-w-2xl">
            {ourWork.confidentialityNotice}
          </p>
        </div>

        {/* Interactive Case Study Navigator (Horizontal Pills) */}
        <div className="mb-10 flex items-center gap-2 overflow-x-auto pb-3 scrollbar-thin">
          {ourWork.caseStudies.map((study, idx) => (
            <button
              key={study.id}
              onClick={() => setSelectedCaseIndex(idx)}
              className={`px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition-all border ${
                selectedCaseIndex === idx
                  ? 'bg-forest text-cream border-forest shadow-xs'
                  : 'bg-white text-charcoal hover:bg-cream-subtle border-charcoal-border'
              }`}
            >
              <span className="font-mono opacity-60 mr-1.5">0{idx + 1}.</span>
              {study.category}
            </button>
          ))}
        </div>

        {/* Featured Case Study Centerpiece Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Box: Engagement Overview & Strategic Parameters (5 Cols) */}
          <div className="lg:col-span-5 bg-white border-2 border-charcoal-border p-7 sm:p-8 flex flex-col justify-between shadow-card">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-charcoal-border/50">
                <span className="px-2.5 py-1 bg-mint/60 border border-sage/40 text-forest font-mono text-xs font-bold uppercase">
                  {currentStudy.tag}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-charcoal-muted">
                  <Shield className="w-3 h-3 text-sage-dark" />
                  Confidential Engagement
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl text-charcoal font-medium tracking-tight mb-3">
                  {currentStudy.title}
                </h3>
                <p className="text-sm text-charcoal/85 leading-relaxed font-normal">
                  {currentStudy.description}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 bg-cream-subtle border border-charcoal-border/60">
                  <div className="text-[11px] font-mono font-bold uppercase text-forest tracking-wider mb-1">
                    The Craft Behind It
                  </div>
                  <p className="text-xs text-charcoal/85 leading-relaxed">
                    {currentStudy.highlight}
                  </p>
                </div>

                <div className="p-3.5 bg-mint-light/40 border border-sage/40">
                  <div className="text-[11px] font-mono font-bold uppercase text-forest tracking-wider mb-1">
                    Key Outcome
                  </div>
                  <p className="text-xs text-charcoal/85 leading-relaxed font-medium">
                    {currentStudy.keyOutcome}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-charcoal-border/40 flex items-center justify-between">
              <span className="text-xs font-mono text-charcoal-muted">Format: {currentStudy.format}</span>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-forest hover:text-forest-dark uppercase tracking-wider"
              >
                <span>Discuss Your Industry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Box: Live Ghostwritten Post Anatomy & Rewrite Breakdown (7 Cols) */}
          <div className="lg:col-span-7 bg-white border-2 border-forest/20 p-7 sm:p-8 flex flex-col justify-between shadow-xl relative">
            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-charcoal-border/50">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-forest" />
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal">
                    Ghostwriting Anatomy & Tone Execution
                  </span>
                </div>
                <span className="px-2 py-0.5 bg-mint text-[11px] font-mono text-forest font-semibold">
                  Zero Template
                </span>
              </div>

              {/* Before vs After Contrast Banner */}
              <div className="space-y-3">
                <div className="p-3 bg-cream-subtle border-l-4 border-charcoal-light/40 text-xs">
                  <span className="font-bold text-charcoal-muted uppercase tracking-wider block mb-1">
                    The Common Trap (What most generic agencies write):
                  </span>
                  <p className="italic text-charcoal-muted font-normal">
                    {activeDemo.beforeApproach}
                  </p>
                </div>

                {/* The Netwerked Rewrite */}
                <div className="p-5 bg-cream border border-forest/30 shadow-xs space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-forest font-semibold uppercase">
                    <span>The Netwerked Execution (Voice-Calibrated)</span>
                    <span className="text-sage-dark font-sans">High Resonance</span>
                  </div>

                  <p className="font-sans font-bold text-sm sm:text-base text-charcoal leading-snug">
                    {activeDemo.afterGhostwritten.hook}
                  </p>

                  <p className="text-xs sm:text-sm text-charcoal/90 whitespace-pre-line leading-relaxed font-normal">
                    {activeDemo.afterGhostwritten.body}
                  </p>
                </div>
              </div>

              {/* Impact Note */}
              <div className="flex items-start gap-2.5 text-xs text-charcoal/80 bg-mint-light/50 p-3 border border-sage/30">
                <CheckCircle2 className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-forest">Result: </strong>
                  {activeDemo.afterGhostwritten.takeaway}
                </span>
              </div>

            </div>

            <div className="pt-4 mt-4 border-t border-charcoal-border/30 flex items-center justify-between text-[11px] text-charcoal-muted">
              <span>Client identity protected by strict confidentiality protocol.</span>
              <span className="font-mono text-forest font-semibold">netwerked.io</span>
            </div>

          </div>

        </div>

        {/* Confidentiality Commitment Banner */}
        <div className="p-6 bg-cream-subtle border border-charcoal-border text-center max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm text-charcoal font-medium">
            “Every engagement stays confidential. That is the standard, for every client, every time.”
          </p>
        </div>

      </div>
    </section>
  );
};
