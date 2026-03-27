import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 rounded-md mb-2 overflow-hidden bg-white">
      <button
        className="w-full flex justify-between items-center px-4 py-4 text-left font-heading font-bold text-primary-blue hover:text-secondary-blue transition-colors focus:outline-none"
        onClick={onClick}
      >
        <span>{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg className="w-5 h-5 text-secondary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-0 font-body text-primary-blue/80 text-sm leading-relaxed border-t border-gray-100">
              <div className="mt-3">{content}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Accordion = ({ items = [], allowMultiple = false, className = '' }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleItemClick = (index) => {
    if (allowMultiple) {
      setOpenIndexes(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes(prev => 
        prev.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndexes.includes(index)}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
