import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SmoothScroll from '../components/layout/SmoothScroll';
import { Heading, Text } from '../components/ui/Typography';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SmoothScroll>
      <div className="bg-white min-h-screen">
        {/* We add a solid background to Header by wrapping it or modifying it. Since Header becomes solid on scroll, we can just push the content down */}
        <Header />
        
        <main className="pt-32 pb-24 px-4 max-w-4xl mx-auto">
          <Heading level={1} className="mb-8">Privacy Policy</Heading>
          
          <div className="space-y-6">
            <Text><strong>Last Updated: {new Date().toLocaleDateString()}</strong></Text>
            
            <Heading level={3}>1. Information We Collect</Heading>
            <Text>
              Harpazo Tech ("we", "our", or "us") collects information that you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us. This may include your name, email address, phone number, and any other details you choose to provide.
            </Text>

            <Heading level={3}>2. How We Use Your Information</Heading>
            <Text>
              We use the information we collect to provide, maintain, and improve our services (web development, video editing, and ad campaigns), to communicate with you, to process your requests, and to send you important updates or marketing materials (if you have opted in).
            </Text>

            <Heading level={3}>3. Sharing of Information</Heading>
            <Text>
              We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners and trusted affiliates.
            </Text>

            <Heading level={3}>4. Data Security</Heading>
            <Text>
              We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information stored on our site.
            </Text>

            <Heading level={3}>5. Changes to This Privacy Policy</Heading>
            <Text>
              Harpazo Tech has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage Users to frequently check this page for any changes.
            </Text>

            <Heading level={3}>6. Contact Us</Heading>
            <Text>
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us.
            </Text>
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default PrivacyPolicy;
