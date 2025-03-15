export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 font-[family-name:var(--font-geist-sans)]">

      {/* Privacy Policy Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-12">
          <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Privacy Policy
          </h1>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Last Updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>

            <p className="mb-6">
              At UpGuard, we take your privacy seriously. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you use our Chrome extension. Please read this
              privacy policy carefully. If you do not agree with the terms of
              this privacy policy, please do not access the Extension.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">
              1. Information We Collect
            </h2>

            <h3 className="text-lg font-medium mb-2 mt-6">
              Personal Information
            </h3>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide
              to us when you:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Create an account (email address)</li>
              <li>Subscribe to our service</li>
              <li>Request customer support</li>
              <li>Provide feedback</li>
            </ul>

            <h3 className="text-lg font-medium mb-2 mt-6">Usage Information</h3>
            <p className="mb-4">
              When you use our Extension, we may collect information about your
              interaction with Upwork job listings, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Job listings you scan</li>
              <li>Results of scans</li>
              <li>Features you use</li>
              <li>Actions you take within the Extension</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4 mt-8">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">
              We may use the information we collect for various purposes,
              including to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide, maintain, and improve our Extension</li>
              <li>Process transactions and manage your account</li>
              <li>Respond to your comments and questions</li>
              <li>Send you technical notices and updates</li>
              <li>Monitor and analyze usage patterns</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Improve our AI models for better scam detection</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4 mt-8">
              3. Data Storage and Security
            </h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized or unlawful
              processing, accidental loss, destruction, or damage. However, no
              method of transmission over the Internet or electronic storage is
              100% secure.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">
              4. Data Retention
            </h2>
            <p className="mb-4">
              We will retain your personal information only for as long as
              necessary to fulfill the purposes outlined in this Privacy Policy,
              unless a longer retention period is required or permitted by law.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">
              5. Sharing Your Information
            </h2>
            <p className="mb-4">
              We may share your information in the following situations:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Third-Party Service Providers:</strong> We may share
                your information with third-party vendors who provide services
                on our behalf, such as payment processing and data analysis.
              </li>
              <li>
                <strong>Business Transfers:</strong> We may share your
                information in connection with a merger, sale of company assets,
                financing, or acquisition.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your
                information if required to do so by law or in response to valid
                requests by public authorities.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mb-4 mt-8">6. Your Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding
              your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                The right to access the personal information we hold about you
              </li>
              <li>The right to request correction of inaccurate information</li>
              <li>
                The right to request deletion of your personal information
              </li>
              <li>The right to restrict or object to processing</li>
              <li>The right to data portability</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4 mt-8">
              7. Cookies and Tracking Technologies
            </h2>
            <p className="mb-4">
              Our Extension may use cookies and similar tracking technologies to
              track activity and collect information about how you use our
              service. You can instruct your browser to refuse all cookies or to
              indicate when a cookie is being sent.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">
              8. Children&apos;s Privacy
            </h2>
            <p className="mb-4">
              The Extension is not intended for use by children under the age of
              13. We do not knowingly collect personal information from children
              under 13.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">
              9. Changes to This Privacy Policy
            </h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;Last Updated&quot; date.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">10. Contact Us</h2>
            <p className="mb-4">
              If you have questions or concerns about this Privacy Policy,
              please contact us at{" "}
              <a
                href="mailto:privacy@upguard.com"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                privacy@upguard.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
