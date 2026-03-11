import Image from "next/image";
import Link from "next/link";
import {
  houseNotes,
  includedServices,
  sharedSpaces,
  stayFormats,
  stayHeroImages,
} from "@/lib/stay-data";

export function StayPage() {
  return (
    <main className="flow-section pt-32 retro-paper" data-flow-section>
      <div className="container-shell">
        <section
          className="grid gap-8 border-b border-black/10 pb-8 lg:grid-cols-[0.9fr_1.1fr]"
          data-reveal
        >
          <div>
            <p className="retro-kicker mb-4 text-[var(--color-olive-soft)]">
              chapter 04 • the stay
            </p>
            <h1 className="retro-title retro-ink max-w-[8ch]">
              A home story told through comfort, routine, and care.
            </h1>
          </div>

          <div className="flex items-end">
            <p className="body-copy max-w-2xl lg:justify-self-end">
              This page explains what makes the stay different: a hosted home
              environment, shared everyday comfort, weekly care,
              student-friendly practicality, pet-friendly approval, and
              discounted on-site laundry for guests.
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
                chapter 04.1
              </p>
              <h2 className="retro-subtitle retro-ink max-w-[10ch]">
                A premium hosted home-stay, not a generic rental.
              </h2>
              <p className="body-copy mt-4 max-w-xl text-[var(--color-ink)]/82">
                Guests step into a real lived environment with thoughtful care,
                shared amenities, and a calmer day-to-day rhythm.
              </p>
            </div>

            <div className="retro-panel-thick p-5 md:p-6" data-card>
              <p className="retro-kicker mb-3 text-[var(--color-olive-soft)]">
                what this means
              </p>

              <div className="grid gap-0 border-t border-black/15">
                <div className="border-b border-black/15 py-4">
                  <p className="retro-kicker text-[var(--color-olive-soft)]">
                    stay lengths
                  </p>
                  <p className="mt-2 text-lg text-[var(--color-olive)]">
                    Short stay and long stay options
                  </p>
                </div>

                <div className="border-b border-black/15 py-4">
                  <p className="retro-kicker text-[var(--color-olive-soft)]">
                    works for
                  </p>
                  <p className="mt-2 text-lg text-[var(--color-olive)]">
                    Students, couples, solo guests, pet owners
                  </p>
                </div>

                <div className="py-4">
                  <p className="retro-kicker text-[var(--color-olive-soft)]">
                    guest benefit
                  </p>
                  <p className="mt-2 text-lg text-[var(--color-olive)]">
                    Discounted on-site laundry
                  </p>
                </div>
              </div>
            </div>
          </div>

          <article className="retro-panel-thick overflow-hidden" data-card>
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div
                className="retro-photo-frame min-h-[22rem] border-0 border-r border-black/15 lg:min-h-[36rem]"
                data-soft-image
              >
                <Image
                  src={stayHeroImages[0]}
                  alt="Shared home interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 52vw"
                  priority
                />
              </div>

              <div className="grid gap-0">
                <div
                  className="retro-panel p-5 md:p-6 border-0 border-b border-black/15"
                  data-card
                >
                  <p className="retro-kicker mb-3 text-[var(--color-olive-soft)]">
                    chapter 04.2
                  </p>
                  <h3 className="retro-subtitle retro-ink">
                    Shared comfort, daily usefulness, softer hospitality.
                  </h3>
                </div>

                <div className="p-5 md:p-6">
                  <div className="grid gap-0 border-t border-black/15">
                    <div className="border-b border-black/15 py-4">
                      <p className="retro-kicker text-[var(--color-olive-soft)]">
                        hosted environment
                      </p>
                      <p className="mt-2 text-lg text-[var(--color-olive)]">
                        Warm, practical, and more personal
                      </p>
                    </div>

                    <div className="border-b border-black/15 py-4">
                      <p className="retro-kicker text-[var(--color-olive-soft)]">
                        daily living
                      </p>
                      <p className="mt-2 text-lg text-[var(--color-olive)]">
                        Kitchen, home amenities, cleaning, linen
                      </p>
                    </div>

                    <div className="py-4">
                      <p className="retro-kicker text-[var(--color-olive-soft)]">
                        booking path
                      </p>
                      <p className="mt-2 text-lg text-[var(--color-olive)]">
                        Rooms → Stay → Booking request
                      </p>
                    </div>
                  </div>

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
            </div>
          </article>
        </section>

        <section className="mt-6 retro-marquee" data-reveal>
          <div className="retro-marquee-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex">
                {[
                  "Shared kitchen access",
                  "Bathroom access",
                  "Hosted comfort",
                  "Weekly cleaning",
                  "Fresh linen support",
                  "Student-friendly living",
                  "Pet-friendly approval",
                  "Discounted guest laundry",
                ].map((item) => (
                  <span key={`${i}-${item}`} className="retro-marquee-item">
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section
          className="mt-6 grid gap-8 border-t border-black/10 pt-8 lg:grid-cols-[0.88fr_1.12fr]"
          data-reveal
        >
          <div>
            <p className="retro-kicker mb-4 text-[var(--color-olive-soft)]">
              chapter 05 • shared home living
            </p>
            <h2 className="retro-title retro-ink max-w-[8ch]">
              The parts of home that make staying easier.
            </h2>
            <p className="body-copy mt-6 max-w-xl">
              The value of the stay is not only in the room itself. It is also
              in the small daily things that make living feel more natural,
              relaxed, and usable.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {sharedSpaces.map((item) => (
              <article
                key={item.title}
                className="retro-panel p-5 md:p-6"
                data-card
              >
                <p className="mb-3 text-[clamp(1.5rem,2vw,2rem)] leading-tight text-[var(--color-olive)]">
                  {item.title}
                </p>
                <p className="body-copy">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 retro-panel-thick p-5 md:p-6" data-card>
          <div className="mb-6 border-b border-black/15 pb-4">
            <p className="retro-kicker mb-3 text-[var(--color-olive-soft)]">
              chapter 06 • services included
            </p>
            <h2 className="retro-subtitle retro-ink max-w-[12ch]">
              Practical care, told like part of the story.
            </h2>
          </div>

          <div className="grid gap-0 border-t border-black/15">
            {includedServices.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-4 border-b border-black/15 py-5 md:grid-cols-[0.12fr_0.3fr_0.58fr]"
              >
                <div className="retro-number text-[var(--color-ink)]">
                  {String(index + 1).padStart(2, "0")}.
                </div>

                <div>
                  <p className="text-[clamp(1.35rem,1.8vw,1.8rem)] leading-tight text-[var(--color-olive)]">
                    {item.title}
                  </p>
                </div>

                <div>
                  <p className="body-copy max-w-none">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="mt-6 grid gap-8 border-t border-black/10 pt-8 lg:grid-cols-[0.82fr_1.18fr]"
          data-reveal
        >
          <div>
            <p className="retro-kicker mb-4 text-[var(--color-olive-soft)]">
              chapter 07 • stay formats
            </p>
            <h2 className="retro-title retro-ink max-w-[8ch]">
              Three ways this home can work for different guests.
            </h2>
          </div>

          <div className="grid gap-4 xl:grid-cols-3">
            {stayFormats.map((format, index) => (
              <article
                key={format.title}
                className={`p-5 md:p-6 ${
                  index === 0
                    ? "retro-panel-thick retro-block-blue"
                    : "retro-panel"
                }`}
                data-card
              >
                <p className="retro-number text-[var(--color-ink)]">
                  {String(index + 1).padStart(2, "0")}.
                </p>

                <div className="mt-4 border-t border-black/15 pt-4">
                  <p className="retro-kicker mb-2 text-[var(--color-ink)]/70">
                    {format.subtitle}
                  </p>
                  <h3 className="text-[clamp(1.8rem,2.2vw,2.4rem)] leading-tight text-[var(--color-ink)]">
                    {format.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[var(--color-ink)]/82">
                    {format.description}
                  </p>

                  <div className="mt-6 grid gap-0 border-t border-black/15">
                    {format.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="border-b border-black/15 py-3 text-sm leading-6 text-[var(--color-ink)]/82 last:border-b-0"
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <div
            className="retro-panel-thick retro-block-clay p-5 md:p-6 text-white"
            data-card
          >
            <p className="retro-kicker mb-4 text-white/70">
              chapter 08 • guest laundry benefit
            </p>
            <h2 className="retro-subtitle max-w-[12ch] text-white">
              A practical daily detail that quietly improves the whole stay.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/82">
              The on-site laundry is useful to the wider community, but it
              becomes especially valuable for guests. Discounted access makes
              longer stays, student stays, and routine living easier.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="retro-panel bg-white/10 p-4">
                <p className="retro-kicker mb-2 text-white/70">for guests</p>
                <p className="text-base leading-7 text-white">Discounted use</p>
              </div>

              <div className="retro-panel bg-white/10 p-4">
                <p className="retro-kicker mb-2 text-white/70">for town</p>
                <p className="text-base leading-7 text-white">
                  Public laundry service
                </p>
              </div>

              <div className="retro-panel bg-white/10 p-4">
                <p className="retro-kicker mb-2 text-white/70">strongest for</p>
                <p className="text-base leading-7 text-white">
                  Longer living and routine comfort
                </p>
              </div>
            </div>
          </div>

          <div className="retro-panel-thick p-5 md:p-6" data-card>
            <p className="retro-kicker mb-4 text-[var(--color-olive-soft)]">
              chapter 08.1 • why it matters
            </p>

            <div className="grid gap-0 border-t border-black/15">
              {[
                "Laundry belongs inside the stay story, not as a separate product page.",
                "It should appear in the FAQ, booking flow, and room details where useful.",
                "It adds routine comfort, which strengthens the premium feeling.",
                "Guests should clearly understand that they receive a discounted benefit.",
              ].map((item) => (
                <div
                  key={item}
                  className="border-b border-black/15 py-4 text-base leading-7 text-[var(--color-olive)]/82 last:border-b-0"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="mt-6 grid gap-8 border-t border-black/10 pt-8 lg:grid-cols-[0.84fr_1.16fr]"
          data-reveal
        >
          <div>
            <p className="retro-kicker mb-4 text-[var(--color-olive-soft)]">
              chapter 09 • trust
            </p>
            <h2 className="retro-title retro-ink max-w-[8ch]">
              The stay should feel trustworthy before a guest even enquires.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {houseNotes.map((note) => (
              <article
                key={note.title}
                className="retro-panel p-5 md:p-6"
                data-card
              >
                <p className="mb-3 text-[clamp(1.4rem,1.8vw,1.9rem)] leading-tight text-[var(--color-olive)]">
                  {note.title}
                </p>
                <p className="body-copy">{note.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 border-t border-black/10 pt-8">
          <div
            className="retro-panel-thick retro-block-blue p-6 md:p-8"
            data-reveal
          >
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="retro-kicker mb-4 text-[var(--color-ink)]/70">
                  chapter 10 • next step
                </p>
                <h2 className="retro-subtitle max-w-[12ch] text-[var(--color-ink)]">
                  Explore rooms or move straight into booking.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-ink)]/82">
                  Now that the guest understands the stay model, the next action
                  should feel natural and clear.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/rooms" className="button-secondary">
                  View rooms
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
