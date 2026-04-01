import { motion } from 'framer-motion';
import { stageVariants, imageVariants } from '../../../lib/heroAnimations';
import { fadeIn } from '../../../lib/animations';
import HeroBadgePill from './HeroBadgePill';
import HeroStatCard from './HeroStatCard';

type Badge2 = {
  label: string;
  value: string;
  title: string;
  sub: string;
};

type HeroCardProps = {
  badge1: string;
  badge2: Badge2;
  illustration: string;
  activeIndex: number;
  hasLoaded: boolean;
};

/**
 * HeroCard
 * The animated "Stage" in the Hero section. Composites the gradient card shell,
 * the floating illustration, and the two floating badges (HeroBadgePill + HeroStatCard).
 *
 * The parent (Hero.jsx) controls which slide is active and passes data down as props.
 * The `key={activeIndex}` on this component (set by the parent via AnimatePresence)
 * is what triggers the enter/exit animations on each slide change.
 */
const HeroCard = ({ badge1, badge2, illustration, activeIndex, hasLoaded }: HeroCardProps) => {
  return (
    <motion.div
      key={activeIndex}
      variants={stageVariants}
      initial={hasLoaded ? 'enter' : 'firstLoad'}
      animate="center"
      exit="exit"
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="relative bottom-0 w-[90%] max-w-[480px] @container flex flex-col items-center translate-y-0 mt-25 md:mt-33 lg:mt-40 z-1"
    >
      {/* THE ILLUSTRATION (z-10) */}
      <motion.img
        variants={imageVariants}
        transition={{
          duration: 0.8,
          delay: 0.1,
          x: { duration: 0.6 },
        }}
        src={illustration}
        alt="Business Illustration"
        className="absolute bottom-0 left-10 md:left-25 lg:left-auto z-10 origin-bottom w-[95%] max-w-[400px] h-auto object-contain pointer-events-none drop-shadow-3xl"
      />

      {/* THE GRADIENT CARD SHELL (z-5) */}
      <motion.div
        variants={fadeIn}
        className="relative z-5 w-full aspect-[4/3] md:aspect-[3/2] shrink-0 rounded-xl rounded-b-none bg-gradient-to-b from-secondary-blue from-[30%] to-[80%] to-accent-orange before:absolute before:-inset-px before:bg-gradient-to-t before:from-secondary-blue before:from-[40%] before:to-[110%] before:to-accent-orange before:[clip-path:polygon(100%_0%,100%_100%,0_100%)] after:absolute after:inset-0 after:bg-gradient-to-bl after:from-[70%] after:to-[90%] after:to-accent-orange flex flex-col items-center justify-center p-6 shadow-2xl shadow-primary-blue/20 overflow-hidden"
      />

      {/* FLOATING BADGE 1 — Left side pill */}
      <HeroBadgePill text={badge1} hasLoaded={hasLoaded} />

      {/* FLOATING BADGE 2 — Right side stats card */}
      <HeroStatCard
        label={badge2.label}
        value={badge2.value}
        title={badge2.title}
        sub={badge2.sub}
        hasLoaded={hasLoaded}
      />
    </motion.div>
  );
};

export default HeroCard;
