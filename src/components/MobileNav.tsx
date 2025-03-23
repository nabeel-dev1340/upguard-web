"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden" ref={navRef}>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="text-gray-700 dark:text-gray-300 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-50 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">🛡️</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                  UpGuardian
                </span>
              </div>
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                className="text-gray-700 dark:text-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-6">
            <nav className="flex flex-col space-y-6">
              <a
                href="#features"
                onClick={closeMenu}
                className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                Features
              </a>
              <a
                href="#pricing"
                onClick={closeMenu}
                className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                Pricing
              </a>
              <a
                href="#how-it-works"
                onClick={closeMenu}
                className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                onClick={closeMenu}
                className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                Testimonials
              </a>
              <a
                href="#faq"
                onClick={closeMenu}
                className="text-xl font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                FAQ
              </a>
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-col space-y-4">
                  <Link
                    href="/privacy"
                    onClick={closeMenu}
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    onClick={closeMenu}
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </nav>
          </div>

          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <a
              href="https://chromewebstore.google.com/detail/upguard-ai-powered-upwork/knbbafgpgdjpenknicfagioijfhcomfp"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="block w-full py-3 px-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition text-center shadow-md hover:shadow-lg"
            >
              Install Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
