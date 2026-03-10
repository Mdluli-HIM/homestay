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
    <main className="flow-section pt-32" data-flow-section>
      <div className="container-shell">
        <section
          className="grid gap-10 border-b border-black/8 pb-10 xl:grid-cols-[0.9fr_1.1fr]"
          data-reveal
        >
          <div>
            <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">
              the stay
            </p>
            <h1 className="max-w-[8ch] text-[clamp(3.6rem,7vw,6.6rem)] leading-[0.92] tracking-[-0.05em] text-[var(--color-olive)]">
              Boutique comfort, shared like home.
            </h1>
          </div>

          <p className="body-copy max-w-2xl xl:justify-self-end">
            This page explains what makes the accommodation special: a hosted
            home environment, shared everyday comfort, weekly care, flexible
            stay options, student-friendly living, pet-friendly approval, and
            discounted on-site laundry for guests.
          </p>
        </section>

        <section className="border-b border-black/8 py-10" data-card>
          <div className="grid gap-8 xl:grid-cols-[0.12fr_0.48fr_0.4fr] xl:gap-10">
            <div className="flex items-start justify-between border-b border-black/8 pb-4 xl:block xl:border-b-0 xl:pb-0">
              <span className="text-[clamp(2.8rem,5vw,4.4rem)] leading-none tracking-[-0.05em] text-[var(--color-olive)]">
                01
              </span>

              <div className="text-right xl:mt-6 xl:text-left">
                <p className="eyebrow mb-1 text-[var(--color-olive-soft)]">
                  what this is
                </p>
                <p className="text-lg text-[var(--color-olive)]">
                  Hosted home-stay
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="grid gap-6 border-b border-black/8 pb-6 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="eyebrow mb-3 text-[var(--color-olive-soft)]">
                    shared comfort • practical hospitality • flexible living
                  </p>
                  <h2 className="text-[clamp(2.4rem,4vw,4.5rem)] leading-[0.95] tracking-[-0.05em] text-[var(--color-olive)]">
                    A premium hosted home-stay, not a generic rental.
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--color-olive)]/82">
                    Guests stay in a real home environment with access to shared
                    amenities, thoughtful care, and a softer everyday rhythm
                    than a cold hotel system or a purely transactional
                    short-let.
                  </p>
                </div>

                <div className="grid gap-3 text-sm uppercase tracking-[0.14em] text-[var(--color-olive-soft)] lg:min-w-[12rem] lg:text-right">
                  <span>Short stay & long stay</span>
                  <span>Student-friendly</span>
                  <span>Pet-friendly by approval</span>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="border border-black/8 p-4">
                  <p className="eyebrow mb-2 text-[var(--color-olive-soft)]">
                    stay lengths
                  </p>
                  <p className="text-base leading-7 text-[var(--color-olive)]">
                    Short stay and long stay options
                  </p>
                </div>

                <div className="border border-black/8 p-4">
                  <p className="eyebrow mb-2 text-[var(--color-olive-soft)]">
                    best for
                  </p>
                  <p className="text-base leading-7 text-[var(--color-olive)]">
                    Students, couples, solo guests, pet owners
                  </p>
                </div>

                <div className="border border-black/8 p-4">
                  <p className="eyebrow mb-2 text-[var(--color-olive-soft)]">
                    guest benefit
                  </p>
                  <p className="text-base leading-7 text-[var(--color-olive)]">
                    Discounted on-site laundry
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/booking" className="button-primary">
                  Start booking
                </Link>
                <Link href="/rooms" className="button-secondary">
                  Compare rooms
                </Link>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1fr_0.42fr]">
              <div
                className="frame-media min-h-[24rem] xl:min-h-[32rem]"
                data-parallax-wrap
              >
                <Image
                  src={stayHeroImages[0]}
                  alt="Shared home interior"
                  fill
                  data-parallax
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 34vw"
                  priority
                />
              </div>

              <div className="grid gap-4">
                <div
                  className="frame-media min-h-[14rem] xl:min-h-[15.5rem]"
                  data-parallax-wrap
                >
                  <Image
                    src={stayHeroImages[1]}
                    alt="Kitchen and living atmosphere"
                    fill
                    data-parallax
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 18vw"
                  />
                </div>

                <div
                  className="frame-media min-h-[14rem] xl:min-h-[15.5rem]"
                  data-parallax-wrap
                >
                  <Image
                    src={stayHeroImages[2]}
                    alt="Bedroom with warm textures"
                    fill
                    data-parallax
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 18vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="grid gap-10 border-b border-black/8 py-10 xl:grid-cols-[0.88fr_1.12fr]"
          data-reveal
        >
          <div>
            <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">
              shared home living
            </p>
            <h2 className="max-w-[10ch] text-[clamp(2.8rem,4.8vw,5rem)] leading-[0.95] tracking-[-0.05em] text-[var(--color-olive)]">
              Guests have access to the parts of home that make living easier.
            </h2>
            <p className="body-copy mt-6 max-w-xl">
              This is where the site should be transparent and elegant at the
              same time. The shared nature of the stay is part of the value:
              kitchen access, daily usefulness, and a calmer domestic rhythm.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {sharedSpaces.map((item) => (
              <article
                key={item.title}
                className="border border-black/8 p-5"
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

        <section className="border-b border-black/8 py-10" data-card>
          <div className="mb-8 grid gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-end">
            <div>
              <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">
                services included
              </p>
              <h2 className="max-w-[10ch] text-[clamp(2.8rem,4.8vw,5rem)] leading-[0.95] tracking-[-0.05em] text-[var(--color-olive)]">
                Practical care, presented clearly.
              </h2>
            </div>

            <p className="body-copy max-w-2xl xl:justify-self-end">
              These services are part of what makes the stay feel elevated. They
              are not side notes. They are part of the everyday quality of the
              experience.
            </p>
          </div>

          <div className="grid gap-0 border-t border-black/8">
            {includedServices.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-5 border-b border-black/8 py-5 xl:grid-cols-[0.1fr_0.32fr_0.58fr] xl:gap-8"
              >
                <div className="text-[clamp(1.8rem,3vw,2.8rem)] leading-none tracking-[-0.04em] text-[var(--color-olive)]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <p className="text-[clamp(1.4rem,1.8vw,1.9rem)] leading-tight text-[var(--color-olive)]">
                    {item.title}
                  </p>
                </div>

                <div>
                  <p className="body-copy max-w-3xl">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="grid gap-10 border-b border-black/8 py-10 xl:grid-cols-[0.88fr_1.12fr]"
          data-reveal
        >
          <div>
            <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">
              stay formats
            </p>
            <h2 className="max-w-[10ch] text-[clamp(2.8rem,4.8vw,5rem)] leading-[0.95] tracking-[-0.05em] text-[var(--color-olive)]">
              Three ways the home can work for different guests.
            </h2>
            <p className="body-copy mt-6 max-w-xl">
              The accommodation should feel flexible without becoming vague.
              These stay types help guests immediately understand where they
              fit.
            </p>
          </div>

          <div className="grid gap-4 xl:grid-cols-3">
            {stayFormats.map((format, index) => (
              <article
                key={format.title}
                className="border border-black/8 p-6"
                data-card
              >
                <p className="mb-4 text-[clamp(2rem,3vw,3rem)] leading-none tracking-[-0.05em] text-[var(--color-olive)]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <div className="border-t border-black/8 pt-4">
                  <p className="eyebrow mb-2 text-[var(--color-olive-soft)]">
                    {format.subtitle}
                  </p>
                  <h3 className="text-[clamp(1.8rem,2.2vw,2.4rem)] leading-tight text-[var(--color-olive)]">
                    {format.title}
                  </h3>
                  <p className="body-copy mt-4">{format.description}</p>

                  <div className="mt-6 grid gap-3">
                    {format.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="border-t border-black/8 py-3 text-sm leading-6 text-[var(--color-olive)]/82"
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

        <section className="border-b border-black/8 py-10" data-card>
          <div className="grid gap-8 xl:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">
                guest laundry benefit
              </p>
              <h2 className="max-w-[11ch] text-[clamp(2.8rem,4.8vw,5rem)] leading-[0.95] tracking-[-0.05em] text-[var(--color-olive)]">
                A practical detail that makes daily living much better.
              </h2>

              <p className="body-copy mt-6 max-w-2xl">
                The on-site laundry is not only useful to the wider community —
                it also becomes a strong benefit for guests. Discounted access
                adds real practicality, especially for longer stays and
                student-friendly living.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="border border-black/8 p-4">
                  <p className="eyebrow mb-2 text-[var(--color-olive-soft)]">
                    for guests
                  </p>
                  <p className="text-base leading-7 text-[var(--color-olive)]">
                    Discounted use
                  </p>
                </div>

                <div className="border border-black/8 p-4">
                  <p className="eyebrow mb-2 text-[var(--color-olive-soft)]">
                    for town
                  </p>
                  <p className="text-base leading-7 text-[var(--color-olive)]">
                    Public laundry service
                  </p>
                </div>

                <div className="border border-black/8 p-4">
                  <p className="eyebrow mb-2 text-[var(--color-olive-soft)]">
                    strongest for
                  </p>
                  <p className="text-base leading-7 text-[var(--color-olive)]">
                    Longer living and routine comfort
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-0 border-t border-black/8">
              {[
                "Laundry stays inside the stay story, not as a separate product page.",
                "It should be visible in the FAQ, booking flow, and room details where relevant.",
                "It adds everyday usefulness, which supports the premium feeling of the accommodation.",
                "Guests should clearly understand that they receive a discounted benefit.",
              ].map((item) => (
                <div
                  key={item}
                  className="border-b border-black/8 py-5 text-base leading-7 text-[var(--color-olive)]/82"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="grid gap-10 border-b border-black/8 py-10 xl:grid-cols-[0.88fr_1.12fr]"
          data-reveal
        >
          <div>
            <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">
              why this matters
            </p>
            <h2 className="max-w-[10ch] text-[clamp(2.8rem,4.8vw,5rem)] leading-[0.95] tracking-[-0.05em] text-[var(--color-olive)]">
              The stay should feel trustworthy before a guest even enquires.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {houseNotes.map((note) => (
              <article
                key={note.title}
                className="border border-black/8 p-5"
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

        <section className="grid gap-8 py-10 xl:grid-cols-[1fr_auto] xl:items-end">
          <div>
            <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">
              ready to continue
            </p>
            <h2 className="max-w-[12ch] text-[clamp(2.6rem,4.5vw,4.8rem)] leading-[0.95] tracking-[-0.05em] text-[var(--color-olive)]">
              Explore rooms or move straight into booking.
            </h2>
            <p className="body-copy mt-5 max-w-2xl">
              Now that the guest understands the stay model, the next action
              should feel natural and easy.
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
        </section>
      </div>
    </main>
  );
}
