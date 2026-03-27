import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Heading, Text } from '../ui/Typography';
import { fadeUp, staggerContainer, fadeIn, } from '../../lib/animations';

const Hero = () => {
  return (
    <section className="relative min-h-[890px] sm:min-h-[850px] md:min-h-[880px] lg:min-h-[950px] flex flex-col overflow-hidden pt-10 md:pt-24 lg:pt-24 pb-0">
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#2A629A_30%,_#003285_70%)] opacity-100 z-0"></div>

      {/* Optional Overlay/Mesh if needed for texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col items-center">

        {/* Top: Text Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center mt-16 mb-4"
        >
          {/* <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-block py-1 px-3 rounded-pill bg-white/10 border border-white/20 text-white text-sm font-body font-bold uppercase tracking-wider backdrop-blur-sm">
              Next-Generation Technology
            </span>
          </motion.div> */}

          <motion.div variants={fadeUp}>
            <Heading level={2} className="text-white text-4xl md:text-6xl mb-6 max-w-4xl leading-tight">
              Build Your Digital Empire Brick by Brick
            </Heading>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Text size="lg" className="text-white/80 max-w-2xl mb-10 mx-auto">
              Empower your business with modular, scalable, and stunning digital solutions tailored to accelerate your growth.
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

        {/* Bottom: Card & Image Group */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full  flex flex-col items-center translate-y-5   mt-20 md:mt-23 lg:mt-33 z-1">
          {/* THE ILLUSTRATION (Sibling to card) */}
          
          <motion.img
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1.1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            src="/assets/business-man-illustration-ai-generative.png"
            alt="Business Man Illustration"
            className="absolute bottom-0 z-10 origin-bottom w-86 lg:w-[450px] h-auto object-contain pointer-events-none drop-shadow-3xl"
            style={{ marginBottom: '' }} // Adjust position to exceed card height
          />

          {/* THE CUSTOM CARD */}
          <motion.div
          variants={fadeIn}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative  z-5 w-80 h-70 md:w-[400px] md:h-[300px] lg:w-[450px] lg:h-[400px] shrink-0 overflow-hidden rounded-xl bg-gradient-to-b from-secondary-blue from-[30%] to-[80%] to-accent-orange before:absolute before:-inset-px before:bg-gradient-to-t before:from-secondary-blue before:from-[40%] before:to-[110%] before:to-accent-orange before:[clip-path:polygon(100%_0%,100%_100%,0_100%)] after:absolute after:inset-0 after:bg-gradient-to-bl after:from-[70%] after:to-[90%] after:to-accent-orange "
          >
          </motion.div>
        </div>
           {/* Glow bottom center */}
          <div
            className="absolute bottom-[-25%] left-1/2 -translate-x-1/2 
               w-[80vw] max-w-[700px] h-[350px] 
               rounded-[100%]
               bg-[#FF7F3E] opacity-50 blur-[60px] 
               pointer-events-none z-0"
          ></div>
      </div>
    </section>
  );
};

export default Hero;
