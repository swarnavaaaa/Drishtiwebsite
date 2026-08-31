import React from 'react';

/**
 * Dynamic ambient background layer with floating organic gradient blobs
 * and a tactile grain overlay using exact brand colors.
 */
export const AmbientBackground = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none transform-gpu"
      aria-hidden="true"
    >
      {/* Base warm cream canvas */}
      <div className="absolute inset-0 bg-[#FAF8F3]" />

      {/* Floating Orb 1: Forest & Sage (Top Left) */}
      <div
        className="animate-orb-1 absolute -top-[10%] -left-[10%] w-[65vw] h-[65vw] max-w-[750px] max-h-[750px] rounded-full blur-[80px] sm:blur-[110px] opacity-45 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(127, 155, 141, 0.5) 0%, rgba(200, 217, 207, 0.3) 50%, transparent 75%)',
        }}
      />

      {/* Floating Orb 2: Deep Forest & Mint (Middle Right) */}
      <div
        className="animate-orb-2 absolute top-[30%] -right-[15%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full blur-[90px] sm:blur-[120px] opacity-35 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(16, 81, 51, 0.22) 0%, rgba(200, 217, 207, 0.35) 50%, transparent 75%)',
        }}
      />

      {/* Floating Orb 3: Mint & Warm Sage (Bottom Left) */}
      <div
        className="animate-orb-3 absolute -bottom-[10%] left-[15%] w-[65vw] h-[65vw] max-w-[750px] max-h-[750px] rounded-full blur-[85px] sm:blur-[115px] opacity-40 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200, 217, 207, 0.55) 0%, rgba(127, 155, 141, 0.25) 50%, transparent 80%)',
        }}
      />

      {/* Subtle Bespoke Grain Texture Overlay */}
      <div className="absolute inset-0 bg-grain opacity-60 pointer-events-none" />
    </div>
  );
};

export default AmbientBackground;
