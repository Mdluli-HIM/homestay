"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { rooms } from "@/lib/placeholder-data";

type SiteMenuProps = {
  open: boolean;
  pathname: string;
  onClose: () => void;
};
const menuLinks = [
  {
    href: "/",
    label: "Home",
    eyebrow: "Start here",
  },
  {
    href: "/rooms",
    label: "Rooms",
    eyebrow: "Three curated stays",
  },
  {
    href: "/stay",
    label: "The Stay",
    eyebrow: "Shared home living",
  },
  {
    href: "/booking",
    label: "Book",
    eyebrow: "Request your stay",
  },
  {
    href: "/faq",
    label: "FAQ",
    eyebrow: "Good to know",
  },
  {
    href: "/contact",
    label: "Contact",
    eyebrow: "Ask anything",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function SiteMenu({ open, pathname, onClose }: SiteMenuProps) {
  const featuredRooms = rooms.slice(0, 3);

  return (
    <AnimatePresence>
      {open ? (
        <motion.aside
          key="site-menu"
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[70] overflow-y-auto bg-[rgba(244,239,231,0.98)]"
        >
          <div className="container-shell min-h-screen py-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, delay: 0.03 }}
              className="flex items-center justify-between border-b border-black/8 pb-6"
            >
              <Link
                href="/"
                onClick={onClose}
                className="flex flex-col items-start"
              >
                <span className="text-[0.65rem] uppercase tracking-[0.35em] text-[var(--color-olive-soft)]">
                  hosted home stay
                </span>
                <span className="font-[family-name:var(--font-heading)] text-4xl leading-none text-[var(--color-olive)]">
                  Stay House
                </span>
              </Link>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="grid h-12 w-12 place-items-center border border-black/10 bg-white/20 text-[var(--color-olive)] transition-colors duration-200 hover:bg-white/35"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>

            <div className="grid gap-10 py-8 xl:grid-cols-[1fr_0.9fr_0.78fr] xl:gap-0">
              <motion.div
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.06,
                    },
                  },
                }}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex flex-col xl:pr-8"
              >
                {menuLinks.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <motion.div
                      key={item.href}
                      variants={fadeUp}
                      className="border-b border-black/8"
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`group block border px-4 py-6 transition-[border-color,box-shadow,color] duration-300 ${
                          active
                            ? "border-[rgba(181,106,63,0.45)] md:border-[var(--color-clay)]"
                            : "border-transparent hover:border-[rgba(181,106,63,0.45)] md:hover:border-[var(--color-clay)] hover:shadow-[0_0_0_1px_rgba(181,106,63,0.45)] md:hover:shadow-[0_0_0_1px_var(--color-clay)]"
                        }`}
                      >
                        <p className="eyebrow mb-3 text-[var(--color-olive-soft)]">
                          {item.eyebrow}
                        </p>

                        <div className="flex items-end justify-between gap-6">
                          <span
                            className={`font-[family-name:var(--font-heading)] text-[clamp(2.6rem,4.2vw,5rem)] leading-none tracking-[-0.05em] transition-colors duration-300 ${
                              active
                                ? "text-[var(--color-olive)]"
                                : "text-[var(--color-olive)]/80 group-hover:text-[var(--color-olive)]"
                            }`}
                          >
                            {item.label}
                          </span>

                          {active ? (
                            <span className="mb-2 flex items-center gap-2 md:gap-3 text-[0.62rem] md:text-[0.68rem] uppercase tracking-[0.2em] md:tracking-[0.22em] text-[var(--color-clay)]">
                              <span className="h-px w-5 md:w-8 bg-[var(--color-clay)]" />
                              Current
                            </span>
                          ) : (
                            <span className="mb-2 h-px w-0 bg-[var(--color-clay)] transition-all duration-300 group-hover:w-5 md:group-hover:w-8" />
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 18 }}
                transition={{ duration: 0.26, delay: 0.1 }}
                className="space-y-5 xl:border-l xl:border-black/8 xl:px-8"
              >
                <div className="flex items-center justify-between border-b border-black/8 pb-4">
                  <div>
                    <p className="eyebrow mb-2 text-[var(--color-olive-soft)]">
                      featured rooms
                    </p>
                    <h2 className="text-3xl text-[var(--color-olive)]">
                      Stay collection
                    </h2>
                  </div>

                  <Link
                    href="/rooms"
                    onClick={onClose}
                    className="text-sm uppercase tracking-[0.14em] text-[var(--color-olive-soft)] transition-opacity hover:opacity-70"
                  >
                    View all
                  </Link>
                </div>

                <div className="grid gap-4">
                  {featuredRooms.map((room, index) => (
                    <Link
                      key={room.id}
                      href={`/rooms/${room.slug}`}
                      onClick={onClose}
                      className="group grid gap-4 border border-black/8 bg-white/18 p-4 transition-colors duration-300 hover:bg-white/28 md:grid-cols-[0.72fr_1fr]"
                    >
                      <div className="relative min-h-[11rem] overflow-hidden border border-black/8">
                        <Image
                          src={room.image}
                          alt={room.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                          sizes="(max-width: 768px) 100vw, 40vw"
                          priority={index === 0}
                        />
                      </div>

                      <div className="flex flex-col justify-between gap-4">
                        <div>
                          <p className="eyebrow mb-2 text-[var(--color-olive-soft)]">
                            {room.stayTypes.join(" • ")}
                          </p>
                          <h3 className="text-2xl leading-tight text-[var(--color-olive)]">
                            {room.name}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-[var(--color-olive)]/78">
                            {room.tagline}
                          </p>
                        </div>

                        <div className="flex items-end justify-between gap-4 border-t border-black/8 pt-4 text-sm uppercase tracking-[0.12em] text-[var(--color-olive-soft)]">
                          <span>Up to {room.guests} guests</span>
                          <span>From R{room.priceFrom}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 18 }}
                transition={{ duration: 0.26, delay: 0.14 }}
                className="flex flex-col gap-5 xl:border-l xl:border-black/8 xl:pl-8"
              >
                <div className="border border-black/8 bg-[var(--color-sand)] p-6">
                  <p className="eyebrow mb-3 text-[var(--color-olive-soft)]">
                    direct booking
                  </p>
                  <h3 className="text-3xl leading-tight text-[var(--color-olive)]">
                    A smoother way to request your stay.
                  </h3>
                  <p className="body-copy mt-4">
                    Short stays, long stays, student-friendly options, and
                    pet-friendly flexibility — all presented with clarity.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/booking"
                      onClick={onClose}
                      className="button-primary"
                    >
                      Check availability
                    </Link>
                    <Link
                      href="/contact"
                      onClick={onClose}
                      className="button-secondary"
                    >
                      Enquire now
                    </Link>
                  </div>
                </div>

                <div className="border border-black/8 bg-white/18 p-6">
                  <p className="eyebrow mb-3 text-[var(--color-olive-soft)]">
                    stay highlights
                  </p>

                  <div className="space-y-0 border-t border-black/8">
                    {[
                      "Shared kitchen, dishes, bathroom, and home amenities",
                      "Weekly cleaning and fresh sheet support",
                      "Discounted on-site laundry for guests",
                      "Warm hosted living for short and long stays",
                    ].map((item) => (
                      <div key={item} className="border-b border-black/8 py-4">
                        <p className="text-sm leading-6 text-[var(--color-olive)]/85">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-black/8 bg-white/18 p-6">
                  <p className="eyebrow mb-3 text-[var(--color-olive-soft)]">
                    contact
                  </p>
                  <div className="space-y-2 text-[var(--color-olive)]">
                    <p>hello@stayhouse.com</p>
                    <p>+27 00 000 0000</p>
                    <p>Cape Town, South Africa</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}
