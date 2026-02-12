'use client'


import  { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: FAQItem[] = [
    {
      question: "I'm experiencing technical issues. Who should I contact?",
      answer: "For technical problems, contact your IT Help Desk or the support team listed in the system. Include details about the issue, error messages, and what you were trying to do."
    },
    {
      question: "How do I refer a candidate for an open position?",
      answer: "Navigate to the Careers or Referrals section, search for the open position, and click 'Refer a Candidate.' Enter the candidate's information and submit. Many companies offer referral bonuses for successful hires.' "
    },
    {
      question: "What happens during the onboarding process?",
      answer: "New hires receive access to the TMS where they can complete required paperwork, watch orientation videos, review company policies, meet their team, and access their initial training assignments."
    },
    {
      question: "How long does onboarding last?",
      answer: "Initial onboarding typically lasts 1-2 weeks, but the full onboarding experience may extend 90 days or longer as you complete role-specific training and integration activities."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" bg-linear-to-r from-white/50 to-blue-300  py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-4 items-start">
          <div className="space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              We're here to answer
              <br />
              all your questions.
            </h1>
            <button className="bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-transparent hover:text-black transition-colors duration-200 shadow-lg">
              Request Demo
            </button>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white/30 border border-purple-300/20 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/50"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className=" text-lg font-medium pr-4 opacity-80">
                    {faq.question}
                  </span>
                  <span className="text-blue-900 text-2xl shrink-0 transition-transform duration-300">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-5 opacity-70 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fixed bottom-6 right-6">
          <button className="bg-white  px-6 py-3 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-200 font-medium flex items-center gap-2">
            Need help with finding something?
            <br />
            <span className=" underline">Click here!</span>
          </button>
        </div>
      </div>
    </div>
  );
};
