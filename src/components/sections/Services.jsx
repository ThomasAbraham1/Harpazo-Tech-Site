import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Container from '../ui/Container';
import ServiceCard from '../ui/ServiceCard';
import { fadeUp, staggerContainer } from '../../lib/animations';

const services = [
  {
    icon: '🌐',
    label: 'Websites',
    headline: "Your website is your business card, salesperson, and storefront — all in one.",
    subtext: "We build fast, beautiful websites that turn visitors into customers. No templates, no shortcuts.",
    deliverables: [
      'Custom design built around your brand',
      'Mobile-first and search engine ready',
      'Live in as little as 14 days',
    ],
    proof: '4 websites delivered and live',
  },
  {
    icon: '🎬',
    label: 'Video',
    headline: "Everyone's scrolling. Make them stop.",
    subtext: "Short-form content, brand videos, and ad creatives — edited so they actually get watched.",
    deliverables: [
      'Reels, Shorts, and ad-ready video edits',
      'Subtitles, motion graphics, and colour grading',
      'Turnaround in 48 hours',
    ],
    proof: 'Crafted for the platforms your customers are on',
  },
  {
    icon: '📣',
    label: 'Ads',
    headline: "Boosting posts isn't advertising. Let's build campaigns that actually work.",
    subtext: "We manage your Meta ad campaigns from strategy to execution — so your budget finds real customers, not just impressions.",
    deliverables: [
      'Campaign setup, targeting, and creative',
      'A/B testing and ongoing optimisation',
      'Weekly reporting in plain English',
    ],
    proof: '1,000+ customer conversations generated',
  },
];

const Services = () => {
  return (
    <Section variant="dark" padding="lg" id="services" className="relative">
      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col items-center text-center mb-16"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="mb-4">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-canvas-yellow bg-canvas-yellow/10 border border-canvas-yellow/20 rounded-full px-4 py-1.5">
              What We Do
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={fadeUp}>
            <h2 className="font-heading font-bold text-white text-3xl md:text-4xl lg:text-5xl tracking-tight mb-5 max-w-2xl">
              Three ways we grow your business online
            </h2>
          </motion.div>

          {/* Subtext */}
          <motion.div variants={fadeUp}>
            <p className="text-white/60 text-lg max-w-xl leading-relaxed">
              Pick one. Pick all three. We'll figure out what you actually need.
            </p>
          </motion.div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 isolate">
          {services.map((service, i) => {
            // Re-order entry: Middle (1) -> Left (0) -> Right (2)
            const delayOrder = i === 1 ? 0 : i === 0 ? 1 : 2;
            return (
              <ServiceCard 
                key={service.label} 
                {...service} 
                delay={delayOrder * 0.1} 
                isFeatured={i === 1}
              />
            );
          })}
        </div>

        {/* Bottom CTA nudge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-14 flex flex-col items-center gap-2 text-center"
        >
          <p className="text-sm text-white/40 font-medium">
            Not sure which service you need?
          </p>
          <a
            href="#contact"
            className="text-sm font-bold text-canvas-yellow hover:text-white underline underline-offset-4 transition-colors duration-200"
          >
            Let's talk and figure it out →
          </a>
        </motion.div>

      </Container>
    </Section>
  );
};

export default Services;
