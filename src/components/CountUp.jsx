import React, { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * High-performance animated numerical counter.
 * Mutates text node directly on requestAnimationFrame to avoid triggering React component re-renders.
 */
export const CountUp = ({ value, duration = 1.6, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      if (ref.current) ref.current.textContent = value;
      return;
    }

    const stringVal = String(value);
    const prefixMatch = stringVal.match(/^[^0-9.]+/);
    const prefix = prefixMatch ? prefixMatch[0] : "";
    
    const suffixMatch = stringVal.match(/[^0-9.,]+$/);
    const suffix = suffixMatch ? suffixMatch[0] : "";
    
    const numPartMatch = stringVal.match(/[0-9]+(?:,[0-9]+)*(?:\.[0-9]+)?/);
    if (!numPartMatch) {
      if (ref.current) ref.current.textContent = value;
      return;
    }

    const numStr = numPartMatch[0];
    const isCommaFormatted = numStr.includes(",");
    const targetNum = parseFloat(numStr.replace(/,/g, ""));
    const hasDecimal = numStr.includes(".");
    const decimalPlaces = hasDecimal ? numStr.split(".")[1].length : 0;

    if (isNaN(targetNum)) {
      if (ref.current) ref.current.textContent = value;
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

      if (ref.current) {
        ref.current.textContent = `${prefix}${formattedNum}${suffix}`;
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        if (ref.current) ref.current.textContent = value;
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
};

export default CountUp;

