import React from 'react';

/**
 * Visibly vibrant, dynamic ambient mesh background.
 * Features prominent floating gradient orbs in brand tones (Forest Green, Sage, Mint, Warm Emerald)
 * that drift smoothly behind translucent cards.
 */
export const AmbientBackground = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none"
      aria-hidden="true"
    >
      {/* Base rich editorial gradient canvas */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F3] via-[#EFF5F1] to-[#FAF8F3]" />

      {/* Floating Orb 1: Rich Forest & Sage (Top Left - Hero & Value Prop) */}
      <div
        className="animate-orb-1 absolute -top-[5%] -left-[10%] w-[70vw] h-[70vw] max-w-[850px] max-h-[850px] rounded-full blur-[60px] sm:blur-[80px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(16, 81, 51, 0.18) 0%, rgba(127, 155, 141, 0.25) 40%, rgba(200, 217, 207, 0.3) 65%, transparent 80%)',
        }}
      />

      {/* Floating Orb 2: Deep Emerald & Mint Glow (Center Right - Services & Work) */}
      <div
        className="animate-orb-2 absolute top-[28%] -right-[15%] w-[75vw] h-[75vw] max-w-[900px] max-h-[900px] rounded-full blur-[60px] sm:blur-[90px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(16, 81, 51, 0.16) 0%, rgba(127, 155, 141, 0.22) 35%, rgba(200, 217, 207, 0.35) 60%, transparent 75%)',
        }}
      />

      {/* Floating Orb 3: Mint Aurora (Middle Left - Case Studies & Process) */}
      <div
        className="animate-orb-3 absolute top-[55%] -left-[15%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full blur-[60px] sm:blur-[85px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(127, 155, 141, 0.22) 0%, rgba(200, 217, 207, 0.4) 45%, rgba(16, 81, 51, 0.1) 70%, transparent 85%)',
        }}
      />

      {/* Floating Orb 4: Warm Forest Glow (Bottom Right - Pricing & FAQ) */}
      <div
        className="animate-orb-1 absolute -bottom-[10%] right-[5%] w-[65vw] h-[65vw] max-w-[750px] max-h-[750px] rounded-full blur-[60px] sm:blur-[80px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(16, 81, 51, 0.15) 0%, rgba(127, 155, 141, 0.25) 40%, rgba(200, 217, 207, 0.3) 65%, transparent 80%)',
        }}
      />

      {/* Tactile Noise/Grain Overlay */}
      <div className="absolute inset-0 bg-grain opacity-70 pointer-events-none" />
    </div>
  );
};

export default AmbientBackground;
