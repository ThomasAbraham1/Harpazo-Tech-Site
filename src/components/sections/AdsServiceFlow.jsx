import React from 'react';
import { motion } from 'framer-motion';
import { Text, Heading } from '../ui/Typography';
import AnimatedWorkflowLine from '../ui/AnimatedWorkflowLine';
import { TrendingUp } from 'lucide-react';

const avatarVariants = {
  hidden: { x: 0, opacity: 0, scale:0.5 },
  visible: { x: 0, scale:1, opacity: 1, transition: { duration: 0.5, ease: [0.04, 0, 0.2, 1], staggerChildren: 0.3, delayChildren: 0.1 } }
};

const layerVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: [0.04, 0, 0.2, 1] } }
};

const borderShutterVariants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: { scaleY: 1, opacity: 1, transition: { delay: 0.8, duration: 0.5, ease: [0.04, 0, 0.2, 1] } }
};

const contentRevealVariants = {
  hidden: { clipPath: 'inset(0% 0% 100% 0%)', opacity: 0 },
  visible: { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, transition: { delay: 1, duration: 0.5, ease: [0.04, 0, 0.2, 1] } }
};

const contentPopVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { y: 0, opacity: 1, transition: { delay: 1.25, duration: 0.5 } }
};

const featureBarVariant = {
  hidden: { opacity: 0, scaleY: 0 },
  visible: { opacity: 1, scaleY: 1, transition: { delay: 1, duration: 0.5 } }
};

const featureBarContent = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1, duration: 0.5 } }
};

const finalStepVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: { scaleX: 1, opacity: 1, transition: { delay: 1.8, duration: 1, ease: [0.04, 0, 0.2, 1] } }
};

const finalStepContent = {
  hidden: { clipPath: 'inset(0% 100% 0% 0%)' },
  visible: { clipPath: 'inset(0% 0% 0% 0%)', transition: { delay: 1.8, duration: 1, ease: [0.04, 0, 0.2, 1] } }
};

