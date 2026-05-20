import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Tabs = ({ tabs, activeTab, onChange, className = "" }) => {
  // Derive the active index from the activeTab string
  const activeIdx = tabs.indexOf(activeTab);

  // Track direction for the exit/entry animations: 1 for right, -1 for left
  const [direction, setDirection] = useState(1);
  const [prevIdx, setPrevIdx] = useState(activeIdx);

  // When activeTab changes from outside, we need to determine the direction
  useEffect(() => {
    if (activeIdx !== prevIdx) {
      setDirection(activeIdx > prevIdx ? 1 : -1);
      setPrevIdx(activeIdx);
    }
  }, [activeIdx, prevIdx]);

  const handleTabClick = (idx) => {
    if (idx === activeIdx) return;
    setDirection(idx > activeIdx ? 1 : -1);
    onChange(tabs[idx]);
  };

  // Variants define the entry/exit based on the direction
  const backgroundVariants = {
    initial: (dir) => ({
      x: dir === 1 ? "-100%" : "100%",
    }),
    active: {
      x: "0%",
      transition: { duration: 0.4, ease: [0, 0, 1, 0] }
    },
    exit: (dir) => ({
      x: dir === 1 ? "100%" : "-100%",
      transition: { duration: 0.4, ease: [0, 0, 0.4, 0.0] }
    })
  };

  return (
    <div className={`flex space-x-2 bg-none p-1 rounded-xl w-full overflow-x-auto snap-x snap-mandatory md:justify-center justify-start scrollbar-hide ${className}`}>
      {tabs.map((tab, idx) => {
        const isActive = idx === activeIdx;

        return (
          <button
            key={tab}
            onClick={() => handleTabClick(idx)}
            className="flex relative px-15 md:px-16 py-3 text-sm font-bold text-white border-2 border-white/10 rounded-xl outline-none overflow-hidden cursor-pointer justify-center"  
          >
            <AnimatePresence custom={direction} initial={false}>
              {isActive && (
                <motion.div
                  key="tab-bg"
                  custom={direction}
                  variants={backgroundVariants}
                  initial="initial"
                  animate="active"
                  exit="exit"
                  className="absolute inset-0 bg-secondary-blue/100 rounded-lg"
                />
              )}
            </AnimatePresence>

            <span className="relative z-10">
              {tab}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
