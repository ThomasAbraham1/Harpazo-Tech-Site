import React from 'react';
import { motion } from 'framer-motion';
import { Heading, Text } from '../ui/Typography';

const Footer = () => {
  return (
    <footer className="bg-primary-blue pt-16 pb-8 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 border-b border-white/10 pb-12 mb-8"
        >
          <div className="flex flex-col items-center md:items-start gap-4 max-w-sm text-center md:text-left">
            <div className="font-heading font-bold text-2xl tracking-tight text-white">
              Harpazo Tech
            </div>
            <Text className="text-white/70 text-sm leading-relaxed">
              Engineering modern digital experiences. We build websites, manage ads, and create videos that elevate your brand and drive actual business growth.
            </Text>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24 text-center md:text-left">
            <div className="flex flex-col gap-4">
              <Heading level={4} className="font-semibold text-lg">Services</Heading>
              <ul className="flex flex-col gap-2 text-white/70 text-sm">
                <li><a href="/#services" className="hover:text-accent-orange transition-colors">Web Development</a></li>
                <li><a href="/#services" className="hover:text-accent-orange transition-colors">Video Editing</a></li>
                <li><a href="/#services" className="hover:text-accent-orange transition-colors">Ad Campaigns</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <Heading level={4} className="font-semibold text-lg">Company</Heading>
              <ul className="flex flex-col gap-2 text-white/70 text-sm">
                <li><a href="/#testimonials" className="hover:text-accent-orange transition-colors">Testimonials</a></li>
                <li><a href="/#services" className="hover:text-accent-orange transition-colors">Services</a></li>
                <li><a href="/#contact" className="hover:text-accent-orange transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <Heading level={4} className="font-semibold text-lg">Contact Us</Heading>
              <ul className="flex flex-col gap-2 text-white/70 text-sm">
                <li><a href="mailto:hello@harpazotech.com" className="hover:text-accent-orange transition-colors">hello@harpazotech.com</a></li>
                <li><a href="tel:9385341273" className="hover:text-accent-orange transition-colors">9385341273</a></li>
              </ul>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm"
        >
          <p>&copy; {new Date().getFullYear()} Harpazo Tech. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
