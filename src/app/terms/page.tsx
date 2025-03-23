
export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 font-[family-name:var(--font-geist-sans)]">

      {/* Terms Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-12">
          <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Terms of Service
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

            <h2 className="text-xl font-semibold mb-4 mt-8">
              1. Acceptance of Terms
            </h2>
            <p className="mb-4">
              By installing and using the UpGuardian Chrome extension
              (&quot;Extension&quot;), you agree to be bound by these Terms of
              Service. If you do not agree to these terms, please do not use our
              Extension.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">
              2. Description of Service
            </h2>
            <p className="mb-4">
              UpGuardian is a Chrome extension designed to analyze Upwork job
              postings to identify potential scams and suspicious activities.
              The Extension uses AI technology to provide risk assessments of
              job listings.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">
              3. User Accounts
            </h2>
            <p className="mb-4">
              To use certain features of the Extension, you may be required to
              create an account. You are responsible for maintaining the
              confidentiality of your account information and for all activities
              that occur under your account.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">
              4. Free Trial and Subscription
            </h2>
            <p className="mb-4">
              UpGuardian offers a free trial that includes 20 job scans. After
              using all free scans, users may purchase a subscription for
              continued use. Subscription terms and pricing will be clearly
              displayed before purchase.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">
              5. Intellectual Property
            </h2>
            <p className="mb-4">
              The Extension, including all content, features, and functionality,
              is owned by UpGuardian and is protected by international copyright,
              trademark, and other intellectual property laws.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">6. User Conduct</h2>
            <p className="mb-4">You agree not to use the Extension to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>
                Attempt to gain unauthorized access to the Extension or its
                related systems
              </li>
              <li>Interfere with or disrupt the operation of the Extension</li>
              <li>
                Reverse engineer or extract the source code of the Extension
              </li>
            </ul>

            <h2 className="text-xl font-semibold mb-4 mt-8">
              7. Disclaimer of Warranties
            </h2>
            <p className="mb-4">
              THE EXTENSION IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF
              ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT GUARANTEE THAT THE
              EXTENSION WILL IDENTIFY ALL POTENTIAL SCAMS OR RISKS. USERS SHOULD
              EXERCISE THEIR OWN JUDGMENT WHEN EVALUATING JOB OPPORTUNITIES.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">
              8. Limitation of Liability
            </h2>
            <p className="mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, UPGUARDIAN SHALL NOT BE
              LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER
              INCURRED DIRECTLY OR INDIRECTLY.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">
              9. Changes to Terms
            </h2>
            <p className="mb-4">
              We reserve the right to modify these Terms at any time. We will
              notify users of any significant changes. Your continued use of the
              Extension after such modifications constitutes your acceptance of
              the updated Terms.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">10. Termination</h2>
            <p className="mb-4">
              We reserve the right to terminate or suspend your account and
              access to the Extension at our sole discretion, without notice,
              for conduct that we believe violates these Terms or is harmful to
              other users, us, or third parties.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">
              11. Governing Law
            </h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with
              the laws of the United States, without regard to its conflict of
              law principles.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">12. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at{" "}
              <a
                href="mailto:support@up-guard.com"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                support@up-guard.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
