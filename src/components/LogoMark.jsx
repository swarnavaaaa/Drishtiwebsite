import React from 'react';

/**
 * Netwerked Brand Logo Component
 * Uses official brand kit assets with crisp retina rendering and theme support.
 *
 * @param {string} variant - 'full' (logo + wordmark), 'symbol' (icon only), or 'wordmark'
 * @param {string} theme - 'light' (for light backgrounds) or 'dark' (for dark/forest backgrounds)
 * @param {string} className - Additional CSS classes for sizing and layout
 * @param {boolean} withText - Whether to show the wordmark (when variant is not 'wordmark')
 */
export const LogoMark = ({
  variant = "full",
  theme = "light",
  className = "h-9 w-auto",
  withText = true,
  textSize = "text-xl",
  textClassName = ""
}) => {
  const isDark = theme === "dark";

  // If symbol only is requested
  if (variant === "symbol" || withText === false) {
    return (
      <div className={`inline-flex items-center justify-center flex-shrink-0 ${className}`}>
        <img
          src={isDark ? "/brand/06_symbol_only_green_bg.png" : "/brand/04_symbol_only_transparent.png"}
          alt="netwerked symbol"
          className="h-full w-full object-contain max-h-full"
          loading="eager"
        />
      </div>
    );
  }

  // If wordmark only is requested
  if (variant === "wordmark") {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <img
          src={isDark ? "/brand/15_monochrome_white_on_dark.png" : "/brand/07_wordmark_only_transparent.png"}
          alt="netwerked"
          className="h-full w-auto object-contain max-h-full"
          loading="eager"
        />
      </div>
    );
  }

  // Full Primary Logo (Symbol + Typography)
  return (
    <div className="flex items-center gap-3 select-none">
      {/* Official Symbol */}
      <img
        src={isDark ? "/brand/11_square_DP_symbol_only_white.png" : "/brand/04_symbol_only_transparent.png"}
        alt="netwerked logo mark"
        className="w-8 h-8 sm:w-9 sm:h-9 object-contain flex-shrink-0"
        loading="eager"
      />
      
      {/* Wordmark typography */}
      <span className={`font-sans font-extrabold tracking-tight ${textSize} ${
        textClassName ? textClassName : (isDark ? "text-cream" : "text-charcoal")
      }`}>
        netwerked<span className={isDark ? "text-mint" : "text-forest"}>.</span>
      </span>
    </div>
  );
};

export default LogoMark;
