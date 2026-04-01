import { motion } from 'framer-motion';
import { badgeVariants } from '../../../lib/heroAnimations';

type HeroStatCardProps = {
  label: string;   // e.g. "Site Traffic"
  value: string;   // e.g. "1000+"
  title: string;   // e.g. "Conversion Optimization"
  sub: string;     // e.g. "3x Traffic, 98 Perf. Score"
  hasLoaded: boolean;
};

/**
 * HeroStatCard
 * The right-side floating stats card for the Hero carousel.
 * Positioned by the parent (HeroCard) via absolute CSS — this component only handles its own
 * content and animation.
 */
const HeroStatCard = ({ label, value, title, sub, hasLoaded }: HeroStatCardProps) => {
  return (
    <motion.div
      variants={badgeVariants}
      initial={hasLoaded ? 'enter' : 'firstLoad'}
      animate="center"
      exit="exit"
      transition={{ duration: 0.4, delay: 0.3 }}
      className="absolute top-[40%] lg:top-[15%] right-auto left-[-4cqw] lg:right-[-24cqw] lg:left-auto bg-white/10 backdrop-blur-sm border border-white/20 py-1.5 px-3 rounded-xl flex flex-col items-start justify-center gap-3 shadow-xl z-20"
    >
      {/* Top Row: Label Pill + Value */}
      <div className="flex flex-row items-center justify-start gap-3">
        <div className="text-[clamp(12px,4cqw,14px)] rounded-full border border-white/20 backdrop-blur-sm bg-white/10 px-[2cqw] font-bold text-white whitespace-nowrap tracking-wide">
          {label}
        </div>
        <div className="text-[clamp(12px,4cqw,14px)] font-bold text-white whitespace-nowrap tracking-wide">
          {value}
        </div>
      </div>

      {/* Title */}
      <div className="text-[clamp(12px,4cqw,14px)] font-bold text-white whitespace-nowrap tracking-wide">
        {title}
      </div>

      {/* Subtitle */}
      <div className="text-[clamp(12px,4cqw,14px)] font-thin text-xs text-white whitespace-nowrap tracking-wide">
        {sub}
      </div>
    </motion.div>
  );
};

export default HeroStatCard;
