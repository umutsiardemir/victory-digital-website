"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: readonly AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="d-flex flex-column gap-3">
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <div
            key={item.question}
            className={`rounded-0 border transition-all-300 overflow-hidden bg-vd-card faq-item ${isOpen ? 'border-vd-red shadow-sm' : 'border-vd-border'}`}
            style={{ borderLeftWidth: isOpen ? '4px' : '1px' }}
          >
            <button
              type="button"
              className="d-flex w-100 align-items-center justify-content-between gap-3 px-4 py-4 text-start bg-transparent border-0"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className={`fs-5 fw-bold transition-colors ${isOpen ? 'text-white' : 'text-zinc-300'}`} style={{ letterSpacing: "-0.02em" }}>
                {item.question}
              </span>
              <div className={`d-flex align-items-center justify-content-center rounded-0 shrink-0 transition-all-300 ${isOpen ? 'bg-vd-red text-white' : 'bg-zinc-900 border border-vd-border text-vd-muted'}`} style={{ width: 40, height: 40 }}>
                <ChevronDown
                  className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                  style={{ height: 20, width: 20 }}
                />
              </div>
            </button>
            <div
              className={`transition-all-300 overflow-hidden`}
              style={{
                maxHeight: isOpen ? "500px" : "0",
                opacity: isOpen ? 1 : 0
              }}
            >
              <div className="px-4 pb-4 fs-6 text-zinc-300 leading-relaxed border-top border-vd-border pt-4 mt-1 mx-2">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
