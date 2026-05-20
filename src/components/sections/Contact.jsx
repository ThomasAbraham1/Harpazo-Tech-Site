import React from 'react';
import { motion } from 'framer-motion';
import { Heading, Text } from '../ui/Typography';
import Button from '../ui/Button';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Heading level={2} className="mb-6">
            Let's Build Something Great
          </Heading>
          <Text size="lg" className="text-gray-600 max-w-2xl mx-auto">
            Ready to transform your digital presence? Get in touch with our team today and let's discuss how we can help your business grow.
          </Text>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-elevated p-8 md:p-12 border border-gray-100"
        >
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-primary-blue">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe" 
                  className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-primary-blue">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@example.com" 
                  className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors w-full"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-primary-blue">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                placeholder="Tell us about your project..." 
                className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-colors w-full resize-none"
              ></textarea>
            </div>
            
            <div className="mt-4 flex justify-center">
              <Button variant="primary" size="lg" className="w-full md:w-auto px-12">
                Send Message
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-50 opacity-50 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-orange-50 opacity-50 blur-3xl -z-10"></div>
    </section>
  );
};

export default Contact;
