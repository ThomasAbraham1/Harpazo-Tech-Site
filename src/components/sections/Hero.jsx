import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { Heading, Text } from '../ui/Typography';
import { fadeUp, staggerContainer } from '../../lib/animations';
import HeroCard from '../ui/hero/HeroCard';

// ---------------------------------------------------------------------------
// Slide Data — Edit content here to update the Hero carousel.
// ---------------------------------------------------------------------------
const slides = [
  {
    id: 0,
    badge1: 'Website launch in 14 days',
    badge2: {
      label: 'Site Traffic',
      value: '1000+',
      title: 'Conversion Optimization',
      sub: '3x Traffic, 98 Perf. Score',
    },
    illustration: '/assets/Card1.png',
  },
  {
    id: 1,
    badge1: 'Delivered in 48 hours',
    badge2: {
      label: 'Views',
      value: '2.4M+',
      title: 'Content That Converts',
      sub: '94% Retention, 12x Reach',
    },
    illustration: '/assets/Card2.png',
  },
  {
    id: 2,
    badge1: 'Campaigns live in 3 days',
    badge2: {
      label: 'Revenue',
      value: '₹98k+',
      title: 'Every Rupee Working Harder',
      sub: '4.8x ROAS, 60% Lower CPC',
    },
    illustration: '/assets/Card3.png',
  },
];

// ---------------------------------------------------------------------------
// Hero Section
// ---------------------------------------------------------------------------
const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[690px] sm:min-h-[850px] md:min-h-[880px] lg:min-h-[800px] flex flex-col overflow-hidden pt-10 md:pt-24 lg:pt-24 pb-0">
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#2A629A_30%,_#003285_70%)] opacity-100 z-0" />


      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col items-center">

        {/* Top: Text Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center mt-16 mb-4"
        >
          <motion.div variants={fadeUp}>
            <Heading level={2} className="text-white text-4xl md:text-6xl mb-6 max-w-4xl leading-tight">
              Build Your Digital Empire Brick by Brick
            </Heading>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Text size="lg" className="text-white/80 max-w-2xl mb-10 mx-auto">
              Everything Your Business Needs Online, Under One Roof. Beautiful websites, engaging videos, and targeted ads.
            </Text>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="md" variant="primary">
              Start Building Now
            </Button>
            <Button size="md" variant="ghost" className="text-white border-2 border-white/20 hover:bg-white/10">
              Explore Services
            </Button>
          </motion.div>
        </motion.div>

        {/* Bottom: Carousel Stage */}
        <AnimatePresence mode="wait">
          <HeroCard
            key={activeIndex}
            {...slides[activeIndex]}
            activeIndex={activeIndex}
            hasLoaded={hasLoaded}
          />
        </AnimatePresence>

        {/* Glow — bottom centre */}
        <div className="absolute bottom-[-25%] left-1/2 -translate-x-1/2 w-[80vw] max-w-[700px] h-[350px] rounded-[100%] bg-[#FF7F3E] opacity-50 blur-[60px] pointer-events-none z-0" />
      </div>
    </section>
  );
};

export default Hero;
