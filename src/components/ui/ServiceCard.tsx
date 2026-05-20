import { motion } from 'framer-motion';

type ServiceCardProps = {
  icon: string;
  label: string;
  headline: string;
  subtext: string;
  deliverables: string[];
  proof: string;
  delay?: number;
  isFeatured?: boolean;
};

const ServiceCard = ({
  icon,
  label,
  headline,
  subtext,
  deliverables,
  proof,
  delay = 0,
  isFeatured = false,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      // whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className={`transform-gpu will-change-transform group relative flex flex-col p-8 rounded-2xl bg-white/[0.03] border ${isFeatured ? 'border-secondary-blue/70 shadow-[0_0_40px_rgba(42,98,154,0.3)] z-10' : 'border-white/10 z-0'
        } isolate overflow-visible`}
    >
      {/* Subtle top accent bar — animated on hover */}
      {/* <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-secondary-blue to-accent-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl" /> */}

      {/* Icon + Label */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary-blue/5 flex items-center justify-center text-2xl group-hover:bg-primary-blue/10 transition-colors duration-300">
          {icon}
        </div>
        <span className="text-xs font-bold tracking-widest uppercase text-white/70">
          {label}
        </span>
      </div>

      {/* Headline */}
      <h3 className="font-heading font-bold text-white text-lg md:text-xl leading-snug mb-3">
        {headline}
      </h3>

      {/* Subtext */}
      <p className="text-white/60 text-sm leading-relaxed mb-6">
        {subtext}
      </p>

      {/* Deliverables */}
      <ul className="flex flex-col gap-2.5 mb-8 flex-1">
        {deliverables.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
            <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-secondary-blue/10 flex items-center justify-center text-[10px] text-secondary-blue font-bold">
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>

      {/* Proof badge at the bottom */}
      <div className="inline-flex items-center gap-1.5 self-start bg-white/5 border border-white/10 rounded-full px-3 py-1">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
        <span className="text-[11px] font-semibold text-white/70 tracking-wide">
          {proof}
        </span>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
