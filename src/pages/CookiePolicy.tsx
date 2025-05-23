import React, { useEffect } from 'react';
import Layout from "@/components/Layout";

const CookiePolicy = () => {
  useEffect(() => {
    document.title = "Cookie Policy | The Clone Empire";
  }, []);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-empire-canyon mb-8">
          Cookie Policy
        </h1>
        <p className="text-sm text-empire-dark/70 dark:text-empire-light/70 mb-8">
          Last Updated: November 15, 2023
        </p>

        <div className="prose prose-lg dark:prose-invert prose-headings:text-empire-canyon prose-a:text-empire-cyan">
          <p>
            This Cookie Policy explains how The Clone Empire ("we", "us", or "our") uses cookies and similar technologies on our website and platform. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners. Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device after you have closed your browser, while session cookies are deleted as soon as you close your browser.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Types of Cookies We Use</h2>
          <p>
            We use the following types of cookies:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Essential Cookies:</strong> These are necessary for the website to function properly. They enable basic functions like page navigation, secure areas access, and form submissions. The website cannot function properly without these cookies.
            </li>
            <li>
              <strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve the way our website works.
            </li>
            <li>
              <strong>Functionality Cookies:</strong> These cookies allow the website to remember choices you make (such as your language or region) and provide enhanced, more personal features. They may also be used to provide services you have requested, such as watching a video or commenting on a blog.
            </li>
            <li>
              <strong>Targeting/Advertising Cookies:</strong> These cookies are used to deliver advertisements more relevant to you and your interests. They also help limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Specific Cookies We Use</h2>
          <p>
            Below is a detailed list of the cookies we use on our website:
          </p>
          <table className="min-w-full border border-empire-medium/20 dark:border-empire-light/10 mt-4">
            <thead>
              <tr className="bg-empire-medium/10 dark:bg-empire-light/5">
                <th className="p-3 text-left">Cookie Name</th>
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Purpose</th>
                <th className="p-3 text-left">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-empire-medium/20 dark:border-empire-light/10">
                <td className="p-3">_ce_session</td>
                <td className="p-3">Essential</td>
                <td className="p-3">Maintains user session state and authentication</td>
                <td className="p-3">Session</td>
              </tr>
              <tr className="border-t border-empire-medium/20 dark:border-empire-light/10 bg-empire-medium/5 dark:bg-empire-light/2">
                <td className="p-3">_ce_preferences</td>
                <td className="p-3">Functionality</td>
                <td className="p-3">Stores user preferences for site functionality</td>
                <td className="p-3">1 year</td>
              </tr>
              <tr className="border-t border-empire-medium/20 dark:border-empire-light/10">
                <td className="p-3">_ce_analytics</td>
                <td className="p-3">Performance</td>
                <td className="p-3">Collects anonymous statistics on user behavior</td>
                <td className="p-3">2 years</td>
              </tr>
              <tr className="border-t border-empire-medium/20 dark:border-empire-light/10 bg-empire-medium/5 dark:bg-empire-light/2">
                <td className="p-3">_ce_marketing</td>
                <td className="p-3">Targeting</td>
                <td className="p-3">Used to track visitors across websites for advertising</td>
                <td className="p-3">1 year</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Third-Party Cookies</h2>
          <p>
            In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and so on. These cookies may include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Google Analytics cookies for analyzing website traffic and user behavior</li>
            <li>Social media cookies from platforms like Facebook, Twitter, and LinkedIn</li>
            <li>Advertising cookies from our marketing partners</li>
            <li>Functionality cookies for embedded services like videos or maps</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Managing Cookies</h2>
          <p>
            Most web browsers allow you to control cookies through their settings. You can typically find these settings in the "options" or "preferences" menu of your browser. You may be able to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Delete all cookies from your browser</li>
            <li>Block all cookies from being set</li>
            <li>Block specific cookies from being set</li>
            <li>Block third-party cookies</li>
            <li>Clear all cookies when you close your browser</li>
          </ul>
          <p className="mt-4">
            Please note that if you choose to block or delete cookies, you may not be able to access certain areas or features of our website, and some services may not function properly.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Similar Technologies</h2>
          <p>
            In addition to cookies, we may use other similar technologies on our website:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Web Beacons:</strong> Small graphic images (also known as "pixel tags" or "clear GIFs") that may be included on our website and messages, which typically work in conjunction with cookies to identify our users and user behavior.</li>
            <li><strong>Local Storage:</strong> We may use local storage, such as HTML5 Local Storage and Local Shared Objects, to store content information and preferences.</li>
            <li><strong>Fingerprinting:</strong> We may use device fingerprinting technologies to help us identify devices and prevent fraud.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to This Cookie Policy</h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page, and if the changes are significant, we will provide a more prominent notice.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
          <p>
            If you have questions or concerns about our use of cookies and similar technologies, please contact us at:
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

export default CookiePolicy; 