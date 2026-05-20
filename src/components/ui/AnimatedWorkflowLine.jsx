import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedWorkflowLine Component: Strict Dotted Taxonomy Flow
 * 
 * TEACHING POINTS:
 * 1. Supports single lines OR an array of lines inside a single SVG canvas!
 * 2. Perfect Dots: Use strokeDasharray="1, X" and strokeLinecap="round".
 * 3. High Contrast: Removed SVG filters to ensure dots are sharp and clear.
 */

const AnimatedWorkflowLine = ({
  id = "line-1",
  drawing = "M 0 50 H 140",
  strokeWidth = 2,
  dashArray = "5 5",
  customDuration = 0.5,
  customSize = { width: 120, height: 130 },
  viewBox = null, // NEW: Allows setting a custom coordinate grid so paths don't clip when width shrinks!
  className = "", // NEW: Allows Tailwind classes like scale-50 to be passed
  delay = 0,
  circlesCoords = { desktop: { x1: 0, y1: 50, x2: 140, y2: 50 }, mobile: { x1: 0, y1: 50, x2: 140, y2: 50 } },
  circleRadius = 3,
  lines = null // NEW: Pass an array of { id, drawing, circlesCoords }
}) => {
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
    if (typeof prop !== 'object' || prop === null || (prop.desktop === undefined && prop.mobile === undefined)) return prop;
    return prop[screenType] || prop['desktop'];
  };

  const currentStrokeWidth = getResponsiveValue(strokeWidth);
  const currentSize = getResponsiveValue(customSize);

  // Normalize data into an array so we can map over it seamlessly
  const lineDataArray = lines ? lines : [{ id, drawing, circlesCoords }];

  return (
    <div className={`absolute overflow-visible flex items-center justify-center ${className}`} style={{ width: currentSize.width, height: currentSize.height }}>
      <svg
        width={currentSize.width}
        height={currentSize.height}
        viewBox={viewBox || `0 0 ${currentSize.width} ${currentSize.height}`}
        preserveAspectRatio="xMidYMid meet"
        className="pointer-events-none overflow-visible"
      >
        <defs>
          {lineDataArray.map((lineData, index) => {
            const currentPath = getResponsiveValue(lineData.drawing);
            const maskId = `mask-${lineData.id || id}-${index}`;
            return (
              <mask id={maskId} key={`mask-${index}`} maskUnits="userSpaceOnUse">
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
            );
          })}
        </defs>

        {lineDataArray.map((lineData, index) => {
          const currentPath = getResponsiveValue(lineData.drawing);
          const currentCoords = getResponsiveValue(lineData.circlesCoords) || { x1: 0, y1: 0, x2: 0, y2: 0 };
          const maskId = `mask-${lineData.id || id}-${index}`;

          return (
            <g key={`line-group-${index}`}>
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
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default AnimatedWorkflowLine;