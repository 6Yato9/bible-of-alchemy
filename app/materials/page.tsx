import Link from "next/link";
import type { Metadata } from "next";
import { materials } from "../lib/materials";

export const metadata: Metadata = {
  title: "Materia Prima — The Bible of Alchemy",
  description:
    "Every reagent named in the codex, with its origins, its preparation, and the experiments that use it.",
};

export default function MaterialsIndexPage() {
  const base = materials.filter((m) => m.type === "base");
  const derived = materials.filter((m) => m.type === "derived");

  return (
    <div className="mx-auto max-w-5xl px-6 pt-20 pb-24">
      <p className="smallcaps text-xs text-[color:var(--color-gold)] text-center">
        Apparatus & Reagentia
      </p>
      <h1 className="mt-4 font-display text-4xl sm:text-5xl tracking-[0.04em] text-center text-[color:var(--color-foreground)]">
        Materia Prima
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg italic leading-relaxed text-[color:var(--color-muted)]">
        Every reagent named in the codex — what it is, where to find it or how to make it,
        and which experiments call for it.
      </p>

      <div className="my-12 rule-thick" />

      <Group title="Found in Nature" subtitle="Won from the earth — the base substances." items={base} />
      <Group title="Made by Art" subtitle="Produced from other materials by the alchemist's craft." items={derived} />
    </div>
  );
}

function Group({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: typeof import("../lib/materials").materials;
}) {
  return (
    <section className="mt-14">
      <div className="flourish mb-3">
        <h2 className="font-display text-sm tracking-[0.32em] text-[color:var(--color-gold)]">
          {title.toUpperCase()}
        </h2>
      </div>
      <p className="text-center text-sm italic text-[color:var(--color-dim)] mb-8">
        {subtitle}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((m) => (
          <Link
            key={m.slug}
            href={`/materials/${m.slug}`}
            className="tome group relative flex flex-col rounded-sm p-5 transition-all hover:border-[color:var(--color-border-strong)] hover:-translate-y-0.5"
          >
            <span aria-hidden className="absolute top-1.5 left-1.5 w-3 h-3 border-l border-t border-[color:var(--color-border-strong)]" />
            <span aria-hidden className="absolute top-1.5 right-1.5 w-3 h-3 border-r border-t border-[color:var(--color-border-strong)]" />
            <span aria-hidden className="absolute bottom-1.5 left-1.5 w-3 h-3 border-l border-b border-[color:var(--color-border-strong)]" />
            <span aria-hidden className="absolute bottom-1.5 right-1.5 w-3 h-3 border-r border-b border-[color:var(--color-border-strong)]" />

            <div className="flex items-start justify-between">
              <span className="text-3xl text-[color:var(--color-gold)] group-hover:text-[color:var(--color-gold-bright)] transition-colors glyph-shadow">
                {m.glyph}
              </span>
              <span className="font-mono text-[10px] tracking-wider text-[color:var(--color-dim)]">
                {m.formula ?? "—"}
              </span>
            </div>

            <h3 className="mt-4 font-display text-lg tracking-[0.06em] text-[color:var(--color-foreground)] group-hover:text-[color:var(--color-gold-bright)] transition-colors">
              {m.name}
            </h3>
            <p className="mt-1 text-xs smallcaps text-[color:var(--color-dim)]">
              {m.aka[0]}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
