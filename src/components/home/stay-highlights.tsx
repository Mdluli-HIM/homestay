import { stayHighlights } from "@/lib/placeholder-data";
import Link from "next/link";

export function StayHighlights() {
  return (
    <section
      className="flow-section border-t border-black/10"
      data-flow-section
    >
      <div className="container-shell">
        <div className="grid gap-10 xl:grid-cols-[0.82fr_1.18fr]">
          <div className="xl:sticky xl:top-28 xl:h-max" data-reveal>
            <p className="retro-kicker mb-4 text-[var(--color-olive-soft)]">
              chapter 04 • the stay
            </p>

            <h2 className="retro-title retro-ink max-w-[8ch]">
              More than a room — this is shared home living.
            </h2>

            <p className="body-copy mt-8 max-w-xl">
              Guests are stepping into a home with comfort, practical services,
              and a calmer everyday rhythm. That is what the stay should make
              clear.
            </p>

            <div className="mt-8">
              <Link href="/stay" className="retro-kicker retro-accent-text">
                Read the stay story
              </Link>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-2">
            {stayHighlights.map((item, index) => (
              <article
                key={item.title}
                data-card
                className={`p-6 md:p-7 ${
                  index === 0
                    ? "retro-panel-thick retro-block-yellow"
                    : "retro-panel"
                }`}
              >
                <div className="mb-6 h-px w-20 bg-black/10" />
                <div>
                  <p className="mb-4 text-[clamp(1.5rem,2vw,2rem)] leading-tight text-[var(--color-olive)]">
                    {item.title}
                  </p>
                  <p className="body-copy max-w-[34ch]">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
