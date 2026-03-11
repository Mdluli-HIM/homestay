"use client";

import Image from "next/image";
import Link from "next/link";
import { siteCopy } from "@/lib/site-copy";

const heroImage =
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1800&q=80";

export function HomeHero() {
  return (
    <section className="flow-section pt-32 retro-paper" data-flow-section>
      <div className="container-shell">
        <div className="grid gap-6 border-b border-black/10 pb-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div data-reveal>
            <p className="retro-kicker mb-4 text-[var(--color-olive-soft)]">
              {siteCopy.hero.kicker}
            </p>
            <h1 className="retro-title retro-ink max-w-[8ch]">
              {siteCopy.hero.title}
            </h1>
          </div>

          <div className="flex items-end" data-reveal>
            <p className="body-copy max-w-2xl">{siteCopy.hero.intro}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-3 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="grid gap-3">
            <div
              className="retro-panel-thick retro-block-yellow p-5 md:p-6"
              data-card
            >
              <p className="retro-kicker mb-3 text-[var(--color-ink)]">
                chapter 01
              </p>
              <h2 className="retro-subtitle retro-ink max-w-[11ch]">
                Hosted comfort with a calmer, more personal way to stay.
              </h2>
            </div>

            <div
              className="retro-photo-frame min-h-[22rem] lg:min-h-[34rem]"
              data-soft-image
            >
              <Image
                src={heroImage}
                alt="Hosted home interior"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 56vw"
                priority
                loading="eager"
              />
            </div>
          </div>

          <div className="grid gap-3">
            <div className="retro-panel-thick p-5 md:p-6" data-card>
              <p className="retro-kicker mb-3 text-[var(--color-olive-soft)]">
                what makes this different
              </p>

              <div className="grid gap-0 border-t border-black/15">
                {[
                  "Shared home comfort",
                  "Weekly cleaning support",
                  "Student-friendly living",
                  "Pet-friendly approval",
                  "Discounted guest laundry",
                ].map((item) => (
                  <div
                    key={item}
                    className="border-b border-black/15 py-4 text-lg leading-7 text-[var(--color-ink)] last:border-b-0"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="retro-panel p-4" data-card>
                <p className="retro-kicker mb-2 text-[var(--color-olive-soft)]">
                  stay types
                </p>
                <p className="text-lg leading-7 text-[var(--color-ink)]">
                  Short stay, long stay, student-friendly
                </p>
              </div>

              <div className="retro-panel p-4" data-card>
                <p className="retro-kicker mb-2 text-[var(--color-olive-soft)]">
                  home access
                </p>
                <p className="text-lg leading-7 text-[var(--color-ink)]">
                  Kitchen, dishes, bathroom, and shared amenities
                </p>
              </div>
            </div>

            <div className="retro-panel-thick p-5 md:p-6" data-card>
              <p className="retro-kicker mb-3 retro-accent-text">chapter 02</p>
              <p className="text-2xl leading-tight text-[var(--color-olive)]">
                Book your room like you’re entering the next chapter.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/booking" className="button-primary">
                  {siteCopy.hero.primaryCta}
                </Link>
                <Link href="/rooms" className="button-secondary">
                  {siteCopy.hero.secondaryCta}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="retro-marquee mt-6" data-reveal>
          <div className="retro-marquee-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex">
                {[
                  "Hosted home stay",
                  "Shared kitchen access",
                  "Weekly cleaning",
                  "Fresh linen",
                  "Student-friendly",
                  "Pet-friendly by approval",
                  "Discounted on-site laundry",
                  "Cape Town comfort",
                ].map((item) => (
                  <span key={`${i}-${item}`} className="retro-marquee-item">
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
