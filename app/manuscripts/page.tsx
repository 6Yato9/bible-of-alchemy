import type { Metadata } from "next";
import { manuscripts } from "../lib/manuscripts";

export const metadata: Metadata = {
  title: "Bibliotheca Hermetica — The Bible of Alchemy",
  description:
    "The great surviving alchemical manuscripts and emblem-books: Splendor Solis, Aurora Consurgens, the Ripley Scrolls, Mutus Liber, Atalanta Fugiens, Newton's papers, and more — with links to their digitized facsimiles.",
};

export default function ManuscriptsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-20 pb-24">
      <p className="smallcaps text-xs text-[color:var(--color-gold)] text-center">
        Bibliotheca Hermetica
      </p>
      <h1 className="mt-4 font-display text-4xl sm:text-5xl tracking-[0.04em] text-center text-[color:var(--color-foreground)]">
        The Great Manuscripts
      </h1>

      {/* decorative ornament */}
      <Ornament className="my-10" />

      <p className="mx-auto max-w-2xl text-center text-lg italic leading-relaxed text-[color:var(--color-muted)]">
        Many of the original alchemical texts survive, often in lavishly illuminated copies
        in the great national libraries. Several have been digitised and can be read freely
        online. What follows is a hand-picked shelf of the most important — the books and
        scrolls behind the codex.
      </p>

      <div className="my-12 rule-thick" />

      <div className="space-y-12">
        {manuscripts.map((m, i) => (
          <article
            key={m.slug}
            className="tome relative rounded-sm p-6 sm:p-8 transition-colors hover:border-[color:var(--color-border-strong)]"
          >
            <span aria-hidden className="absolute top-1.5 left-1.5 w-3 h-3 border-l border-t border-[color:var(--color-border-strong)]" />
            <span aria-hidden className="absolute top-1.5 right-1.5 w-3 h-3 border-r border-t border-[color:var(--color-border-strong)]" />
            <span aria-hidden className="absolute bottom-1.5 left-1.5 w-3 h-3 border-l border-b border-[color:var(--color-border-strong)]" />
            <span aria-hidden className="absolute bottom-1.5 right-1.5 w-3 h-3 border-r border-b border-[color:var(--color-border-strong)]" />

            <div className="flex items-start gap-6">
              <div className="text-6xl text-[color:var(--color-gold)] glyph-shadow leading-none shrink-0">
                {m.glyph}
              </div>
              <div className="flex-1">
                <div className="smallcaps text-[10px] text-[color:var(--color-dim)]">
                  {String(i + 1).padStart(2, "0")} · {m.year}
                </div>
                <h2 className="mt-1 font-display text-2xl sm:text-3xl tracking-[0.04em] text-[color:var(--color-foreground)]">
                  {m.title}
                </h2>
                {m.alt && (
                  <p className="mt-1 italic text-[color:var(--color-muted)]">{m.alt}</p>
                )}
                {m.author && (
                  <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                    <span className="smallcaps text-[10px] text-[color:var(--color-dim)] mr-2">
                      by
                    </span>
                    {m.author}
                  </p>
                )}
              </div>
            </div>

            <div className="my-5 rule" />

            <p className="text-[color:var(--color-foreground)] leading-relaxed">
              {m.summary}
            </p>

            <p className="mt-4 text-sm italic text-[color:var(--color-muted)] leading-relaxed">
              {m.significance}
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-px bg-[color:var(--color-border)] border border-[color:var(--color-border)] rounded-sm overflow-hidden text-xs">
              <Meta label="Held at" value={m.holding} />
              {m.shelfmark && <Meta label="Shelf-mark" value={m.shelfmark} mono />}
              {typeof m.plates === "number" && (
                <Meta label="Plates" value={String(m.plates)} />
              )}
            </div>

            {m.url && (
              <div className="mt-6">
                <a
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-baseline gap-2 smallcaps text-xs text-[color:var(--color-gold)] hover:text-[color:var(--color-gold-bright)] transition-colors"
                >
                  View the digitised facsimile
                  <span aria-hidden>↗</span>
                </a>
              </div>
            )}
          </article>
        ))}
      </div>

      <Ornament className="my-16" />

      <p className="text-center text-sm italic text-[color:var(--color-dim)] max-w-xl mx-auto">
        Most of the great alchemical libraries — Wellcome, BnF, Beinecke, Bayerische
        Staatsbibliothek, Indiana's Chymistry of Isaac Newton — have digitised their holdings
        and place the images in the public domain. The whole shelf is yours for the asking.
      </p>
    </div>
  );
}

function Meta({
  label,
  value,
  mono = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="bg-[color:var(--color-surface)] p-3">
      <div className="smallcaps text-[10px] text-[color:var(--color-dim)]">{label}</div>
      <div
        className={`mt-1 ${
          mono ? "font-mono" : "font-display"
        } text-xs tracking-[0.02em] text-[color:var(--color-foreground)]`}
      >
        {value}
      </div>
    </div>
  );
}

function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        width="280"
        height="32"
        viewBox="0 0 280 32"
        aria-hidden
        className="text-[color:var(--color-gold)]"
      >
        <line x1="0" y1="16" x2="100" y2="16" stroke="currentColor" strokeOpacity="0.4" />
        <line x1="180" y1="16" x2="280" y2="16" stroke="currentColor" strokeOpacity="0.4" />
        <circle cx="115" cy="16" r="3" fill="currentColor" fillOpacity="0.7" />
        <circle cx="140" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="140" cy="16" r="2" fill="currentColor" />
        <circle cx="165" cy="16" r="3" fill="currentColor" fillOpacity="0.7" />
        <path
          d="M 105 16 Q 110 8 115 16 Q 110 24 105 16 Z"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.5"
        />
        <path
          d="M 175 16 Q 170 8 165 16 Q 170 24 175 16 Z"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.5"
        />
      </svg>
    </div>
  );
}
