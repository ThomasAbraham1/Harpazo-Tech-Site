import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Tabs from '../ui/Tabs';
import WebsiteAccordion from '../ui/WebsiteAccordion';
import { Text } from '../ui/Typography';
import AnimatedWorkflowLine from '../ui/AnimatedWorkflowLine';
import Button from '../ui/Button';
import { Check } from 'lucide-react';


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
          className="mb-16 md:mb-20"
        />

        {/* Side-by-Side Content Display (Accordion + Path) */}
        <div className="grid grid-cols-1 lg:grid-cols-[max-content_1fr] gap-12 lg:gap-4 items-center w-full max-w-7xl mx-auto">
          {/* Left Column: Interactive Accordion */}
          <div className="max-w-md flex justify-center lg:justify-end order-1">
            <WebsiteAccordion />
          </div>

          {/* Right Column: Dynamic Flow Path */}
          <div className="flex w-full order-2 border-2 border-white/20 p-20 rounded-2xl justify-center items-center">
            {/* First row First Col - 3 cards */}
            <div className='grid grid-cols-8 justify-start items-center gap-1 w-full'>
              {/* Avatar Card */}

              <motion.div className='relative w-58 h-22 flex flex-row gap-3 items-center justify-center bg-slate-950 border-white/10  border-1 rounded-2xl p-3 gap-5 col-span-4 justify-self-end m-2'>
                <div className='w-15 bg-red-500/20 rounded-xl'>
                  <img src="/assets/Service Avataer Website.jpg" className='rounded-sm' alt="" />
                </div>
                <div className='flex flex-col items-start justify-center p-0'>
                  <Text size='text-base' className='p-0 text-white'>
                    Lia Stark
                  </Text>
                  <Text size='text-base' className='p-0 text-white/50'>
                    Startup Owner
                  </Text>
                </div>
                <motion.div className='absolute top-[50%] bg-slate-950 -translate-y-1/2 left-[50%] -translate-x-1/2 w-48 h-29 border-1 border-white/20 rounded-2xl -z-1'>
                </motion.div>
                <motion.div className='absolute top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 w-38 h-37 border-1 border-white/20 rounded-2xl -z-2'>
                </motion.div>
              </motion.div>

              {/* Question Card */}
              <div className='row-span-2 col-span-4 col-start-5'>
                <motion.div className='flex flex-col p-6 border-white/20 border-1 rounded-3xl gap-2'>
                  {/* Question 1 */}
                  <Text size='base' className='text-white'>
                    What's the type of business?
                  </Text>
                  <div className='flex flex-row gap-3'>
                    <div className="bg-gradient-to-r from-secondary-blue to-accent-orange p-0.5 rounded-lg">
                      <div className="bg-none text-sm rounded-lg p-2">
                        Agency
                      </div>
                    </div>
                    <div className="border-1 border-white/20 p-0.5 rounded-lg">
                      <div className="bg-none text-sm rounded-lg p-2">
                        Store
                      </div>
                    </div>
                    <div className="border-1 border-white/20 p-0.5 rounded-lg">
                      <div className="bg-none text-sm rounded-lg p-2">
                        Bakery
                      </div>
                    </div>
                  </div>
                  {/* Question 2 */}
                  <div className='flex flex-col gap-2 '>
                    <Text size='base' className='text-white mt-2'>
                      When are you launching?
                    </Text>
                    <div className='px-4 py-2 border-1 border-white/20 rounded-lg'>
                      4/5/26
                    </div>
                  </div>
                  {/* Question 3 */}
                  <div className='flex flex-col gap-2'>
                    <Text size='base' className='text-white mt-2'>
                      What's your budget?
                    </Text>
                    <div className='px-4 py-2 border-1 border-white/20 rounded-lg'>
                      $1000 - $5000
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Featured card */}
              <div className='border-2 border-white/20 rounded-2xl p-3 flex flex-row gap-4 col-span-3 self-end'>
                <Text size='xs' className='text-white text-center uppercase'>
                  <span className='text-accent-orange text-xl'> 3 </span> <br />
                  Customer Reviews
                </Text>
                <Text size='xs' className='text-white text-center uppercase'>
                  <span className='text-accent-orange text-xl'> 90+ </span> <br />
                  SEO mark
                </Text>
                <Text size='xs' className='text-white text-center uppercase'>
                  <span className='text-accent-orange text-xl'> 100% </span> <br />
                  Satisfaction Guarantee
                </Text>
              </div>

              {/* Line Drawing - 2 */}
              {/* Line Drawing Component */}
              {/* Unique IDs for both instances to prevent mask collision */}
              <div className="relative w-full h-full overflow-visible flex flex-col justify-center items-center col-span-1">
                <AnimatedWorkflowLine
                  id="services-flow-2"
                  drawing="M 25 108 H 95"
                  customSize={{ width: 140, height: 100 }}
                  circlesCoords={{ x1: 25, y1: 108, x2: 95, y2: 108 }}
                />
              </div>

              <div className="relative w-full h-full overflow-visible flex flex-col justify-center items-end col-span-2">
                <AnimatedWorkflowLine
                  id="services-flow-3"
                  drawing="M 50 10 V 100 Q 50 110,60 110 H 110"
                  circlesCoords={{ x1: 50, y1: 10, x2: 110, y2: 110 }}
                />
              </div>

              {/* Final Step */}
              <div className="col-start-3 col-span-4  flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm shadow-xl w-85 mt-20">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-accent-orange/20 border border-accent-orange/30 flex items-center justify-center">
                    <Check className="w-3 h-3 text-accent-orange" />
                  </div>
                  <Text size="sm" className="text-white">Approved</Text>
                </div>
                <Text size='sm' className='text-white'>
                  Customer Satisfaction
                </Text>
              </div>
            </div>
          </div>
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
