"use client";

import { useRef, useState, useCallback } from "react";
import {
  Share2,
  MapPin,
  Sparkles,
  MousePointerClick,
  Megaphone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ServiceRailCard from "@/components/ui/service-rail-card";
import { useLanguage } from "@/context/LanguageContext";

const CARD_META = [
  { imageKey: "services/sosyal-medya", icon: Share2, featured: false },
  { imageKey: "services/lokal-seo", icon: MapPin, featured: false },
  { imageKey: "services/ai-otomasyon", icon: Sparkles, featured: true },
  { imageKey: "services/google-ads", icon: MousePointerClick, featured: false },
  { imageKey: "services/meta-ads", icon: Megaphone, featured: false },
];

export default function ServicesRailSection() {
  const { t, locale } = useLanguage();
  const sr = t.servicesRail;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = 420;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
    setTimeout(updateScrollButtons, 350);
  }, [updateScrollButtons]);

  return (
    <section
      id="hizmetler"
      className="position-relative border-top border-vd-border"
      aria-labelledby="services-heading"
    >
      {/* Background */}
      <div
        className="pointer-events-none position-absolute"
        style={{
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: -1,
          opacity: 0.04,
          backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 0%, rgba(225, 29, 46, 0.5), transparent 60%), radial-gradient(ellipse 50% 30% at 80% 70%, rgba(225, 29, 46, 0.2), transparent)`,
        }}
      />

      {/* Header */}
      <div className="px-3 px-sm-4 pt-4 pt-lg-5 pb-3">
        <div className="mx-auto max-w-6xl d-flex flex-column flex-md-row align-items-md-end justify-content-md-between gap-3">
          <div>
            <span className="fs-xs fw-medium text-uppercase text-vd-muted" style={{ letterSpacing: "0.3em" }}>
              {sr.eyebrow}
            </span>
            <h2
              id="services-heading"
              className="mt-1 max-w-xl fw-semibold tracking-tight text-zinc-100 mb-0"
              style={{ fontSize: "clamp(1.5rem, 3vw, 1.875rem)" }}
            >
              {sr.heading}
            </h2>
            <p className="mt-2 max-w-md fs-sm text-vd-muted mb-0">
              {sr.sub}
            </p>
          </div>
          <div className="d-flex align-items-center gap-3">
            <a
              href="#iletisim"
              className="d-inline-flex align-items-center gap-2 fs-sm fw-medium text-vd-red text-decoration-none"
            >
              {sr.viewAll}
              <span aria-hidden>→</span>
            </a>
            {/* Arrow buttons (desktop only) */}
            <div className="d-none d-lg-flex align-items-center gap-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="d-flex align-items-center justify-content-center rounded-circle text-white border-0"
                style={{
                  height: 40, width: 40,
                  background: "rgba(255,255,255,0.1)",
                  opacity: canScrollLeft ? 1 : 0.3,
                  cursor: canScrollLeft ? "pointer" : "default",
                  transition: "opacity 0.2s",
                }}
                aria-label={sr.prevAria}
              >
                <ChevronLeft style={{ height: 20, width: 20 }} />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="d-flex align-items-center justify-content-center rounded-circle text-white border-0"
                style={{
                  height: 40, width: 40,
                  background: "rgba(255,255,255,0.1)",
                  opacity: canScrollRight ? 1 : 0.3,
                  cursor: canScrollRight ? "pointer" : "default",
                  transition: "opacity 0.2s",
                }}
                aria-label={sr.nextAria}
              >
                <ChevronRight style={{ height: 20, width: 20 }} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal scroll rail */}
      <div className="position-relative">
        {/* Fade edges */}
        <div
          className="pointer-events-none position-absolute top-0 bottom-0 start-0 d-none d-lg-block"
          style={{ zIndex: 10, width: 48, background: "linear-gradient(to right, #0b0b0d, transparent)" }}
          aria-hidden
        />
        <div
          className="pointer-events-none position-absolute top-0 bottom-0 end-0 d-none d-lg-block"
          style={{ zIndex: 10, width: 48, background: "linear-gradient(to left, #0b0b0d, transparent)" }}
          aria-hidden
        />

        <div
          ref={scrollContainerRef}
          className="scrollbar-hide d-flex gap-4 overflow-auto pb-4 px-3 px-sm-4"
          onScroll={updateScrollButtons}
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            overflowY: "hidden",
          }}
        >
          {sr.cards.map((card, i) => {
            const meta = CARD_META[i];
            const imageSrc = `/${meta.imageKey}.webp`;
            return (
              <div
                key={card.title}
                className="shrink-0"
                style={{ scrollSnapAlign: "start" }}
              >
                <ServiceRailCard
                  title={card.title}
                  imageSrc={imageSrc}
                  imageAlt={card.title}
                  tags={[...card.tags] as [string, string, string]}
                  ctaLabel={sr.cta}
                  icon={meta.icon}
                  featured={meta.featured ? sr.featuredBadge : undefined}
                  href="#iletisim"
                  style={{ height: 380, width: "min(400px, 85vw)" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