export default function AdsServiceFlow() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[max-content_1fr] gap-12 lg:gap-4 items-center w-full max-w-7xl mx-auto ">
      {/* Left Column: Interactive Accordion */}
      <div className="max-w-md flex justify-center lg:justify-end md:order-1 order-2 w-full">
         <div className="w-full max-w-sm space-y-4">
           {/* Temporary Accordion Mock */}
           <div className="bg-none border border-white/10 rounded-2xl p-6 shadow-xl">
             <Heading level={6} className="text-white !font-bold mb-2">Google SEO & Search</Heading>
             <Text size="sm" className="text-white/60">Capture high-intent traffic by dominating search results with targeted, ROI-driven campaigns.</Text>
           </div>
           <div className="bg-none border border-white/10 rounded-2xl p-6 shadow-xl opacity-50">
             <Heading level={6} className="text-white !font-bold mb-2">Social Meta Ads</Heading>
           </div>
           <div className="bg-none border border-white/10 rounded-2xl p-6 shadow-xl opacity-50">
             <Heading level={6} className="text-white !font-bold mb-2">Omnichannel Retargeting</Heading>
           </div>
        </div>
      </div>

      {/* Right Column: Dynamic Flow Path */}
      <div className="flex w-full md:order-2 order-1 border-2 border-white/20 py-10 px-6 md:p-20 rounded-2xl justify-center items-center">
        <div className='grid grid-cols-8 justify-start items-center md:gap-6 gap-1 w-full'>
          
          {/* Avatar Card */}
          <motion.div
            variants={avatarVariants}
            initial="hidden"
            whileInView="visible"
            className='relative md:w-58 md:h-22 w-30 h-12 flex flex-row gap-3 items-center justify-center md:p-3 md:gap-5 col-span-4 justify-self-end self-end md:mx-0 md:my-0 mx-2 my-2 z-10'
          >
            <motion.div variants={layerVariants} className='absolute inset-0 bg-slate-950 border-white/10 border-1 rounded-2xl -z-10 pointer-events-none'></motion.div>
            <motion.div variants={layerVariants} className='absolute md:inset-x-4 inset-x-1.5 md:-inset-y-3.5 -inset-y-1.5 bg-slate-950 scale-1.5 border-1 border-white/20 rounded-2xl -z-20 pointer-events-none'></motion.div>
            <motion.div variants={layerVariants} className='absolute md:inset-x-7 inset-x-3.5 md:-inset-y-6.5 -inset-y-3 border-1 border-white/20 rounded-2xl -z-30 pointer-events-none'></motion.div>

            <div className='md:w-15 w-7 bg-red-500/20 rounded-xl'>
              <img src="/assets/Service Avataer Website.jpg" className='rounded-sm' alt="" />
            </div>
            <div className='flex flex-col items-start justify-center p-0'>
              <Text className='p-0 text-white text-[6px] md:text-sm'>
                Sarah Chen
              </Text>
              <Text className='p-0 text-white/50 text-[6px] md:text-sm'>
                E-commerce Founder
              </Text>
            </div>
          </motion.div>

          {/* Question Card parent */}
          <div className='row-span-2 col-span-4 col-start-5 self-end relative'>
            <motion.div
              variants={borderShutterVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              style={{ transformOrigin: "top" }}
              className='absolute inset-0 bg-slate-950/50 border-white/20 border-1 rounded-3xl -z-10 overflow-hidden'
            />

            <motion.div
              variants={contentRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className='relative z-10 flex flex-col md:p-6 p-3 gap-2 overflow-hidden'
            >
              <Text className='text-white md:text-sm text-[8px]'>
                What's the target platform?
              </Text>

              <div className='flex flex-row md:gap-3 gap-1 '>
                <div className="bg-gradient-to-r border-1 border-accent-orange/100 from-secondary-blue to-accent-orange rounded-lg">
                  <div className="text-[5px] md:text-xs tracking-widest md:px-2 md:py-1 px-1 py-1 text-center whitespace-nowrap">Meta Ads</div>
                </div>
                <div className="border-1 border-white/20 rounded-lg">
                  <div className="text-[5px] md:text-xs tracking-widest md:px-2 md:py-1 px-1 py-1 whitespace-nowrap">Google Search</div>
                </div>
                <div className=" border-1 border-white/20 rounded-lg">
                  <div className="text-[5px] md:text-xs tracking-widest md:px-2 md:py-1 px-1 py-1">TikTok</div>
                </div>
              </div>

              <div variants={contentPopVariants} className='flex flex-col gap-2'>
                <Text className='text-white mt-2 md:text-sm text-[8px]'>
                  What's the primary campaign goal?
                </Text>
                <div className='md:px-4 md:py-2 px-2 py-1 border-1 border-white/20 rounded-lg font-thin text-[8px] md:text-xs tracking-widest'>
                  Lead Generation & Conversions
                </div>
              </div>
              <div variants={contentPopVariants} className='flex flex-col gap-2'>
                <Text className='text-white mt-2 md:text-sm text-[8px]'>
                  What's the daily budget?
                </Text>
                <div className='md:px-4 md:py-2 px-2 py-1 border-1 border-white/20 rounded-lg text-[8px] font-thin md:text-xs tracking-widest'>
                  $50 - $200/day
                </div>
              </div>
            </motion.div>
          </div>

          {/* Featured card */}
          <div className='relative md:p-3 px-2 py-1 md:gap-4 gap-1 flex flex-row  col-span-3 self-end'>
            <motion.div
              variants={featureBarVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className='absolute inset-0 bg-slate-950/50 border-white/20 border-1 rounded-2xl -z-10 overflow-hidden'
            />

            <motion.div
              variants={featureBarContent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className='flex flex-row md:gap-4 gap-1'
            >
              <Text className='text-white text-center md:text-xs text-[4px] font-light tracking-widest p-[1px]'>
                <span className='text-accent-orange md:text-xl text-[8px] '> 4.2x </span> <br />
                Average ROAS
              </Text>
              <Text className='text-white text-center md:text-xs text-[4px]   font-light tracking-widest p-[1px]'>
                <span className='text-accent-orange md:text-xl text-[8px]'> A/B </span> <br />
                Tested Creatives
              </Text>
              <Text className='text-white text-center md:text-xs text-[4px] font-light tracking-widest p-[1px]'>
                <span className='text-accent-orange md:text-xl text-[8px]'> 24/7 </span> <br />
                Campaign Monitoring
              </Text>
            </motion.div>
          </div>

          {/* Line Drawing Component */}
          <div className="relative w-full h-full overflow-visible flex flex-col justify-center items-start col-span-1">
            <AnimatedWorkflowLine
              id="services-ads-flow-2"
              drawing={{ desktop: "M 70 108 H 5", mobile: "M 22 112 H 5" }}
              dashArray='3 5'
              customSize={{ width: 140, height: 100 }}
              circlesCoords={{ desktop: { x1: 70, y1: 108, x2: 5, y2: 108 }, mobile: { x1: 22, y1: 112, x2: 5, y2: 112 } }}
              circleRadius={2}
              delay={1}
            />
          </div>

          {/* Line Drawing - 2 */}
          <div className="relative w-full h-full overflow-visible flex flex-col justify-center items-end col-span-2">
            <AnimatedWorkflowLine
              id="services-ads-flow-3"
              drawing={{ desktop: "M 50 10 V 100 Q 50 110,60 110 H 110", mobile: "M 80 10 V 80 Q 80 90,90 90 H 110" }}
              circlesCoords={{ desktop: { x1: 50, y1: 10, x2: 110, y2: 110 }, mobile: { x1: 80, y1: 10, x2: 110, y2: 90 } }}
              delay={1.3}
              customDuration={0.5}
            />
          </div>

          {/* Final Step */}
          <div className="col-start-3 col-span-4 md:p-4 p-2 backdrop-blur-sm shadow-xl md:w-85 w-full md:mt-20 mt-10">
            <motion.div
              variants={finalStepVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              style={{ transformOrigin: "left" }}
              className='absolute inset-0 bg-slate-950/50 border-white/20 border-1 rounded-2xl -z-10 overflow-hidden'
            />
            <motion.div
              variants={finalStepContent}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              style={{ transformOrigin: "left" }}
              className='flex items-center justify-between'
            >
              <div className="flex items-center md:gap-2 gap-1 md:p-1">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0, duration: 1, type: "spring", bounce: 0.5}}
                  className="md:w-6 md:h-6 w-4 h-4 rounded-full bg-accent-orange/20 border border-accent-orange/30 flex items-center justify-center overflow-visible">
                  <TrendingUp className="md:w-3 md:h-3 w-2.5 h-2.5 text-accent-orange" />
                </motion.div>
                <Text className="text-white md:text-xs text-[6px] text-start m-0 tracking-widest pl-2">Live</Text>
              </div>
              <Text className='text-white md:text-start md:text-[10px] text-end text-[5px] m-0 leading-none text-emerald-400'>
                Campaign Scaling
              </Text>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
