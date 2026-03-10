"use client";

import { ReactNode, useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

type PageMotionProps = {
  children: ReactNode;
  className?: string;
};

export function PageMotion({ children, className }: PageMotionProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!scope.current) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return;

      const revealItems = gsap.utils.toArray<HTMLElement>(
        "[data-reveal]",
        scope.current,
      );

      const cardItems = gsap.utils.toArray<HTMLElement>(
        "[data-card]",
        scope.current,
      );

      const parallaxItems = gsap.utils.toArray<HTMLElement>(
        "[data-parallax]",
        scope.current,
      );

      const lineItems = gsap.utils.toArray<HTMLElement>(
        "[data-line-reveal]",
        scope.current,
      );

      revealItems.forEach((item) => {
        gsap.fromTo(
          item,
          {
            autoAlpha: 0,
            y: 36,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      cardItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            autoAlpha: 0,
            y: 24,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            delay: Math.min(index * 0.03, 0.18),
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 92%",
              once: true,
            },
          },
        );
      });

      parallaxItems.forEach((item) => {
        const trigger =
          item.closest("[data-parallax-wrap]") instanceof HTMLElement
            ? item.closest("[data-parallax-wrap]")
            : item;

        gsap.fromTo(
          item,
          {
            scale: 1.06,
            yPercent: -6,
          },
          {
            scale: 1,
            yPercent: 6,
            ease: "none",
            scrollTrigger: {
              trigger,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      });

      lineItems.forEach((item) => {
        gsap.fromTo(
          item,
          {
            scaleX: 0,
            transformOrigin: "left center",
          },
          {
            scaleX: 1,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 94%",
              once: true,
            },
          },
        );
      });

      ScrollTrigger.refresh();
    },
    { scope },
  );

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
