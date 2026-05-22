import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getMaterial,
  getAllMaterialSlugs,
  materials,
} from "../../lib/materials";
import { experimentsUsing, getExperiment } from "../../lib/experiments";

export function generateStaticParams() {
  return getAllMaterialSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const m = getMaterial(slug);
  if (!m) return { title: "Unknown material" };
  return {
    title: `${m.name} — The Bible of Alchemy`,
    description: m.about.split(". ")[0],
  };
}

export default async function MaterialPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const m = getMaterial(slug);
  if (!m) notFound();

  const used = experimentsUsing(m.slug);
  const experiment = m.experimentSlug ? getExperiment(m.experimentSlug) : undefined;
  const ingredients = (m.madeFrom ?? [])
    .map((src) => ({ ...src, material: materials.find((mat) => mat.slug === src.material) }))
    .filter((src) => src.material || src.note);

  return (
    <article className="mx-auto max-w-3xl px-6 pt-16 pb-24">
      {/* Breadcrumb */}
      <div className="mb-10 flex items-center gap-3 text-xs">
        <Link
          href="/"
          className="smallcaps text-[color:var(--color-dim)] hover:text-[color:var(--color-gold-bright)] transition-colors"
        >
          ← Codex
        </Link>
        <span className="text-[color:var(--color-border-strong)]">·</span>
        <Link
          href="/materials"
          className="smallcaps text-[color:var(--color-dim)] hover:text-[color:var(--color-gold-bright)] transition-colors"
        >
          Materia
        </Link>
        <span className="text-[color:var(--color-border-strong)]">·</span>
        <span className="smallcaps text-[color:var(--color-dim)]">{m.name}</span>
      </div>

      <header className="text-center">
        <div className="mx-auto text-7xl text-[color:var(--color-gold)] glyph-shadow" aria-hidden>
          {m.glyph}
        </div>
        <p className="mt-6 smallcaps text-xs text-[color:var(--color-dim)]">
          {m.aka.join(" · ")}
        </p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl tracking-[0.04em] text-[color:var(--color-foreground)]">
          {m.name}
        </h1>

        <div className="mt-8 grid grid-cols-3 gap-px bg-[color:var(--color-border)] border border-[color:var(--color-border)] rounded-sm overflow-hidden">
          <Meta label="Class" value={m.type === "base" ? "Found in nature" : "Made from others"} />
          <Meta label="Formula" value={m.formula ?? "—"} />
          <Meta label="Appearance" value={m.appearance.split(";")[0]} />
        </div>
      </header>

      <div className="my-12 rule-thick" />

      <Section title="Of its Nature">
        <p className="text-lg leading-[1.85] text-[color:var(--color-foreground)]">
          {m.about}
        </p>
        <p className="mt-4 text-sm italic text-[color:var(--color-muted)]">
          <span className="smallcaps text-xs text-[color:var(--color-dim)] mr-2">
            Aspect ·
          </span>
          {m.appearance}
        </p>
      </Section>

      {/* Cross-link if this material has its own full experiment entry */}
      {experiment && (
        <Section title="In the Codex">
          <Link
            href={`/experiments/${experiment.slug}`}
            className="tome group block rounded-sm p-6 transition-colors hover:border-[color:var(--color-border-strong)]"
          >
            <div className="flex items-start gap-5">
              <span className="text-5xl text-[color:var(--color-gold)] group-hover:text-[color:var(--color-gold-bright)] transition-colors glyph-shadow">
                {experiment.glyph}
              </span>
              <div className="flex-1">
                <div className="smallcaps text-[10px] text-[color:var(--color-dim)]">
                  Full historical entry
                </div>
                <h3 className="mt-1 font-display text-2xl tracking-[0.04em] text-[color:var(--color-foreground)] group-hover:text-[color:var(--color-gold-bright)] transition-colors">
                  {experiment.name}
                </h3>
                <p className="mt-3 text-sm italic text-[color:var(--color-muted)] leading-relaxed">
                  {experiment.tagline}
                </p>
                <p className="mt-4 smallcaps text-xs text-[color:var(--color-gold)]">
                  Read the procedure →
                </p>
              </div>
            </div>
          </Link>
        </Section>
      )}

      {/* Base materials: where to find */}
      {m.type === "base" && m.sources && m.sources.length > 0 && (
        <Section title="Where to Find It">
          <p className="mb-6 text-sm italic text-[color:var(--color-muted)]">
            A base substance — not made, but won from the earth. The best yields, historically:
          </p>
          <ul className="space-y-5">
            {m.sources.map((s, i) => (
              <li key={i} className="flex gap-5">
                <span className="font-display text-2xl text-[color:var(--color-gold)] leading-none mt-1 w-8 shrink-0 text-right">
                  {romanize(i + 1)}.
                </span>
                <div className="flex-1">
                  <div className="font-display text-base tracking-[0.04em] text-[color:var(--color-foreground)]">
                    {s.region}
                  </div>
                  <p className="mt-1 text-[color:var(--color-muted)] leading-relaxed">
                    {s.note}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Derived materials: how to make */}
      {m.type === "derived" && !experiment && (
        <Section title="How to Make It">
          {ingredients.length > 0 && (
            <>
              <h3 className="mt-2 mb-3 smallcaps text-sm text-[color:var(--color-gold)]">
                From
              </h3>
              <div className="tome rounded-sm overflow-hidden mb-8">
                <ul>
                  {ingredients.map((src, i) => (
                    <li
                      key={i}
                      className={`flex items-baseline gap-4 p-4 ${
                        i !== ingredients.length - 1
                          ? "border-b border-[color:var(--color-border)]/50"
                          : ""
                      }`}
                    >
                      <span className="text-2xl text-[color:var(--color-gold)] w-8 text-center">
                        {src.material?.glyph ?? "·"}
                      </span>
                      <div className="flex-1">
                        {src.material ? (
                          <Link
                            href={`/materials/${src.material.slug}`}
                            className="font-display text-base tracking-[0.04em] text-[color:var(--color-foreground)] hover:text-[color:var(--color-gold-bright)] transition-colors underline decoration-[color:var(--color-border-strong)] underline-offset-4 decoration-dotted"
                          >
                            {src.material.name}
                          </Link>
                        ) : (
                          <span className="font-display text-base tracking-[0.04em] text-[color:var(--color-muted)]">
                            {src.material ?? "—"}
                          </span>
                        )}
                        {src.note && (
                          <p className="mt-1 text-sm italic text-[color:var(--color-dim)]">
                            {src.note}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {m.preparation && m.preparation.length > 0 && (
            <>
              <h3 className="mt-2 mb-4 smallcaps text-sm text-[color:var(--color-gold)]">
                Operation
              </h3>
              <ol className="space-y-4">
                {m.preparation.map((step, i) => (
                  <li key={i} className="flex gap-5">
                    <span className="font-display text-2xl text-[color:var(--color-gold)] leading-none mt-1 w-8 shrink-0 text-right">
                      {romanize(i + 1)}.
                    </span>
                    <p className="text-[color:var(--color-foreground)] leading-[1.8]">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </>
          )}
        </Section>
      )}

      {m.hazards && (
        <Section title="Cautions">
          <p className="text-[color:var(--color-foreground)] leading-relaxed">
            {m.hazards}
          </p>
        </Section>
      )}

      {/* Where this material is used across the codex */}
      {used.length > 0 && (
        <Section title="Used In">
          <ul className="space-y-1">
            {used.map((ex) => (
              <li key={ex.slug}>
                <Link
                  href={`/experiments/${ex.slug}`}
                  className="group flex items-baseline gap-4 px-2 py-2 rounded-sm hover:bg-[color:var(--color-surface)]/60 transition-colors"
                >
                  <span className="text-xl text-[color:var(--color-gold)] w-6 text-center">
                    {ex.glyph}
                  </span>
                  <span className="font-display text-base tracking-[0.04em] text-[color:var(--color-foreground)] group-hover:text-[color:var(--color-gold-bright)] transition-colors">
                    {ex.name}
                  </span>
                  <span className="flex-1 mx-3 border-b border-dotted border-[color:var(--color-border)] translate-y-[-3px]" />
                  <span className="text-xs italic text-[color:var(--color-dim)]">
                    {ex.era}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <div className="flourish mb-6">
        <h2 className="font-display text-sm tracking-[0.24em] text-[color:var(--color-gold)]">
          {title.toUpperCase()}
        </h2>
      </div>
      <div>{children}</div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[color:var(--color-surface)] p-4">
      <div className="smallcaps text-[10px] text-[color:var(--color-dim)]">{label}</div>
      <div className="mt-1 font-display text-sm tracking-[0.04em] text-[color:var(--color-foreground)]">
        {value}
      </div>
    </div>
  );
}

function romanize(n: number): string {
  const map: [number, string][] = [
    [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
  ];
  let out = "";
  for (const [v, s] of map) {
    while (n >= v) {
      out += s;
      n -= v;
    }
  }
  return out;
}
