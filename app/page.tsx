import Link from "next/link";
import { experiments } from "./lib/experiments";

const hazardLabel = ["", "Mild", "Moderate", "Severe", "Dire", "Fatal"];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      {/* Hero */}
      <section className="pt-24 pb-20 text-center">
        <p className="smallcaps text-[color:var(--color-gold)] text-sm">
          Codex of the Great Work · Anno Mundi MMXXVI
        </p>
        <h1 className="mt-6 font-display text-5xl sm:text-7xl text-[color:var(--color-foreground)] tracking-[0.06em]">
          The Bible of <span className="text-[color:var(--color-gold-bright)] glyph-shadow italic">Alchemy</span>
        </h1>

        <div className="mt-8 flex items-center justify-center gap-4 text-[color:var(--color-gold)]">
          <span className="font-display text-2xl">☉</span>
          <span className="font-display text-2xl">☽</span>
          <span className="font-display text-2xl">☿</span>
          <span className="font-display text-2xl">♀</span>
          <span className="font-display text-2xl">♂</span>
          <span className="font-display text-2xl">♃</span>
          <span className="font-display text-2xl">♄</span>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[color:var(--color-muted)] italic">
          A compendium of the famous historical experiments of the alchemists —
          their recipes, their reagents, the chemistry that lay beneath, and the lore that
          surrounded them. From the King's Water of Jābir to the cold light of Hennig Brand.
        </p>

        <div className="mt-12 mx-auto max-w-2xl rule-thick" />
      </section>

      {/* Index — list with leader dots */}
      <section className="pb-16">
        <div className="flourish mb-8">
          <h2 className="font-display text-sm tracking-[0.32em] text-[color:var(--color-gold)]">
            INDEX OPERUM · {experiments.length} ENTRIES
          </h2>
        </div>

        <ul className="space-y-1.5">
          {experiments.map((e, i) => (
            <li key={e.slug}>
              <Link
                href={`/experiments/${e.slug}`}
                className="group flex items-baseline gap-4 px-2 py-1.5 rounded-sm hover:bg-[color:var(--color-surface)]/60 transition-colors"
              >
                <span className="font-display text-xs text-[color:var(--color-dim)] w-8 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-2xl text-[color:var(--color-gold)] group-hover:text-[color:var(--color-gold-bright)] transition-colors w-8 text-center">
                  {e.glyph}
                </span>
                <span className="font-display text-base sm:text-lg tracking-[0.06em] text-[color:var(--color-foreground)] group-hover:text-[color:var(--color-gold-bright)] transition-colors">
                  {e.name}
                </span>
                <span className="flex-1 mx-3 border-b border-dotted border-[color:var(--color-border)] translate-y-[-3px]" />
                <span className="hidden sm:inline text-sm italic text-[color:var(--color-dim)] max-w-md text-right">
                  {e.tagline.split("—")[0].trim().replace(/\.$/, "")}
                </span>
                <span className="ml-4 font-display text-xs text-[color:var(--color-muted)] tabular-nums w-24 text-right">
                  {e.era}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Card grid below the index */}
      <section className="pb-24">
        <div className="flourish mb-10">
          <h2 className="font-display text-sm tracking-[0.32em] text-[color:var(--color-gold)]">
            THE CODEX
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {experiments.map((e) => (
            <Link
              key={e.slug}
              href={`/experiments/${e.slug}`}
              className="tome group relative flex flex-col rounded-sm p-6 transition-all hover:border-[color:var(--color-border-strong)] hover:-translate-y-0.5"
            >
              {/* corner ornaments */}
              <span aria-hidden className="absolute top-1.5 left-1.5 w-3 h-3 border-l border-t border-[color:var(--color-border-strong)]" />
              <span aria-hidden className="absolute top-1.5 right-1.5 w-3 h-3 border-r border-t border-[color:var(--color-border-strong)]" />
              <span aria-hidden className="absolute bottom-1.5 left-1.5 w-3 h-3 border-l border-b border-[color:var(--color-border-strong)]" />
              <span aria-hidden className="absolute bottom-1.5 right-1.5 w-3 h-3 border-r border-b border-[color:var(--color-border-strong)]" />

              <div className="flex items-start justify-between">
                <span className="text-4xl text-[color:var(--color-gold)] group-hover:text-[color:var(--color-gold-bright)] transition-colors glyph-shadow">
                  {e.glyph}
                </span>
                <span className="font-display text-[10px] tracking-[0.28em] text-[color:var(--color-dim)]">
                  {e.era}
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl tracking-[0.06em] text-[color:var(--color-foreground)] group-hover:text-[color:var(--color-gold-bright)] transition-colors">
                {e.name}
              </h3>

              <p className="mt-2 text-xs smallcaps text-[color:var(--color-dim)]">
                {e.aka[0]}
              </p>

              <div className="my-4 rule" />

              <p className="text-sm italic leading-relaxed text-[color:var(--color-muted)] flex-1">
                {e.tagline}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-[10px] smallcaps text-[color:var(--color-dim)]">
                  {e.discoverer.split(";")[0].split(",")[0]}
                </span>
                <HazardPips level={e.hazardLevel} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function HazardPips({ level }: { level: 1 | 2 | 3 | 4 | 5 }) {
  return (
    <div className="flex items-center gap-2" title={`Hazard: ${hazardLabel[level]}`}>
      <span className="text-[10px] smallcaps text-[color:var(--color-dim)]">
        peril
      </span>
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`block w-1.5 h-1.5 rounded-full ${
              i <= level
                ? level >= 4
                  ? "bg-[color:var(--color-blood)]"
                  : "bg-[color:var(--color-copper)]"
                : "bg-[color:var(--color-border)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
