import React from 'react';
import { motion } from 'framer-motion';

/**
 * Ambient background component rendering soft floating gradient orbs
 * and a tactile grain overlay using exact brand colors.
 */
export const AmbientBackground = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none"
      aria-hidden="true"
    >
      {/* Base warm editorial canvas */}
      <div className="absolute inset-0 bg-cream" />

      {/* Floating Orb 1 - Forest / Mint Gradient (Top Left) */}
      <motion.div
        className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full blur-[100px] sm:blur-[140px] opacity-35 mix-blend-multiply"
        style={{
          background: 'radial-gradient(circle, rgba(127, 155, 141, 0.4) 0%, rgba(200, 217, 207, 0.2) 60%, transparent 80%)'
        }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Orb 2 - Deep Forest Accent (Middle Right) */}
      <motion.div
        className="absolute top-[35%] -right-[15%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full blur-[110px] sm:blur-[150px] opacity-25 mix-blend-multiply"
        style={{
          background: 'radial-gradient(circle, rgba(16, 81, 51, 0.25) 0%, rgba(127, 155, 141, 0.15) 50%, transparent 75%)'
        }}
        animate={{
          x: [0, -50, 20, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.92, 1.06, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Orb 3 - Mint Glow (Bottom Left) */}
      <motion.div
        className="absolute -bottom-[10%] left-[20%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full blur-[120px] sm:blur-[160px] opacity-30 mix-blend-multiply"
        style={{
          background: 'radial-gradient(circle, rgba(200, 217, 207, 0.4) 0%, rgba(127, 155, 141, 0.2) 50%, transparent 80%)'
        }}
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.05, 0.96, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle Bespoke Grain Texture */}
      <div className="absolute inset-0 bg-grain opacity-60" />
    </div>
  );
};

export default AmbientBackground;
