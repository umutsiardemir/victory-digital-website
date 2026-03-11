"use client";

import Section from "./Section";
import { useLanguage } from "@/context/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();
  const x = t.testimonials;

  return (
    <section id="yorumlar" className="pt-5 pb-5 mt-5 border-top border-vd-border">
      <div className="text-center mb-5 reveal-up">
        <h2 className="fs-1 fw-bold text-white tracking-tight mb-3">{x.title}</h2>
        <p className="fs-6 text-vd-muted max-w-2xl mx-auto">{x.description}</p>
      </div>

      <div className="row g-4 col-xl-10 mx-auto">
        <div className="col-12 col-md-6 d-flex flex-column gap-4">
          {x.list.filter((_: any, i: number) => i % 2 === 0).map((item, i) => (
            <div key={i} className="reveal-up delay-100 h-100">
              <figure className="testimonial-card d-flex flex-column rounded-0 bg-vd-card p-4 p-md-5 h-100 mb-0 position-relative transition-all-300" style={{ borderTop: "4px solid var(--vd-red)" }}>
                <div className="position-absolute text-vd-red opacity-10" style={{ top: "0", left: "20px", fontSize: "10rem", lineHeight: 0.8, fontFamily: "serif", pointerEvents: "none" }}>
                  &ldquo;
                </div>
                <div className="mb-4 position-relative mt-3" style={{ zIndex: 1 }}>
                  <p className="fs-5 leading-relaxed text-white fw-medium fst-italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <figcaption className="mt-auto pt-4 border-top border-vd-border d-flex align-items-center gap-3 w-100">
                  <div className="rounded-circle bg-vd-red d-flex align-items-center justify-content-center shrink-0" style={{ width: 48, height: 48 }}>
                    <span className="fs-5 fw-bold text-white">{(item as any).name !== "—" ? (item as any).name.charAt(0) : "V"}</span>
                  </div>
                  <div>
                    <div className="fs-6 fw-bold text-white text-uppercase tracking-tight">{(item as any).name !== "—" ? (item as any).name : "Müşterimiz"}</div>
                    <div className="fs-sm fw-medium text-vd-red text-uppercase" style={{ letterSpacing: "0.05em" }}>{(item as any).role}</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>

        <div className="col-12 col-md-6 d-flex flex-column gap-4 pt-md-5">
          {x.list.filter((_: any, i: number) => i % 2 !== 0).map((item, i) => (
            <div key={i} className="reveal-up delay-200 h-100">
              <figure className="testimonial-card d-flex flex-column rounded-0 bg-vd-card p-4 p-md-5 h-100 mb-0 position-relative transition-all-300" style={{ borderTop: "4px solid var(--vd-red)" }}>
                <div className="position-absolute text-vd-red opacity-10" style={{ top: "0", left: "20px", fontSize: "10rem", lineHeight: 0.8, fontFamily: "serif", pointerEvents: "none" }}>
                  &ldquo;
                </div>
                <div className="mb-4 position-relative mt-3" style={{ zIndex: 1 }}>
                  <p className="fs-5 leading-relaxed text-white fw-medium fst-italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <figcaption className="mt-auto pt-4 border-top border-vd-border d-flex align-items-center gap-3 w-100">
                  <div className="rounded-circle bg-vd-red d-flex align-items-center justify-content-center shrink-0" style={{ width: 48, height: 48 }}>
                    <span className="fs-5 fw-bold text-white">{(item as any).name !== "—" ? (item as any).name.charAt(0) : "V"}</span>
                  </div>
                  <div>
                    <div className="fs-6 fw-bold text-white text-uppercase tracking-tight">{(item as any).name !== "—" ? (item as any).name : "Müşterimiz"}</div>
                    <div className="fs-sm fw-medium text-vd-red text-uppercase" style={{ letterSpacing: "0.05em" }}>{(item as any).role}</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
