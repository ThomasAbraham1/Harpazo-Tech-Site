import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedWorkflowLine Component: Strict Dotted Taxonomy Flow
 * 
 * TEACHING POINTS:
 * 1. Perfect Dots: Use strokeDasharray="1, X" and strokeLinecap="round".
 * 2. High Contrast: Removed SVG filters to ensure dots are sharp and clear.
 * 3. Kinetic Flow: Faster dashoffset animation for a "pulsing" digital feel.
 */

/**
* Arguments for this function
*
* 1. id: A unique identifier for the line.
* 2. drawing: The SVG path data for the line.
* 3. customDuration: The duration of the animation.
* 4. customSize: The size of the SVG canvas.
* 
* Example:
* id="line-1" drawing="M 10 50 H 140" customDuration={1.5} customSize={{width:140, height:100}}
*/



const AnimatedWorkflowCurve = ({
  id = "line-1",
  drawing = "M 50 150 Q 50 50 450 150",
  strokeWidth = 2,
  dashArray = "5 5",
  customDuration = 0.5,
  delay = 0, // NEW: Base delay for staggering from parent
  circlesCoords = { desktop: { x1: 0, y1: 50, x2: 140, y2: 50 }, mobile: { x1: 0, y1: 50, x2: 140, y2: 50 } },
  circleRadius = 3
}) => {
  const maskId = `mask-${id}`;
  
  // Calculate internal timing relative to the base 'delay'
  const firstDotDelay = delay;
  const lineDelay = delay + (customDuration / 6);
  const secondDotDelay = delay + customDuration + (customDuration / 10);
  
  // 1. Precise Screen Type Tracking
  const [screenType, setScreenType] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setScreenType('mobile');
      else if (width < 1024) setScreenType('tablet');
      else setScreenType('desktop');
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 2. Dynamic Resolution with Fallbacks
  const getResponsiveValue = (prop) => {
    if (typeof prop !== 'object' || (prop.desktop === undefined && prop.mobile === undefined)) return prop;
    // Return specific breakpoint if exists, fallback to desktop
    return prop[screenType] || prop['desktop'];
  };

  const currentPath = getResponsiveValue(drawing);
  const currentCoords = getResponsiveValue(circlesCoords);
  const currentStrokeWidth = getResponsiveValue(strokeWidth);

  return (
    <div className="relative w-[120px] min-h-[60px] overflow-visible flex items-center justify-center">
      <svg
        width="120"
        height="130"
        viewBox="0 0 120 130"
        preserveAspectRatio="xMidYMid meet"
        className="pointer-events-none overflow-visible"
      >
        <defs>
          <mask id={maskId} maskUnits="userSpaceOnUse">
            <motion.path
              d={currentPath}
              fill="transparent"
              stroke="white"
              strokeWidth={currentStrokeWidth * 2}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: customDuration, ease: "easeInOut", delay: lineDelay }}
            />
          </mask>
        </defs>

        {/* 1. Start Dot */}
        <motion.circle
          cx={currentCoords.x1}
          cy={currentCoords.y1}
          r={circleRadius}
          fill="#6366f1"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: firstDotDelay }}
          style={{ transformOrigin: `${currentCoords.x1}px ${currentCoords.y1}px` }}
        />

        {/* 2. Dotted Line */}
        <path
          d={currentPath}
          fill="transparent"
          stroke="#6366f1"
          strokeWidth={currentStrokeWidth}
          strokeDasharray={dashArray}
          mask={`url(#${maskId})`}
        />

        {/* 3. End Dot */}
        <motion.circle
          cx={currentCoords.x2}
          cy={currentCoords.y2}
          r={circleRadius}
          fill="#6366f1"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: secondDotDelay }}
          style={{ transformOrigin: `${currentCoords.x2}px ${currentCoords.y2}px` }}
        />
      </svg>
    </div>
  );
};

export default AnimatedWorkflowCurve;