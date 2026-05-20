import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';

/**
 * SmoothScroll Component
 * Integrates Lenis Smooth Scroll for high-end inertia-based scrolling.
 * It normalizes scroll behavior across browsers and enhances the "premium" feel.
 */
const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,      // How long the scroll animation takes
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for premium feel
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false, // Standard touch behavior is usually fine for mobile
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Use requestAnimationFrame to synchronize Lenis with the browser's refresh rate
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Intercept anchor links for smooth scrolling
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        const id = target.getAttribute('href');
        if (id && id !== '#') {
          e.preventDefault();
          lenis.scrollTo(id, { offset: -80 }); // -80px to account for the sticky header
        }
      }
    };

    document.addEventListener('click', handleClick);

    // Cleanup on unmount
    return () => {
      document.removeEventListener('click', handleClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
