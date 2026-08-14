import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/faqData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Designer Shapes & Accent Lines (Soft & Subtle) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-12"
        >
          {/* Top Left Floating Rounded Square */}
          <rect x="80" y="100" width="70" height="70" rx="18" transform="rotate(-12 80 100)" stroke="#1B3B68" strokeWidth="1.2" strokeDasharray="4 4" />
          
          {/* Right Single Circle */}
          <circle cx="1350" cy="300" r="100" stroke="#1A382B" strokeWidth="1" strokeDasharray="5 5" />

          {/* Bottom Left Flow Line */}
          <path
            d="M-50,700 C300,550 700,850 1100,650"
            stroke="#1B3B68"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5EFFB] border border-[#C9DEF5] text-[#0B192C] text-xs font-bold tracking-wide">
            <HelpCircle className="w-3.5 h-3.5 text-[#25518E]" />
            <span>Häufige Fragen & Transparenz</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0B192C] tracking-tight">
            Wichtige Fragen von Eltern – Einfach erklärt
          </h2>

          <p className="text-base sm:text-lg text-[#1E293B]/75 leading-relaxed">
            Hier finden Sie verlässliche Antworten rund um das PäPKi®-Konzept, den täglichen Zeitaufwand und den Ablauf bei uns in der Praxis.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl sm:rounded-3xl border border-[#E2E8F0] overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 hover:bg-[#F8FAFC]/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-[#0B192C]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#0B192C] text-white rotate-180' : 'bg-[#E5EFFB] text-[#0B192C]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-[#1E293B]/80 leading-relaxed border-t border-[#E2E8F0] pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#EDF3FA] border border-[#CBD5E1]">
          <p className="text-sm text-[#1E293B]/80">
            Haben Sie eine spezielle Frage zu Ihrem Kind?{' '}
            <a href="#kontakt" className="font-bold text-[#0B192C] underline hover:text-[#25518E] transition-colors">
              Schreiben Sie uns direkt eine Nachricht
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
