"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { faqItems } from "@/lib/faq-data";

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="flow-section pt-32" data-flow-section>
      <div className="container-shell">
        <section
          className="grid gap-10 border-b border-black/8 pb-10 xl:grid-cols-[0.9fr_1.1fr]"
          data-reveal
        >
          <div>
            <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">faq</p>
            <h1 className="max-w-[8ch] text-[clamp(3.6rem,7vw,6.6rem)] leading-[0.92] tracking-[-0.05em] text-[var(--color-olive)]">
              Good to know before you stay.
            </h1>
          </div>

          <p className="body-copy max-w-2xl xl:justify-self-end">
            This page should answer the practical questions clearly and
            beautifully — from shared living and laundry access to student
            stays, pets, cleaning, and how booking currently works.
          </p>
        </section>

        <section className="grid gap-10 py-10 xl:grid-cols-[0.82fr_1.18fr]">
          <div data-reveal>
            <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">
              practical clarity
            </p>
            <h2 className="max-w-[10ch] text-[clamp(2.8rem,4.8vw,5rem)] leading-[0.95] tracking-[-0.05em] text-[var(--color-olive)]">
              Transparent information builds trust.
            </h2>
            <p className="body-copy mt-6 max-w-xl">
              Instead of hiding the important details, the site should make them
              easy to understand. That is what makes the experience feel premium
              and well considered.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/stay" className="button-secondary">
                Read about the stay
              </Link>
              <Link href="/booking" className="button-primary">
                Start booking
              </Link>
            </div>
          </div>

          <div className="border-t border-black/8">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={item.question}
                  className="border-b border-black/8"
                  data-card
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-start justify-between gap-6 px-0 py-6 text-left"
                  >
                    <span className="max-w-[28ch] text-[clamp(1.35rem,2vw,2rem)] leading-tight text-[var(--color-olive)]">
                      {item.question}
                    </span>

                    <span
                      className={clsx(
                        "mt-1 text-2xl leading-none text-[var(--color-olive-soft)] transition-transform duration-200",
                        isOpen && "rotate-45",
                      )}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="max-w-3xl pb-6">
                      <p className="body-copy">{item.answer}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section className="grid gap-8 border-t border-black/8 py-10 xl:grid-cols-[1fr_auto] xl:items-end">
          <div>
            <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">
              still need help
            </p>
            <h2 className="max-w-[12ch] text-[clamp(2.6rem,4.5vw,4.8rem)] leading-[0.95] tracking-[-0.05em] text-[var(--color-olive)]">
              Have a specific question about your stay?
            </h2>
            <p className="body-copy mt-5 max-w-2xl">
              Reach out directly if you want to ask about long stays,
              student-friendly options, pets, or laundry access.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="button-secondary">
              Contact us
            </Link>
            <Link href="/booking" className="button-primary">
              Check availability
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
