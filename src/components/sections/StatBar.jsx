import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Websites Delivered', value: '4+' },
  { label: 'Conversions Generated', value: '1000+' },
  { label: 'Video Turnaround', value: '48h' },
];

/**
 * StatBar Component
 * A high-impact ribbon placed underneath the Hero to provide social proof
 * and reinforcing the agency's core metrics at a glance.
 */
const StatBar = () => {
  return (
    <div className="relative z-20 bg-primary-blue py-6 sm:py-8 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center space-y-1 py-4 md:py-0"
            >
              <span className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-body font-bold text-white/60 uppercase tracking-widest text-center">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </div>
  );
};

export default StatBar;
