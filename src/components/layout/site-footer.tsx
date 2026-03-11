import Link from "next/link";
import { siteCopy } from "@/lib/site-copy";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/stay", label: "The Stay" },
  { href: "/booking", label: "Booking" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-black/8 pt-10">
      <div className="container-shell">
        <div className="grid gap-10 border-b border-black/8 pb-10 xl:grid-cols-[0.95fr_0.65fr_0.4fr] xl:gap-12">
          <div>
            <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">
              {siteCopy.brand.name}
            </p>

            <h2 className="max-w-[10ch] text-[clamp(2.4rem,4vw,4.4rem)] leading-[0.96] tracking-[-0.05em] text-[var(--color-olive)]">
              Home comfort, boutique presentation.
            </h2>

            <p className="body-copy mt-5 max-w-2xl">
              {siteCopy.footer.statement}
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">
              Explore
            </p>

            <div className="grid border-t border-black/8">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b border-black/8 py-3 text-base text-[var(--color-olive)] transition-colors duration-200 hover:bg-black/[0.025]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">
              Contact
            </p>

            <div className="grid gap-0 border-t border-black/8">
              <div className="border-b border-black/8 py-3">
                <p className="text-sm uppercase tracking-[0.14em] text-[var(--color-olive-soft)]">
                  Email
                </p>
                <p className="mt-1 text-base text-[var(--color-olive)]">
                  {siteCopy.contact.email}
                </p>
              </div>

              <div className="border-b border-black/8 py-3">
                <p className="text-sm uppercase tracking-[0.14em] text-[var(--color-olive-soft)]">
                  Phone
                </p>
                <p className="mt-1 text-base text-[var(--color-olive)]">
                  {siteCopy.contact.phone}
                </p>
              </div>

              <div className="py-3">
                <p className="text-sm uppercase tracking-[0.14em] text-[var(--color-olive-soft)]">
                  Location
                </p>
                <p className="mt-1 text-base text-[var(--color-olive)]">
                  {siteCopy.contact.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-5 text-sm text-[var(--color-olive-soft)] md:flex-row md:items-center md:justify-between">
          <p>© 2026 {siteCopy.brand.name}</p>
          <p>{siteCopy.footer.subline}</p>
        </div>
      </div>
    </footer>
  );
}
