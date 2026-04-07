import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

type ServiceCardProps = {
  index: number;
};

const ServiceCardNew = ({ index }: ServiceCardProps) => {
  // Mouse hover 3D effect variables using motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { damping: 20 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { damping: 20 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Set CSS variables for internal glow
    event.currentTarget.style.setProperty('--mouse-x', `${mouseX}px`);
    event.currentTarget.style.setProperty('--mouse-y', `${mouseY}px`);
    
    // Scale to range [-100, 100]
    const relativeX = (mouseX / width - 0.5) * 200;
    const relativeY = (mouseY / height - 0.5) * 200;
    
    x.set(relativeX);
    y.set(relativeY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const delayOrder = index * 0.2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        duration: 0.8, 
        delay: delayOrder, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
      }}
      className="group relative flex flex-col p-8 md:p-10 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-500 overflow-visible aspect-square md:aspect-auto min-h-[400px]"
    >
      {/* Internal Glow Follow Cursor (CSS implementation for performance) */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(30,225,255,0.1), transparent 80%)'
        }}
      />

      {/* Skeleton Header */}
      <div className="w-16 h-16 rounded-2xl bg-white/10 mb-8" />
      <div className="w-3/4 h-8 bg-white/10 rounded-lg mb-4" />
      <div className="w-full h-24 bg-white/5 rounded-lg mb-8" />
      
      {/* Skeleton List Items */}
      <div className="space-y-4 flex-1">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-white/10" />
            <div className="w-1/2 h-4 bg-white/5 rounded" />
          </div>
        ))}
      </div>

      {/* Skeleton Footer */}
      <div className="mt-8 w-32 h-10 bg-white/10 rounded-xl" />
    </motion.div>
  );
};

export default ServiceCardNew;
