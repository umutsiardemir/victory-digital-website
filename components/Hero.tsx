"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <div className="row g-4 align-items-center">
      <div className="col-12 col-md-7">
        <div className="d-flex flex-column gap-3">
          <h1 className="fw-semibold tracking-tight" style={{ fontSize: "clamp(1.875rem, 4vw, 3.75rem)" }}>
            {h.headline}{" "}
            <span className="text-vd-red">{h.headlineHighlight}</span>
          </h1>
          <p className="max-w-xl fs-sm text-vd-muted">
            {h.subline}
          </p>
          <p className="fs-xs text-vd-muted">{h.proof}</p>

          <div className="d-flex flex-wrap align-items-center gap-3">
            <a
              href="#iletisim"
              className="d-inline-flex align-items-center gap-2 rounded-pill bg-vd-red px-4 py-2 fs-sm fw-medium text-white text-decoration-none shadow-soft transition-colors bg-vd-red-hover"
            >
              {h.ctaPrimary}
            </a>
            <a
              href="#hizmetler"
              className="d-inline-flex align-items-center gap-2 rounded-pill bg-black-50 px-4 py-2 fs-sm fw-medium text-zinc-100 text-decoration-none transition-colors hover-border-zinc-500"
              style={{ border: "1px solid var(--vd-border)" }}
            >
              {h.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-5">
        <img
          src="/victory-hero.png"
          alt="Victory Digital"
          width={500}
          height={500}
          style={{ objectFit: "contain", maxHeight: 400 }}
        />
      </div>
    </div>
  );
}
