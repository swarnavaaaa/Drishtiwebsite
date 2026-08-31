import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * Animated numerical counter that triggers when scrolled into view
 * Supports strings like "92,700+", "3M+", "#2", "$350M+", "200+"
 */
export const CountUp = ({ value, duration = 1.8, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    // Parse the value string
    const stringVal = String(value);
    
    // Extract prefix (e.g., "$", "#")
    const prefixMatch = stringVal.match(/^[^0-9.]+/);
    const prefix = prefixMatch ? prefixMatch[0] : "";
    
    // Extract suffix (e.g., "+", "M+", "/mo", "K+")
    const suffixMatch = stringVal.match(/[^0-9.,]+$/);
    const suffix = suffixMatch ? suffixMatch[0] : "";
    
    // Extract clean number string
    const numPartMatch = stringVal.match(/[0-9]+(?:,[0-9]+)*(?:\.[0-9]+)?/);
    if (!numPartMatch) {
      setDisplayValue(value);
      return;
    }

    const numStr = numPartMatch[0];
    const isCommaFormatted = numStr.includes(",");
    const targetNum = parseFloat(numStr.replace(/,/g, ""));
    const hasDecimal = numStr.includes(".");
    const decimalPlaces = hasDecimal ? numStr.split(".")[1].length : 0;

    if (isNaN(targetNum)) {
      setDisplayValue(value);
      return;
    }

    let startTime = null;
    let animationFrameId;

    const easeOutExpo = (x) => {
      return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    };

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easedProgress = easeOutExpo(progress);
      const currentNum = targetNum * easedProgress;

      let formattedNum = hasDecimal
        ? currentNum.toFixed(decimalPlaces)
        : Math.round(currentNum).toString();

      if (isCommaFormatted) {
        const parts = formattedNum.split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        formattedNum = parts.join(".");
      }

      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
};

export default CountUp;
