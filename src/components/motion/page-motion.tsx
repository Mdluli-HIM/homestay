"use client";

import { ReactNode, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

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

      const imageItems = gsap.utils.toArray<HTMLElement>(
        "[data-soft-image]",
        scope.current,
      );

      revealItems.forEach((item) => {
        gsap.fromTo(
          item,
          {
            autoAlpha: 0,
            y: 26,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
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
            y: 18,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            delay: Math.min(index * 0.025, 0.12),
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 92%",
              once: true,
            },
          },
        );
      });

      imageItems.forEach((item) => {
        gsap.fromTo(
          item,
          {
            scale: 1.035,
            autoAlpha: 0.92,
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              once: true,
            },
          },
        );
      });
    },
    { scope },
  );

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
