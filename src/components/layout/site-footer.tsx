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
    <footer className="border-t border-black/10 retro-paper pt-10">
      <div className="container-shell">
        <div className="retro-panel-thick retro-block-yellow p-6 md:p-8">
          <div className="grid gap-8 xl:grid-cols-[0.95fr_0.65fr_0.4fr] xl:gap-12">
            <div>
              <p className="retro-kicker mb-4 text-[var(--color-ink)]/70">
                final chapter
              </p>

              <h2 className="retro-subtitle retro-ink max-w-[10ch]">
                Home comfort, boutique presentation.
              </h2>

              <p className="body-copy mt-5 max-w-2xl text-[var(--color-ink)]/82">
                {siteCopy.footer.statement}
              </p>
            </div>

            <div>
              <p className="retro-kicker mb-4 text-[var(--color-ink)]/70">
                index
              </p>

              <div className="grid border-t border-black/15">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="border-b border-black/15 py-3 text-base text-[var(--color-ink)] transition-colors duration-200 hover:bg-black/[0.03]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="retro-kicker mb-4 text-[var(--color-ink)]/70">
                contact
              </p>

              <div className="grid gap-0 border-t border-black/15">
                <div className="border-b border-black/15 py-3">
                  <p className="retro-kicker text-[var(--color-ink)]/65">
                    email
                  </p>
                  <p className="mt-1 text-base text-[var(--color-ink)]">
                    {siteCopy.contact.email}
                  </p>
                </div>

                <div className="border-b border-black/15 py-3">
                  <p className="retro-kicker text-[var(--color-ink)]/65">
                    phone
                  </p>
                  <p className="mt-1 text-base text-[var(--color-ink)]">
                    {siteCopy.contact.phone}
                  </p>
                </div>

                <div className="py-3">
                  <p className="retro-kicker text-[var(--color-ink)]/65">
                    location
                  </p>
                  <p className="mt-1 text-base text-[var(--color-ink)]">
                    {siteCopy.contact.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="retro-marquee mt-6">
          <div className="retro-marquee-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex">
                {[
                  siteCopy.brand.name,
                  "Hosted home stay",
                  "Shared home comfort",
                  "Cape Town",
                  "Direct booking enquiry",
                  "Student-friendly living",
                  "Pet-friendly approval",
                  "Discounted guest laundry",
                ].map((item) => (
                  <span key={`${i}-${item}`} className="retro-marquee-item">
                    {item}
                  </span>
                ))}
              </div>
            ))}
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
