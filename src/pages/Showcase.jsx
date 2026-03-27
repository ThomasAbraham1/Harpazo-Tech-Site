import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import { Heading, Text } from '../components/ui/Typography';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Select from '../components/ui/Select';
import Divider from '../components/ui/Divider';
import Modal from '../components/ui/Modal';
import Accordion from '../components/ui/Accordion';

import { fadeUp, staggerContainer } from '../lib/animations';

const Showcase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const accordionItems = [
    { title: 'What is your return policy?', content: 'We offer a 30-day money-back guarantee on all software purchases.' },
    { title: 'Do you provide onboarding?', content: 'Yes, our enterprise plan includes dedicated 1-on-1 onboarding and training sessions.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <Section variant="dark" padding="sm" className="mb-12">
        <Container>
          <Heading level={1} className="text-white mb-4">Design System Showcase</Heading>
          <Text className="text-white/80">A visual reference for all foundational components built for the Harpazo Tech Site.</Text>
        </Container>
      </Section>

      <Container>
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          animate="show"
          className="grid gap-16"
        >
          {/* Typography */}
          <motion.section variants={fadeUp}>
            <Heading level={2} className="mb-6 pb-2 border-b">Typography</Heading>
            <div className="space-y-4">
              <Heading level={1}>Heading 1: Plus Jakarta Sans</Heading>
              <Heading level={2}>Heading 2: Plus Jakarta Sans</Heading>
              <Heading level={3}>Heading 3: Plus Jakarta Sans</Heading>
              <Text size="xl">Text XL: Outfit Body Font. Pack my box with five dozen liquor jugs.</Text>
              <Text size="base">Text Base: Outfit Body Font. The quick brown fox jumps over the lazy dog.</Text>
              <Text size="sm" subtle>Text Small Subtle: Useful for helper text or captions.</Text>
            </div>
          </motion.section>

          {/* Buttons */}
          <motion.section variants={fadeUp}>
            <Heading level={2} className="mb-6 pb-2 border-b">Buttons</Heading>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary">Primary (Accent Orange)</Button>
              <Button variant="secondary">Secondary (Secondary Blue)</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
            <div className="flex flex-wrap gap-4 items-center mt-4">
              <Button size="sm" variant="primary">Small</Button>
              <Button size="md" variant="primary">Medium</Button>
              <Button size="lg" variant="primary">Large</Button>
              <Button disabled variant="primary">Disabled</Button>
            </div>
          </motion.section>

          {/* Badges */}
          <motion.section variants={fadeUp}>
            <Heading level={2} className="mb-6 pb-2 border-b">Badges</Heading>
            <div className="flex flex-wrap gap-4">
              <Badge color="accent-orange" variant="solid">Sale</Badge>
              <Badge color="primary-blue" variant="outline">New</Badge>
              <Badge color="secondary-blue" variant="soft">Updates</Badge>
            </div>
          </motion.section>

          {/* Cards */}
          <motion.section variants={fadeUp}>
            <Heading level={2} className="mb-6 pb-2 border-b">Cards</Heading>
            <div className="grid md:grid-cols-3 gap-6">
              <Card variant="default" className="p-6">
                <Heading level={4} className="mb-2">Default Card</Heading>
                <Text subtle className="mb-4">Standard soft shadow appearance.</Text>
                <Button variant="outline" size="sm">Action</Button>
              </Card>
              <Card variant="outlined" className="p-6" hoverEffect>
                <Heading level={4} className="mb-2">Outlined Card</Heading>
                <Text subtle className="mb-4">With secondary-blue borders + hover effect.</Text>
                <Button variant="secondary" size="sm">Action</Button>
              </Card>
              <Card variant="elevated" className="p-6">
                <Heading level={4} className="mb-2">Elevated Card</Heading>
                <Text subtle className="mb-4">Higher shadow for prominent content.</Text>
                <Button variant="primary" size="sm">Action</Button>
              </Card>
            </div>
          </motion.section>

          {/* Form Controls */}
          <motion.section variants={fadeUp}>
            <Heading level={2} className="mb-6 pb-2 border-b">Form Controls</Heading>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <Input label="Email Address" placeholder="you@company.com" />
                <Input label="Password" type="password" error="Password must be at least 8 characters." />
                <Select 
                  label="Department" 
                  options={[{value: 'sales', label: 'Sales'}, {value: 'support', label: 'Support'}]} 
                />
              </div>
              <div>
                <Textarea label="Message" placeholder="How can we help you?" helperText="Please provide detailed information." />
              </div>
            </div>
          </motion.section>

          {/* Interactive (Modal, Accordion) */}
          <motion.section variants={fadeUp}>
            <Heading level={2} className="mb-6 pb-2 border-b">Interactive (Modal & Accordion)</Heading>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Button onClick={() => setIsModalOpen(true)} variant="secondary">Open Modal</Button>
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="System Notification">
                  <Text className="mb-6">This is a fully accessible, animated modal dialog. It traps focus and locks body scroll.</Text>
                  <div className="flex justify-end gap-3">
                    <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                    <Button variant="primary" onClick={() => setIsModalOpen(false)}>Confirm</Button>
                  </div>
                </Modal>
              </div>
              <div>
                <Accordion items={accordionItems} />
              </div>
            </div>
          </motion.section>

          {/* Dividers */}
          <motion.section variants={fadeUp}>
            <Heading level={2} className="mb-6 pb-2 border-b">Dividers</Heading>
            <Divider />
            <Divider label="OR" />
          </motion.section>

        </motion.div>
      </Container>
    </div>
  );
};

export default Showcase;
