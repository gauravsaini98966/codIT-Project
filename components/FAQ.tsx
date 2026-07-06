"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I need prior coding experience to join?",
    a: "No. Every track starts with foundations — HTML, CSS, JavaScript and Git — before moving into specialized topics.",
  },
  {
    q: "Are classes live or self-paced?",
    a: "Both. Live mentor sessions happen weekly for reviews and Q&A, while lessons and projects are self-paced so you can fit them around work or college.",
  },
  {
    q: "Can I switch tracks after enrolling?",
    a: "Yes, within the first two weeks of a cohort. After that, we recommend finishing the track and adding another later — most tracks share the same foundations.",
  },
  {
    q: "Do you help with job placement?",
    a: "Every track ends with resume reviews, mock interviews, and introductions through our hiring partner network.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-16 sm:py-20 lg:py-28 border-t border-line bg-surface/40">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="font-mono text-xs text-green uppercase tracking-widest">FAQ</span>
          <h2 className="font-display text-4xl sm:text-5xl text-bone mt-3 tracking-tight">
            Good to know
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="border border-line rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 sm:px-6 sm:py-5 text-bone font-medium"
                >
                  <span>{item.q}</span>
                  <span className="text-green text-xl leading-none shrink-0">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 text-sm text-muted leading-relaxed">{item.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
