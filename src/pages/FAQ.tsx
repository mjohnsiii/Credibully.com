import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is DIY credit repair?",
    answer: "DIY credit repair is the process of improving your credit score by yourself, without hiring a credit repair company. This includes reviewing your credit reports, disputing errors, managing credit utilization, and implementing strategies to build positive credit history."
  },
  {
    question: "How long does it take to see improvements in my credit score?",
    answer: "The timeline for credit improvement varies depending on your specific situation. Some people may see improvements in 30-60 days with proper credit management and successful disputes. However, building excellent credit typically takes 6-12 months of consistent positive credit behavior."
  },
  {
    question: "What's included in your DIY Business Credit Course?",
    answer: "Our DIY Business Credit Course includes comprehensive modules on establishing business credit, securing vendor accounts, obtaining business credit cards, managing business credit reports, and strategies for building strong business credit scores. You'll also get templates, worksheets, and step-by-step guides."
  },
  {
    question: "How does the Business Credit Building Toolkit work?",
    answer: "The Business Credit Building Toolkit provides all the essential resources needed to establish and build business credit, including vendor lists, application templates, tracking spreadsheets, and detailed guides for each step of the business credit building process."
  },
  {
    question: "Are your credit repair methods legal and effective?",
    answer: "Yes, all our methods comply with the Fair Credit Reporting Act (FCRA) and other relevant laws. We focus on legitimate strategies that have proven effective for thousands of clients, including proper dispute procedures, credit building techniques, and legal rights education."
  },
  {
    question: "How can I remove inquiries from my credit report?",
    answer: "Our 72-Hour Inquiry Removal Guide provides a step-by-step process for identifying and disputing unauthorized hard inquiries. While not all inquiries can be removed, those that are unauthorized or incorrect can often be disputed successfully within 72 hours."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-brand-cream min-h-screen pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-brand-gray text-center mb-12">
          Frequently Asked Questions
        </h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-brand-gray">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-brand-primary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-brand-primary" />
                )}
              </button>
              
              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 py-4 opacity-100'
                    : 'max-h-0 py-0 opacity-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;