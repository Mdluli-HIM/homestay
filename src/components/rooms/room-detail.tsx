import Image from "next/image";
import Link from "next/link";
import { getRelatedRooms, type Room } from "@/lib/placeholder-data";

type RoomDetailProps = {
  room: Room;
};

const toneClasses = ["retro-block-blue", "retro-block-yellow", "", ""];

export function RoomDetail({ room }: RoomDetailProps) {
  const relatedRooms = getRelatedRooms(room.slug);

  return (
    <main className="flow-section pt-32 retro-paper" data-flow-section>
      <div className="container-shell">
        <section
          className="grid gap-8 border-b border-black/10 pb-8 lg:grid-cols-[0.9fr_1.1fr]"
          data-reveal
        >
          <div>
            <p className="retro-kicker mb-4 text-[var(--color-olive-soft)]">
              chapter 15 • room detail
            </p>
            <h1 className="retro-title retro-ink max-w-[8ch]">{room.name}</h1>
          </div>

          <div className="flex items-end">
            <p className="body-copy max-w-2xl lg:justify-self-end">
              {room.narrative}
            </p>
          </div>
        </section>

        <section className="mt-6 retro-panel-thick overflow-hidden" data-card>
          <div className="grid gap-0 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="retro-block-yellow p-5 md:p-6">
              <p className="retro-kicker mb-3 text-[var(--color-ink)]">
                chapter 15.1
              </p>

              <div className="retro-number text-[var(--color-ink)]">01.</div>

              <h2 className="mt-4 text-[clamp(2.3rem,3.4vw,4rem)] leading-[0.95] tracking-[-0.05em] text-[var(--color-ink)]">
                {room.tagline}
              </h2>

              <p className="mt-5 text-base leading-7 text-[var(--color-ink)]/82">
                {room.longDescription}
              </p>

              <div className="mt-6 grid gap-0 border-t border-black/15">
                <div className="border-b border-black/15 py-4">
                  <p className="retro-kicker text-[var(--color-ink)]/65">
                    ideal for
                  </p>
                  <p className="mt-2 text-lg text-[var(--color-ink)]">
                    {room.idealFor}
                  </p>
                </div>

                <div className="border-b border-black/15 py-4">
                  <p className="retro-kicker text-[var(--color-ink)]/65">
                    details
                  </p>
                  <p className="mt-2 text-lg text-[var(--color-ink)]">
                    Up to {room.guests} guests • {room.size} • {room.bed}
                  </p>
                </div>

                <div className="py-4">
                  <p className="retro-kicker text-[var(--color-ink)]/65">
                    from
                  </p>
                  <p className="mt-2 text-lg text-[var(--color-ink)]">
                    R{room.priceFrom}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={`/booking?room=${room.slug}`}
                  className="button-primary"
                >
                  Request this room
                </Link>
                <Link href="/rooms" className="button-secondary">
                  Compare rooms
                </Link>
              </div>
            </div>

            <div className="grid gap-0">
              <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                <div
                  className="retro-photo-frame min-h-[24rem] border-0 border-b border-r border-black/15 lg:min-h-[34rem]"
                  data-soft-image
                >
                  <Image
                    src={room.gallery[0]}
                    alt={room.name}
                    fill
                    data-soft-image
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 44vw"
                    priority
                  />
                </div>

                <div className="grid gap-0">
                  <div
                    className="retro-photo-frame min-h-[12rem] border-0 border-b border-black/15 lg:min-h-[17rem]"
                    data-soft-image
                  >
                    <Image
                      src={room.gallery[1]}
                      alt={`${room.name} detail one`}
                      fill
                      data-soft-image
                      className="object-cover"
                      sizes="(max-width: 1280px) 100vw, 22vw"
                    />
                  </div>

                  <div
                    className="retro-photo-frame min-h-[12rem] border-0 border-black/15 lg:min-h-[17rem]"
                    data-soft-image
                  >
                    <Image
                      src={room.gallery[2]}
                      alt={`${room.name} detail two`}
                      fill
                      data-soft-image
                      className="object-cover"
                      sizes="(max-width: 1280px) 100vw, 22vw"
                    />
                  </div>
                </div>
              </div>

              <div className="p-5 md:p-6">
                <div className="grid gap-0 border-t border-black/15">
                  <div className="grid gap-4 border-b border-black/15 py-4 md:grid-cols-[0.22fr_0.78fr]">
                    <p className="retro-kicker text-[var(--color-olive-soft)]">
                      description
                    </p>
                    <p className="body-copy max-w-none">{room.description}</p>
                  </div>

                  <div className="grid gap-4 py-4 md:grid-cols-[0.22fr_0.78fr]">
                    <p className="retro-kicker text-[var(--color-olive-soft)]">
                      atmosphere
                    </p>
                    <p className="text-base leading-7 text-[var(--color-olive)]/82">
                      {room.atmosphere.join(" • ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="mt-6 grid gap-8 border-t border-black/10 pt-8 lg:grid-cols-[0.88fr_1.12fr]"
          data-reveal
        >
          <div>
            <p className="retro-kicker mb-4 text-[var(--color-olive-soft)]">
              chapter 15.2 • stay features
            </p>
            <h2 className="retro-title retro-ink max-w-[8ch]">
              What comes with the room is part of the story.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {room.amenities.map((item, index) => (
              <article
                key={item}
                className={`retro-panel p-5 ${toneClasses[index % toneClasses.length]}`}
                data-card
              >
                <p
                  className={`text-base leading-7 ${
                    toneClasses[index % toneClasses.length].includes(
                      "text-white",
                    )
                      ? "text-white/85"
                      : "text-[var(--color-ink)]/82"
                  }`}
                >
                  {item}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 retro-panel-thick p-5 md:p-6" data-card>
          <div className="mb-6 border-b border-black/15 pb-4">
            <p className="retro-kicker mb-3 text-[var(--color-olive-soft)]">
              chapter 15.3 • shared home living
            </p>
            <h2 className="retro-subtitle retro-ink max-w-[12ch]">
              The room is only part of the experience.
            </h2>
          </div>

          <div className="grid gap-0 border-t border-black/15">
            {room.sharedLiving.map((item, index) => (
              <div
                key={item}
                className="grid gap-4 border-b border-black/15 py-5 md:grid-cols-[0.12fr_0.88fr]"
              >
                <div className="retro-number text-[var(--color-ink)]">
                  {String(index + 1).padStart(2, "0")}.
                </div>
                <p className="body-copy max-w-none">{item}</p>
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
              chapter 15.4 • care
            </p>
            <h2 className="retro-title retro-ink max-w-[8ch]">
              Designed to feel easier over time.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {room.careNotes.map((item, index) => (
              <article
                key={item}
                className={`retro-panel p-5 ${
                  index % 2 === 0 ? "retro-block-blue" : "retro-block-yellow"
                }`}
                data-card
              >
                <p className="text-base leading-7 text-[var(--color-ink)]/82">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 retro-marquee" data-reveal>
          <div className="retro-marquee-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex">
                {[
                  room.name,
                  "Hosted home stay",
                  "Shared kitchen access",
                  "Weekly cleaning",
                  "Fresh linen support",
                  "Discounted guest laundry",
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
                chapter 15.5 • related rooms
              </p>
              <h2 className="retro-title retro-ink max-w-[8ch]">
                Other chapters in the same house.
              </h2>
            </div>

            <div className="grid gap-4">
              {relatedRooms.map((relatedRoom, index) => (
                <article
                  key={relatedRoom.slug}
                  className="retro-panel-thick overflow-hidden"
                  data-card
                >
                  <div className="grid gap-0 lg:grid-cols-[0.7fr_1.3fr]">
                    <div
                      className={`p-5 md:p-6 ${
                        toneClasses[index % toneClasses.length]
                      }`}
                    >
                      <p
                        className={`retro-kicker mb-3 ${
                          toneClasses[index % toneClasses.length].includes(
                            "text-white",
                          )
                            ? "text-white/70"
                            : "text-[var(--color-ink)]/70"
                        }`}
                      >
                        related room
                      </p>

                      <h3
                        className={`text-[clamp(2rem,3vw,3.2rem)] leading-[0.95] tracking-[-0.05em] ${
                          toneClasses[index % toneClasses.length].includes(
                            "text-white",
                          )
                            ? "text-white"
                            : "text-[var(--color-ink)]"
                        }`}
                      >
                        {relatedRoom.name}
                      </h3>

                      <p
                        className={`mt-4 text-base leading-7 ${
                          toneClasses[index % toneClasses.length].includes(
                            "text-white",
                          )
                            ? "text-white/82"
                            : "text-[var(--color-ink)]/82"
                        }`}
                      >
                        {relatedRoom.tagline}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                          href={`/rooms/${relatedRoom.slug}`}
                          className="button-secondary"
                        >
                          View room
                        </Link>
                        <Link
                          href={`/booking?room=${relatedRoom.slug}`}
                          className="button-primary"
                        >
                          Check availability
                        </Link>
                      </div>
                    </div>

                    <div
                      className="retro-photo-frame min-h-[18rem] border-0 border-black/15 lg:min-h-[22rem]"
                      data-soft-image
                    >
                      <Image
                        src={relatedRoom.image}
                        alt={relatedRoom.name}
                        fill
                        data-soft-image
                        className="object-cover"
                        sizes="(max-width: 1280px) 100vw, 40vw"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
