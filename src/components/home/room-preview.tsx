"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { rooms } from "@/lib/placeholder-data";

export function RoomPreview() {
  const featuredRooms = useMemo(() => rooms.slice(0, 3), []);
  const [activeIndex, setActiveIndex] = useState(0);

  const gridTemplateColumns = featuredRooms
    .map((_, index) => (index === activeIndex ? "minmax(0,1fr)" : "8.5rem"))
    .join(" ");

  return (
    <section className="flow-section border-t border-black/8" data-flow-section>
      <div className="container-shell">
        <div
          className="mb-8 grid gap-8 border-b border-black/8 pb-8 xl:grid-cols-[0.9fr_1.1fr]"
          data-reveal
        >
          <div>
            <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">rooms</p>
            <h2 className="max-w-[9ch] text-[clamp(3.2rem,6vw,5.8rem)] leading-[0.92] tracking-[-0.05em] text-[var(--color-olive)]">
              Choose the room that matches your stay.
            </h2>
          </div>

          <p className="body-copy max-w-2xl xl:justify-self-end">
            Click through the three room types to preview each stay before
            moving into the full room page or booking.
          </p>
        </div>

        <div className="lg:hidden">
          <div className="mb-4 flex border border-black/8">
            {featuredRooms.map((room, index) => (
              <button
                key={room.slug}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`flex-1 border-r border-black/8 px-4 py-4 text-left last:border-r-0 transition-colors ${
                  index === activeIndex
                    ? "bg-black/[0.05] text-[var(--color-olive)]"
                    : "bg-transparent text-[var(--color-olive-soft)] hover:bg-black/[0.025]"
                }`}
              >
                <p className="text-sm uppercase tracking-[0.14em]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-base leading-6">{room.name}</p>
              </button>
            ))}
          </div>

          <article className="border border-black/8" data-card>
            <div className="relative min-h-[26rem] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={featuredRooms[activeIndex].slug}
                  initial={{ opacity: 0.45, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.45, scale: 1.01 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={featuredRooms[activeIndex].image}
                    alt={featuredRooms[activeIndex].name}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                    loading="eager"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            </div>

            <div className="grid gap-6 border-t border-black/8 bg-[rgba(20,16,12,0.88)] p-6 text-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={featuredRooms[activeIndex].slug + "-content-mobile"}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.28 }}
                  className="contents"
                >
                  <div className="flex items-end justify-between gap-4 border-b border-white/15 pb-4">
                    <div>
                      <p className="eyebrow mb-2 text-white/70">
                        {featuredRooms[activeIndex].stayTypes.join(" • ")}
                      </p>
                      <h3 className="font-[family-name:var(--font-heading)] text-[2.2rem] italic leading-none tracking-[-0.03em]">
                        {featuredRooms[activeIndex].name}
                      </h3>
                    </div>

                    <div className="text-right">
                      <p className="text-sm uppercase tracking-[0.14em] text-white/70">
                        sleeps
                      </p>
                      <p className="text-2xl">
                        {featuredRooms[activeIndex].guests}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/rooms/${featuredRooms[activeIndex].slug}`}
                      className="button-secondary border-white/20 bg-white text-[var(--color-ink)] hover:bg-white/90"
                    >
                      View room
                    </Link>
                    <Link
                      href={`/booking?room=${featuredRooms[activeIndex].slug}`}
                      className="button-primary border-white bg-white text-[var(--color-ink)] hover:opacity-90"
                    >
                      Check availability
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </article>
        </div>

        <motion.div
          className="hidden overflow-hidden border border-black/8 lg:grid"
          style={{ gridTemplateColumns }}
          animate={{}}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {featuredRooms.map((room, index) => {
            const isActive = index === activeIndex;

            if (isActive) {
              return (
                <article
                  key={room.slug}
                  className="relative min-h-[46rem] border-r border-black/8 bg-[#23170f]"
                  data-card
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={room.slug + "-image"}
                      initial={{ opacity: 0.5, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0.45, scale: 1.01 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={room.image}
                        alt={room.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1280px) 100vw, 70vw"
                        priority={index === 0}
                        loading="eager"
                      />
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/48 via-black/8 to-transparent" />

                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show ${room.name}`}
                    className="absolute inset-0"
                  />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={room.slug + "-content"}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 14 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-x-0 bottom-0 z-10 grid gap-6 p-8 xl:grid-cols-[auto_1fr_auto]"
                    >
                      <div className="flex items-end">
                        <span className="text-[4rem] font-semibold leading-none tracking-[-0.05em] text-white">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="flex min-w-0 items-end justify-end">
                        <div className="max-w-[38rem] text-right">
                          <p className="mb-2 text-sm uppercase tracking-[0.16em] text-white/72">
                            {room.stayTypes.join(" • ")}
                          </p>

                          <h3 className="font-[family-name:var(--font-heading)] text-[clamp(3rem,4vw,4.8rem)] italic leading-[0.95] tracking-[-0.04em] text-white">
                            {room.name}
                          </h3>
                        </div>
                      </div>

                      <div className="flex min-w-[12rem] flex-col items-end justify-end">
                        <p className="text-sm uppercase tracking-[0.16em] text-white/72">
                          sleeps {room.guests}
                        </p>

                        <div className="mt-5 flex flex-wrap justify-end gap-3">
                          <Link
                            href={`/rooms/${room.slug}`}
                            className="button-secondary border-white/20 bg-white text-[var(--color-ink)] hover:bg-white/90"
                          >
                            View room
                          </Link>
                          <Link
                            href={`/booking?room=${room.slug}`}
                            className="button-primary border-white bg-white text-[var(--color-ink)] hover:opacity-90"
                          >
                            Check availability
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </article>
              );
            }

            return (
              <button
                key={room.slug}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${room.name}`}
                className="group relative min-h-[46rem] border-r border-black/8 bg-[#2b1b0f] text-white last:border-r-0 transition-colors duration-300 hover:bg-[#312014]"
              >
                <div className="flex h-full flex-col justify-between px-5 py-7">
                  <div className="flex justify-center">
                    <span
                      className="text-[2.25rem] leading-none tracking-[-0.03em] text-white transition-opacity duration-300 group-hover:opacity-75"
                      style={{ writingMode: "vertical-rl" }}
                    >
                      {room.name}
                    </span>
                  </div>

                  <div className="flex items-end justify-start">
                    <span className="text-[3.5rem] font-semibold leading-none tracking-[-0.05em] text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}