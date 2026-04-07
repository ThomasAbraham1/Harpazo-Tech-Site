import React from 'react';
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



const AnimatedWorkflowLine = ({ 
  id = "line-1", 
  drawing = "M 0 50 H 140", 
  customDuration = 1.5, 
  customSize = { width: 140, height: 100 }, 
  circlesCoords = { x1: 0, y1: 50, x2: 140, y2: 50 } 
}) => {
  const maskId = `mask-${id}`;
  const firstDotDelay = 0.1; 
  const lineDelay = customDuration / 6;
  const secondDotDelay = customDuration + lineDelay;

  return (
    <div className="relative w-[120px] h-full min-h-[100px] overflow-visible flex items-center justify-center">
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
              d={drawing}
              fill="transparent"
              stroke="white"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: customDuration, ease: "easeInOut", delay: lineDelay }}
            />
          </mask>
        </defs>

        {/* 1. Start Dot */}
        <motion.circle
          cx={circlesCoords.x1}
          cy={circlesCoords.y1}
          r="3"
          fill="#6366f1"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: firstDotDelay }}
          style={{ transformOrigin: `${circlesCoords.x1}px ${circlesCoords.y1}px` }}
        />

        {/* 2. Dotted Line */}
        <path
          d={drawing}
          fill="transparent"
          stroke="#6366f1"
          strokeWidth="2"
          strokeDasharray="5 5"
          mask={`url(#${maskId})`}
        />

        {/* 3. End Dot */}
        <motion.circle
          cx={circlesCoords.x2}
          cy={circlesCoords.y2}
          r="3"
          fill="#6366f1"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: secondDotDelay }}
          style={{ transformOrigin: `${circlesCoords.x2}px ${circlesCoords.y2}px` }}
        />
      </svg>
    </div>
  );
};

export default AnimatedWorkflowLine;