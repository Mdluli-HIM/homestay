"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { siteCopy } from "@/lib/site-copy";

const enquiryTypes = [
  "General enquiry",
  "Short stay",
  "Long stay",
  "Student stay",
  "Pet-friendly stay",
];

export function ContactPage() {
  const [activeType, setActiveType] = useState("General enquiry");

  return (
    <main className="flow-section pt-32 retro-paper" data-flow-section>
      <div className="container-shell">
        <section
          className="grid gap-8 border-b border-black/10 pb-8 lg:grid-cols-[0.9fr_1.1fr]"
          data-reveal
        >
          <div>
            <p className="retro-kicker mb-4 text-[var(--color-olive-soft)]">
              chapter 12 • contact
            </p>
            <h1 className="retro-title retro-ink max-w-[8ch]">
              Let’s talk about your stay.
            </h1>
          </div>

          <div className="flex items-end">
            <p className="body-copy max-w-2xl lg:justify-self-end">
              Reach out for room guidance, long-stay questions, student-friendly
              living, pet-friendly stays, practical home setup details, or any
              help before booking.
            </p>
          </div>
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[0.72fr_1.28fr]">
          <div className="grid gap-3">
            <div
              className="retro-panel-thick retro-block-yellow p-5 md:p-6"
              data-card
            >
              <p className="retro-kicker mb-3 text-[var(--color-ink)]">
                chapter 12.1
              </p>
              <h2 className="retro-subtitle retro-ink max-w-[10ch]">
                Ask clearly. Get the right stay.
              </h2>
              <p className="body-copy mt-4 max-w-xl text-[var(--color-ink)]/82">
                The contact page should feel as considered as the rooms and stay
                pages — not like an afterthought form, but like part of the
                story.
              </p>
            </div>

            <div
              className="retro-panel-thick retro-block-blue p-5 md:p-6"
              data-card
            >
              <p className="retro-kicker mb-3 text-[var(--color-ink)]">
                direct details
              </p>

              <div className="grid gap-0 border-t border-black/15">
                <div className="border-b border-black/15 py-4">
                  <p className="retro-kicker text-[var(--color-ink)]/65">
                    email
                  </p>
                  <p className="mt-2 text-lg text-[var(--color-ink)]">
                    {siteCopy.contact.email}
                  </p>
                </div>

                <div className="border-b border-black/15 py-4">
                  <p className="retro-kicker text-[var(--color-ink)]/65">
                    phone
                  </p>
                  <p className="mt-2 text-lg text-[var(--color-ink)]">
                    {siteCopy.contact.phone}
                  </p>
                </div>

                <div className="py-4">
                  <p className="retro-kicker text-[var(--color-ink)]/65">
                    location
                  </p>
                  <p className="mt-2 text-lg text-[var(--color-ink)]">
                    {siteCopy.contact.location}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="retro-panel-thick retro-block-clay p-5 md:p-6 text-white"
              data-card
            >
              <p className="retro-kicker mb-3 text-white/70">
                what you can ask
              </p>

              <div className="grid gap-0 border-t border-white/20">
                {[
                  "Which room fits your stay best",
                  "Long-stay and student-friendly options",
                  "Pet-friendly approval",
                  "Shared kitchen and home setup",
                  "Laundry benefit for guests",
                ].map((item) => (
                  <div
                    key={item}
                    className="border-b border-white/20 py-4 text-base leading-7 text-white/85 last:border-b-0"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="retro-panel-thick p-4 md:p-6" data-card>
            <div className="mb-6 border-b border-black/15 pb-4">
              <p className="retro-kicker mb-3 text-[var(--color-olive-soft)]">
                chapter 12.2 • enquiry form
              </p>
              <h2 className="retro-subtitle retro-ink max-w-[12ch]">
                Send a clear and direct enquiry.
              </h2>
            </div>

            <div className="mb-8">
              <p className="retro-kicker mb-3 text-[var(--color-olive-soft)]">
                enquiry type
              </p>

              <div className="flex flex-wrap gap-3">
                {enquiryTypes.map((type, index) => {
                  const isActive = activeType === type;
                  const toneClass =
                    index % 4 === 0
                      ? "retro-block-blue"
                      : index % 4 === 1
                        ? "retro-block-yellow"
                        : index % 4 === 2
                          ? "retro-block-olive"
                          : "retro-block-clay text-white";

                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setActiveType(type)}
                      className={clsx(
                        "border px-4 py-3 text-sm uppercase tracking-[0.14em] transition-colors duration-200",
                        isActive
                          ? `border-black/15 ${toneClass}`
                          : "border-black/10 bg-transparent text-[var(--color-olive-soft)] hover:bg-black/[0.03] hover:text-[var(--color-olive)]",
                      )}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>

            <form className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="retro-kicker text-[var(--color-olive-soft)]">
                    full name
                  </span>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="min-h-[3.7rem] border border-black/10 bg-transparent px-4 text-[var(--color-olive)] outline-none transition-colors focus:border-black/20"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="retro-kicker text-[var(--color-olive-soft)]">
                    phone
                  </span>
                  <input
                    type="tel"
                    placeholder="+27..."
                    className="min-h-[3.7rem] border border-black/10 bg-transparent px-4 text-[var(--color-olive)] outline-none transition-colors focus:border-black/20"
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="retro-kicker text-[var(--color-olive-soft)]">
                  email
                </span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="min-h-[3.7rem] border border-black/10 bg-transparent px-4 text-[var(--color-olive)] outline-none transition-colors focus:border-black/20"
                />
              </label>

              <label className="grid gap-2">
                <span className="retro-kicker text-[var(--color-olive-soft)]">
                  selected enquiry type
                </span>
                <input
                  type="text"
                  value={activeType}
                  readOnly
                  className="min-h-[3.7rem] border border-black/10 bg-black/[0.03] px-4 text-[var(--color-olive)] outline-none"
                />
              </label>

              <label className="grid gap-2">
                <span className="retro-kicker text-[var(--color-olive-soft)]">
                  message
                </span>
                <textarea
                  placeholder="Tell us what kind of stay you’re looking for, your dates, room preference, student needs, pet details, or any practical question."
                  className="min-h-[12rem] border border-black/10 bg-transparent px-4 py-4 text-[var(--color-olive)] outline-none transition-colors focus:border-black/20"
                />
              </label>

              <div className="flex flex-wrap gap-3 pt-2">
                <button type="submit" className="button-primary">
                  Send enquiry
                </button>
                <Link href="/booking" className="button-secondary">
                  Go to booking
                </Link>
              </div>
            </form>
          </div>
        </section>

        <section className="mt-6 retro-marquee" data-reveal>
          <div className="retro-marquee-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex">
                {[
                  "General enquiry",
                  "Short stay",
                  "Long stay",
                  "Student stay",
                  "Pet-friendly stay",
                  "Shared home questions",
                  "Laundry benefit",
                  "Cape Town comfort",
                ].map((item) => (
                  <span key={`${i}-${item}`} className="retro-marquee-item">
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 border-t border-black/10 pt-8" data-reveal>
          <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
            <div>
              <p className="retro-kicker mb-4 text-[var(--color-olive-soft)]">
                chapter 12.3 • next step
              </p>
              <h2 className="retro-title retro-ink max-w-[8ch]">
                Need a room first? Go back into the story.
              </h2>
            </div>

            <div className="retro-panel-thick retro-block-blue p-5 md:p-6">
              <p className="body-copy max-w-2xl text-[var(--color-ink)]/82">
                If you are still deciding, explore the rooms, read about the
                stay, or move into booking once you know what fits best.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/rooms" className="button-secondary">
                  View rooms
                </Link>
                <Link href="/stay" className="button-secondary">
                  Read the stay story
                </Link>
                <Link href="/booking" className="button-primary">
                  Start booking
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
