export type Manuscript = {
  slug: string;
  title: string;
  alt?: string;
  author?: string;
  year: string;
  holding: string;
  shelfmark?: string;
  url?: string;
  plates?: number;
  glyph: string;
  summary: string;
  significance: string;
};

export const manuscripts: Manuscript[] = [
  {
    slug: "splendor-solis",
    title: "Splendor Solis",
    alt: "The Splendour of the Sun",
    author: "attributed to Salomon Trismosin",
    year: "1532–1535",
    holding: "British Library, London",
    shelfmark: "Harley MS 3469",
    url: "https://www.bl.uk/manuscripts/Viewer.aspx?ref=harley_ms_3469",
    plates: 22,
    glyph: "☉",
    summary:
      "Twenty-two luminous gouache plates depicting each stage of the Great Work — the alchemist standing at a fountain, a king bathing in a flask, a dragon swallowing its own tail, a peacock spreading its tail of seven feathers.",
    significance:
      "The most lavishly illuminated alchemical manuscript that survives. Three contemporary copies exist (London, Berlin, Paris); the London Harley copy is the most complete. Fully digitized by the British Library and out of copyright.",
  },
  {
    slug: "aurora-consurgens",
    title: "Aurora Consurgens",
    alt: "The Rising Dawn",
    author: "anonymous, attributed in legend to Thomas Aquinas",
    year: "c. 1420",
    holding: "Zentralbibliothek Zürich",
    shelfmark: "Ms. Rh. 172",
    url: "https://www.e-codices.unifr.ch/en/list/one/zbz/Rh0172",
    plates: 37,
    glyph: "🜍",
    summary:
      "Thirty-seven hand-painted illustrations of allegorical figures — a woman drinking from a serpent, twin kings on a throne, the philosophical tree with the sun and moon as its fruits.",
    significance:
      "One of the most-cited mediaeval alchemical illuminations. Studied at length by Marie-Louise von Franz, Jung's collaborator, who read it as a psychological allegory of integration.",
  },
  {
    slug: "ripley-scroll",
    title: "The Ripley Scroll",
    author: "after George Ripley (15th century)",
    year: "15th–16th century",
    holding: "Yale University, Beinecke Library",
    shelfmark: "Mellon MS 41 (one of ~23 surviving copies)",
    url: "https://collections.library.yale.edu/catalog/2003049",
    plates: 1,
    glyph: "🜘",
    summary:
      "A single illuminated scroll, sometimes six metres long, showing the dragon coiled around the philosophical tree, a hermit holding a vessel of the elixir, and the verses of George Ripley running down the margin.",
    significance:
      "The most theatrical of alchemical texts — meant to be unrolled by stages during a recitation. About twenty-three copies survive across European and American libraries.",
  },
  {
    slug: "mutus-liber",
    title: "Mutus Liber",
    alt: "The Silent Book",
    author: "Altus (pseudonym, possibly Isaac Baulot)",
    year: "1677",
    holding: "Bibliothèque nationale de France, Paris",
    shelfmark: "Rés. R 1003 and copies",
    url: "https://gallica.bnf.fr/ark:/12148/btv1b8404069j",
    plates: 15,
    glyph: "🜔",
    summary:
      "Fifteen engraved plates and no text whatever — the entire treatise on the Great Work is conveyed by image alone. A man and a woman gather dew in white sheets, dissolve it in alembics, and ascend a ladder toward the resurrected sun.",
    significance:
      "The most-cited example of a wordless alchemical text. Its silence has been interpreted, with varying degrees of seriousness, as protection from the unworthy, as evidence of a coded communication, and as the influence of a pictorial tradition that the engraver could not be bothered to gloss.",
  },
  {
    slug: "atalanta-fugiens",
    title: "Atalanta Fugiens",
    alt: "Atalanta Fleeing",
    author: "Michael Maier",
    year: "1617",
    holding: "various, including the Library of Congress",
    shelfmark: "first edition, Oppenheim",
    url: "https://archive.org/details/atalantafugiens00maie",
    plates: 50,
    glyph: "♀",
    summary:
      "Fifty emblems each paired with a Latin epigram and a piece of three-voice polyphonic music — alchemy as multimedia experience, three centuries early. The engravings are by Matthäus Merian, also responsible for the Theatrum Chemicum.",
    significance:
      "The closest thing the Renaissance produced to an alchemical opera. Modern recordings reconstruct the music; performed alongside the engravings the work becomes startlingly modern.",
  },
  {
    slug: "voynich",
    title: "Voynich Manuscript",
    author: "unknown",
    year: "c. 1404–1438",
    holding: "Beinecke Rare Book & Manuscript Library, Yale",
    shelfmark: "MS 408",
    url: "https://collections.library.yale.edu/catalog/2002046",
    plates: 240,
    glyph: "✦",
    summary:
      "Two hundred and forty pages in an undeciphered script, illustrated with impossible plants, nude women bathing in green pools connected by intestinal tubes, and astrological diagrams. Carbon dated 1404–1438.",
    significance:
      "Not strictly alchemical, but adjacent — its herbal and balneological sections overlap heavily with the visual vocabulary of alchemical illumination. The script has resisted every cryptographic attempt at decipherment for a century.",
  },
  {
    slug: "newton-alchemica",
    title: "Newton's Alchemical Papers",
    author: "Sir Isaac Newton",
    year: "c. 1668–1696",
    holding: "King's College Cambridge (Keynes Collection), Hebrew University of Jerusalem (Yahuda), Indiana University",
    shelfmark: "Keynes MS 1–67; Yahuda MS Var. 259",
    url: "https://chymistry.org/",
    glyph: "🜚",
    summary:
      "Over one million words in Newton's own hand — recipes, transcriptions, indexes, laboratory notes. Topics include antimony, the philosopher's stone, the green lion, and the 'net' experiment in which mercury attacks gold through a series of intermediate compounds.",
    significance:
      "Suppressed by the Royal Society as embarrassing until John Maynard Keynes bought them at Sotheby's in 1936 and wrote that Newton was 'not the first of the age of reason — he was the last of the magicians.' The Chymistry of Isaac Newton project at Indiana University has digitised and transcribed most of the corpus.",
  },
  {
    slug: "liber-ignium",
    title: "Liber Ignium ad Comburendos Hostes",
    alt: "The Book of Fires for Burning Enemies",
    author: "Marcus Graecus",
    year: "c. 1280",
    holding: "Bibliothèque nationale de France, Paris",
    shelfmark: "MS Lat. 7156, 7158, etc.",
    url: "https://gallica.bnf.fr/ark:/12148/btv1b9067737p",
    glyph: "🜂",
    summary:
      "A small book of incendiary recipes — Greek fire, gunpowder, sticky fire, fire that burns under water, fire of the sea. Forty short sections, no illustrations, deeply practical.",
    significance:
      "The earliest Western text in which the formula for gunpowder appears, and one of only a handful of Western works that attempt to reconstruct Greek fire.",
  },
  {
    slug: "donum-dei",
    title: "Donum Dei",
    alt: "The Gift of God",
    author: "anonymous, after Georg Aurach",
    year: "late 14th century",
    holding: "Bibliothèque nationale de France, Paris; copies in Glasgow, Munich, Florence",
    shelfmark: "BnF, Français 14765",
    plates: 12,
    glyph: "🜨",
    summary:
      "Twelve illuminated vessels — round-bottomed flasks of glass, each containing a different stage of the Work: the black raven, the white swan, the peacock's tail, the red king. Brief Latin captions accompany each image.",
    significance:
      "A widely copied medieval emblem-book whose visual vocabulary spread across European alchemy. The bird sequence (raven, swan, peacock, phoenix) became one of the standard mnemonic systems for the stages of the Work.",
  },
  {
    slug: "book-of-the-holy-trinity",
    title: "Buch der heiligen Dreifaltigkeit",
    alt: "The Book of the Holy Trinity",
    author: "anonymous Franciscan, possibly Friar Ulmannus",
    year: "early 15th century",
    holding: "Bayerische Staatsbibliothek, Munich",
    shelfmark: "Cgm 598",
    url: "https://www.digitale-sammlungen.de/de/details/bsb00046679",
    plates: 32,
    glyph: "✚",
    summary:
      "An attempt to integrate alchemical theory with Christian doctrine — the Trinity is read as Mercury, Sulfur, and Salt; the crucified Christ stands amid alchemical vessels; the Virgin lifts up the philosopher's stone.",
    significance:
      "Among the earliest German alchemical manuscripts; widely circulated and frequently copied. The first sustained attempt to map alchemical practice onto Christological theology.",
  },
];

export function getManuscript(slug: string): Manuscript | undefined {
  return manuscripts.find((m) => m.slug === slug);
}
