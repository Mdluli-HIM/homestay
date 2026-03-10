"use client";

import Link from "next/link";
import clsx from "clsx";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SiteMenu } from "@/components/layout/site-menu";

const navLinks = [
  { href: "/rooms", label: "Rooms" },
  { href: "/stay", label: "The Stay" },
  { href: "/faq", label: "FAQ" },
  { href: "/booking", label: "Book" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const solidHeader = pathname !== "/" || scrolled || menuOpen;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-[60] transition-all duration-300",
          solidHeader
            ? "border-b border-black/8 bg-[rgba(244,239,231,0.92)] backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <div
          className={clsx(
            "container-shell flex items-center justify-between gap-4 transition-[height] duration-300",
            solidHeader ? "h-[5rem]" : "h-[5.75rem]",
          )}
        >
          <div className="hidden items-center gap-6 text-[0.8rem] uppercase tracking-[0.18em] text-[var(--color-olive)] lg:flex">
            <Link
              href="/contact"
              className="transition-opacity hover:opacity-65"
            >
              Enquire now
            </Link>
            <Link
              href="/booking"
              className="transition-opacity hover:opacity-65"
            >
              Book directly
            </Link>
          </div>

          <Link href="/" className="flex flex-col items-center">
            <span className="text-[0.65rem] uppercase tracking-[0.35em] text-[var(--color-olive-soft)]">
              hosted home stay
            </span>
            <span className="font-[family-name:var(--font-heading)] text-[2.2rem] leading-none text-[var(--color-olive)]">
              Stay House
            </span>
          </Link>

          <div className="hidden items-center gap-5 lg:flex">
            <nav className="flex items-center gap-5 text-[0.8rem] uppercase tracking-[0.18em] text-[var(--color-olive)]">
              {navLinks.map((link) => {
                const active = pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "border px-3 py-2 transition-colors duration-200",
                      active
                        ? "border-black/10 bg-white/35 text-[var(--color-olive)]"
                        : "border-transparent hover:border-black/8 hover:bg-white/18",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="grid h-11 w-11 place-items-center border border-black/10 bg-white/18 text-[var(--color-olive)] transition-colors duration-200 hover:bg-white/30"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href="/booking"
              className="border border-black/10 bg-white/18 px-4 py-2 text-[0.74rem] uppercase tracking-[0.16em] text-[var(--color-olive)]"
            >
              Book
            </Link>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="grid h-11 w-11 place-items-center border border-black/10 bg-white/18 text-[var(--color-olive)]"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <SiteMenu
        open={menuOpen}
        pathname={pathname}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
