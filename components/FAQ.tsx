"use client";

import Section from "./Section";
import Accordion from "./Accordion";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  const f = t.faq;

  return (
    <section id="sss" className="border-top border-vd-border pt-5 pb-5 mt-5">
      <div className="row g-5 align-items-start">
        <div className="col-12 col-lg-4 reveal-left p-lg-4">
          <h2 className="fw-black text-uppercase tracking-tight mb-4 text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1 }}>
            {f.title}
          </h2>
          <div style={{ width: 80, height: 6, backgroundColor: "var(--vd-red)" }} className="mb-4" />
          <p className="fs-6 text-zinc-300 leading-relaxed pe-lg-4">
            {f.description}
          </p>
        </div>
        <div className="col-12 col-lg-8 reveal-right delay-200">
          <Accordion items={f.items} />
        </div>
      </div>
    </section>
  );
}
