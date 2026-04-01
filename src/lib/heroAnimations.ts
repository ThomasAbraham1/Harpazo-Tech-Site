import { Variants } from 'framer-motion';

/**
 * Controls the entire "Stage" (the outer wrapper containing the card, illustration, and badges).
 * - firstLoad: Slides up from the bottom on the initial page load.
 * - enter: Slides in from the right during carousel transitions.
 * - exit: Slides out to the left during carousel transitions.
 */
export const stageVariants: Variants = {
  firstLoad: { opacity: 0, y: 50 },
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -90 },
};

/**
 * Controls the illustration image.
 * - firstLoad: Fades in with a subtle scale and upward pop.
 * - enter: Slides in from the right, already at its final scale (no zoom effect during carousel).
 * - exit: Fades out to the left.
 */
export const imageVariants: Variants = {
  firstLoad: { opacity: 0, scale: 1.05, y: 30 },
  enter: { opacity: 0, x: 20, scale: 1.1, y: 0 },
  center: { opacity: 1, scale: 1.1, y: 0, x: 0 },
  exit: { opacity: 0, x: -30 },
};

/**
 * Controls the floating badge components (HeroBadgePill and HeroStatCard).
 * Moves faster than the card to create a "lighter" staggered feel.
 * - firstLoad: Just fades in, no movement.
 * - enter: Slides in from the right.
 * - exit: Slides out to the left, in sync with the stage.
 */
export const badgeVariants: Variants = {
  firstLoad: { opacity: 0, scale: 1 },
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -50 },
};
