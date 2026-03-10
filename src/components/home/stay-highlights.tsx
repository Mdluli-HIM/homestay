import { stayHighlights } from "@/lib/placeholder-data";

const layoutClasses = [
  "xl:col-span-7 min-h-[11rem]",
  "xl:col-span-5 min-h-[11rem]",
  "xl:col-span-5 min-h-[10rem]",
  "xl:col-span-7 min-h-[10rem]",
  "xl:col-span-8 min-h-[9.5rem]",
  "xl:col-span-4 min-h-[9.5rem]",
];

export function StayHighlights() {
  return (
    <section className="flow-section border-t border-black/8" data-flow-section>
      <div className="container-shell">
        <div className="grid gap-12 xl:grid-cols-[0.82fr_1.18fr]">
          <div className="xl:sticky xl:top-28 xl:h-max" data-reveal>
            <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">
              the stay
            </p>

            <h2 className="max-w-[8ch] text-[clamp(3.2rem,6vw,5.8rem)] leading-[0.92] tracking-[-0.05em] text-[var(--color-olive)]">
              More than a room — this is shared home living, made elegant.
            </h2>

            <p className="body-copy mt-8 max-w-xl">
              Guests are not only booking a room. They are stepping into a home
              with comfort, practical services, and a calmer everyday rhythm.
              The website should make that feel clear, premium, and easy to
              trust.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-12">
            {stayHighlights.map((item, index) => (
              <article
                key={item.title}
                data-card
                className={`border border-black/8 p-7 ${layoutClasses[index]}`}
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
