import { motion } from 'framer-motion';
import { badgeVariants } from '../../../lib/heroAnimations';

type HeroBadgePillProps = {
  text: string;
  hasLoaded: boolean;
};

/**
 * HeroBadgePill
 * The small "✓ Website launch in 14 days" pill badge that floats on the left side of the Hero card.
 * Positioned by the parent (HeroCard) via absolute CSS — this component only handles its own
 * content and animation.
 */
const HeroBadgePill = ({ text, hasLoaded }: HeroBadgePillProps) => {
  return (
    <motion.div
      variants={badgeVariants}
      initial={hasLoaded ? 'enter' : 'firstLoad'}
      animate="center"
      exit="exit"
      transition={{ duration: 0.2, delay: 0.2 }}
      className="absolute top-[15%] left-[-4cqw] md:left-[-4cqw] lg:left-[-24cqw] bg-white/10 backdrop-blur-md border border-white/20 py-1.5 px-3 rounded-full flex flex-row items-center justify-start gap-2 shadow-xl z-20"
    >
      <div className="rounded-full w-5 h-5 flex items-center justify-center text-[10px] text-white shadow-sm">
        ✓
      </div>
      <div className="text-[clamp(12px,4cqw,14px)] font-bold text-white whitespace-nowrap tracking-wide">
        {text}
      </div>
    </motion.div>
  );
};

export default HeroBadgePill;
