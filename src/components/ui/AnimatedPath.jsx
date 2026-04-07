import React from "react";
import { motion } from "framer-motion";

/**
 * AnimatedPath Component: Strict Dotted Taxonomy Flow
 * 
 * TEACHING POINTS:
 * 1. Perfect Dots: Use strokeDasharray="1, X" and strokeLinecap="round".
 * 2. High Contrast: Removed SVG filters to ensure dots are sharp and clear.
 * 3. Kinetic Flow: Faster dashoffset animation for a "pulsing" digital feel.
 */
export default function AnimatedPath() {
  const branches = [
    {
      id: "no-code",
      label: "No-Code",
      path: "M 20 100 L 80 100 L 80 50 L 180 50",
      delay: 0,
      color: "#3B82F6"
    },
    {
      id: "ecommerce",
      label: "E-commerce",
      path: "M 20 100 L 180 100",
      delay: 0.2,
      color: "#10B981"
    },
    {
      id: "custom",
      label: "Custom",
      path: "M 20 100 L 80 100 L 80 150 L 180 150",
      delay: 0.4,
      color: "#F59E0B"
    }
  ];

  return (
   <div className="w-full max-w-md mx-auto flex items-center justify-center p-8">
     
    </div>
  );
}
