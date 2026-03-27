import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = 'max-w-md',
}) => {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary-blue/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`relative w-full ${maxWidth} bg-white rounded-card shadow-elevated z-10 font-body overflow-hidden`}
          >
            {title && (
              <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-heading font-bold text-xl text-primary-blue">{title}</h3>
                <button 
                  onClick={onClose}
                  className="text-gray-400 hover:text-accent-orange transition-colors focus:outline-none"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>
            )}
            <div className="p-6 text-primary-blue">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
