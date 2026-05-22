export type Experiment = {
  slug: string;
  name: string;
  aka: string[];
  glyph: string;
  era: string;
  origin: string;
  discoverer: string;
  hazardLevel: 1 | 2 | 3 | 4 | 5;
  tagline: string;
  history: string;
  reagents: { archaic: string; modern: string; note?: string; materialSlug?: string }[];
  procedure: string[];
  chemistry: { equation?: string; explanation: string };
  hazards: string[];
  lore: string;
};

export const experiments: Experiment[] = [
  {
    slug: "aqua-regia",
    name: "Aqua Regia",
    aka: ["Royal Water", "Nitro-hydrochloric acid", "Königswasser"],
    glyph: "🜅",
    era: "c. 800 CE",
    origin: "Islamic Golden Age — Persia",
    discoverer: "Jābir ibn Hayyān (Geber)",
    hazardLevel: 5,
    tagline:
      "The only common acid that dissolves the noble metal — gold itself bends to its fume.",
    history:
      "First described in the writings attributed to Jābir ibn Hayyān, the eighth-century Persian polymath revered in Europe as Geber, aqua regia was prized as the sole agent capable of dissolving gold and platinum. Latin alchemists named it the King's Water, for only the King of Metals would yield to it. In 1940, the chemist George de Hevesy used it in Copenhagen to dissolve the Nobel Prize medals of Max von Laue and James Franck, hiding them in plain sight from the occupying Reich until the war's end, when the gold was re-precipitated and the medals recast.",
    reagents: [
      { archaic: "Spirit of Salt", modern: "Hydrochloric acid (HCl)", materialSlug: "hcl" },
      { archaic: "Spirit of Nitre", modern: "Nitric acid (HNO₃)", materialSlug: "nitric-acid" },
      { archaic: "—", modern: "Ratio: three parts HCl to one part HNO₃ by volume" },
    ],
    procedure: [
      "Under a fume hood, measure three parts concentrated hydrochloric acid into a glass beaker.",
      "Slowly add one part concentrated nitric acid, stirring with a glass rod.",
      "Observe the liquor turning a fuming orange-red as nitrosyl chloride evolves.",
      "Use within the hour — aqua regia decomposes rapidly and loses its potency.",
    ],
    chemistry: {
      equation:
        "Au + 4 HCl + HNO₃ → HAuCl₄ + NO↑ + 2 H₂O",
      explanation:
        "Neither acid alone touches gold. Nitric acid oxidises Au⁰ to Au³⁺ in vanishingly small amounts; hydrochloric acid pulls those cations away as the stable tetrachloroaurate complex [AuCl₄]⁻. By removing the product, Le Chatelier's hand drags the equilibrium forward, and the metal yields. Free nitrosyl chloride (NOCl) and chlorine gas are evolved as side-products, giving the reagent its acrid orange breath.",
    },
    hazards: [
      "Severely corrosive — destroys skin, lungs, and most metals on contact.",
      "Evolves toxic nitrosyl chloride and chlorine gases; lethal in poorly ventilated spaces.",
      "Cannot be stored; decomposes and may rupture sealed vessels.",
    ],
    lore:
      "In medieval cosmology the metals were ruled by the planets, and gold was the metal of the Sun — incorruptible, perfect, royal. That a mere mixture of two lesser acids could dissolve the Sun was, to the alchemists, a hint that the prima materia underlying all matter could be reached if only the right solvents were found.",
  },
  {
    slug: "black-powder",
    name: "Black Powder",
    aka: ["Gunpowder", "Serpentine Powder", "Huǒ yào (火藥)"],
    glyph: "🜿",
    era: "9th century CE",
    origin: "Tang China",
    discoverer: "Taoist alchemists seeking the elixir of immortality",
    hazardLevel: 5,
    tagline:
      "Sought as the medicine of eternal life — found to be the engine of war.",
    history:
      "The earliest formula appears in the Zhenyuan miaodao yaolüe, a ninth-century Taoist text warning practitioners that a mixture of sulfur, realgar, and saltpetre boiled with honey 'has singed beards and burned down the house where it was made.' The compounders were not chemists but elixirists, hunting an alchemical longevity drug. Within two centuries the formula had entered Chinese siege manuals; by the thirteenth it had crossed the steppe, and by Roger Bacon's day it was known in Oxford. The serpentine powder of the early cannons was simply ground; corned powder — caked, dried, and broken into grains — came later, and tripled the energy of European artillery.",
    reagents: [
      { archaic: "Saltpetre", modern: "Potassium nitrate (KNO₃)", note: "75% by mass — the oxidiser", materialSlug: "saltpetre" },
      { archaic: "Brimstone", modern: "Sulfur (S₈)", note: "10% — lowers ignition temperature", materialSlug: "sulfur" },
      { archaic: "Charcoal", modern: "Carbon (C)", note: "15% — fuel; willow or alder traditionally", materialSlug: "charcoal" },
    ],
    procedure: [
      "Grind each ingredient separately to a fine flour with a mortar of bronze (never iron — sparks).",
      "Combine and mill together under a small quantity of water or spirit to form a damp paste.",
      "Press the paste through a sieve to form grains, then dry the grains in the shade.",
      "Test by burning a small heap on paper: a clean powder leaves no residue and the paper unscorched.",
    ],
    chemistry: {
      equation:
        "2 KNO₃ + S + 3 C → K₂S + N₂↑ + 3 CO₂↑",
      explanation:
        "The reaction is a self-contained redox: the nitrate ion is the oxygen carrier, sulfur lowers the activation energy and binds the potassium as sulfide, and carbon is the fuel. The products are mostly gas — nitrogen and carbon dioxide — and the sudden volume expansion is what hurls the shot. Real combustion is messier than the textbook equation; potassium carbonate, sulfate, and free sulfur all appear in the white smoke.",
    },
    hazards: [
      "Open flame, friction, or static spark all initiate detonation.",
      "Detonation in a sealed vessel ruptures the vessel violently.",
      "Storage of more than a few ounces is regulated under most national explosives codes.",
    ],
    lore:
      "The Chinese name huǒ yào means literally fire medicine — a relic of the recipe's origin as an elixir of life. Its first European mention is in the Liber Ignium of Marcus Graecus, a thirteenth-century manuscript of recipes for incendiaries, where it sits beside formulas for Greek fire and a salve for arrow wounds.",
  },
  {
    slug: "greek-fire",
    name: "Greek Fire",
    aka: ["Liquid Fire", "Sea Fire", "Pýr Thalássion"],
    glyph: "🜂",
    era: "c. 672 CE",
    origin: "Constantinople, Byzantine Empire",
    discoverer: "Kallinikos of Heliopolis (attributed)",
    hazardLevel: 5,
    tagline:
      "An incendiary that burned upon water, kept secret by the Byzantines for four centuries.",
    history:
      "When the Arab fleet broke against the walls of Constantinople in 678, it was repelled by a weapon the chroniclers describe with awe and no detail. Greek fire was projected from siphons mounted on the prows of dromons, and once kindled it could not be extinguished by water — indeed water seemed to feed it. The formula was guarded so closely that even Constantine VII, writing to his son, called it a secret 'shown by an angel to the great and holy first Christian emperor.' By the time the empire fell, the recipe had been lost, and it has never been reconstructed with certainty.",
    reagents: [
      { archaic: "Naphtha", modern: "Light petroleum distillate", note: "Surface-seeped crude from the Caspian basin", materialSlug: "naphtha" },
      { archaic: "Quicklime", modern: "Calcium oxide (CaO)", note: "Conjectural — produces heat on contact with water", materialSlug: "quicklime" },
      { archaic: "Brimstone", modern: "Sulfur (S₈)", materialSlug: "sulfur" },
      { archaic: "Resin / pitch", modern: "Pine tar", note: "Thickener; lets the fire cling like tar", materialSlug: "pine-pitch" },
    ],
    procedure: [
      "Distil crude naphtha by gentle heat in a covered retort to draw off the lighter spirit.",
      "Stir in pulverised brimstone and warm pine pitch until the mixture is the consistency of honey.",
      "Quicklime, if used, was added at the last moment — perhaps inside the projectile.",
      "Loaded into a bronze siphon worked by bellows, lit at the nozzle, and pumped onto the enemy.",
    ],
    chemistry: {
      explanation:
        "The active fuel was almost certainly light petroleum, abundant from the seeps around Baku and shipped through the empire. Sulfur would broaden the flame and produce choking smoke. The persistent claim that water fed the fire suggests an alkali-metal or quicklime component: CaO + H₂O → Ca(OH)₂ releases 65 kJ/mol, enough to re-ignite a hot petroleum film. No reconstruction has reproduced every reported behaviour, and the true formula remains one of the great lost recipes of antiquity.",
    },
    hazards: [
      "Burning naphtha clings to skin and cannot be wiped off without spreading.",
      "Water as an extinguishant spreads the fuel and may worsen the fire.",
      "Sand, vinegar, and old urine were the period extinguishants — and rarely sufficient.",
    ],
    lore:
      "The Byzantines protected the formula with capital penalties; the family of Kallinikos held the trade for generations. When the Crusaders sacked Constantinople in 1204, the secret died with the engineers who knew it — proof that knowledge, like gold, can be lost more easily than it can be made.",
  },
  {
    slug: "philosophers-stone",
    name: "The Philosopher's Stone",
    aka: ["Lapis Philosophorum", "Magnum Opus", "The Tincture", "The Red Stone"],
    glyph: "🜞",
    era: "Antiquity → 18th century",
    origin: "Alexandria, Egypt; later Europe and the Islamic world",
    discoverer: "Sought by all alchemists; claimed by none in proof",
    hazardLevel: 3,
    tagline:
      "The supposed agent of transmutation — a fixed substance that turned base metals to gold and conferred eternal life.",
    history:
      "From Zosimos of Panopolis in the third century to Isaac Newton in the seventeenth, the Stone was the central object of the Great Work. The alchemist's furnace, alembic, and pelican were all bent toward producing it. The work was divided into four stages — nigredo (blackening), albedo (whitening), citrinitas (yellowing), and rubedo (reddening) — each marked by a colour change in the matter sealed inside the Philosopher's Egg. Newton's surviving alchemical papers, suppressed by the Royal Society until 1936, fill more than a million words. He never claimed success.",
    reagents: [
      { archaic: "Prima Materia", modern: "Disputed — antimony, lead ore, mercury, dew, or 'the urine of innocent boys'", note: "Each adept favoured a different starting matter" },
      { archaic: "Philosophical Mercury", modern: "A purified mercury principle, not the common metal" },
      { archaic: "Philosophical Sulfur", modern: "A fixed, soul-of-metal sulfur — equally non-literal" },
      { archaic: "Secret Fire", modern: "Sal ammoniac, antimony trichloride, or 'our fire' — opinions varied wildly" },
    ],
    procedure: [
      "Calcine the prima materia until it blackens (nigredo) — the death of the old form.",
      "Wash and distil repeatedly until the matter turns white as a swan (albedo).",
      "Continue the gentle heat until a citrine yellow appears, signalling the king's coming.",
      "Push the fire higher; the matter at last reddens (rubedo) and the Stone is born.",
      "Project a single grain onto a thousand parts of base metal: 'and it shall be turned.'",
    ],
    chemistry: {
      explanation:
        "No transmutation of element to element is possible by chemical means; only nuclear processes can convert lead to gold, and they cost more energy than the gold is worth. The colour sequence the alchemists chased was real enough — many sulfide and oxide systems pass through black, white, yellow, and red as oxidation states change (antimony, lead, mercury, and iron all do so) — and the alchemists, lacking the modern concept of element, read meaning into a chemistry that was simply not what they thought it was.",
    },
    hazards: [
      "Decades of mercury vapour inhalation; the trade was famous for mad alchemists.",
      "Lead and antimony poisoning from repeated calcinations.",
      "Royal patrons who tired of empty promises tended to settle accounts with the gallows.",
    ],
    lore:
      "Carl Jung, late in life, read the alchemists not as failed chemists but as accidental psychologists: the Great Work was the soul's transformation projected onto matter. Whether or not he was right, no body of failed science has ever produced a richer literature, nor seeded so many of the techniques — distillation, crystallisation, sublimation — that real chemistry would inherit.",
  },
  {
    slug: "mercury-sublimation",
    name: "Sublimation of Mercury",
    aka: ["Corrosive Sublimate", "Calomel", "Mercuric Chloride"],
    glyph: "☿",
    era: "8th–17th century",
    origin: "Arabic and European alchemy",
    discoverer: "Refined by Jābir; named by the Latin alchemists",
    hazardLevel: 5,
    tagline:
      "The trembling silver, lifted on smoke from its salt and re-condensed as a crystal poison.",
    history:
      "Quicksilver was the most fascinating substance the ancients knew — a liquid metal, cold to the touch, that flowed from cinnabar when the red ore was roasted. Subliming it with sea salt and vitriol yielded corrosive sublimate (HgCl₂), a colourless, glittering crystal of murderous potency. The milder calomel (Hg₂Cl₂) was used as a purgative well into the nineteenth century; American president Andrew Jackson is thought to have suffered chronic mercury poisoning from his daily dose. Syphilis sufferers spent months in sweating tubs anointed with mercury, with the saying 'a night with Venus, a lifetime with Mercury.'",
    reagents: [
      { archaic: "Quicksilver", modern: "Mercury (Hg)", materialSlug: "mercury" },
      { archaic: "Sea Salt", modern: "Sodium chloride (NaCl)", materialSlug: "sea-salt" },
      { archaic: "Oil of Vitriol", modern: "Sulfuric acid (H₂SO₄)", materialSlug: "sulfuric-acid" },
    ],
    procedure: [
      "Triturate equal parts mercury and sea salt in an iron mortar until the silver is dispersed into a grey powder.",
      "Add oil of vitriol, gently warming, until the mass becomes a moist solid.",
      "Pack the mixture into a glass aludel and apply a strong fire.",
      "Sublimed crystals collect in the upper chamber as the corrosive sublimate — colourless, glassy, deadly.",
    ],
    chemistry: {
      equation:
        "Hg + 2 NaCl + 2 H₂SO₄ → HgCl₂↑ + Na₂SO₄ + SO₂↑ + 2 H₂O",
      explanation:
        "Sulfuric acid liberates hydrogen chloride from the salt; the HCl attacks mercury directly to produce HgCl₂, which sublimes at 302 °C without first melting. Reducing the product over more mercury yields the less-soluble dimercurous chloride, Hg₂Cl₂, the calomel of the apothecaries. The same vessel, the aludel — a stack of bell-shaped earthenware crucibles — gave its name to the Aludel district in Almadén, the Spanish mercury town that fed Europe for four centuries.",
    },
    hazards: [
      "HgCl₂ is acutely lethal in milligram doses; corrosive to all soft tissue.",
      "Mercury vapour passes the blood-brain barrier and accumulates for life.",
      "Calomel, long used as medicine, killed countless patients before the FDA banned it in 1948.",
    ],
    lore:
      "Mercury was the alchemists' messenger — never one thing or another, neither solid nor truly liquid, neither metal nor mineral. Its god, Hermes, gave the art its name: Hermetic. To work with mercury was to bargain with the part of nature that refused to keep still.",
  },
  {
    slug: "phosphorus-discovery",
    name: "The Cold Light",
    aka: ["Phosphorus mirabilis", "Brand's Phosphorus", "Light-bearer"],
    glyph: "🜿",
    era: "1669",
    origin: "Hamburg, Holy Roman Empire",
    discoverer: "Hennig Brand",
    hazardLevel: 4,
    tagline:
      "The first element discovered by recorded experiment — boiled from human urine in search of gold.",
    history:
      "Hennig Brand was an unsuccessful glassmaker who married into money and spent it chasing the Philosopher's Stone. Convinced that the answer lay in 'the golden stream' of human urine, he collected, evaporated, and putrefied some 5,500 litres of it over months in his Hamburg cellar. From the black residue, distilled in a fierce fire, came a white waxy substance that glowed in the dark and burst into flame in air. He had isolated white phosphorus — the first new element discovered by anyone since antiquity, and the first whose discovery date and discoverer are known. Brand kept it a secret for six years; once it leaked, he sold it for the price of gold.",
    reagents: [
      { archaic: "Stale urine", modern: "Aged human urine (~5500 L)", note: "Modern reconstructions use bone ash; the salts are the same" },
      { archaic: "Black coals", modern: "Charcoal (reducing agent)", materialSlug: "charcoal" },
      { archaic: "Sand", modern: "Silica (SiO₂)", note: "Acts as a flux in the retort", materialSlug: "silica" },
    ],
    procedure: [
      "Set urine in open vessels until it putrefies and turns syrupy — Brand allowed months.",
      "Boil the syrup down to a black paste over a slow fire.",
      "Mix the paste with twice its weight of fine sand and charcoal.",
      "Charge a stout earthenware retort and connect to a receiver of cold water.",
      "Drive the fire to white heat; the phosphorus distils over and condenses beneath the water as a glowing wax.",
    ],
    chemistry: {
      equation:
        "4 NaPO₃ + 10 C → 2 Na₂CO₃ + 8 CO↑ + P₄↑",
      explanation:
        "The phosphate salts in urine, dehydrated, become sodium metaphosphate. At white heat in the presence of carbon and silica, the phosphate is reduced to elemental P₄ vapour, which condenses to white phosphorus under water. The trick is the silica: it binds the sodium as silicate and frees the phosphorus to distil. Brand stumbled on this without understanding any of it. The element's chemiluminescence — a slow oxidation by air with no perceptible heat — was a wonder that resisted explanation until the twentieth century.",
    },
    hazards: [
      "White phosphorus ignites spontaneously in air at 30 °C; burns adhere to skin and cannot be smothered.",
      "Ingestion causes 'phossy jaw' — necrosis of the mandible, the disease of nineteenth-century match-girls.",
      "Lethal dose ~50 mg; phosphorus poisoning was a favourite of nineteenth-century murder mysteries.",
    ],
    lore:
      "Joseph Wright of Derby painted Brand's discovery in 1771 — The Alchymist in Search of the Philosophers Stone — depicting an old man kneeling before a glowing flask in a darkened room. It is the only contemporary painting of a real chemical discovery, and arguably the founding image of modern science.",
  },
  {
    slug: "glaubers-salt",
    name: "Glauber's Salt",
    aka: ["Sal mirabilis", "Wonder Salt", "Sodium Sulfate Decahydrate"],
    glyph: "🜔",
    era: "1625",
    origin: "Karlstadt am Main, Holy Roman Empire",
    discoverer: "Johann Rudolf Glauber",
    hazardLevel: 1,
    tagline:
      "A clear crystal precipitate that purged the body and earned its discoverer the title of German Paracelsus.",
    history:
      "Johann Glauber, ill with typhus and unable to keep food down, was led by Hungarian villagers to a spring whose water cured him within days. He carried home a sample, evaporated it, and crystallised the salt responsible — large, transparent, prismatic crystals that effloresced to a white powder in dry air. He named it sal mirabilis, the wonder salt, and spent the rest of his life selling it as a panacea. It was Europe's first commercially produced laxative; it remains in pharmacopoeias to this day, and its decahydrate's reversible melting (32 °C) is now used in solar heat storage.",
    reagents: [
      { archaic: "Spirit of Salt", modern: "Hydrochloric acid (HCl)", materialSlug: "hcl" },
      { archaic: "Sea Salt", modern: "Sodium chloride (NaCl)", materialSlug: "sea-salt" },
      { archaic: "Oil of Vitriol", modern: "Sulfuric acid (H₂SO₄)", materialSlug: "sulfuric-acid" },
    ],
    procedure: [
      "Combine common salt and oil of vitriol in a glass retort.",
      "Apply gentle heat; spirit of salt distils over (a useful by-product).",
      "The residue is sodium sulfate. Dissolve in hot water and let stand in a cool place.",
      "Long prismatic crystals deposit overnight — the wonder salt.",
    ],
    chemistry: {
      equation:
        "2 NaCl + H₂SO₄ → Na₂SO₄ + 2 HCl↑",
      explanation:
        "This is the Leblanc reaction in its first half — Glauber discovered it more than a century before Leblanc industrialised it for soda production. Sulfuric acid, less volatile than HCl, displaces chloride from the salt; the HCl gas escapes, and sodium sulfate is left behind. The salt's high enthalpy of crystallisation (78 kJ/mol) is what makes its decahydrate a useful phase-change material — it stores nearly five times the heat of water across a narrow temperature window.",
    },
    hazards: [
      "The salt itself is mild — overdose causes only diarrhoea and dehydration.",
      "Preparation involves concentrated sulfuric acid and evolves hydrogen chloride gas; both demand caution.",
    ],
    lore:
      "Glauber may be the first chemical entrepreneur in the modern sense: he wrote his books in German rather than Latin, sold his apparatus by mail, and openly published his methods on the principle that 'a hidden art is no art.' Liebig called him the German Paracelsus; in his lifetime he was both celebrated and accused of witchcraft.",
  },
  {
    slug: "fulminating-gold",
    name: "Fulminating Gold",
    aka: ["Aurum fulminans", "Thunder Gold"],
    glyph: "🜚",
    era: "c. 1585",
    origin: "Late Renaissance Europe",
    discoverer: "Sebald Schwaerzer, refined by Basil Valentine",
    hazardLevel: 5,
    tagline:
      "A brown precipitate of gold that detonates at the touch of a feather, the first known explosive of the noble metal.",
    history:
      "When ammonia (then known as spirit of hartshorn) is poured into a solution of gold dissolved in aqua regia, a heavy, ochre-coloured precipitate falls. Dried, it is one of the most touch-sensitive primary explosives known. The seventeenth-century alchemists, baffled and delighted, called it aurum fulminans — fulminating gold. Samuel Pepys recorded watching a demonstration in his diary for 1663, and Robert Boyle warned that 'a very small grayne of it' could ruin a glass vessel and the hand holding it. Its structure was an open mystery until 2007, when X-ray crystallography revealed a polymeric network of Au–N–Au bonds.",
    reagents: [
      { archaic: "Aqua Regia", modern: "Royal water (3 HCl : 1 HNO₃)", materialSlug: "aqua-regia" },
      { archaic: "Gold leaf", modern: "Pure gold (Au)", materialSlug: "gold" },
      { archaic: "Spirit of Hartshorn", modern: "Aqueous ammonia (NH₃·H₂O)", materialSlug: "aqueous-ammonia" },
    ],
    procedure: [
      "DO NOT attempt this. It is described here as a matter of history.",
      "Gold leaf was dissolved in aqua regia to give a yellow chloroauric acid solution.",
      "Excess ammonia was added drop by drop; an ochre precipitate fell.",
      "The precipitate was washed and allowed to dry — only in tiny quantities, on a paper, never touched with metal.",
      "Touched, struck, or warmed above 145 °C, a few grains detonate with a sharp crack and a violet flash.",
    ],
    chemistry: {
      equation:
        "HAuCl₄ + 3 NH₃ → Au(NH₃)₃Cl₃ → (polymeric Au–N–H network) + heat → 2 Au + 3 N₂↑ + 6 HCl",
      explanation:
        "The product is not a simple salt but a polymeric covalent network of gold(III) bound through nitrogen. Detonation releases nitrogen gas and elemental gold — the metal is regenerated as a black sputter on the bench. The energy comes from the formation of the N≡N triple bond, one of the most stable bonds in chemistry; once nitrogen finds itself in a position to make it, very little is required to push it the rest of the way.",
    },
    hazards: [
      "Primary explosive — detonates from friction, static, heat, or a stiff breeze when dry.",
      "Cannot be safely stored, handled, weighed, or transported. Even modern labs decline to make it.",
      "Truly dangerous to anyone curious enough to try. Read about it; do not produce it.",
    ],
    lore:
      "Aurum fulminans was one of the seventeenth century's chief arguments against the alchemical doctrine of metallic essences: how could gold, the perfect metal, be made to fly apart in violence? The puzzle nudged Boyle toward his Sceptical Chymist of 1661, the book that began the dismantling of alchemical theory.",
  },
  {
    slug: "aqua-vitae",
    name: "Aqua Vitae",
    aka: ["Water of Life", "Spirit of Wine", "Eau-de-vie", "Uisce beatha"],
    glyph: "🝆",
    era: "12th century",
    origin: "Salerno, southern Italy",
    discoverer: "The medical school of Salerno; refined by Taddeo Alderotti",
    hazardLevel: 2,
    tagline:
      "The fifth essence drawn from wine — the first organic compound the alchemists isolated in pure form.",
    history:
      "Distillation of wine to concentrate its spirit is described in the Mappae clavicula and in the works of the Salernitan school in the twelfth century, though the technique probably reached Europe through Arabic medicine somewhat earlier. Taddeo Alderotti, working in thirteenth-century Bologna, refined the still by adding a serpentine cooling coil — the worm — and obtained spirit at strength near 90 % alcohol, which he called aqua ardens. The substance was reckoned a panacea: it preserved meats, dissolved resins, eased pain, and burned with a clean blue flame that promised some inner fire of life. The Gaelic uisce beatha and French eau-de-vie are literal translations of the alchemists' Latin.",
    reagents: [
      { archaic: "Strong wine", modern: "Fermented wine (~12 % ethanol)", materialSlug: "wine" },
      { archaic: "—", modern: "Vessel: alembic with serpentine condenser" },
    ],
    procedure: [
      "Charge a copper alembic with strong red wine to two-thirds of its capacity.",
      "Apply a slow, steady fire — never let the wine boil hard, or the spirit will burn.",
      "Vapours rise through the head and pass through the worm, which sits in a barrel of cool water.",
      "The first runnings — the heads — are discarded; the middle cut is the aqua vitae.",
      "Redistil a second and third time to raise the strength; alchemists spoke of three- and four-times spirit.",
    ],
    chemistry: {
      explanation:
        "Wine is an aqueous solution of ethanol (~12 % v/v) with sugars, acids, and trace congeners. Ethanol boils at 78.4 °C, water at 100 °C; at any temperature between, the vapour above the liquid is richer in ethanol than the liquid itself. Distillation exploits this difference repeatedly. The maximum reachable by simple distillation is the azeotrope at 95.6 % ethanol; further enrichment requires a desiccant. Alderotti's serpentine condenser was the first widely used cooling coil and remains, in glass and steel, the essential element of every still made since.",
    },
    hazards: [
      "Concentrated ethanol vapour is flammable; stills are explosion hazards if poorly vented.",
      "The 'heads' fraction contains methanol and acetaldehyde — toxic; discard.",
      "Unregulated distillation is illegal in most jurisdictions.",
    ],
    lore:
      "Arnaldus of Villanova called it 'the water of immortality.' Ramon Llull declared it 'an element newly revealed to men but hid from antiquity, because the human race was then too young to need this beverage destined to revive the energies of modern decrepitude.' The alchemists, for once, were not exaggerating: the still gave the world a new family of substances, and the modern chemist's first task — separating one volatile from another — was their inheritance.",
  },
  {
    slug: "prussian-blue",
    name: "Prussian Blue",
    aka: ["Berlin Blue", "Iron Hexacyanoferrate", "Bleu de Prusse"],
    glyph: "🜘",
    era: "c. 1706",
    origin: "Berlin, Kingdom of Prussia",
    discoverer: "Johann Jacob Diesbach (accidentally)",
    hazardLevel: 2,
    tagline:
      "The first modern synthetic pigment, born of a contaminated batch of red lake and a colourmaker's error.",
    history:
      "Diesbach, a Berlin dyemaker, was trying to extend a batch of red cochineal lake with potash. The potash he bought from his colleague Dippel was contaminated with animal oil — Dippel had been distilling 'animal oil' (a foul tar of bone) in the same vessel. When Diesbach added the contaminated potash to his iron sulfate mordant, the lake came out not red but a deep, brilliant blue. He had accidentally synthesised iron(III) hexacyanoferrate(II), the first chemically stable, water-fast, lightfast blue pigment available cheaply in Europe. Within twenty years it had replaced ultramarine for all but the most reverent uses, and Hokusai's Great Wave is painted with it.",
    reagents: [
      { archaic: "Pot ashes", modern: "Potassium carbonate (K₂CO₃)", materialSlug: "potash" },
      { archaic: "Bullock's blood / horn / hide", modern: "Nitrogen source (proteins → cyanide on calcination)" },
      { archaic: "Vitriol of Mars", modern: "Iron(II) sulfate (FeSO₄)", materialSlug: "green-vitriol" },
      { archaic: "Alum", modern: "Potassium aluminium sulfate (mordant)", materialSlug: "alum" },
    ],
    procedure: [
      "Calcine pot ashes with dried bullock's blood at red heat until the mass fuses.",
      "Lixiviate the cooled mass with water and filter — the solution contains potassium ferrocyanide.",
      "In a separate vessel dissolve vitriol of Mars and alum in warm water.",
      "Pour the yellow ferrocyanide solution slowly into the iron solution.",
      "An intense blue precipitate falls at once; filter, wash, and dry in the shade.",
    ],
    chemistry: {
      equation:
        "4 Fe³⁺ + 3 [Fe(CN)₆]⁴⁻ → Fe₄[Fe(CN)₆]₃",
      explanation:
        "The pigment is mixed-valence: iron(III) ions are bridged to iron(II) ions through cyanide ligands in a cubic lattice. Its colour comes from intervalence charge transfer — a photon promotes an electron from Fe(II) to Fe(III), absorbing strongly in the red and leaving the eye with the complementary blue. Modern medicine uses the same compound, as 'Radiogardase,' to bind thallium and radioactive caesium in the gut of poisoned patients; the lattice is selective enough to trap the ions for excretion.",
    },
    hazards: [
      "The pigment itself is non-toxic and pharmaceutically used.",
      "Preparation involves cyanide intermediates; calcination must be done in a hood.",
      "Avoid mixing with strong acids — hydrogen cyanide can be liberated.",
    ],
    lore:
      "It is the blue of Hokusai's wave, of Picasso's blue period, of every cyanotype blueprint, and of the uniforms of the Prussian army that gave it its name. Dippel, the man whose contaminated potash made it possible, was the alchemist who lived in Castle Frankenstein outside Darmstadt — and some scholars argue he is the original of Mary Shelley's doctor.",
  },
  {
    slug: "oil-of-vitriol",
    name: "Oil of Vitriol",
    aka: ["Spirit of Vitriol", "Sulfuric Acid", "Vitriolum"],
    glyph: "🜖",
    era: "c. 1300",
    origin: "Latin Europe, after Arabic precedents",
    discoverer: "Attributed to the Pseudo-Geber",
    hazardLevel: 5,
    tagline:
      "The oily, heavy, smoking acid the alchemists drew from green vitriol — the substance that would, four centuries later, become the largest industrial chemical in the world.",
    history:
      "The Latin alchemical corpus called the Pseudo-Geber, written under Geber's name in the late thirteenth century, gives the first clear description of preparing oil of vitriol by destructive distillation of green vitriol — iron(II) sulfate heptahydrate. The product was prized as a powerful solvent; alchemical literature has it dissolving 'all the imperfect metals.' The acronym VITRIOL — Visita Interiora Terrae Rectificando Invenies Occultum Lapidem ('Visit the Interior of the Earth and by Rectifying you will find the Hidden Stone') — became one of the most-quoted mottos of the art. By the eighteenth century the substance had moved from the alchemist's bench to the bleach-house and the saltpetre works, and by the twentieth its production was used as a proxy for a nation's industrial output.",
    reagents: [
      { archaic: "Green Vitriol", modern: "Iron(II) sulfate heptahydrate (FeSO₄·7H₂O)", materialSlug: "green-vitriol" },
      { archaic: "—", modern: "Vessel: glazed earthenware retort" },
    ],
    procedure: [
      "Calcine green vitriol in an open dish until it loses its water and turns from green to white, then yellow.",
      "Pack the calcined mass into a stout retort and lute the neck to a long-necked receiver.",
      "Apply a fierce fire by degrees over many hours; brown fumes appear, then heavy white vapours.",
      "Oily droplets condense in the receiver — the spirit of vitriol, slowly thickening into the oil.",
    ],
    chemistry: {
      equation:
        "2 FeSO₄ → Fe₂O₃ + SO₂↑ + SO₃↑   ·   SO₃ + H₂O → H₂SO₄",
      explanation:
        "Heating iron sulfate to red heat drives off both sulfur dioxide and sulfur trioxide along with the water of hydration. Sulfur trioxide dissolves in the water that condenses with it to give sulfuric acid. The modern Contact process replaces this brutal route with vanadium-catalysed oxidation of SO₂ to SO₃ over hot beds; chemistry has gentled, but the molecule has not changed. H₂SO₄ is a strong acid, a powerful dehydrator (it can pull water out of sugar to leave a column of carbon), and an oxidiser when concentrated.",
    },
    hazards: [
      "Severely corrosive; contact with skin produces deep burns and irreversible scarring.",
      "Heat of dilution is enormous — always add acid to water, never water to acid.",
      "Reaction with organic matter is exothermic and often violent.",
    ],
    lore:
      "The motto VITRIOL hangs in masonic lodges as a meditation: the stone you seek lies in your own depths. Whatever you make of the symbolism, the chemistry is sound — the alchemists really did find, by visiting the interior of a green crystal, a substance that would underwrite the modern world.",
  },
  {
    slug: "liquor-of-hartshorn",
    name: "Liquor of Hartshorn",
    aka: ["Spirit of Hartshorn", "Sal Volatile", "Aqueous Ammonia"],
    glyph: "🜹",
    era: "c. 1400",
    origin: "Medieval Europe",
    discoverer: "Anonymous; widely refined by the 17th-century iatrochemists",
    hazardLevel: 3,
    tagline:
      "The pungent spirit distilled from the shavings of deer horns, the alchemists' first source of ammonia.",
    history:
      "Long before ammonia was understood as a compound of nitrogen and hydrogen, it was prepared by distilling animal matter — horn, hair, leather, bone — in a closed vessel. Stag horn was preferred because it gave a clean, strong spirit, and the salt sublimed in the head (ammonium carbonate) became the smelling salts of every well-equipped lady's reticule for the next four hundred years. Joseph Priestley, in 1774, was the first to collect ammonia as a free gas; until then it lived in pharmacies as the liquor or the volatile salt of hartshorn.",
    reagents: [
      { archaic: "Hartshorn shavings", modern: "Deer antler, ground (a protein-rich nitrogenous matter)" },
      { archaic: "—", modern: "Vessel: iron retort with a long, well-cooled receiver" },
    ],
    procedure: [
      "Pack the iron retort with hartshorn shavings; lute the joint with a clay-and-flour paste.",
      "Apply a strong fire; a thick brown oil distils first (Dippel's oil), then a clear, pungent water.",
      "A white sublimate (ammonium carbonate) crusts the cold neck of the receiver.",
      "Pour off the volatile salt; dissolve in water to obtain the liquor of hartshorn.",
    ],
    chemistry: {
      equation:
        "(protein)–CO–NH–(protein) + heat → NH₃↑ + (NH₄)₂CO₃ + tarry residues",
      explanation:
        "Destructive distillation of proteins cleaves amide bonds and decarboxylates the fragments, releasing ammonia and carbon dioxide. The two combine on the cold surface of the receiver to give ammonium carbonate, (NH₄)₂CO₃, which slowly loses CO₂ in air to leave behind a fine ammonium bicarbonate dust. The modern Haber-Bosch process makes ammonia in millions of tonnes per year from nitrogen and hydrogen directly; without it, the world could not feed itself. The alchemists' brown sublimate is the ancestor of every nitrogen fertiliser on earth.",
    },
    hazards: [
      "Ammonia vapour is severely irritating to the eyes, lungs, and skin.",
      "Concentrated solutions burn the cornea and bleach paint.",
      "Mixing with bleach or aqua regia yields toxic chloramines or worse; never combine.",
    ],
    lore:
      "The Victorian smelling salt was a slug of solid ammonium carbonate carried in a small bottle; a sniff revived the swooning by a sharp reflex inhalation. The same compound, in the kitchen, is the leavening agent in nineteenth-century Scandinavian biscuits — when you bite a hartshorn cookie, you are tasting an alchemical preparation that has been continuously made since the 1400s.",
  },
  {
    slug: "sweet-oil-of-vitriol",
    name: "Sweet Oil of Vitriol",
    aka: ["Diethyl Ether", "Spiritus Sulphurico-Aethereus", "Ether"],
    glyph: "🜸",
    era: "1540",
    origin: "Wittenberg, Saxony",
    discoverer: "Valerius Cordus",
    hazardLevel: 4,
    tagline:
      "An oddly sweet, ice-cold liquid struck from spirit of wine and oil of vitriol — three centuries later, the substance that abolished pain.",
    history:
      "Valerius Cordus, a young professor at Wittenberg, mixed oil of vitriol with spirit of wine and observed a new substance distilling over — light, volatile, sweet to the smell, freezing cold in the hand. He called it the sweet oil of vitriol, and his contemporary Paracelsus noted that fowls who drank it 'sleep for a good while' and woke unharmed. The observation lay fallow for three hundred years. In 1846 the Boston dentist William Morton, prompted by the chemist Charles Jackson, administered ether to a patient at Massachusetts General Hospital while a tumour was excised from his jaw. The patient felt nothing. Surgery as a tolerable procedure begins from that morning; the announcement was telegraphed across the world within weeks.",
    reagents: [
      { archaic: "Spirit of Wine", modern: "Ethanol (C₂H₅OH)", note: "Strong rectified spirit, four times distilled", materialSlug: "spirit-of-wine" },
      { archaic: "Oil of Vitriol", modern: "Sulfuric acid (H₂SO₄)", note: "Catalyst — not consumed", materialSlug: "sulfuric-acid" },
    ],
    procedure: [
      "Charge a glass retort with strong oil of vitriol; warm to about 140 °C.",
      "Drip rectified spirit of wine slowly onto the hot acid; vapours rise at once.",
      "The vapours pass through a long, well-cooled receiver and condense to a clear, mobile liquid that smells faintly fruity.",
      "Wash the receiver's contents with water and dry over potash; the upper layer is the ether.",
    ],
    chemistry: {
      equation:
        "2 C₂H₅OH + H₂SO₄ → (C₂H₅)₂O + H₂O + H₂SO₄",
      explanation:
        "Sulfuric acid protonates ethanol's hydroxyl, turning it into a leaving group; a second molecule of ethanol displaces water to form the ether. The acid is regenerated and so the process is catalytic — small quantities of acid convert large quantities of alcohol. The product, diethyl ether, boils at 34.6 °C, evaporates so fast that the bottle frosts in summer, and depresses the central nervous system at concentrations of 3-5 % in inhaled air. Crawford Long had used it as an anaesthetic in Georgia in 1842 but did not publish; Morton's 1846 demonstration is the one history remembers.",
    },
    hazards: [
      "Vapour is heavier than air; pools in low places and ignites from a static spark.",
      "Forms explosive peroxides on long storage in air — old bottles have killed chemists.",
      "Narcotic at low concentrations; deeply anaesthetic at high; the margin between unconscious and dead is narrow.",
    ],
    lore:
      "When the news of Morton's demonstration reached London, the surgeon Robert Liston — famous for amputating a leg in two and a half minutes, and once, in haste, three of his assistant's fingers — used ether on a patient and afterwards said: 'This Yankee dodge, gentlemen, beats mesmerism hollow.' The age of conscious surgery, with its restraints and its howling, ended that week.",
  },
  {
    slug: "vermillion",
    name: "Vermillion",
    aka: ["Cinnabar", "Chinese Red", "Minium of the Greeks", "Zhū shā (硃砂)"],
    glyph: "🜓",
    era: "c. 800 CE (Arabic synthesis); used natively far earlier",
    origin: "China and the Arabic world; later Italy",
    discoverer: "Synthesis attributed to Jābir ibn Hayyān",
    hazardLevel: 4,
    tagline:
      "A brilliant scarlet pigment, drawn out of the marriage of quicksilver and brimstone — the colour of cardinals, of seal-paste, and of the manuscripts of the Middle Ages.",
    history:
      "Ground from natural cinnabar ore, vermillion was used in Neolithic burials, in Roman frescoes (the walls of Pompeii are red with it), and in the cosmetics of the Tang court. The synthesis — combining the two principles, mercury and sulfur, by sublimation — was first systematically described by Jābir, then refined in twelfth-century Italy. Cennino Cennini's handbook of 1390 gives the recipe and warns that the powder is brilliant on first grinding but darkens in time. The Chinese seal-paste, made by binding ground vermillion in castor oil and silk fibre, is still made by the same process today.",
    reagents: [
      { archaic: "Quicksilver", modern: "Mercury (Hg)", materialSlug: "mercury" },
      { archaic: "Brimstone", modern: "Sulfur (S₈)", note: "Mercury and sulfur in roughly equal weights", materialSlug: "sulfur" },
    ],
    procedure: [
      "Triturate mercury and sulfur together in a stone mortar until the silver beads vanish into a uniform black mass — Aethiops mineral.",
      "Pack the mass into a stout earthenware aludel and apply a gentle fire.",
      "The black sulfide sublimes and recondenses on the cool upper chamber as a deep crimson crust — the dry-process vermillion.",
      "Grind the crust under water for hours, even days; the longer the grinding, the brighter the red.",
    ],
    chemistry: {
      equation:
        "Hg + S → HgS (black, metacinnabar) → Δ → α-HgS (red, cinnabar)",
      explanation:
        "Mercury and sulfur combine spontaneously when triturated, but the first-formed product is the black cubic polymorph, metacinnabar. Heating above 350 °C converts it to the red hexagonal polymorph — the same crystal structure as natural cinnabar. The colour comes from a 2.0 eV band gap, which absorbs the violet and blue and reflects the entire red end of the spectrum. The historical darkening of vermillion in oil paintings is the slow reverse transition, accelerated by chloride contamination.",
    },
    hazards: [
      "Mercury vapour is liberated at every stage; ventilation is essential.",
      "Mercury sulfide itself is insoluble and chemically inert; the powdered pigment is among the safer mercury compounds, but should not be ingested.",
      "Roman miners at Almadén worked vermillion grinding mills and died young of mercurial tremors.",
    ],
    lore:
      "Cennini called the synthetic kind 'made by alchemy in the retort' and warned painters not to trust the source: 'the longer it is kept on the stone with water, the more perfect it becomes. But beware of those who sell it pure, for I have known some to dilute it with brick-dust.'",
  },
  {
    slug: "bologna-stone",
    name: "The Bologna Stone",
    aka: ["Lapis Solaris", "Sun-Sponge", "Litheosphorus"],
    glyph: "🜠",
    era: "1603",
    origin: "Monte Paderno, near Bologna",
    discoverer: "Vincenzo Casciarolo",
    hazardLevel: 3,
    tagline:
      "A heavy stone, calcined with charcoal, that drank in sunlight and gave it back in the dark — the first synthetic phosphor.",
    history:
      "Casciarolo, a Bolognese cobbler and amateur alchemist, found heavy white pebbles on the slopes of Monte Paderno and, hoping they might be gold-bearing, calcined them with linseed-oil-soaked charcoal in a strong fire. The product, plunged into the dark, glowed an eerie pale orange for hours after exposure to daylight. The news travelled fast: Galileo wrote of it, Athanasius Kircher devoted pages to it, and the stone became one of the great wonders of the seventeenth century, displayed in cabinets and to crowned heads. It was the first prepared substance to phosphoresce by storing light, and the ancestor of every glow-in-the-dark toy and emergency exit sign.",
    reagents: [
      { archaic: "Heavy Spar", modern: "Baryte / barium sulfate (BaSO₄)", note: "Found as white nodules near Bologna", materialSlug: "heavy-spar" },
      { archaic: "Black Coals", modern: "Charcoal (C)", note: "Reductant", materialSlug: "charcoal" },
      { archaic: "—", modern: "An organic flux — linseed oil, egg white, or honey", note: "Casciarolo used linseed; later recipes used honey" },
    ],
    procedure: [
      "Grind the heavy stones to powder and mix with an equal weight of charcoal and a binder of linseed oil.",
      "Form the paste into small cakes and dry.",
      "Calcine in a strong reducing fire — surrounded by coals, sealed from the air — for several hours.",
      "Cool slowly. Hold the resulting cakes to sunlight, then carry them into a dark room: they shine.",
    ],
    chemistry: {
      equation:
        "BaSO₄ + 4 C → BaS + 4 CO↑   (BaS + traces of Cu, Mn, Bi → phosphor)",
      explanation:
        "Charcoal reduces barium sulfate to barium sulfide at red heat. Pure BaS is not strongly phosphorescent on its own — the slow afterglow comes from trace impurities (copper, bismuth, manganese) that act as luminescence centres, storing electrons in lattice traps from which they fall back to the ground state over minutes to hours. The Bologna stone is dim by modern standards (strontium aluminate doped with europium and dysprosium, the modern glow-pigment, is a hundred times brighter), but every persistent-phosphor system is a descendant of Casciarolo's accidental find.",
    },
    hazards: [
      "Barium sulfide reacts with moist air to release hydrogen sulfide — rotten-egg gas, toxic at low concentrations.",
      "Soluble barium salts (chloride, hydroxide) are acutely poisonous; BaS hydrolyses slowly to Ba(OH)₂.",
      "The calcination releases carbon monoxide and must be done with good ventilation.",
    ],
    lore:
      "Galileo, examining a stone sent to him by a Bolognese friend, wrote: 'It receives the light, swallows it, and renders it again after some hours, as though it were a sponge for the Sun.' The metaphor — lapis solaris, the solar sponge — stuck. Every glowing watch dial and exit sign on earth is a great-grandchild of the Bologna stone.",
  },
  {
    slug: "sal-ammoniac",
    name: "Sal Ammoniac",
    aka: ["Ammoniacum", "Volatile Salt of the Lamps", "Nūshādir"],
    glyph: "🜹",
    era: "Antiquity → 9th century (refined)",
    origin: "Siwa Oasis, Egypt; later refined in Persia",
    discoverer: "Egyptian priests of Ammon; refined by the Arab alchemists",
    hazardLevel: 2,
    tagline:
      "A pungent white salt sublimed from the soot of camel-dung fires beside the temple of Ammon — the universal flux of metalwork.",
    history:
      "Pliny describes a salt gathered as a sublimate on the rafters of the temple of Ammon in the Egyptian desert, where pilgrims burnt the dung of their camels for fuel. The salt — ammonium chloride — took its name from the god, as did the element ammonia after it. The Arab alchemists distilled and recrystallised the salt under the name nūshādir, found that it could clean the surfaces of metals so that solder would flow, and made it indispensable to every working smith for a millennium. It is still the flux in the cup of every tinsmith's iron and the active ingredient of zinc-carbon dry cells.",
    reagents: [
      { archaic: "Camel-dung soot", modern: "Animal-waste smoke condensate", note: "Source of both ammonia and chloride from urea and salt content" },
      { archaic: "—", modern: "Alternative: Spirit of Hartshorn + Spirit of Salt", note: "Cleaner synthesis from already-distilled spirits", materialSlug: "aqueous-ammonia" },
    ],
    procedure: [
      "Collect the soot from camel-dung or seaweed fires; the Egyptian temple chimneys yielded the original supply.",
      "Mix the soot with water and let stand; the salt slowly dissolves out.",
      "Filter, then evaporate to dryness in shallow iron pans.",
      "Re-sublime the crude salt in a covered crucible for a pure white crystalline product.",
    ],
    chemistry: {
      equation:
        "NH₃ (from urea pyrolysis) + HCl (from animal salts) → NH₄Cl",
      explanation:
        "Urea in camel dung pyrolyses to ammonia at the temperatures of an open fire; sodium chloride in the dung gives off small quantities of hydrogen chloride when reacted with the organic acids and sulfates present. The two gases meet in the cooler upper chimney and combine on the surfaces as ammonium chloride — a fine white sublimate. The salt has the curious property of decomposing back into the two gases on heating and recombining on cooling, which is why it sublimes without melting and why it acts as a flux: the heat of the soldering iron releases HCl that cleans the metal's oxide just as the solder touches.",
    },
    hazards: [
      "Inhalation of the dust irritates the lungs; concentrated ammonia vapour from heating it is sharper still.",
      "Mixed with strong alkali, ammonia gas is released — dangerous in confined spaces.",
      "The salt itself, in small doses, was once an expectorant in medicine.",
    ],
    lore:
      "When the temple of Ammon fell into ruin and the camel caravans changed their routes, the Persian alchemists worked out the synthetic route, and Europe imported the salt from them for the next eight centuries. The English word ammonia was coined by the chemist Bergman in 1782 as a Latinisation of the salt's Arabic name — meaning, in effect, 'the gas of the salt of the temple of Ammon.' Every nitrogen fertiliser today carries the god's name in its etymology.",
  },
  {
    slug: "mosaic-gold",
    name: "Mosaic Gold",
    aka: ["Aurum Musivum", "Painters' Gold", "Tin Bisulfide"],
    glyph: "🜞",
    era: "13th century",
    origin: "Latin Europe",
    discoverer: "Anonymous; in the corpus of the Pseudo-Geber",
    hazardLevel: 3,
    tagline:
      "Flakes of golden lustre struck from tin, mercury, sulfur, and sal ammoniac — a counterfeit gold the alchemists themselves preferred for cheap gilding.",
    history:
      "When the Pseudo-Geber's Summa Perfectionis circulated in late-medieval Europe, it gave a recipe for a substance described as gold made by art — flakes of a deep golden colour, lustrous as the metal itself, but obtained in plenty from base reagents. The product was used to gild book bindings, frame mouldings, and the carved wooden statues of churches that could not afford leaf. Boyle reported on it in 1661, and the chemists who eventually identified it as tin disulfide named it stannic sulfide; the painters never stopped calling it mosaic gold.",
    reagents: [
      { archaic: "Tin", modern: "Tin (Sn)", note: "Cornish or Bohemian tin, granulated", materialSlug: "tin" },
      { archaic: "Quicksilver", modern: "Mercury (Hg)", note: "Amalgamates the tin", materialSlug: "mercury" },
      { archaic: "Brimstone", modern: "Sulfur (S₈)", materialSlug: "sulfur" },
      { archaic: "Sal Ammoniac", modern: "Ammonium chloride (NH₄Cl)", note: "Sublimation aid — sweeps the volatile flakes upward", materialSlug: "sal-ammoniac" },
    ],
    procedure: [
      "Amalgamate the granulated tin with mercury, warming the mixture in an iron ladle.",
      "Grind the amalgam to a fine grey powder and mix thoroughly with sulfur and sal ammoniac in equal parts.",
      "Pack the mass into a tall glass flask with a wide bottom and a narrow neck.",
      "Bury the flask in a sand bath and heat slowly over a day; mercury and excess sulfur sublime away first, then the mosaic gold itself condenses higher in the neck as glittering bronze-gold flakes.",
      "Break the flask, recover the flakes — they are too thin and brittle to grind, and are stored in twists of paper.",
    ],
    chemistry: {
      equation:
        "Sn + 2 S + heat (with Hg and NH₄Cl as transporters) → SnS₂↑",
      explanation:
        "Tin disulfide forms in hexagonal flakes whose layered structure (a tin sheet sandwiched between two sulfur sheets) reflects light as a single crystal face — hence the metallic golden lustre. Mercury and sal ammoniac do not enter the product; they act as transport agents, carrying tin and sulfur up the flask as volatile intermediates and depositing SnS₂ where the temperature is right. It is one of the earliest examples of vapour-phase crystal growth, three centuries before that idea was formalised.",
    },
    hazards: [
      "Mercury vapour is liberated throughout the sublimation; ventilation is essential.",
      "Sal ammoniac decomposes to ammonia and HCl on heating — both irritant.",
      "The product itself is chemically inert, but the dust resembles real gold leaf and has been used to defraud the unwary since the thirteenth century.",
    ],
    lore:
      "Cellini, in his Treatise on Goldsmithing, sneered at it: 'the mosaic gold is a thing for the makers of book-covers and rustic altarpieces, but no goldsmith would put his name to a piece touched with it.' The painters did not mind — they were happy to have a pigment they could afford by the pound.",
  },
  {
    slug: "white-lead",
    name: "White Lead",
    aka: ["Cerussa", "Ceruse", "Flake White", "Lead Carbonate"],
    glyph: "♄",
    era: "Antiquity → industrial scale 17th century",
    origin: "The Aegean (Theophrastus); Dutch Republic (the Stack Process)",
    discoverer: "Theophrastus describes it; the Dutch perfected it",
    hazardLevel: 5,
    tagline:
      "The pure white the painters could not do without — manufactured for two thousand years by rotting lead in vinegar fumes.",
    history:
      "Theophrastus, in the third century BCE, describes coils of lead suspended over vinegar in sealed pots, gently warmed by dung, yielding a brilliant white crust after some weeks. The recipe scarcely changed for two thousand years; the Dutch Stack Process of the seventeenth century industrialised it, with whole sheds full of clay pots, each holding a pellet of vinegar and a coil of lead, buried in tan-bark or horse manure to keep the temperature steady. White lead was the only opaque white available to Western painters from Pompeii to the Impressionists. It was also the cosmetic Venetian women used to bleach their complexions, the powder that made the courtiers of Versailles pale, and the slow poison that killed a great many of them.",
    reagents: [
      { archaic: "Lead", modern: "Lead (Pb)", note: "Pure metallic lead, hammered into thin coils", materialSlug: "lead" },
      { archaic: "Vinegar", modern: "Acetic acid (CH₃COOH)", note: "Strong wine vinegar — about 5 %", materialSlug: "vinegar" },
      { archaic: "Tan-bark or dung", modern: "Decomposing organic matter", note: "Heat and CO₂ source — both essential" },
    ],
    procedure: [
      "Hammer pure lead into long thin coils.",
      "Set each coil in a small earthen pot with a pellet of strong vinegar beneath, not touching.",
      "Pack the pots in a shed in layers, separated by tan-bark or fresh horse manure.",
      "Seal the shed and leave for three months; the warmth of fermentation keeps the pots near 50 °C, and the dung gives off carbon dioxide.",
      "Open the shed; the coils are crusted with a brittle, lustrous white scale. Knock off the white lead, melt down the unreacted metal, and begin again.",
    ],
    chemistry: {
      equation:
        "Pb + CH₃COOH + ½ O₂ + CO₂ → 2 PbCO₃·Pb(OH)₂  (basic lead carbonate)",
      explanation:
        "Acetic acid vapour attacks the lead surface to form lead acetate, which is then oxidised by air and carbonated by the CO₂ from the dung to give basic lead carbonate. The product is opaque, finely divided, and refracts light brilliantly — qualities every painter wanted. Modern titanium white has now displaced it, but the lustre and the way oil paints made with white lead handle have never been quite reproduced; old masters' restorers still mourn it.",
    },
    hazards: [
      "Severely toxic. Chronic exposure causes anaemia, gut pain, neuropathy, and the wrist-drop palsy that was the painter's and the typesetter's occupational disease.",
      "Cosmetic use bleached the skin and slowly killed the wearer; Elizabeth I and many of her court are thought to have died of it.",
      "Banned for paint use in most countries by the late twentieth century; still strictly regulated.",
    ],
    lore:
      "Vermeer's Girl with a Pearl Earring is built on a ground of white lead. So is the highlight in her pearl. The pigment that gave Western painting its luminous quality was also the slow poison of the painters; Caravaggio's death is suspected to have been from it, and Goya's late dark paintings have been read as the visions of a man with lead encephalopathy.",
  },
  {
    slug: "berthollet-bleach",
    name: "Berthollet's Bleaching Liquor",
    aka: ["Eau de Javel", "Javelle Water", "Chloride of Potash"],
    glyph: "🜂",
    era: "1789",
    origin: "Javel, near Paris",
    discoverer: "Claude Louis Berthollet",
    hazardLevel: 4,
    tagline:
      "A pale yellow solution that turned linen white in minutes, ending the four-thousand-year monopoly of the bleaching field.",
    history:
      "For all of recorded history, white linen had been made by laying wet cloth on grass and waiting weeks for the sun and the dew to bleach it. Bleaching grounds were vast — outside every Dutch and Irish weaving town there were acres of cloth spread out under the sky — and the process was the bottleneck of textile manufacturing. In 1774 Scheele isolated chlorine gas; in 1789 Berthollet, at the chemical works in Javel near Paris, passed the gas through a solution of potash and obtained a solution that bleached cotton and linen in minutes rather than weeks. Within ten years every English mill had built a bleach-house, and the textile factory of the industrial revolution became possible.",
    reagents: [
      { archaic: "Spirit of Salt", modern: "Hydrochloric acid (HCl)", note: "Source of chlorine when oxidised", materialSlug: "hcl" },
      { archaic: "Black Manganese", modern: "Manganese dioxide / pyrolusite (MnO₂)", note: "Oxidiser — produces chlorine from HCl", materialSlug: "pyrolusite" },
      { archaic: "Salt of Tartar", modern: "Potassium carbonate (potash, K₂CO₃)", note: "Absorbs the chlorine", materialSlug: "potash" },
    ],
    procedure: [
      "Warm pyrolusite with hydrochloric acid in a glass retort; greenish-yellow chlorine gas evolves.",
      "Lead the gas through a long porcelain tube into a vessel of cold potash solution.",
      "The solution turns pale yellow as the chlorine is absorbed; continue until no more gas is taken up.",
      "Dilute and bottle. Linen dipped in the solution, then rinsed, comes out brilliant white.",
    ],
    chemistry: {
      equation:
        "MnO₂ + 4 HCl → MnCl₂ + Cl₂↑ + 2 H₂O   ·   Cl₂ + 2 KOH → KCl + KOCl + H₂O",
      explanation:
        "Pyrolusite oxidises hydrochloric acid to free chlorine — this was Scheele's discovery. The chlorine, passed into alkali, disproportionates into chloride (Cl⁻) and hypochlorite (OCl⁻). The hypochlorite is the active oxidiser that breaks the conjugated double-bond systems of natural pigments, turning yellow flax fibre white. Modern household bleach is the sodium-based version of the same chemistry: NaOCl in dilute solution.",
    },
    hazards: [
      "Chlorine gas is acutely toxic; the first weapon of chemical warfare in 1915.",
      "Bleach solutions release chlorine when mixed with acids; never combine with vinegar, toilet acid, or aqua regia.",
      "Mixing with ammonia produces chloramines — a domestic fatality every few years.",
    ],
    lore:
      "Tennant in Glasgow, hearing of Berthollet's process, substituted slaked lime for the potash in 1799 — chloride of lime — and produced a dry powder that could be shipped in barrels to any mill in the country. Within a generation the bleaching fields outside every linen town had been ploughed under and forgotten. The industrial revolution in textiles has many fathers; chlorine bleach is the most invisible of them.",
  },
  {
    slug: "caput-mortuum",
    name: "Caput Mortuum",
    aka: ["Colcothar", "Dead Head", "Cardinal Purple", "Crocus of Mars"],
    glyph: "🜍",
    era: "13th century onward",
    origin: "Latin alchemy; vitriol-distilling shops of Saxony and Bohemia",
    discoverer: "Pseudo-Geber and the vitriol distillers",
    hazardLevel: 1,
    tagline:
      "The dark red oxide left at the bottom of the vitriol retort — what the alchemists called the dead head, and what painters bought as the warmest red of their palette.",
    history:
      "When the vitriol distillers drove off the spirit and the oil, what remained in the bottom of the retort was a heavy ochre-to-purple powder that the alchemists called caput mortuum — the dead head, the spent matter from which all life had departed. The painters, who had less occult interests, found in this residue a pigment of unrivalled permanence and a colour that ran from rich rust to deep aubergine depending on the heat at which it had been driven. Rembrandt's late portraits owe much of their warmth to it; the robes of cardinals were dyed with the same iron oxide in cloth-grade form. The phrase entered the alchemical lexicon as a metaphor for the residue of any operation — what remains when the volatile principle has fled.",
    reagents: [
      { archaic: "Green Vitriol", modern: "Iron(II) sulfate heptahydrate (FeSO₄·7H₂O)", materialSlug: "green-vitriol" },
    ],
    procedure: [
      "Charge a retort with green vitriol; distil the oil of vitriol over many hours as in the master operation.",
      "When no more vapour rises and the residue is dry, take down the fire.",
      "Open the retort: the bottom is lined with a hard cake, brownish-purple where the heat was strongest, brick-red where it was less.",
      "Crush the cake to powder and grind under water; the colour brightens with grinding.",
      "For the deepest purple variety — the colour the cardinals favoured — calcine the powder a second time in an open vessel.",
    ],
    chemistry: {
      equation:
        "2 FeSO₄ → Fe₂O₃ + SO₂↑ + SO₃↑",
      explanation:
        "The same reaction that gives sulfuric acid leaves iron(III) oxide — hematite — as the non-volatile residue. The colour ranges from yellow-red (small particles) through bright vermillion to deep purple (large, well-crystallised particles), depending on the calcination temperature. The same compound under the name jeweller's rouge polishes silver and lens-grinders' optics; under the name red ochre it has coloured cave paintings since the Palaeolithic.",
    },
    hazards: [
      "The pigment itself is among the most stable and least toxic substances known.",
      "The preparation involves the vitriol distillation, which is dangerous; the residue is safe.",
      "Inhalation of the fine powder, like any pigment dust, is best avoided.",
    ],
    lore:
      "Among the alchemists the dead head was a meditation: every operation leaves a residue, every refinement a portion that cannot be made spiritual and must be left behind. The colour was so striking, and the metaphor so universal, that Jung borrowed it for his psychology: the caput mortuum is what remains in the soul after the work of integration is done — heavy, dark, and curiously beautiful.",
  },
];

export function getExperiment(slug: string): Experiment | undefined {
  return experiments.find((e) => e.slug === slug);
}

export function getAllSlugs(): string[] {
  return experiments.map((e) => e.slug);
}

/** All experiments that reference the given material slug as a reagent. */
export function experimentsUsing(materialSlug: string): Experiment[] {
  return experiments.filter((e) =>
    e.reagents.some((r) => r.materialSlug === materialSlug),
  );
}
