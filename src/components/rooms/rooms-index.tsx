"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useMemo, useState } from "react";
import { roomFilters, rooms } from "@/lib/placeholder-data";

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
    <section className="flow-section pt-32" data-flow-section>
      <div className="container-shell">
        <header
          className="grid gap-10 border-b border-black/8 pb-10 xl:grid-cols-[0.9fr_1.1fr]"
          data-reveal
        >
          <div>
            <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">
              rooms collection
            </p>
            <h1 className="max-w-[9ch] text-[clamp(3.6rem,7vw,6.6rem)] leading-[0.92] tracking-[-0.05em] text-[var(--color-olive)]">
              Find the room that fits how you want to stay.
            </h1>
          </div>

          <div className="flex flex-col justify-end">
            <p className="body-copy max-w-2xl">
              Each room has its own atmosphere, layout, and practical value.
              This page should feel like a premium room catalogue — clear,
              spacious, and easy to compare for short stays, long stays,
              student-friendly living, and pet-friendly stays.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {roomFilters.map((filter) => {
                const isActive = activeFilter === filter.value;

                return (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() => setActiveFilter(filter.value)}
                    className={clsx(
                      "border px-4 py-3 text-sm uppercase tracking-[0.14em] transition-colors duration-200",
                      isActive
                        ? "border-black/12 bg-black/[0.05] text-[var(--color-olive)]"
                        : "border-black/8 bg-transparent text-[var(--color-olive-soft)] hover:bg-black/[0.025] hover:text-[var(--color-olive)]",
                    )}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        <div className="flex items-center justify-between border-b border-black/8 py-4 text-sm uppercase tracking-[0.14em] text-[var(--color-olive-soft)]">
          <p>{filteredRooms.length} rooms in this view</p>
          <p>Hosted home stay • direct booking enquiry</p>
        </div>

        <div>
          {filteredRooms.map((room, index) => (
            <article
              key={room.id}
              data-card
              className="border-b border-black/8 py-8 xl:py-10"
            >
              <div className="grid gap-8 xl:grid-cols-[0.12fr_0.48fr_0.4fr] xl:gap-10">
                <div className="flex items-start justify-between border-b border-black/8 pb-4 xl:block xl:border-b-0 xl:pb-0">
                  <span className="text-[clamp(2.8rem,5vw,4.4rem)] leading-none tracking-[-0.05em] text-[var(--color-olive)]">
                    {String(index + 1).padStart(2, "0")}
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
                        {room.tagline}
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
                          stay type
                        </p>
                        <p className="text-base leading-7 text-[var(--color-olive)]">
                          {room.stayTypes[0]}
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
                      href={`/rooms/${room.slug}`}
                      className="button-primary"
                    >
                      View room
                    </Link>
                    <Link
                      href={`/booking?room=${room.slug}`}
                      className="button-secondary"
                    >
                      Check availability
                    </Link>
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-[1fr_0.42fr]">
                  <div
                    className="frame-media min-h-[24rem] xl:min-h-[30rem]"
                    data-parallax-wrap
                  >
                    <Image
                      src={room.gallery[0]}
                      alt={room.name}
                      fill
                      data-parallax
                      className="object-cover"
                      sizes="(max-width: 1280px) 100vw, 34vw"
                    />
                  </div>

                  <div className="grid gap-4">
                    <div
                      className="frame-media min-h-[14rem] xl:min-h-[14.5rem]"
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
                      className="frame-media min-h-[14rem] xl:min-h-[14.5rem]"
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
            </article>
          ))}
        </div>

        <section className="grid gap-8 border-b border-black/8 py-10 xl:grid-cols-[1fr_auto] xl:items-end">
          <div>
            <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">
              need help choosing
            </p>
            <h2 className="max-w-[12ch] text-[clamp(2.6rem,4.5vw,4.8rem)] leading-[0.95] tracking-[-0.05em] text-[var(--color-olive)]">
              Not sure which room suits your stay best?
            </h2>
            <p className="body-copy mt-5 max-w-2xl">
              We can guide guests based on budget, number of people, stay
              length, student suitability, and pet-friendly needs.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="button-secondary">
              Ask a question
            </Link>
            <Link href="/booking" className="button-primary">
              Start booking
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
