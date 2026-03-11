"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";
import { useLanguage } from "@/context/LanguageContext";

export function useScrollReveal() {
    const prefersReducedMotion = usePrefersReducedMotion();
    const { locale } = useLanguage();

    useEffect(() => {
        if (prefersReducedMotion) return;

        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.15,
        };

        const observerCallback: IntersectionObserverCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Wait for DOM paint after locale change
        const timeoutId = setTimeout(() => {
            const elements = document.querySelectorAll(".reveal-up, .reveal-fade, .reveal-left, .reveal-right");
            elements.forEach((el) => {
                if (!el.classList.contains("is-visible")) {
                    observer.observe(el);
                }
            });
        }, 50);

        return () => {
            clearTimeout(timeoutId);
            observer.disconnect();
        };
    }, [prefersReducedMotion, locale]);
}
