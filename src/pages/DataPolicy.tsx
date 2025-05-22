import React, { useEffect } from 'react';
import Layout from "@/components/Layout";

const DataPolicy = () => {
  useEffect(() => {
    document.title = "Data Policy | The Clone Empire";
  }, []);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-empire-red mb-8">
          Data Policy
        </h1>
        <p className="text-sm text-empire-dark/70 dark:text-empire-light/70 mb-8">
          Last Updated: November 15, 2023
        </p>

        <div className="prose prose-lg dark:prose-invert prose-headings:text-empire-red prose-a:text-empire-lime">
          <p>
            At The Clone Empire, we believe in transparency about how we collect, use, and share data. This Data Policy outlines our practices regarding the data processed by our AI agent clones and platform.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Data Collection</h2>
          <p>
            Our AI agent clones and platform collect various types of data, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>User-Provided Data:</strong> Information you directly provide when using our services, such as account information, queries, commands, and uploaded content.</li>
            <li><strong>Generated Data:</strong> Outputs, responses, and content created by our AI agent clones based on your interactions.</li>
            <li><strong>Interaction Data:</strong> Information about how you use our services, including session duration, feature usage, and interaction patterns.</li>
            <li><strong>Technical Data:</strong> Device information, IP addresses, browser types, operating systems, and other technical identifiers.</li>
            <li><strong>Third-Party Data:</strong> Information we may receive from third-party services integrated with our platform.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Data Usage</h2>
          <p>
            We use the collected data for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Service Provision:</strong> To operate, maintain, and deliver our AI agent clone services.</li>
            <li><strong>Personalization:</strong> To customize and improve your experience with our platform.</li>
            <li><strong>AI Training:</strong> To train, fine-tune, and improve our AI models and agent capabilities.</li>
            <li><strong>Analytics:</strong> To understand usage patterns and optimize our services.</li>
            <li><strong>Security:</strong> To detect, prevent, and address technical issues and security threats.</li>
            <li><strong>Compliance:</strong> To fulfill our legal obligations and enforce our terms.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. AI Training and Model Improvement</h2>
          <p>
            Our AI agent clones are powered by machine learning models that require data for training and improvement. We may use data from your interactions to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Train new AI models or improve existing ones</li>
            <li>Enhance the accuracy, relevance, and capabilities of our AI agent clones</li>
            <li>Develop new features and functionalities</li>
            <li>Identify and fix issues or limitations in our AI systems</li>
          </ul>
          <p>
            We implement technical and organizational measures to protect privacy during the AI training process, including data minimization, anonymization where appropriate, and secure processing environments.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Sharing and Disclosure</h2>
          <p>
            We may share data with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Service Providers:</strong> Third parties that help us deliver our services, such as cloud infrastructure providers, analytics services, and customer support tools.</li>
            <li><strong>Business Partners:</strong> Organizations we collaborate with to offer integrated or joint services, with appropriate data protection agreements in place.</li>
            <li><strong>Legal Compliance:</strong> When required by law, regulation, legal process, or governmental request.</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with appropriate safeguards for your data.</li>
            <li><strong>With Your Consent:</strong> When you have explicitly agreed to the sharing of your data.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Retention</h2>
          <p>
            We retain data for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. The specific retention periods vary based on:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The type and sensitivity of the data</li>
            <li>The purpose for which the data is used</li>
            <li>Legal, contractual, or operational requirements</li>
            <li>Your account status and preferences</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your data, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encryption of data in transit and at rest</li>
            <li>Access controls and authentication mechanisms</li>
            <li>Regular security assessments and audits</li>
            <li>Employee training on data protection</li>
            <li>Incident response procedures</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your Data Rights</h2>
          <p>
            Depending on your location and applicable laws, you may have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the data we hold about you</li>
            <li>Correct inaccurate or incomplete data</li>
            <li>Delete your data under certain circumstances</li>
            <li>Restrict or object to certain processing activities</li>
            <li>Receive your data in a portable format</li>
            <li>Opt out of AI model training using your data</li>
            <li>Lodge a complaint with a supervisory authority</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to This Policy</h2>
          <p>
            We may update this Data Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes through our website or other communication channels.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
          <p>
            If you have questions or concerns about our data practices or this Data Policy, please contact our Data Protection Officer at:
          </p>
          <p className="mt-4">
            <strong>Email:</strong> data@thecloneempire.com<br />
            <strong>Address:</strong> 123 AI Boulevard, Tech District, San Francisco, CA 94105
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default DataPolicy; 