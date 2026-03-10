"use client";

import { useState } from "react";
import clsx from "clsx";

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
    <main className="flow-section pt-32" data-flow-section>
      <div className="container-shell">
        <section
          className="grid gap-10 border-b border-black/8 pb-10 xl:grid-cols-[0.9fr_1.1fr]"
          data-reveal
        >
          <div>
            <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">
              contact
            </p>
            <h1 className="max-w-[8ch] text-[clamp(3.6rem,7vw,6.6rem)] leading-[0.92] tracking-[-0.05em] text-[var(--color-olive)]">
              Let’s talk about your stay.
            </h1>
          </div>

          <p className="body-copy max-w-2xl xl:justify-self-end">
            Reach out for booking questions, room guidance, long-stay requests,
            student accommodation enquiries, pet-friendly stays, or any detail
            about how the home setup works.
          </p>
        </section>

        <section className="grid gap-10 py-10 xl:grid-cols-[0.44fr_0.56fr]">
          <div className="space-y-8" data-reveal>
            <div className="border border-black/8 p-6">
              <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">
                direct details
              </p>

              <div className="grid gap-4 border-t border-black/8 pt-4">
                <div className="grid gap-1 border-b border-black/8 pb-4">
                  <p className="text-sm uppercase tracking-[0.14em] text-[var(--color-olive-soft)]">
                    email
                  </p>
                  <p className="text-lg text-[var(--color-olive)]">
                    hello@stayhouse.com
                  </p>
                </div>

                <div className="grid gap-1 border-b border-black/8 pb-4">
                  <p className="text-sm uppercase tracking-[0.14em] text-[var(--color-olive-soft)]">
                    phone
                  </p>
                  <p className="text-lg text-[var(--color-olive)]">
                    +27 00 000 0000
                  </p>
                </div>

                <div className="grid gap-1 pb-1">
                  <p className="text-sm uppercase tracking-[0.14em] text-[var(--color-olive-soft)]">
                    location
                  </p>
                  <p className="text-lg text-[var(--color-olive)]">
                    Cape Town, South Africa
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-black/8 p-6">
              <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">
                what to ask about
              </p>

              <div className="grid gap-0 border-t border-black/8">
                {[
                  "Which room suits your stay best",
                  "Long-stay and student-friendly options",
                  "Pet-friendly approval",
                  "Shared kitchen, bathroom, and home setup",
                  "Laundry benefit for guests",
                ].map((item) => (
                  <div
                    key={item}
                    className="border-b border-black/8 py-4 text-base leading-7 text-[var(--color-olive)]/82 last:border-b-0"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-black/8 bg-black/[0.025] p-6">
              <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">
                quick note
              </p>
              <p className="text-xl leading-8 text-[var(--color-olive)]">
                The goal here is simple: make asking questions feel as calm and
                premium as the rest of the website.
              </p>
            </div>
          </div>

          <div className="border border-black/8 p-6 md:p-8" data-card>
            <div className="mb-8 border-b border-black/8 pb-5">
              <p className="eyebrow mb-3 text-[var(--color-olive-soft)]">
                enquiry form
              </p>
              <h2 className="text-[clamp(2.3rem,4vw,4rem)] leading-[0.96] tracking-[-0.04em] text-[var(--color-olive)]">
                Send a clear and direct enquiry.
              </h2>
            </div>

            <div className="mb-8">
              <p className="mb-3 text-sm uppercase tracking-[0.14em] text-[var(--color-olive-soft)]">
                enquiry type
              </p>

              <div className="flex flex-wrap gap-3">
                {enquiryTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setActiveType(type)}
                    className={clsx(
                      "border px-4 py-3 text-sm uppercase tracking-[0.14em] transition-colors duration-200",
                      activeType === type
                        ? "border-black/12 bg-black/[0.05] text-[var(--color-olive)]"
                        : "border-black/8 bg-transparent text-[var(--color-olive-soft)] hover:bg-black/[0.025] hover:text-[var(--color-olive)]",
                    )}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <form className="grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm uppercase tracking-[0.14em] text-[var(--color-olive-soft)]">
                    Full name
                  </span>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="min-h-[3.7rem] border border-black/8 bg-transparent px-4 text-[var(--color-olive)] outline-none transition-colors focus:border-black/20"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm uppercase tracking-[0.14em] text-[var(--color-olive-soft)]">
                    Phone
                  </span>
                  <input
                    type="tel"
                    placeholder="+27..."
                    className="min-h-[3.7rem] border border-black/8 bg-transparent px-4 text-[var(--color-olive)] outline-none transition-colors focus:border-black/20"
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-sm uppercase tracking-[0.14em] text-[var(--color-olive-soft)]">
                  Email
                </span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="min-h-[3.7rem] border border-black/8 bg-transparent px-4 text-[var(--color-olive)] outline-none transition-colors focus:border-black/20"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm uppercase tracking-[0.14em] text-[var(--color-olive-soft)]">
                  Selected enquiry type
                </span>
                <input
                  type="text"
                  value={activeType}
                  readOnly
                  className="min-h-[3.7rem] border border-black/8 bg-black/[0.025] px-4 text-[var(--color-olive)] outline-none"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm uppercase tracking-[0.14em] text-[var(--color-olive-soft)]">
                  Message
                </span>
                <textarea
                  placeholder="Tell us what kind of stay you’re looking for, your dates, room preference, student needs, pet details, or any other practical question."
                  className="min-h-[12rem] border border-black/8 bg-transparent px-4 py-4 text-[var(--color-olive)] outline-none transition-colors focus:border-black/20"
                />
              </label>

              <div className="flex flex-wrap gap-3 pt-2">
                <button type="submit" className="button-primary">
                  Send enquiry
                </button>
                <a href="/booking" className="button-secondary">
                  Go to booking
                </a>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
