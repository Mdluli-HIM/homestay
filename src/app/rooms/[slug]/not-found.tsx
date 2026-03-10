import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-space pt-32">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-black/8 bg-white/40 p-10 text-center">
          <p className="eyebrow mb-4 text-[var(--color-olive-soft)]">
            room not found
          </p>
          <h1 className="display-title text-[var(--color-olive)]">
            This room does not exist.
          </h1>
          <p className="body-copy mx-auto mt-6 max-w-xl">
            The link may be outdated, or the room may no longer be available in
            this collection view.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/rooms" className="button-primary">
              Back to rooms
            </Link>
            <Link href="/" className="button-secondary">
              Go home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
