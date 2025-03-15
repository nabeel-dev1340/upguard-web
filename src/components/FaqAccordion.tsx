"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {faq.question}
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 text-indigo-600 transition-transform duration-300 ${
                openIndex === index ? "transform rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={`px-6 overflow-hidden transition-all duration-300 ${
              openIndex === index
                ? "max-h-96 pb-4"
                : "max-h-0 opacity-0 pointer-events-none"
            }`}
          >
            <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
