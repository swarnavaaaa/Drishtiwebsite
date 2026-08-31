import React from 'react';

/**
 * Ultra lightweight, high-performance ambient background layer.
 * Uses GPU hardware-accelerated CSS radial gradients without heavy raster blur recalculations.
 */
export const AmbientBackground = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none transform-gpu"
      aria-hidden="true"
      style={{ transform: 'translateZ(0)' }}
    >
      {/* Base warm editorial canvas */}
      <div className="absolute inset-0 bg-cream" />

      {/* Top subtle sage wash */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full opacity-40 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200, 217, 207, 0.45) 0%, rgba(127, 155, 141, 0.15) 50%, transparent 75%)',
        }}
      />

      {/* Middle right warm mint glow */}
      <div
        className="absolute top-[35%] -right-[15%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(16, 81, 51, 0.12) 0%, rgba(200, 217, 207, 0.2) 45%, transparent 70%)',
        }}
      />

      {/* Bottom subtle sage tint */}
      <div
        className="absolute -bottom-[15%] left-[10%] w-[65vw] h-[65vw] max-w-[750px] max-h-[750px] rounded-full opacity-35 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(127, 155, 141, 0.2) 0%, rgba(200, 217, 207, 0.25) 50%, transparent 75%)',
        }}
      />

      {/* Subtle Bespoke Grain Texture */}
      <div className="absolute inset-0 bg-grain opacity-50 pointer-events-none" />
    </div>
  );
};

export default AmbientBackground;
