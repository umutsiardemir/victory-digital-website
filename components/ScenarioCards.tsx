"use client";

import Section from "./Section";
import { useLanguage } from "@/context/LanguageContext";

export default function ScenarioCards() {
  const { t } = useLanguage();
  const s = t.scenarios;

  return (
    <section id="ornek-senaryolar" className="pt-5 pb-5 mt-5">
      <div className="text-center mb-5 reveal-up">
        <h2 className="fs-1 fw-bold text-white tracking-tight mb-3">{s.title}</h2>
        <p className="fs-6 text-vd-muted max-w-2xl mx-auto">{s.description}</p>
      </div>

      <div className="d-flex flex-column gap-5">
        {s.list.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={item.sector} className={`row g-0 align-items-stretch bg-vd-card rounded-0 border-start ${isEven ? 'border-vd-red reveal-left' : 'border-vd-red reveal-right'}`} style={{ borderLeftWidth: "4px !important" }}>

              <div className={`col-12 col-lg-4 p-4 p-lg-5 d-flex flex-column justify-content-center bg-black-40 ${isEven ? 'order-lg-1' : 'order-lg-2'}`}>
                <div className="d-inline-flex align-items-center justify-content-center bg-vd-red text-white fw-bold mb-4" style={{ width: "64px", height: "64px", fontSize: "1.5rem" }}>
                  {index + 1}
                </div>
                <h3 className="fs-3 fw-black text-white text-uppercase tracking-tight m-0" style={{ letterSpacing: "-0.03em" }}>
                  {item.sector}
                </h3>
              </div>

              <div className={`col-12 col-lg-8 p-4 p-lg-5 ${isEven ? 'order-lg-2' : 'order-lg-1'}`}>
                <div className="row g-4">
                  <div className="col-12 col-md-6 border-end border-vd-border pe-md-4">
                    <span className="fs-xs fw-bold text-vd-red mb-2 d-block text-uppercase" style={{ letterSpacing: "0.1em" }}>PROBLEM</span>
                    <p className="fs-sm text-zinc-300 leading-relaxed mb-0">{item.problem}</p>
                  </div>

                  <div className="col-12 col-md-6 ps-md-4">
                    <span className="fs-xs fw-bold text-white mb-3 d-block text-uppercase" style={{ letterSpacing: "0.1em" }}>ÇÖZÜMÜMÜZ</span>
                    <ul className="list-unstyled mb-0 d-flex flex-column gap-2 fs-sm text-zinc-300">
                      {item.done.map((d) => (
                        <li key={d} className="d-flex align-items-start gap-2">
                          <span className="shrink-0 bg-vd-red mt-1" style={{ height: 8, width: 8 }} />
                          <span className="leading-relaxed fw-medium">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-top border-vd-border">
                  <span className="fs-xs fw-bold text-vd-red mb-1 d-block text-uppercase" style={{ letterSpacing: "0.1em" }}>BEKLENEN ETKİ</span>
                  <p className="text-white mb-0 leading-relaxed fw-semibold" style={{ fontSize: "15px" }}>{item.impact}</p>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
