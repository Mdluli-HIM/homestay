import Image from "next/image";
import Link from "next/link";
import { getRelatedRooms, type Room } from "@/lib/placeholder-data";

type RoomDetailProps = {
  room: Room;
};

export function RoomDetail({ room }: RoomDetailProps) {
  const relatedRooms = getRelatedRooms(room.slug);

  return (
    <main className="flow-section pt-32" data-flow-section>
      <div className="container-shell">
        <section
          className="grid gap-10 border-b border-black/8 pb-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-end"
          data-reveal
        >
          <div>
            <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">
              room detail
            </p>
            <h1 className="max-w-[8ch] text-[clamp(3.6rem,7vw,6.6rem)] leading-[0.92] tracking-[-0.05em] text-[var(--color-olive)]">
              {room.name}
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-[var(--color-olive)]/82">
              {room.tagline}
            </p>
          </div>

          <p className="body-copy max-w-2xl xl:justify-self-end">
            {room.narrative}
          </p>
        </section>

        <section className="border-b border-black/8 py-8 xl:py-10" data-card>
          <div className="grid gap-8 xl:grid-cols-[0.12fr_0.5fr_0.38fr] xl:gap-10">
            <div className="flex items-start justify-between border-b border-black/8 pb-4 xl:block xl:border-b-0 xl:pb-0">
              <span className="text-[clamp(2.8rem,5vw,4.4rem)] leading-none tracking-[-0.05em] text-[var(--color-olive)]">
                01
              </span>

              <div className="text-right xl:mt-6 xl:text-left">
                <p className="eyebrow mb-1 text-[var(--color-olive-soft)]">
                  from
                </p>
                <p className="text-lg text-[var(--color-olive)]">
                  R{room.priceFrom}
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="grid gap-6 border-b border-black/8 pb-6 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="eyebrow mb-3 text-[var(--color-olive-soft)]">
                    {room.stayTypes.join(" • ")}
                  </p>
                  <h2 className="text-[clamp(2.4rem,4vw,4.5rem)] leading-[0.95] tracking-[-0.05em] text-[var(--color-olive)]">
                    {room.name}
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--color-olive)]/82">
                    {room.longDescription}
                  </p>
                </div>

                <div className="grid gap-3 text-sm uppercase tracking-[0.14em] text-[var(--color-olive-soft)] lg:min-w-[11rem] lg:text-right">
                  <span>Up to {room.guests} guests</span>
                  <span>{room.size}</span>
                  <span>{room.bed}</span>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <p className="body-copy max-w-xl">{room.description}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="border border-black/8 p-4">
                    <p className="eyebrow mb-2 text-[var(--color-olive-soft)]">
                      ideal for
                    </p>
                    <p className="text-base leading-7 text-[var(--color-olive)]">
                      {room.idealFor}
                    </p>
                  </div>

                  <div className="border border-black/8 p-4">
                    <p className="eyebrow mb-2 text-[var(--color-olive-soft)]">
                      room atmosphere
                    </p>
                    <p className="text-base leading-7 text-[var(--color-olive)]">
                      {room.atmosphere[0]} • {room.atmosphere[1]}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                {room.amenities.slice(0, 6).map((item) => (
                  <div
                    key={item}
                    className="border-t border-black/8 py-3 text-sm leading-6 text-[var(--color-olive)]/82"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
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

            <div className="grid gap-4 lg:grid-cols-[1fr_0.42fr]">
              <div
                className="frame-media min-h-[24rem] xl:min-h-[32rem]"
                data-parallax-wrap
              >
                <Image
                  src={room.gallery[0]}
                  alt={room.name}
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
                    src={room.gallery[1]}
                    alt={`${room.name} detail one`}
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
                    src={room.gallery[2]}
                    alt={`${room.name} detail two`}
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
              Boutique presentation, but still warm and lived-in.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {room.sharedLiving.map((item) => (
              <article
                key={item}
                className="border border-black/8 p-5"
                data-card
              >
                <p className="body-copy">{item}</p>
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
              care and comfort
            </p>
            <h2 className="max-w-[10ch] text-[clamp(2.8rem,4.8vw,5rem)] leading-[0.95] tracking-[-0.05em] text-[var(--color-olive)]">
              Designed to feel easier, softer, and more usable over time.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {room.careNotes.map((item) => (
              <article
                key={item}
                className="border-t border-black/8 py-4"
                data-card
              >
                <p className="text-base leading-7 text-[var(--color-olive)]/82">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b border-black/8 py-10" data-card>
          <div className="mb-8 grid gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-end">
            <div>
              <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">
                more visuals
              </p>
              <h2 className="max-w-[10ch] text-[clamp(2.8rem,4.8vw,5rem)] leading-[0.95] tracking-[-0.05em] text-[var(--color-olive)]">
                A fuller look at the room experience.
              </h2>
            </div>

            <p className="body-copy max-w-2xl xl:justify-self-end">
              The detail page should feel immersive without becoming heavy.
              Large imagery, clean framing, and strong spacing should carry the
              luxury.
            </p>
          </div>

          <div className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
            <div
              className="frame-media min-h-[30rem] xl:min-h-[36rem]"
              data-parallax-wrap
            >
              <Image
                src={room.gallery[3]}
                alt={`${room.name} gallery image three`}
                fill
                data-parallax
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 58vw"
              />
            </div>

            <div className="grid gap-4">
              <div className="border border-black/8 bg-[var(--color-sand)] p-6 xl:min-h-[12rem]">
                <p className="eyebrow mb-3 text-[var(--color-olive-soft)]">
                  room note
                </p>
                <p className="text-2xl leading-relaxed text-[var(--color-olive)]">
                  A home-led room experience with practical value and a quieter,
                  more considered sense of hospitality.
                </p>
              </div>

              <div
                className="frame-media min-h-[18rem] xl:min-h-[22rem]"
                data-parallax-wrap
              >
                <Image
                  src={room.gallery[1]}
                  alt={`${room.name} gallery image four`}
                  fill
                  data-parallax
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 30vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 border-b border-black/8 py-10 xl:grid-cols-[1fr_auto] xl:items-end">
          <div>
            <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">
              ready to stay
            </p>
            <h2 className="max-w-[12ch] text-[clamp(2.6rem,4.5vw,4.8rem)] leading-[0.95] tracking-[-0.05em] text-[var(--color-olive)]">
              Want this room for your stay?
            </h2>
            <p className="body-copy mt-5 max-w-2xl">
              Move into booking, or compare the other rooms before sending your
              request.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/rooms" className="button-secondary">
              View all rooms
            </Link>
            <Link
              href={`/booking?room=${room.slug}`}
              className="button-primary"
            >
              Check availability
            </Link>
          </div>
        </section>

        <section className="py-10" data-reveal>
          <div className="mb-8">
            <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">
              other rooms
            </p>
            <h2 className="max-w-[10ch] text-[clamp(2.8rem,4.8vw,5rem)] leading-[0.95] tracking-[-0.05em] text-[var(--color-olive)]">
              You may also like these stays.
            </h2>
          </div>

          <div className="grid gap-8 xl:grid-cols-2">
            {relatedRooms.map((relatedRoom, index) => (
              <article
                key={relatedRoom.id}
                className="border-b border-black/8 pb-8"
                data-card
              >
                <div className="grid gap-6 xl:grid-cols-[0.12fr_0.88fr]">
                  <div className="text-[clamp(2.2rem,4vw,3.4rem)] leading-none tracking-[-0.05em] text-[var(--color-olive)]">
                    {String(index + 2).padStart(2, "0")}
                  </div>

                  <div className="grid gap-5">
                    <div
                      className="frame-media min-h-[20rem] xl:min-h-[24rem]"
                      data-parallax-wrap
                    >
                      <Image
                        src={relatedRoom.image}
                        alt={relatedRoom.name}
                        fill
                        data-parallax
                        className="object-cover"
                        sizes="(max-width: 1280px) 100vw, 42vw"
                      />
                    </div>

                    <div className="grid gap-4 border-t border-black/8 pt-5 lg:grid-cols-[1fr_auto] lg:items-end">
                      <div>
                        <p className="eyebrow mb-2 text-[var(--color-olive-soft)]">
                          {relatedRoom.stayTypes.join(" • ")}
                        </p>
                        <h3 className="text-[clamp(2rem,3vw,3.2rem)] leading-[0.98] tracking-[-0.04em] text-[var(--color-olive)]">
                          {relatedRoom.name}
                        </h3>
                        <p className="mt-3 max-w-xl text-base leading-7 text-[var(--color-olive)]/78">
                          {relatedRoom.tagline}
                        </p>
                      </div>

                      <div className="text-left lg:text-right">
                        <p className="eyebrow mb-1 text-[var(--color-olive-soft)]">
                          from
                        </p>
                        <p className="text-lg text-[var(--color-olive)]">
                          R{relatedRoom.priceFrom}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={`/rooms/${relatedRoom.slug}`}
                        className="button-primary"
                      >
                        View room
                      </Link>
                      <Link
                        href={`/booking?room=${relatedRoom.slug}`}
                        className="button-secondary"
                      >
                        Check availability
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
