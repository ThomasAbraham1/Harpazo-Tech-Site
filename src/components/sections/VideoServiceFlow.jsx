import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Text, Heading } from '../ui/Typography';
import AnimatedWorkflowLine from '../ui/AnimatedWorkflowLine';
import { AlarmClockMinus, Angry, Play } from 'lucide-react';
import AnimatedWorkflowCurve from '../ui/AnimatedWorkflowCurve';

// const avatarVariants = {
//   hidden: { x: 0, opacity: 0, scale: 0.0 },
//   visible: { x: 0, scale: 1, opacity: 1 }
// };

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

export default function VideoServiceFlow() {
  const [readyToMove, setReadyToMove] = useState(false);
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // 1. After 3 seconds, trigger the grid movement
    const moveTimer = setTimeout(() => {
      setReadyToMove(true);

      // 2. Wait 1 second for the layout movement to finish, THEN trigger the exit
      const exitTimer = setTimeout(() => {
        setIsVisible(false);
      }, 1000); // Adjust this delay to match how fast you want it to disappear after moving

    }, 4000);

    return () => {
      clearTimeout(moveTimer);
      // Note: In a full cleanup you'd want to clear exitTimer too if the component unmounts early
    };
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[max-content_1fr] gap-12 lg:gap-4 items-center w-full max-w-7xl mx-auto ">
      <div className="flex w-full md:order-2 order-1 border-2 border-white/20 py-10 px-6 md:p-20 rounded-2xl justify-center items-center">
        <AnimatedWorkflowLine
          id="video-branches"
          customDuration={1.5}
          className='scale-80 justify-self-center rotate-90 absolute top-42'
          customSize={{ width: 400, height: 200 }}
          lines={[
            {
              id: 'branch-top',
              // Moves right, curves up, moves up, curves right, moves right
              drawing: 'M 10 100 H 60 Q 70 100 70 90 V 30 Q 70 20 80 20 H 250',
              circlesCoords: { desktop: { x1: 10, y1: 100, x2: 190, y2: 20 }, mobile: { x1: 10, y1: 100, x2: 250, y2: 20 } }
            },
            {
              id: 'branch-middle',
              // Straight line across the middle
              drawing: 'M 10 100 H 180',
              circlesCoords: { desktop: { x1: 10, y1: 100, x2: 190, y2: 100 }, mobile: { x1: 10, y1: 100, x2: 180, y2: 100 } }
            },
            {
              id: 'branch-bottom',
              // Moves right, curves down, moves down, curves right, moves right
              drawing: 'M 10 100 H 60 Q 70 100 70 110 V 170 Q 70 180 80 180 H 120',
              circlesCoords: { desktop: { x1: 10, y1: 100, x2: 120, y2: 180 }, mobile: { x1: 10, y1: 100, x2: 120, y2: 180 } }
            }
          ]}
        />
        <div className='grid grid-cols-8 justify-start items-center md:gap-6 w-full gap-y-2'>
          <div className='border-1 border-white/10 rounded-xl p-2 w-15 col-start-1 col-span-8 justify-self-center '>
            <img src="/assets/Service Avataer Website.jpg" className='rounded-sm' alt="" />
          </div>

          <div className='row-start-2 m-13'></div>
          <motion.div className='flex flex-row justify-center items-center col-span-3 col-start-1 row-start-3 p-2 border-1 border-white/20 rounded-2xl '>
            <AlarmClockMinus></AlarmClockMinus>
            Hubspot
          </motion.div>
          <motion.div className='flex flex-row justify-center items-center col-span-3 col-start-3 row-start-4 p-2 border-1 border-white/20 rounded-2xl '>
            <Angry></Angry>
            Hubspot
          </motion.div>
          <motion.div className='flex flex-row justify-center items-center col-span-3 col-start-6 row-start-5 p-2 border-1 border-white/20 rounded-2xl '>
            <Angry></Angry>
            Hubspot
          </motion.div>
        </div>
      </div>
    </div>
  );
}
