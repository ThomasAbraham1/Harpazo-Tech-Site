import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Button from './Button';
import { Heading, Text } from './Typography';

const accordionData = [
  {
    id: "no-code",
    title: "No code builders",
    content: "Quickly launch landing pages or simple storefronts using visual platforms. Perfect for rapid prototyping and getting your brand online without writing a single line of code."
  },
  {
    id: "ecommerce",
    title: "E commerce integrations",
    content: "Seamlessly connect your storefront to powerful platforms like Shopify or Amazon. Streamline your sales process, manage inventory, and easily fulfill orders for physical products like your wooden plant stands."
  },
  {
    id: "custom",
    title: "Custom Sites",
    content: "Build fully bespoke, high-performance web applications tailored to your exact business needs. Leverage custom animations and advanced architecture for a truly unique digital storefront."
  }
];

export default function WebsiteAccordion() {
  // Store the ID of the currently open accordion item. Null means all are closed.
  const [openId, setOpenId] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      // Small delay to coordinate with the staggered grid on the right
      const timer = setTimeout(() => {
        setOpenId(accordionData[0].id);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const toggleItem = (id) => {
    setOpenId((currentId) => (currentId === id ? null : id));
  };

  return (
    <div ref={containerRef} className="w-full max-w-2xl space-y-4">
      {accordionData.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className="bg-none border border-white/10 rounded-2xl overflow-hidden shadow-xl "
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex justify-between items-center p-4 text-white font-bold outline-none cursor-pointer"
            >
              <Heading level={6} className="text-white !font-bold whitespace-nowrap">
                {item.title}
              </Heading>

              <motion.div
                // animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 5.0, ease: [0.4, 0, 0.2, 1] }}
                className="flex items-center justify-center w-10 h-10 rounded-lg border-2 border-white/10 p-2  text-white/40 mx-2"
              >
                {/* SVG Plus Icon */}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1V13M1 7H13"
                    stroke="currentColor"
                    strokeWidth="1.5  "
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
                    opacity: { duration: 0.8, delay: 0.1 }
                  }}
                  className="w-0 min-w-full"
                >
                  <div className="p-4 pt-0">
                    <Text size="base" className="text-white/60 leading-relaxed mb-6">
                      {item.content}
                    </Text>

                    <Button
                      variant="primary"
                      className="mt-2 uppercase tracking-[0.2em] text-[10px] py-4 px-6 rounded-md"
                    >
                      Explore More
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
