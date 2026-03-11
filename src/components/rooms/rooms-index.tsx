"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useMemo, useState } from "react";
import { roomFilters, rooms } from "@/lib/placeholder-data";

const toneClasses = ["retro-block-blue", "retro-block-yellow", "", ""];

export function RoomsIndex() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredRooms = useMemo(() => {
    if (activeFilter === "all") return rooms;

    return rooms.filter((room) =>
      room.stayTypes.some(
        (type) => type.toLowerCase() === activeFilter.toLowerCase(),
      ),
    );
  }, [activeFilter]);

  return (
    <main className="flow-section pt-32 retro-paper" data-flow-section>
      <div className="container-shell">
        <section
          className="grid gap-8 border-b border-black/10 pb-8 lg:grid-cols-[0.9fr_1.1fr]"
          data-reveal
        >
          <div>
            <p className="retro-kicker mb-4 text-[var(--color-olive-soft)]">
              chapter 14 • rooms
            </p>
            <h1 className="retro-title retro-ink max-w-[8ch]">
              Three stays. Three moods. Three ways to live the story.
            </h1>
          </div>

          <div className="flex items-end">
            <p className="body-copy max-w-2xl lg:justify-self-end">
              The rooms page should feel like a room catalogue with personality,
              not a generic booking list. Each room has its own tone, rhythm,
              and reason for being chosen.
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
                chapter 14.1
              </p>
              <h2 className="retro-subtitle retro-ink max-w-[10ch]">
                Pick the room that best matches the way you want to stay.
              </h2>
              <p className="body-copy mt-4 max-w-xl text-[var(--color-ink)]/82">
                Some guests want a quieter room. Some want more space. Some want
                a practical base for student or longer-stay living.
              </p>
            </div>

            <div className="retro-panel-thick p-5 md:p-6" data-card>
              <p className="retro-kicker mb-3 text-[var(--color-olive-soft)]">
                filter the collection
              </p>

              <div className="flex flex-wrap gap-3">
                {roomFilters.map((filter, index) => {
                  const isActive = activeFilter === filter.value;
                  const toneClass = toneClasses[index % toneClasses.length];

                  return (
                    <button
                      key={filter.value}
                      type="button"
                      onClick={() => setActiveFilter(filter.value)}
                      className={clsx(
                        "border px-4 py-3 text-sm uppercase tracking-[0.14em] transition-colors duration-200",
                        isActive
                          ? `border-black/15 ${toneClass || "bg-black/[0.03]"}`
                          : "border-black/10 bg-transparent text-[var(--color-olive-soft)] hover:bg-black/[0.03] hover:text-[var(--color-olive)]",
                      )}
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 grid gap-0 border-t border-black/15">
                <div className="border-b border-black/15 py-4">
                  <p className="retro-kicker text-[var(--color-olive-soft)]">
                    current view
                  </p>
                  <p className="mt-2 text-lg text-[var(--color-olive)]">
                    {filteredRooms.length} room
                    {filteredRooms.length === 1 ? "" : "s"} shown
                  </p>
                </div>

                <div className="py-4">
                  <p className="retro-kicker text-[var(--color-olive-soft)]">
                    booking style
                  </p>
                  <p className="mt-2 text-lg text-[var(--color-olive)]">
                    Direct enquiry • hosted home stay
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {filteredRooms.map((room, index) => {
              const toneClass = toneClasses[index % toneClasses.length];

              return (
                <article
                  key={room.slug}
                  className="retro-panel-thick overflow-hidden"
                  data-card
                >
                  <div className="grid gap-0 lg:grid-cols-[0.66fr_1.34fr]">
                    <div
                      className={`p-5 md:p-6 ${toneClass || "bg-transparent"}`}
                    >
                      <p className="retro-kicker mb-3 text-[var(--color-ink)]/70">
                        chapter 14.{index + 2}
                      </p>

                      <div className="retro-number text-[var(--color-ink)]">
                        {String(index + 1).padStart(2, "0")}.
                      </div>

                      <h2 className="mt-4 text-[clamp(2.2rem,3.2vw,3.6rem)] leading-[0.95] tracking-[-0.05em] text-[var(--color-ink)]">
                        {room.name}
                      </h2>

                      <p className="mt-4 text-base leading-7 text-[var(--color-ink)]/82">
                        {room.tagline}
                      </p>

                      <div className="mt-6 grid gap-0 border-t border-black/15">
                        <div className="border-b border-black/15 py-4">
                          <p className="retro-kicker text-[var(--color-ink)]/65">
                            stay types
                          </p>
                          <p className="mt-2 text-lg text-[var(--color-ink)]">
                            {room.stayTypes.join(" • ")}
                          </p>
                        </div>

                        <div className="border-b border-black/15 py-4">
                          <p className="retro-kicker text-[var(--color-ink)]/65">
                            ideal for
                          </p>
                          <p className="mt-2 text-lg text-[var(--color-ink)]">
                            {room.idealFor}
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
                    </div>

                    <div className="grid gap-0">
                      <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                        <div
                          className="retro-photo-frame min-h-[22rem] border-0 border-b border-r border-black/15 lg:min-h-[30rem]"
                          data-soft-image
                        >
                          <Image
                            src={room.gallery[0]}
                            alt={room.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1280px) 100vw, 42vw"
                          />
                        </div>

                        <div className="grid gap-0">
                          <div
                            className="retro-photo-frame min-h-[11rem] border-0 border-b border-black/15 lg:min-h-[15rem]"
                            data-soft-image
                          >
                            <Image
                              src={room.gallery[1]}
                              alt={`${room.name} detail one`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1280px) 100vw, 22vw"
                            />
                          </div>

                          <div
                            className="retro-photo-frame min-h-[11rem] border-0 border-black/15 lg:min-h-[15rem]"
                            data-soft-image
                          >
                            <Image
                              src={room.gallery[2]}
                              alt={`${room.name} detail two`}
                              fill
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
                              about
                            </p>
                            <p className="body-copy max-w-none">
                              {room.description}
                            </p>
                          </div>

                          <div className="grid gap-4 border-b border-black/15 py-4 md:grid-cols-[0.22fr_0.78fr]">
                            <p className="retro-kicker text-[var(--color-olive-soft)]">
                              details
                            </p>
                            <p className="text-base leading-7 text-[var(--color-olive)]/82">
                              Up to {room.guests} guests • {room.size} •{" "}
                              {room.bed}
                            </p>
                          </div>

                          <div className="grid gap-4 py-4 md:grid-cols-[0.22fr_0.78fr]">
                            <p className="retro-kicker text-[var(--color-olive-soft)]">
                              features
                            </p>
                            <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                              {room.amenities.slice(0, 6).map((item) => (
                                <div
                                  key={item}
                                  className="border-t border-black/15 py-2 text-sm leading-6 text-[var(--color-olive)]/82"
                                >
                                  {item}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-3">
                          <Link
                            href={`/rooms/${room.slug}`}
                            className="button-secondary"
                          >
                            View room
                          </Link>
                          <Link
                            href={`/booking?room=${room.slug}`}
                            className="button-primary"
                          >
                            Check availability
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-6 retro-marquee" data-reveal>
          <div className="retro-marquee-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex">
                {[
                  "Garden Room",
                  "Courtyard Suite",
                  "Studio Room",
                  "Short stay",
                  "Long stay",
                  "Student-friendly",
                  "Pet-friendly by approval",
                  "Hosted home comfort",
                ].map((item) => (
                  <span key={`${i}-${item}`} className="retro-marquee-item">
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
