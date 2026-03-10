"use client";

import Image from "next/image";
import Link from "next/link";

const heroImage =
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1800&q=80";

export function HomeHero() {
  return (
    <section className="flow-section pt-32" data-flow-section>
      <div className="container-shell">
        <div className="grid gap-10 border-b border-black/8 pb-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-end">
          <div data-reveal>
            <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">
              premium hosted accommodation
            </p>

            <h1 className="max-w-[8ch] text-[clamp(4rem,8vw,7.4rem)] leading-[0.9] tracking-[-0.06em] text-[var(--color-olive)]">
              Stay beautifully. Live comfortably.
            </h1>
          </div>

          <p className="body-copy max-w-2xl xl:justify-self-end" data-reveal>
            A hosted home-stay experience designed for short stays, long stays,
            student-friendly living, and pet-friendly flexibility — with shared
            home comfort, weekly care, and discounted on-site laundry for
            guests.
          </p>
        </div>

        <div className="grid gap-8 py-8 xl:grid-cols-[1.05fr_0.95fr] xl:gap-10">
          <div className="grid gap-8" data-reveal>
            <div
              className="grid gap-4 border-b border-black/8 pb-8 md:grid-cols-3"
              data-line-reveal
            >
              <div className="border-t border-black/8 pt-4">
                <p className="eyebrow mb-2 text-[var(--color-olive-soft)]">
                  stay types
                </p>
                <p className="text-lg leading-7 text-[var(--color-olive)]">
                  Short stay, long stay, student-friendly
                </p>
              </div>

              <div className="border-t border-black/8 pt-4">
                <p className="eyebrow mb-2 text-[var(--color-olive-soft)]">
                  home access
                </p>
                <p className="text-lg leading-7 text-[var(--color-olive)]">
                  Kitchen, dishes, bathroom, and shared amenities
                </p>
              </div>

              <div className="border-t border-black/8 pt-4">
                <p className="eyebrow mb-2 text-[var(--color-olive-soft)]">
                  guest benefit
                </p>
                <p className="text-lg leading-7 text-[var(--color-olive)]">
                  Discounted on-site laundry
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-[0.82fr_1.18fr] md:items-end">
              <div>
                <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">
                  direct booking
                </p>
                <p className="max-w-[14ch] text-[clamp(2.2rem,3.8vw,3.8rem)] leading-[0.96] tracking-[-0.04em] text-[var(--color-olive)]">
                  A calmer and clearer way to book your stay.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link href="/booking" className="button-primary">
                  Check availability
                </Link>
                <Link href="/rooms" className="button-secondary">
                  Explore rooms
                </Link>
              </div>
            </div>
          </div>

          <div
            className="frame-media min-h-[28rem] xl:min-h-[40rem]"
            data-card
            data-parallax-wrap
          >
            <Image
              src={heroImage}
              alt="Hosted home interior"
              fill
              data-parallax
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 52vw"
              priority
              loading="eager"
            />
          </div>
        </div>

        <div
          className="grid gap-4 border-t border-black/8 py-6 md:grid-cols-[1fr_1fr_0.8fr_0.8fr_auto]"
          data-reveal
          data-line-reveal
        >
          <div className="border border-black/8 px-4 py-4">
            <p className="eyebrow mb-1 text-[var(--color-olive-soft)]">
              check in
            </p>
            <p className="text-[var(--color-olive)]">Select date</p>
          </div>

          <div className="border border-black/8 px-4 py-4">
            <p className="eyebrow mb-1 text-[var(--color-olive-soft)]">
              check out
            </p>
            <p className="text-[var(--color-olive)]">Select date</p>
          </div>

          <div className="border border-black/8 px-4 py-4">
            <p className="eyebrow mb-1 text-[var(--color-olive-soft)]">
              guests
            </p>
            <p className="text-[var(--color-olive)]">1–3 guests</p>
          </div>

          <div className="border border-black/8 px-4 py-4">
            <p className="eyebrow mb-1 text-[var(--color-olive-soft)]">
              stay type
            </p>
            <p className="text-[var(--color-olive)]">Short / Long stay</p>
          </div>

          <Link href="/booking" className="button-primary min-h-[72px] w-full">
            Start booking
          </Link>
        </div>
      </div>
    </section>
  );
}
