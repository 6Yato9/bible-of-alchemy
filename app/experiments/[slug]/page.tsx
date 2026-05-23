import Link from "next/link";
import { notFound } from "next/navigation";
import { experiments, getExperiment, getAllSlugs } from "../../lib/experiments";
import type { Metadata } from "next";

const hazardLabel = ["", "Mild", "Moderate", "Severe", "Dire", "Fatal"];

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const e = getExperiment(slug);
  if (!e) return { title: "Unknown work" };
  return {
    title: `${e.name} — The Bible of Alchemy`,
    description: e.tagline,
  };
}

export default async function ExperimentPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const e = getExperiment(slug);
  if (!e) notFound();

  const idx = experiments.findIndex((x) => x.slug === slug);
  const prev = experiments[(idx - 1 + experiments.length) % experiments.length];
  const next = experiments[(idx + 1) % experiments.length];

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
        <span className="smallcaps text-[color:var(--color-dim)]">
          Opus {String(idx + 1).padStart(2, "0")} of {String(experiments.length).padStart(2, "0")}
        </span>
      </div>

      {/* Frontispiece */}
      <header className="text-center">
        <div
          className="mx-auto text-7xl text-[color:var(--color-gold)] glyph-shadow"
          aria-hidden
        >
          {e.glyph}
        </div>
        <p className="mt-6 smallcaps text-xs text-[color:var(--color-dim)]">
          {e.aka.join(" · ")}
        </p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl tracking-[0.04em] text-[color:var(--color-foreground)]">
          {e.name}
        </h1>
        <p className="mt-6 font-serif italic text-lg leading-relaxed text-[color:var(--color-muted)]">
          {e.tagline}
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px bg-[color:var(--color-border)] border border-[color:var(--color-border)] rounded-sm overflow-hidden">
          <Meta label="Era" value={e.era} />
          <Meta label="Origin" value={e.origin} />
          <Meta label="Author" value={e.discoverer} />
          <Meta
            label="Peril"
            value={hazardLabel[e.hazardLevel]}
            valueClass={
              e.hazardLevel >= 4
                ? "text-[color:var(--color-blood)]"
                : e.hazardLevel >= 3
                ? "text-[color:var(--color-copper)]"
                : "text-[color:var(--color-foreground)]"
            }
          />
        </div>
      </header>

      <div className="my-14 rule-thick" />

      {/* I. History */}
      <Section roman="I" title="Of its History">
        <p className="drop-cap text-lg leading-[1.85] text-[color:var(--color-foreground)]">
          {e.history}
        </p>
      </Section>

      {/* II. Reagents & Procedure */}
      <Section roman="II" title="Of the Matter & the Work">
        <h3 className="mt-2 mb-4 smallcaps text-sm text-[color:var(--color-gold)]">
          Reagents
        </h3>
        <div className="tome rounded-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[color:var(--color-border)]">
                <th className="text-left smallcaps text-xs py-3 px-4 text-[color:var(--color-dim)] font-normal">
                  Archaic name
                </th>
                <th className="text-left smallcaps text-xs py-3 px-4 text-[color:var(--color-dim)] font-normal">
                  Modern identity
                </th>
              </tr>
            </thead>
            <tbody>
              {e.reagents.map((r, i) => (
                <tr
                  key={i}
                  className={
                    i !== e.reagents.length - 1
                      ? "border-b border-[color:var(--color-border)]/50"
                      : ""
                  }
                >
                  <td className="py-3 px-4 align-top font-display tracking-[0.04em] text-[color:var(--color-gold)]/90 italic">
                    {r.archaic}
                  </td>
                  <td className="py-3 px-4 align-top">
                    {r.materialSlug ? (
                      <Link
                        href={`/materials/${r.materialSlug}`}
                        className="group inline-flex items-baseline gap-1.5 text-[color:var(--color-foreground)] hover:text-[color:var(--color-gold-bright)] transition-colors underline decoration-[color:var(--color-border-strong)] underline-offset-4 decoration-dotted hover:decoration-[color:var(--color-gold)]"
                      >
                        {r.modern}
                        <span aria-hidden className="text-[10px] text-[color:var(--color-dim)] group-hover:text-[color:var(--color-gold)] transition-colors">
                          ↗
                        </span>
                      </Link>
                    ) : (
                      <span className="text-[color:var(--color-foreground)]">{r.modern}</span>
                    )}
                    {r.note && (
                      <div className="mt-1 text-xs italic text-[color:var(--color-dim)]">
                        {r.note}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-10 mb-4 smallcaps text-sm text-[color:var(--color-gold)]">
          Procedure
        </h3>
        <ol className="space-y-4">
          {e.procedure.map((step, i) => (
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
      </Section>

      {/* III. Modern chemistry */}
      <Section roman="III" title="Of the True Chemistry">
        {e.chemistry.equation && (
          <div className="my-6 mx-auto max-w-2xl">
            <div className="rule mb-4" />
            <pre className="font-mono text-sm sm:text-base text-center text-[color:var(--color-gold-bright)] whitespace-pre-wrap">
              {e.chemistry.equation}
            </pre>
            <div className="rule mt-4" />
          </div>
        )}
        <p className="text-lg leading-[1.85] text-[color:var(--color-foreground)]">
          {e.chemistry.explanation}
        </p>
      </Section>

      {/* IV. Hazards & lore */}
      <Section roman="IV" title="Of its Perils & its Lore">
        <h3 className="mt-2 mb-4 smallcaps text-sm text-[color:var(--color-blood)]">
          Cautions
        </h3>
        <ul className="space-y-3">
          {e.hazards.map((h, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span
                aria-hidden
                className="mt-2 block w-1.5 h-1.5 shrink-0 rounded-full bg-[color:var(--color-blood)]"
              />
              <span className="text-[color:var(--color-foreground)] leading-relaxed">
                {h}
              </span>
            </li>
          ))}
        </ul>

        <h3 className="mt-10 mb-4 smallcaps text-sm text-[color:var(--color-gold)]">
          Lore
        </h3>
        <p className="text-lg leading-[1.85] italic text-[color:var(--color-muted)]">
          {e.lore}
        </p>
      </Section>

      {/* V. In the Manuscripts & in Print */}
      {e.sources && e.sources.length > 0 && (
        <Section roman="V" title="In the Manuscripts & in Print">
          <ul className="space-y-5">
            {e.sources.map((s, i) => (
              <li key={i} className="flex gap-5">
                <span
                  className={`mt-1 shrink-0 w-20 text-right font-display text-[10px] tracking-[0.24em] uppercase ${
                    s.kind === "patent"
                      ? "text-[color:var(--color-copper)]"
                      : s.kind === "manuscript"
                      ? "text-[color:var(--color-gold-bright)]"
                      : s.kind === "paper"
                      ? "text-[color:var(--color-vitriol)]"
                      : "text-[color:var(--color-gold)]"
                  }`}
                  title={kindLabel(s.kind)}
                >
                  {kindLabel(s.kind)}
                </span>
                <div className="flex-1 border-l border-[color:var(--color-border)] pl-5">
                  <div className="text-[color:var(--color-foreground)] italic leading-snug">
                    {s.url ? (
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[color:var(--color-gold-bright)] transition-colors underline decoration-[color:var(--color-border-strong)] underline-offset-4 decoration-dotted hover:decoration-[color:var(--color-gold)]"
                      >
                        {s.title}
                      </a>
                    ) : (
                      s.title
                    )}
                  </div>
                  <div className="mt-1 text-sm text-[color:var(--color-muted)]">
                    {[s.author, s.year].filter(Boolean).join(" · ")}
                  </div>
                  {s.cite && (
                    <div className="mt-1 text-xs font-mono text-[color:var(--color-dim)]">
                      {s.cite}
                    </div>
                  )}
                  {s.holding && (
                    <div className="mt-1 text-xs text-[color:var(--color-dim)]">
                      Held at: {s.holding}
                    </div>
                  )}
                  {s.note && (
                    <div className="mt-2 text-sm italic text-[color:var(--color-dim)] leading-relaxed">
                      {s.note}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <div className="my-14 rule-thick" />

      {/* Prev / next */}
      <nav className="grid grid-cols-2 gap-6">
        <Link
          href={`/experiments/${prev.slug}`}
          className="tome rounded-sm p-5 group transition-colors hover:border-[color:var(--color-border-strong)]"
        >
          <div className="smallcaps text-[10px] text-[color:var(--color-dim)]">
            ← Preceding
          </div>
          <div className="mt-2 flex items-baseline gap-3">
            <span className="text-2xl text-[color:var(--color-gold)]">
              {prev.glyph}
            </span>
            <span className="font-display text-base tracking-[0.06em] text-[color:var(--color-foreground)] group-hover:text-[color:var(--color-gold-bright)] transition-colors">
              {prev.name}
            </span>
          </div>
        </Link>
        <Link
          href={`/experiments/${next.slug}`}
          className="tome rounded-sm p-5 group text-right transition-colors hover:border-[color:var(--color-border-strong)]"
        >
          <div className="smallcaps text-[10px] text-[color:var(--color-dim)]">
            Following →
          </div>
          <div className="mt-2 flex items-baseline gap-3 justify-end">
            <span className="font-display text-base tracking-[0.06em] text-[color:var(--color-foreground)] group-hover:text-[color:var(--color-gold-bright)] transition-colors">
              {next.name}
            </span>
            <span className="text-2xl text-[color:var(--color-gold)]">
              {next.glyph}
            </span>
          </div>
        </Link>
      </nav>
    </article>
  );
}

function Section({
  roman,
  title,
  children,
}: {
  roman: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14">
      <div className="flourish mb-8">
        <div className="flex items-baseline gap-4">
          <span className="font-display text-xs text-[color:var(--color-gold)] tracking-[0.32em]">
            {roman}.
          </span>
          <h2 className="font-display text-base sm:text-lg tracking-[0.24em] text-[color:var(--color-foreground)]">
            {title.toUpperCase()}
          </h2>
        </div>
      </div>
      <div>{children}</div>
    </section>
  );
}

function Meta({
  label,
  value,
  valueClass = "text-[color:var(--color-foreground)]",
}: {
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="bg-[color:var(--color-surface)] p-4">
      <div className="smallcaps text-[10px] text-[color:var(--color-dim)]">
        {label}
      </div>
      <div className={`mt-1 font-display text-sm tracking-[0.04em] ${valueClass}`}>
        {value}
      </div>
    </div>
  );
}

function kindLabel(kind: "paper" | "patent" | "book" | "manuscript"): string {
  switch (kind) {
    case "paper": return "Paper";
    case "patent": return "Patent";
    case "book": return "Treatise";
    case "manuscript": return "MS.";
  }
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
