"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { faqItems } from "@/lib/faq-data";

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="flow-section pt-32 retro-paper" data-flow-section>
      <div className="container-shell">
        <section
          className="grid gap-8 border-b border-black/10 pb-8 lg:grid-cols-[0.9fr_1.1fr]"
          data-reveal
        >
          <div>
            <p className="retro-kicker mb-4 text-[var(--color-olive-soft)]">
              chapter 11 • faq
            </p>
            <h1 className="retro-title retro-ink max-w-[8ch]">
              Good to know before you stay.
            </h1>
          </div>

          <div className="flex items-end">
            <p className="body-copy max-w-2xl lg:justify-self-end">
              This chapter answers the practical questions clearly — shared
              living, laundry access, student stays, pets, cleaning, and how
              booking works right now.
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
                chapter 11.1
              </p>
              <h2 className="retro-subtitle retro-ink max-w-[10ch]">
                Practical clarity builds trust.
              </h2>
              <p className="body-copy mt-4 max-w-xl text-[var(--color-ink)]/82">
                Instead of hiding the important details, this page makes them
                easy to understand. That is part of what makes the stay feel
                premium and well considered.
              </p>
            </div>

            <div className="retro-panel-thick p-5 md:p-6" data-card>
              <p className="retro-kicker mb-3 text-[var(--color-olive-soft)]">
                quick answers
              </p>

              <div className="grid gap-0 border-t border-black/15">
                {[
                  "Hosted home-stay, not a detached hotel",
                  "Shared kitchen and household amenities",
                  "Laundry discount for guests",
                  "Student-friendly and pet-friendly options",
                ].map((item) => (
                  <div
                    key={item}
                    className="border-b border-black/15 py-4 text-base leading-7 text-[var(--color-ink)]/82 last:border-b-0"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="retro-panel-thick retro-block-blue p-5 md:p-6"
              data-card
            >
              <p className="retro-kicker mb-3 text-[var(--color-ink)]/70">
                next step
              </p>
              <p className="text-2xl leading-tight text-[var(--color-ink)]">
                Read the answers, then move into rooms or booking.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/rooms" className="button-secondary">
                  View rooms
                </Link>
                <Link href="/booking" className="button-primary">
                  Start booking
                </Link>
              </div>
            </div>
          </div>

          <div className="retro-panel-thick p-4 md:p-6" data-card>
            <div className="mb-6 border-b border-black/15 pb-4">
              <p className="retro-kicker mb-3 text-[var(--color-olive-soft)]">
                chapter 11.2 • house notes
              </p>
              <h2 className="retro-subtitle retro-ink max-w-[12ch]">
                Questions answered like part of the story.
              </h2>
            </div>

            <div className="grid gap-0 border-t border-black/15">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <article
                    key={item.question}
                    className={clsx(
                      "border-b border-black/15 transition-colors duration-300",
                      isOpen && "bg-black/[0.03]",
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-start justify-between gap-6 px-4 py-5 text-left md:px-5"
                    >
                      <div className="grid gap-3 md:grid-cols-[0.1fr_0.9fr] md:items-start md:gap-6">
                        <span className="retro-number text-[var(--color-ink)]">
                          {String(index + 1).padStart(2, "0")}.
                        </span>

                        <span className="max-w-[28ch] text-[clamp(1.35rem,2vw,2rem)] leading-tight text-[var(--color-olive)]">
                          {item.question}
                        </span>
                      </div>

                      <span
                        className={clsx(
                          "retro-kicker mt-2 shrink-0 transition-colors duration-200",
                          isOpen
                            ? "retro-accent-text"
                            : "text-[var(--color-olive-soft)]",
                        )}
                      >
                        {isOpen ? "Open" : "Read"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-5 md:px-5 md:pb-6">
                        <div className="md:ml-[4.3rem]">
                          <div className="retro-rule mb-4" />
                          <p className="body-copy max-w-3xl text-[var(--color-ink)]/82">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mt-6 retro-marquee" data-reveal>
          <div className="retro-marquee-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex">
                {[
                  "Hosted home stay",
                  "Shared kitchen access",
                  "Bathroom access",
                  "Weekly cleaning",
                  "Fresh linen support",
                  "Student-friendly",
                  "Pet-friendly by approval",
                  "Discounted guest laundry",
                  "Booking request flow",
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
                chapter 11.3 • still need help
              </p>
              <h2 className="retro-title retro-ink max-w-[8ch]">
                Have a specific question about your stay?
              </h2>
            </div>

            <div className="retro-panel-thick p-5 md:p-6">
              <p className="body-copy max-w-2xl text-[var(--color-ink)]/82">
                Reach out directly if you want to ask about long stays,
                student-friendly options, pets, laundry access, or any part of
                the shared home setup.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="button-secondary">
                  Contact us
                </Link>
                <Link href="/booking" className="button-primary">
                  Check availability
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
