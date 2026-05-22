import type { Metadata } from "next";
import { Cinzel, EB_Garamond } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "The Bible of Alchemy",
  description:
    "A codex of the famous historical experiments — aqua regia, black powder, Greek fire, the philosopher's stone, and the rest of the great recipes of the alchemists.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${garamond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="border-b border-[color:var(--color-border)]/60">
          <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
            <Link href="/" className="group flex items-center gap-3">
              <span className="font-display text-2xl text-[color:var(--color-gold)] glyph-shadow">
                ☤
              </span>
              <span className="font-display text-sm tracking-[0.32em] text-[color:var(--color-foreground)] group-hover:text-[color:var(--color-gold-bright)] transition-colors">
                BIBLIA ALCHEMIAE
              </span>
            </Link>
            <nav className="flex items-center gap-8 text-sm">
              <Link
                href="/"
                className="smallcaps text-[color:var(--color-muted)] hover:text-[color:var(--color-gold-bright)] transition-colors"
              >
                Codex
              </Link>
              <Link
                href="/materials"
                className="smallcaps text-[color:var(--color-muted)] hover:text-[color:var(--color-gold-bright)] transition-colors"
              >
                Materia
              </Link>
              <Link
                href="/about"
                className="smallcaps text-[color:var(--color-muted)] hover:text-[color:var(--color-gold-bright)] transition-colors"
              >
                Of the Art
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="mt-24 border-t border-[color:var(--color-border)]/60">
          <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display text-xs tracking-[0.32em] text-[color:var(--color-gold)]">
                BIBLIA ALCHEMIAE
              </p>
              <p className="mt-2 text-sm text-[color:var(--color-dim)] italic">
                Visita Interiora Terrae Rectificando Invenies Occultum Lapidem
              </p>
            </div>
            <p className="text-xs text-[color:var(--color-dim)]">
              For the curiosity of historians. Not a manual.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
