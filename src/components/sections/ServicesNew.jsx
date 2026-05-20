import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Tabs from '../ui/Tabs';

import WebsiteServiceFlow from './WebsiteServiceFlow';
import VideoServiceFlow from './VideoServiceFlow';
import AdsServiceFlow from './AdsServiceFlow';

const tabs = ["Websites", "Video", "Ads"];

const ServicesNew = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <Section variant="darker" padding="lg" id="services-new" className="relative overflow-hidden">
      <Container className="relative z-10 flex flex-col items-center">

        {/* Reusable UI Tabs Component */}
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
          className="mb-16 md:mb-20 "
        />

        {/* Side-by-Side Content Display (Accordion + Path) */}
        <div className="w-full relative min-h-[500px]">
           <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                // exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                  {activeTab === "Websites" && <WebsiteServiceFlow />}
                  {activeTab === "Video" && <VideoServiceFlow />}
                  {activeTab === "Ads" && <AdsServiceFlow />}
              </motion.div>
           </AnimatePresence>
        </div>

        {/* Decorative background element that reacts to tab choices */}
        <motion.div
          animate={{
            backgroundColor: activeTab === "Websites" ? "#4F46E51A" :
              activeTab === "Video" ? "#10B9811A" : "#F59E0B1A"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] blur-[150px] -z-10 pointer-events-none transition-colors duration-1000"
        />
      </Container>
    </Section>
  );
};

export default ServicesNew;
