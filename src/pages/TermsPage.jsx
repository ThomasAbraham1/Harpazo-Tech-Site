import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SmoothScroll from '../components/layout/SmoothScroll';
import { Heading, Text } from '../components/ui/Typography';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SmoothScroll>
      <div className="bg-white min-h-screen">
        <Header />
        
        <main className="pt-32 pb-24 px-4 max-w-4xl mx-auto">
          <Heading level={1} className="mb-8">Terms of Service</Heading>
          
          <div className="space-y-6">
            <Text><strong>Last Updated: {new Date().toLocaleDateString()}</strong></Text>
            
            <Heading level={3}>1. Acceptance of Terms</Heading>
            <Text>
              By accessing and using the Harpazo Tech website and our services, you accept and agree to be bound by the terms and provision of this agreement.
            </Text>

            <Heading level={3}>2. Description of Service</Heading>
            <Text>
              Harpazo Tech provides digital agency services including but not limited to custom web development, video editing, and digital advertising campaigns. The specifics of any project deliverables will be outlined in a separate Statement of Work (SOW) or contract.
            </Text>

            <Heading level={3}>3. Intellectual Property</Heading>
            <Text>
              Upon full payment for our services, the client typically retains ownership of the final deliverables, subject to the specific terms of our project contract. Harpazo Tech retains the right to use the completed work for promotional purposes in our portfolio unless a non-disclosure agreement (NDA) is signed.
            </Text>

            <Heading level={3}>4. User Conduct</Heading>
            <Text>
              You agree not to use our services for any unlawful purpose or in any way that might harm, damage, or disparage any other party.
            </Text>

            <Heading level={3}>5. Limitation of Liability</Heading>
            <Text>
              In no event shall Harpazo Tech be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use our services.
            </Text>

            <Heading level={3}>6. Modifications to Terms</Heading>
            <Text>
              We reserve the right to modify these terms at any time. Your continued use of the Harpazo Tech website or services following any such modification constitutes your acceptance of these modified terms.
            </Text>

            <Heading level={3}>7. Contact Information</Heading>
            <Text>
              If you have any questions about these Terms, please contact us through our website.
            </Text>
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default TermsOfService;
