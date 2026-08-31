import React from 'react';

/**
 * Rich, visibly vibrant, dynamic ambient mesh background.
 * Uses prominent floating gradient orbs in brand tones (Forest Green, Sage, Mint, Warm Emerald)
 * layered at z-0 with translucent card glass above it.
 */
export const AmbientBackground = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {/* Base warm rich editorial canvas */}
      <div className="absolute inset-0 bg-[#FAF8F3]" />

      {/* Floating Orb 1: Rich Forest & Sage (Top Left - Hero & Value Prop) */}
      <div
        className="animate-orb-1 absolute -top-[10%] -left-[10%] w-[75vw] h-[75vw] max-w-[900px] max-h-[900px] rounded-full blur-[70px] sm:blur-[90px] opacity-70 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(16, 81, 51, 0.28) 0%, rgba(127, 155, 141, 0.35) 40%, rgba(200, 217, 207, 0.45) 65%, transparent 80%)',
        }}
      />

      {/* Floating Orb 2: Deep Emerald & Mint Glow (Center Right - Services & Work) */}
      <div
        className="animate-orb-2 absolute top-[25%] -right-[15%] w-[80vw] h-[80vw] max-w-[950px] max-h-[950px] rounded-full blur-[70px] sm:blur-[100px] opacity-65 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(16, 81, 51, 0.25) 0%, rgba(127, 155, 141, 0.32) 35%, rgba(200, 217, 207, 0.5) 60%, transparent 75%)',
        }}
      />

      {/* Floating Orb 3: Mint Aurora (Middle Left - Case Studies & Process) */}
      <div
        className="animate-orb-3 absolute top-[50%] -left-[15%] w-[75vw] h-[75vw] max-w-[850px] max-h-[850px] rounded-full blur-[70px] sm:blur-[90px] opacity-70 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(127, 155, 141, 0.35) 0%, rgba(200, 217, 207, 0.6) 45%, rgba(16, 81, 51, 0.18) 70%, transparent 85%)',
        }}
      />

      {/* Floating Orb 4: Warm Forest Glow (Bottom Right - Pricing & FAQ) */}
      <div
        className="animate-orb-4 absolute -bottom-[10%] right-[0%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full blur-[65px] sm:blur-[85px] opacity-65 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(16, 81, 51, 0.25) 0%, rgba(127, 155, 141, 0.35) 40%, rgba(200, 217, 207, 0.5) 65%, transparent 80%)',
        }}
      />

      {/* Tactile Noise/Grain Overlay */}
      <div className="absolute inset-0 bg-grain opacity-80 pointer-events-none" />
    </div>
  );
};

export default AmbientBackground;
