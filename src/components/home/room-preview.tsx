"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { rooms } from "@/lib/placeholder-data";

export function RoomPreview() {
  const featuredRooms = useMemo(() => rooms.slice(0, 3), []);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeRoom = featuredRooms[activeIndex];

  return (
    <section
      className="flow-section border-t border-black/10"
      data-flow-section
    >
      <div className="container-shell">
        <div
          className="grid gap-8 border-b border-black/10 pb-8 lg:grid-cols-[0.9fr_1.1fr]"
          data-reveal
        >
          <div>
            <p className="retro-kicker mb-4 text-[var(--color-olive-soft)]">
              chapter 03 • rooms
            </p>
            <h2 className="retro-title retro-ink max-w-[8ch]">
              Three stays. Three moods.
            </h2>
          </div>

          <p className="body-copy max-w-2xl lg:justify-self-end">
            The rooms should feel like story choices, not generic listings.
            Choose the room that best matches the way you want to stay.
          </p>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[0.7fr_1.3fr]">
          <div className="retro-panel-thick p-4 md:p-6" data-card>
            {featuredRooms.map((room, index) => {
              const active = index === activeIndex;

              return (
                <button
                  key={room.slug}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="retro-list-row flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="retro-number text-[var(--color-ink)]">
                    {String(index + 1).padStart(2, "0")}.
                  </span>

                  <span
                    className={`flex-1 text-[clamp(2rem,3.2vw,3.5rem)] leading-none tracking-[-0.05em] ${
                      active
                        ? "text-[var(--color-ink)]"
                        : "text-[var(--color-olive)]"
                    }`}
                  >
                    {room.name}
                  </span>

                  {active ? (
                    <span className="retro-kicker retro-accent-text">
                      Current
                    </span>
                  ) : (
                    <span className="retro-kicker text-[var(--color-olive-soft)]">
                      Open
                    </span>
                  )}
                </button>
              );
            })}

            <div className="mt-6 border-t border-black/15 pt-5">
              <Link href="/rooms" className="retro-kicker retro-accent-text">
                Learn about all rooms
              </Link>
            </div>
          </div>

          <article className="retro-panel-thick overflow-hidden" data-card>
            <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
              <div
                className="retro-photo-frame min-h-[24rem] border-0 border-r border-black/15 lg:min-h-[38rem]"
                data-soft-image
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeRoom.slug}
                    initial={{ opacity: 0.45, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.45, scale: 1.01 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeRoom.image}
                      alt={activeRoom.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1280px) 100vw, 52vw"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="grid gap-0">
                <div className="retro-block-blue border-b border-black/15 p-5 md:p-6">
                  <p className="retro-kicker mb-3 text-[var(--color-ink)]">
                    selected stay
                  </p>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${activeRoom.slug}-meta`}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.24 }}
                    >
                      <h3 className="retro-subtitle retro-ink">
                        {activeRoom.name}
                      </h3>
                      <p className="body-copy mt-4 max-w-md text-[var(--color-ink)]/82">
                        {activeRoom.tagline}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="p-5 md:p-6">
                  <div className="grid gap-0 border-t border-black/15">
                    <div className="border-b border-black/15 py-4">
                      <p className="retro-kicker text-[var(--color-olive-soft)]">
                        stay types
                      </p>
                      <p className="mt-2 text-lg text-[var(--color-olive)]">
                        {activeRoom.stayTypes.join(" • ")}
                      </p>
                    </div>

                    <div className="border-b border-black/15 py-4">
                      <p className="retro-kicker text-[var(--color-olive-soft)]">
                        guests
                      </p>
                      <p className="mt-2 text-lg text-[var(--color-olive)]">
                        Up to {activeRoom.guests}
                      </p>
                    </div>

                    <div className="py-4">
                      <p className="retro-kicker text-[var(--color-olive-soft)]">
                        from
                      </p>
                      <p className="mt-2 text-lg text-[var(--color-olive)]">
                        R{activeRoom.priceFrom}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={`/rooms/${activeRoom.slug}`}
                      className="button-secondary"
                    >
                      View room
                    </Link>
                    <Link
                      href={`/booking?room=${activeRoom.slug}`}
                      className="button-primary"
                    >
                      Check availability
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
