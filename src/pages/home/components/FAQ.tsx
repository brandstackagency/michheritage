import { useState } from 'react';
import { faqs } from '@/mocks/fashionData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-primary-950 py-16 md:py-28">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12" data-reveal>
          <p className="font-script text-accent-300 text-2xl md:text-3xl mb-3">Questions</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-background-50 mb-4">Everything You Need to Know</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} data-reveal data-reveal-delay={index * 60} className="bg-primary-900/40 rounded-lg border border-primary-800/40 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                >
                  <span className="font-heading text-base md:text-lg font-semibold text-background-50">{faq.question}</span>
                  <i className={`${isOpen ? 'ri-subtract-line' : 'ri-add-line'} text-accent-400 text-xl`} aria-hidden="true"></i>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-background-100/80 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}