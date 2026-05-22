import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Of the Art — The Bible of Alchemy",
  description:
    "A brief preface on what this codex is, and what it is not — a historical reading of alchemy, not a laboratory manual.",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 pt-20 pb-24">
      <p className="smallcaps text-xs text-[color:var(--color-gold)] text-center">
        Praefatio
      </p>
      <h1 className="mt-4 font-display text-4xl sm:text-5xl tracking-[0.04em] text-center text-[color:var(--color-foreground)]">
        Of the Art
      </h1>
      <div className="my-10 rule-thick" />

      <p className="drop-cap text-lg leading-[1.9] text-[color:var(--color-foreground)]">
        Alchemy was the science before science — a millennium-long attempt by careful, often
        brilliant, and often self-deceiving people to understand matter by transforming it.
        Its language was symbolic, its theory wrong, and its practical achievements
        enormous. Almost every technique a modern chemist relies on — distillation,
        sublimation, crystallisation, recrystallisation, calcination, mordant dyeing,
        fractionation — was first refined by alchemists.
      </p>

      <p className="mt-6 text-lg leading-[1.9] text-[color:var(--color-foreground)]">
        This codex is a reader's companion to twelve of the most famous recipes in the
        Western and Islamic traditions. Each entry sets out the history, the matter
        the alchemists thought they were using, the modern chemistry that lay beneath,
        and the cultural and mythological lore that grew around the work.
      </p>

      <div className="my-12 flourish">
        <span className="font-display text-xs tracking-[0.32em] text-[color:var(--color-gold)]">
          A NOTE ON DANGER
        </span>
      </div>

      <p className="text-lg leading-[1.9] text-[color:var(--color-muted)] italic">
        Several of these preparations are genuinely lethal. Aqua regia, fulminating gold,
        white phosphorus, corrosive sublimate, oil of vitriol — these substances killed
        their discoverers and many of their imitators. The recipes here are historical
        documents, not instructions. The author of this codex assumes you are here for the
        history.
      </p>

      <div className="my-12 flourish">
        <span className="font-display text-xs tracking-[0.32em] text-[color:var(--color-gold)]">
          ON SYMBOLS
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {[
          ["☉", "Sol / Gold"],
          ["☽", "Luna / Silver"],
          ["☿", "Mercury"],
          ["♀", "Venus / Copper"],
          ["♂", "Mars / Iron"],
          ["♃", "Jupiter / Tin"],
          ["♄", "Saturn / Lead"],
          ["🜍", "Sulfur"],
        ].map(([g, label]) => (
          <div key={label}>
            <div className="text-3xl text-[color:var(--color-gold)] glyph-shadow">
              {g}
            </div>
            <div className="mt-2 smallcaps text-[10px] text-[color:var(--color-dim)]">
              {label}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
