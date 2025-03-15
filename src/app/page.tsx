import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";

export default function Home() {
  // FAQ data
  const faqs = [
    {
      question: "How does UpGuard work?",
      answer:
        "UpGuard uses advanced AI technology to analyze Upwork job listings and identify potential red flags that might indicate scams or problematic clients. The extension provides risk assessments and detailed explanations to help you make informed decisions.",
    },
    {
      question: "How many job scans do I get with the free trial?",
      answer:
        "The free trial includes 20 job scans. After using all your free scans, you'll need to upgrade to a premium subscription to continue using UpGuard.",
    },
    {
      question: "Can UpGuard guarantee it will catch all scams?",
      answer:
        "While UpGuard uses advanced technology to identify potential scams, no system is perfect. We recommend using UpGuard as one tool in your evaluation process, alongside your own judgment and Upwork's built-in protections.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "You can cancel your subscription at any time by going to your account settings within the extension. If you have any issues, please contact our support team at support@upguard.com.",
    },
    {
      question: "When will premium subscriptions be available?",
      answer:
        "We're working on launching premium subscriptions with unlimited job scans very soon! In the meantime, you can enjoy our free trial with 20 job scans to experience the full capabilities of UpGuard. Sign up for our newsletter to be the first to know when premium plans launch.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Protect Your{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                Freelance Career
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              AI-powered scam detection for Upwork jobs. Stay safe and focus on
              legitimate opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#install"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition text-center shadow-md hover:shadow-lg"
              >
                Install Extension
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition text-center"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl shadow-xl transform -rotate-3"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg">
                    <div className="flex items-center">
                      <span className="text-red-600 dark:text-red-400 mr-2">
                        🚨
                      </span>
                      <span className="text-red-800 dark:text-red-400 font-medium">
                        High Risk: Unverified payment method
                      </span>
                    </div>
                  </div>
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg">
                    <div className="flex items-center">
                      <span className="text-yellow-600 dark:text-yellow-400 mr-2">
                        ⚠️
                      </span>
                      <span className="text-yellow-800 dark:text-yellow-400 font-medium">
                        Medium Risk: New client account
                      </span>
                    </div>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg">
                    <div className="flex items-center">
                      <span className="text-green-600 dark:text-green-400 mr-2">
                        ✅
                      </span>
                      <span className="text-green-800 dark:text-green-400 font-medium">
                        Low Risk: Clear project scope
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="bg-gray-50 dark:bg-gray-800/50 py-16 md:py-24"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              UpGuard helps you identify potential scams before you waste time
              on fraudulent job listings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition p-8 border border-gray-100 dark:border-gray-700">
              <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Job Scanning</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Analyze job listings in real-time to detect red flags and
                potential scams before you apply.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition p-8 border border-gray-100 dark:border-gray-700">
              <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold mb-3">Risk Assessment</h3>
                <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                  Coming Soon: Premium
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Get detailed risk scores and specific warning signs that might
                indicate fraudulent opportunities.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition p-8 border border-gray-100 dark:border-gray-700">
              <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Save Time & Stay Safe</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Focus on legitimate opportunities and avoid wasting time on
                scams, protecting your Upwork reputation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="container mx-auto px-6 py-16 md:py-24"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            UpGuard seamlessly integrates with Upwork to protect you from scams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Install Extension</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Add UpGuard to Chrome in just a few clicks.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Browse Upwork Jobs</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Navigate to any job listing on Upwork.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Scan for Red Flags</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Click the scan button on any job page to get an instant risk
              analysis.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 max-w-3xl mx-auto border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <div className="flex items-center">
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                    FREE TRIAL
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    20 scans included
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  No credit card required to start
                </p>
              </div>
              <a
                href="#install"
                className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition shadow-md hover:shadow-lg"
              >
                Install Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have questions about UpGuard? Find answers to common questions
              below.
            </p>
          </div>

          <FaqAccordion faqs={faqs} />

          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium inline-flex items-center"
            >
              <span>Still have questions? Contact us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/30 rounded-xl p-6 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/4 flex justify-center">
                <div className="bg-indigo-600 w-20 h-20 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-2 text-center md:text-left">
                  Subscription Plans
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Start with our{" "}
                  <span className="font-semibold">Free Trial</span> that
                  includes 20 job scans. Our{" "}
                  <span className="font-semibold">Premium Plan</span> with
                  unlimited scans is coming soon!
                </p>
                <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Stay tuned for our launch announcement
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="bg-gray-50 dark:bg-gray-800/50 py-16 md:py-24"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Freelancers Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Hear from freelancers who use UpGuard to stay safe on Upwork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                &quot;After losing time on fake jobs, this extension has been a
                game-changer for my Upwork workflow!&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                  <span className="font-medium text-indigo-800 dark:text-indigo-400">
                    SN
                  </span>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">S Nabeel</h4>
                  <p className="text-gray-500 text-sm">Freelance Developer</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                &quot;UpGuard saved me from a dangerous payment scam. The
                warnings were clear and helped me avoid a disaster.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                  <span className="font-medium text-indigo-800 dark:text-indigo-400">
                    JD
                  </span>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Jane Doe</h4>
                  <p className="text-gray-500 text-sm">Freelance Designer</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                &quot;I&apos;m new to freelancing and this tool helps me
                identify risky clients. Great for beginners!&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                  <span className="font-medium text-indigo-800 dark:text-indigo-400">
                    MP
                  </span>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Michael P.</h4>
                  <p className="text-gray-500 text-sm">Content Writer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Install CTA */}
      <section id="install" className="container mx-auto px-6 py-16 md:py-24">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to protect your freelance career?
            </h2>
            <p className="text-xl mb-4 max-w-2xl mx-auto">
              Get started with UpGuard today and stay safe on Upwork.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-8 inline-block">
              <div className="flex items-center">
                <div className="bg-yellow-400 p-1 rounded-full mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                </div>
                <p className="text-sm font-medium">
                  Premium subscriptions with unlimited scans coming soon!
                </p>
              </div>
            </div>
            <a
              href="https://chrome.google.com/webstore/detail/your-extension-id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full bg-white text-indigo-600 font-bold hover:bg-gray-100 transition shadow-md hover:shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
                <span>Add to Chrome</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
