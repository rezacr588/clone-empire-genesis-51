import React, { useEffect } from 'react';
import Layout from "@/components/Layout";

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service | The Clone Empire";
  }, []);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-empire-red mb-8">
          Terms of Service
        </h1>
        <p className="text-sm text-empire-dark/70 dark:text-empire-light/70 mb-8">
          Last Updated: November 15, 2023
        </p>

        <div className="prose prose-lg dark:prose-invert prose-headings:text-empire-red prose-a:text-empire-lime">
          <p>
            Welcome to The Clone Empire. These Terms of Service ("Terms") govern your use of our website, platform, and services related to AI agent clones ("Services"). By accessing or using our Services, you agree to be bound by these Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using our Services, you agree to these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use our Services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Changes to Terms</h2>
          <p>
            We may modify these Terms at any time. We will provide notice of any material changes by posting the updated Terms on our website or through other communications. Your continued use of the Services after such changes constitutes your acceptance of the new Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Account Registration</h2>
          <p>
            To access certain features of our Services, you may need to register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
          </p>
          <p>
            You are responsible for safeguarding your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Use of Services</h2>
          <p>
            You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the Services in any way that violates any applicable law or regulation</li>
            <li>Use the Services to transmit any material that is defamatory, offensive, or otherwise objectionable</li>
            <li>Attempt to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Services</li>
            <li>Use any robot, spider, or other automatic device to access the Services for any purpose without our express written permission</li>
            <li>Take any action that imposes an unreasonable or disproportionately large load on our infrastructure</li>
            <li>Upload invalid data, viruses, worms, or other software agents through the Services</li>
            <li>Collect or harvest any personally identifiable information from the Services</li>
            <li>Use the Services for any commercial solicitation purposes without our permission</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. AI Agent Clones</h2>
          <p>
            Our Services provide access to AI agent clones that can perform various tasks. You understand and agree that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>AI agent clones are provided "as is" and may not be suitable for all purposes</li>
            <li>You are responsible for reviewing and approving any output or actions taken by AI agent clones</li>
            <li>You will not use AI agent clones for any illegal, harmful, or unethical purposes</li>
            <li>We are not responsible for any decisions made or actions taken based on information or suggestions provided by AI agent clones</li>
            <li>AI agent clones may collect and process data to improve their functionality</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Intellectual Property</h2>
          <p>
            The Services and their original content, features, and functionality are owned by The Clone Empire and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
          <p>
            You retain ownership of any content you submit through the Services. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute such content in connection with providing and promoting the Services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Payment and Subscription</h2>
          <p>
            Certain aspects of our Services may require payment or subscription. By subscribing to our Services, you agree to pay all fees in accordance with the pricing and terms in effect at the time of purchase.
          </p>
          <p>
            We may change our prices at any time. If we change our prices, we will provide notice of the change on the website or via email.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Termination</h2>
          <p>
            We may terminate or suspend your account and access to the Services immediately, without prior notice or liability, for any reason, including if you breach these Terms.
          </p>
          <p>
            Upon termination, your right to use the Services will immediately cease. All provisions of the Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Disclaimer of Warranties</h2>
          <p>
            THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Limitation of Liability</h2>
          <p>
            IN NO EVENT SHALL THE CLONE EMPIRE, NOR ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="mt-4">
            <strong>Email:</strong> legal@thecloneempire.com<br />
            <strong>Address:</strong> 123 AI Boulevard, Tech District, San Francisco, CA 94105
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService; 