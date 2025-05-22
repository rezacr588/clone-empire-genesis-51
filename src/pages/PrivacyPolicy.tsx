import React, { useEffect } from 'react';
import Layout from "@/components/Layout";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | The Clone Empire";
  }, []);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-empire-red mb-8">
          Privacy Policy
        </h1>
        <p className="text-sm text-empire-dark/70 dark:text-empire-light/70 mb-8">
          Last Updated: November 15, 2023
        </p>

        <div className="prose prose-lg dark:prose-invert prose-headings:text-empire-red prose-a:text-empire-lime">
          <p>
            At The Clone Empire, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI agent platform and related services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, information we collect automatically when you use our services, and information from third-party sources.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">Personal Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact information (name, email address, phone number)</li>
            <li>Account credentials</li>
            <li>Payment information</li>
            <li>Profile information</li>
            <li>Communications with us</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Usage Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Log data (IP address, browser type, pages visited)</li>
            <li>Device information</li>
            <li>Location information</li>
            <li>AI agent interaction data</li>
            <li>Cookies and similar technologies</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p>
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Providing, maintaining, and improving our services</li>
            <li>Processing transactions</li>
            <li>Sending administrative information</li>
            <li>Personalizing your experience</li>
            <li>Training and improving our AI models</li>
            <li>Marketing and promotional purposes</li>
            <li>Analyzing usage patterns</li>
            <li>Protecting our rights and preventing fraud</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Sharing Your Information</h2>
          <p>
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service providers who perform services on our behalf</li>
            <li>Business partners with your consent</li>
            <li>In response to legal requirements</li>
            <li>To protect our rights or the rights of others</li>
            <li>In connection with a business transaction</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights and Choices</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access to your personal information</li>
            <li>Correction of inaccurate information</li>
            <li>Deletion of your information</li>
            <li>Restriction of processing</li>
            <li>Data portability</li>
            <li>Objection to processing</li>
            <li>Withdrawal of consent</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">International Data Transfers</h2>
          <p>
            Your information may be transferred to, and processed in, countries other than the country in which you reside. These countries may have data protection laws that are different from the laws of your country.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Children's Privacy</h2>
          <p>
            Our services are not directed to children under the age of 16. We do not knowingly collect personal information from children under 16. If we learn we have collected personal information from a child under 16, we will delete that information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date. We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
          </p>
          <p className="mt-4">
            <strong>Email:</strong> privacy@thecloneempire.com<br />
            <strong>Address:</strong> 123 AI Boulevard, Tech District, San Francisco, CA 94105
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy; 