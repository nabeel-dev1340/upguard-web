import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import Image from "next/image";
import ScreenshotsCarousel from "@/components/ScreenshotsCarousel";

export default function Home() {
  // FAQ data
  const faqs = [
    {
      question: "How does UpGuardian work?",
      answer:
        "UpGuardian uses advanced AI technology to analyze Upwork job listings and identify potential red flags that might indicate scams or problematic clients. The extension provides risk assessments and detailed explanations to help you make informed decisions.",
    },
    {
      question: "How many job scans do I get with the free trial?",
      answer:
        "The free trial includes 10 job scans. After using all your free scans, you'll need to upgrade to a premium subscription to continue using UpGuardian.",
    },
    {
      question: "Can UpGuardian guarantee it will catch all scams?",
      answer:
        "While UpGuardian uses advanced technology to identify potential scams, no system is perfect. We recommend using UpGuardian as one tool in your evaluation process, alongside your own judgment and Upwork's built-in protections.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "You can cancel your subscription at any time by going to your account settings within the extension. If you have any issues, please contact our support team at support@up-guard.com.",
    },
    {
      question: "When will premium subscriptions be available?",
      answer:
        "We're working on launching premium subscriptions with unlimited job scans very soon! In the meantime, you can enjoy our free trial with 10 job scans to experience the full capabilities of UpGuardian. Sign up for our newsletter to be the first to know when premium plans launch.",
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
              AI-powered scam detection for fake Upwork jobs. Stay safe and focus on
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
              UpGuardian helps you identify potential scams before you waste time
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
              <h3 className="text-xl font-bold mb-3">Risk Assessment</h3>
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
            UpGuardian seamlessly integrates with Upwork to protect you from scams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Install Extension</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Add UpGuardian to Chrome in just a few clicks.
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
                    10 scans included
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

      {/* Screenshots Section */}
      <section className="container mx-auto px-6 py-16 md:py-24 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See UpGuardian in Action
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Save your precious connects and time by scanning jobs before you
            apply.
          </p>
        </div>

        <div className="relative">
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl" />

          <ScreenshotsCarousel />

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
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
              Have questions about UpGuardian? Find answers to common questions
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
      <section id="pricing" className="container mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the plan that best fits your needs. Start with our free trial
            or upgrade to premium for unlimited access.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-6">
              <div className="inline-block bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Free Trial
              </div>
              <h3 className="text-2xl font-bold mb-2">Basic Plan</h3>
              <div className="text-4xl font-bold mb-2">$0</div>
              <p className="text-gray-600 dark:text-gray-400">
                Perfect for getting started
              </p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>10 job scans per month</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Advanced risk assessment</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-green-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Email support</span>
              </li>
            </ul>
            <a
              href="#install"
              className="block w-full py-3 px-4 rounded-full border-2 border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition text-center"
            >
              Get Started
            </a>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-b from-indigo-600 to-purple-600 rounded-2xl shadow-md p-8 border border-indigo-500 relative transform hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-0 right-0 mt-4 mr-4">
              <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            </div>
            <div className="text-center mb-6">
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                Premium
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">
                Premium Plan
              </h3>
              <div className="text-4xl font-bold mb-2 text-white">$6.99</div>
              <p className="text-white/80">per month</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-white">
                <svg
                  className="w-5 h-5 text-white mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>500 job scans per month</span>
              </li>
              <li className="flex items-center text-white">
                <svg
                  className="w-5 h-5 text-white mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Advanced risk assessment</span>
              </li>
              <li className="flex items-center text-white">
                <svg
                  className="w-5 h-5 text-white mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Priority support</span>
              </li>
            </ul>
            <a
              href="#install"
              className="block w-full py-3 px-4 rounded-full bg-white text-indigo-600 font-medium hover:bg-gray-50 transition text-center"
            >
              Upgrade Now
            </a>
          </div>
        </div>
      </section>

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
              Hear from freelancers who use UpGuardian to stay safe on Upwork.
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
                &quot;UpGuardian saved me from a dangerous payment scam. The
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
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get started with UpGuardian today and stay safe on Upwork.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://chromewebstore.google.com/detail/upguard-ai-powered-upwork/knbbafgpgdjpenknicfagioijfhcomfp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-full bg-white text-indigo-600 font-bold hover:bg-gray-100 transition shadow-md hover:shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <Image
                    src="/chrome_logo.png"
                    alt="Chrome"
                    width={25}
                    height={25}
                  />
                  <span>Add to Chrome</span>
                </div>
              </a>
              <a
                href="https://chromewebstore.google.com/detail/upguard-ai-powered-upwork/knbbafgpgdjpenknicfagioijfhcomfp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-full bg-white text-indigo-600 font-bold hover:bg-gray-100 transition shadow-md hover:shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <Image
                    src="/edge_logo.svg"
                    alt="Edge"
                    width={25}
                    height={25}
                  />
                  <span>Add to Edge</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
