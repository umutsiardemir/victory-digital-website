"use client";

import Section from "./Section";
import { useLanguage } from "@/context/LanguageContext";

export default function Process() {
  const { t } = useLanguage();
  const p = t.process;

  return (
    <Section id="calisma-sekli" title={p.title} description={p.description}>
      <div className="row g-4 position-relative justify-content-center">
        {p.steps.map((step, index) => (
          <div key={step.title} className={`col-12 col-md-6 col-xl-3 reveal-up delay-${(index % 4 + 1) * 100}`} style={{ zIndex: 1 }}>
            <article className="process-card d-flex flex-column rounded-0 bg-transparent p-4 h-100 position-relative transition-all-300" style={{ borderLeft: "4px solid rgba(225, 29, 46, 0.2)" }}>
              {/* Highlight line that animates on hover */}
              <div className="position-absolute top-0 start-0 h-100 bg-vd-red transition-all-300 process-card-highlight" style={{ width: "4px", transform: "scaleY(0)", transformOrigin: "top" }} />

              <div className="mb-4">
                <span className="fw-black text-vd-red opacity-75 process-card-number transition-colors" style={{ fontSize: "4rem", lineHeight: 0.8, letterSpacing: "-0.05em", fontFamily: "Impact, sans-serif" }}>
                  0{index + 1}
                </span>
              </div>

              <h3 className="fs-5 fw-bold text-white mb-3 text-uppercase tracking-tight" style={{ letterSpacing: "0.02em" }}>
                {step.title}
              </h3>

              <p className="fs-sm leading-relaxed text-zinc-300 mb-0">
                {step.text}
              </p>
            </article>
          </div>
        ))}
      </div>
    </Section>
  );
}
