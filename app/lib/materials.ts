export type Material = {
  slug: string;
  name: string;
  aka: string[];
  formula?: string;
  glyph: string;
  type: "base" | "derived";
  appearance: string;
  /** Short description of what the substance is and why it mattered. */
  about: string;
  /** Where to find it in nature (only for base materials). */
  sources?: { region: string; note: string }[];
  /** How it is prepared from other materials (only for derived). */
  madeFrom?: { material: string; note?: string }[]; // slug references
  preparation?: string[];
  /** If the material is itself an entry in the experiment codex. */
  experimentSlug?: string;
  hazards?: string;
};

export const materials: Material[] = [
  // ─── Base materials ──────────────────────────────────────────────
  {
    slug: "sulfur",
    name: "Sulfur",
    aka: ["Brimstone", "Sulphur"],
    formula: "S₈",
    glyph: "🜍",
    type: "base",
    appearance: "Pale lemon-yellow crystalline powder; faint odour when pure, foul when burnt.",
    about:
      "One of the few elements known to antiquity, sulfur was for the alchemists a fundamental principle — the soul-of-metals, the carrier of combustibility. It is named in the Book of Genesis (the brimstone of Sodom) and in the medical writings of Pliny. Today it underwrites the modern sulfuric-acid economy.",
    sources: [
      {
        region: "Sicily (Mt. Etna, Agrigento)",
        note: "The classical source for the Mediterranean world; surface deposits around fumaroles were quarried by hand for more than two thousand years.",
      },
      {
        region: "Iceland",
        note: "Hot-spring sulfur was carried by Hanseatic ships to gunpowder mills across northern Europe.",
      },
      {
        region: "Hokkaidō and Honshu, Japan",
        note: "Volcanic sulfur deposits worked since the Heian period; until 1900, Japan was a major exporter.",
      },
      {
        region: "Gulf Coast of Texas & Louisiana (modern)",
        note: "Salt-dome deposits extracted by the Frasch process — superheated water melts sulfur underground and forces it to the surface.",
      },
    ],
    hazards:
      "Burns with a blue flame to produce sulfur dioxide, a choking acrid gas; ventilation is essential.",
  },
  {
    slug: "mercury",
    name: "Mercury",
    aka: ["Quicksilver", "Argentum vivum", "Hydrargyrum"],
    formula: "Hg",
    glyph: "☿",
    type: "base",
    appearance: "A silvery liquid metal, dense and trembling; breaks into beads at the slightest touch.",
    about:
      "Found in nature almost entirely as cinnabar, mercury(II) sulfide, mercury is the only metal liquid at ordinary temperatures and was the central substance of alchemical theory: the messenger, the principle of fluidity, the matter from which all metals were thought to derive.",
    sources: [
      {
        region: "Almadén, Spain",
        note: "The greatest mercury mine in history. Worked by the Romans, then by the Spanish crown from the 16th century to fuel the silver-amalgamation refineries of New Spain. Closed 2003.",
      },
      {
        region: "Idrija, Slovenia",
        note: "Discovered 1490; the second-largest mercury producer for four centuries.",
      },
      {
        region: "Huancavelica, Peru",
        note: "Discovered 1564 — the New World mine that made colonial silver possible. Tens of thousands of mitayo labourers died there.",
      },
      {
        region: "Guizhou, China (modern)",
        note: "The remaining major producer; cinnabar is roasted to drive off mercury vapour, which condenses on cooled surfaces.",
      },
    ],
    hazards:
      "Mercury vapour is colourless and odourless. It crosses the blood-brain barrier and accumulates for life; chronic poisoning was the classic occupational disease of hatters, gilders, and the alchemists themselves.",
  },
  {
    slug: "gold",
    name: "Gold",
    aka: ["Sol", "Aurum"],
    formula: "Au",
    glyph: "🜚",
    type: "base",
    appearance: "A heavy, soft, lustrous yellow metal; the only metal of its colour.",
    about:
      "The perfect metal in alchemical cosmology — incorruptible, ruled by the Sun, the goal of the Great Work. Found native in alluvial sands and quartz veins, it requires no smelting, only washing and melting.",
    sources: [
      {
        region: "Egyptian Eastern Desert (Wadi Hammamat, Bir Umm Fawakhir)",
        note: "Mined under Pharaonic, Ptolemaic, and Roman administration for three thousand years. The gold of Tutankhamun came from here.",
      },
      {
        region: "Witwatersrand Basin, South Africa",
        note: "Discovered 1886 — the richest goldfield ever found. About 40% of all gold ever mined has come from this single Archaean conglomerate.",
      },
      {
        region: "Sierra Nevada, California",
        note: "Placer gold in alluvial gravels, washed out of quartz veins by erosion. The 1849 rush produced 750 tonnes in twenty years.",
      },
      {
        region: "Sea water",
        note: "About 13 mg per cubic kilometre. Fritz Haber tried to extract reparations gold this way after WWI — the chemistry works, the economics never have.",
      },
    ],
    hazards:
      "Inert to almost everything. The classical preparations that touch gold (aqua regia, fulminating gold, mercury amalgam) are dangerous for the reagents, not the metal.",
  },
  {
    slug: "saltpetre",
    name: "Saltpetre",
    aka: ["Sal Petrae", "Nitre", "Saltpeter"],
    formula: "KNO₃",
    glyph: "🜕",
    type: "base",
    appearance: "Colourless prismatic crystals or a powdery white efflorescence on old walls and earth.",
    about:
      "The strategic substance of the gunpowder age. Until the 19th century it was the oxidiser without which there was no warfare and no fireworks — and it could not be readily synthesised, only harvested. Whole industries were built around scraping it from cellars, stables, and dovecotes.",
    sources: [
      {
        region: "Bihar, India",
        note: "Natural efflorescence on the soil of the Gangetic plain — the world's principal source for centuries. The East India Company's saltpetre monopoly was a foundation of British power.",
      },
      {
        region: "Atacama Desert, Chile (modern, as sodium nitrate)",
        note: "Vast surface deposits of caliche; mined industrially from c. 1830 until the Haber-Bosch process made atmospheric nitrogen cheaper.",
      },
      {
        region: "Niter beds (Europe, China)",
        note: "Cultivated heaps of earth, ash, and manure, watered with urine, were turned for years until the saltpetre 'ripened.' France, Prussia, and Sweden all had royal saltpetre services collecting from cellars by warrant.",
      },
      {
        region: "Bat caves",
        note: "Guano-rich limestone caves in tropical latitudes (notably Mammoth Cave, Kentucky during the War of 1812) yielded substantial quantities under leaching.",
      },
    ],
    hazards:
      "Powerful oxidiser; mixed with anything combustible it becomes a fire hazard. Heated alone above 400 °C it gives off oxygen and nitric oxides.",
  },
  {
    slug: "sea-salt",
    name: "Sea Salt",
    aka: ["Sal commune", "Common Salt"],
    formula: "NaCl",
    glyph: "🜔",
    type: "base",
    appearance: "White cubic crystals; pale grey when impure.",
    about:
      "The most abundant inorganic chemical of commerce. Salt taxes funded empires; salt routes mapped them. For the alchemist it was both reagent and one of the tria prima — the principle of fixity and body.",
    sources: [
      {
        region: "Mediterranean salt pans (Trapani, Camargue, Margherita di Savoia)",
        note: "Sea water led through shallow ponds is evaporated by the sun. The technique is Phoenician in origin.",
      },
      {
        region: "Wieliczka, Poland",
        note: "Rock-salt mine worked continuously since the 13th century. Salt from Wieliczka funded a third of the medieval Polish crown's revenues.",
      },
      {
        region: "Cheshire, England",
        note: "Brine-spring salt, boiled in lead pans, was the basis of the British salt industry.",
      },
    ],
    hazards: "None of practical concern; the most familiar of substances.",
  },
  {
    slug: "naphtha",
    name: "Naphtha",
    aka: ["Rock Oil", "Petroleum spirit"],
    formula: "—",
    glyph: "🝡",
    type: "base",
    appearance: "A light, volatile, oily liquid; pale yellow to brown; powerful aromatic smell.",
    about:
      "Light petroleum, gathered from surface seeps long before drilling was invented. The Byzantines used it as the fuel of Greek fire; the Persian and Arab chemists distilled it for medicine and incendiaries; Marco Polo described the oil pits of Baku in 1264.",
    sources: [
      {
        region: "Absheron Peninsula, Azerbaijan (Baku)",
        note: "Surface oil pools where flame would burn for years from natural gas leaks — the source of the Zoroastrian fire temples and of Byzantine military naphtha.",
      },
      {
        region: "Kirkuk and Hīt, Mesopotamia",
        note: "Bitumen and naphtha seeps known from Sumerian times; mentioned in the Epic of Gilgamesh.",
      },
      {
        region: "Burma (Yenangyaung)",
        note: "Hand-dug wells worked by the Twinza hereditary oil families from at least the 18th century.",
      },
      {
        region: "Titusville, Pennsylvania",
        note: "The Drake well of 1859 — the first commercial drilled oil well — opened the modern petroleum age.",
      },
    ],
    hazards:
      "Highly flammable. Vapour pools in low places; an open flame at distance can ignite it.",
  },
  {
    slug: "pine-pitch",
    name: "Pine Pitch",
    aka: ["Resin", "Stockholm Tar", "Pix"],
    formula: "—",
    glyph: "🜢",
    type: "base",
    appearance: "A black or dark-brown viscous mass; soft when warm, brittle when cold; sharp resinous smell.",
    about:
      "The thickening and sealing agent of the pre-industrial world. Obtained by slow pyrolysis of pine wood and stumps in covered earth ovens, it caulked ships, dressed ropes, salved wounds, and bound incendiaries.",
    sources: [
      {
        region: "Sweden and Finland",
        note: "Stockholm Tar — produced from the resinous heartwood of old-growth pine in turf-covered tar pits — was a major Baltic export from the 16th century onward.",
      },
      {
        region: "North Carolina (the Tar Heel State)",
        note: "Longleaf pine forests produced naval stores for the British navy. The label stuck to the state.",
      },
      {
        region: "Greek and Anatolian highlands",
        note: "Aleppo pine resin (mastiha and rosin) was tapped and refined in classical antiquity and is still the source of retsina's character.",
      },
    ],
    hazards: "Flammable; burns with a smoky flame. Hot pitch causes severe burns on contact.",
  },
  {
    slug: "silica",
    name: "Silica",
    aka: ["Sand", "Quartz", "Flint"],
    formula: "SiO₂",
    glyph: "🜨",
    type: "base",
    appearance: "Colourless to white crystalline grains; rough to the touch.",
    about:
      "The most abundant compound in the earth's crust. As sand it is the flux of glass; as flint, the spark-stone; as quartz, the gem the ancients called krystallos because they thought it was ice frozen permanently. In alchemy it appears as the silent partner in many reductions — the slag that carries away the alkali and lets the wanted matter escape.",
    sources: [
      {
        region: "Anywhere",
        note: "Beaches, riverbeds, sandstone formations. The grade matters: glassmakers prized the white sands of Lorraine, Bohemia, and the Murano lagoon.",
      },
      {
        region: "Flint nodules in chalk",
        note: "Northern France and southern England — Grimes Graves in Norfolk was mined for flint from 2600 BCE.",
      },
    ],
    hazards: "Long-term inhalation of fine quartz dust causes silicosis. Otherwise inert.",
  },
  {
    slug: "green-vitriol",
    name: "Green Vitriol",
    aka: ["Copperas", "Melanterite", "Vitriol of Mars"],
    formula: "FeSO₄·7H₂O",
    glyph: "🜖",
    type: "base",
    appearance: "Pale blue-green crystalline lumps; weathered specimens become an ochre powder.",
    about:
      "An efflorescent iron sulfate that forms naturally where iron pyrite oxidises in damp air. The alchemists distilled it to obtain oil of vitriol; the dyers used it as a mordant; the cloth printers as the iron source for iron-gall ink. It is the senior member of the vitriol family — blue (copper), green (iron), white (zinc).",
    sources: [
      {
        region: "Pyrite-bearing slate mines (Goslar, Rammelsberg)",
        note: "Centuries of mining waste, oxidised by air and water, yielded vitriol as a by-product.",
      },
      {
        region: "Río Tinto, Spain",
        note: "Acid red rivers run through pyrite weathering; the name itself means 'red river,' coloured by iron sulfate.",
      },
    ],
    hazards:
      "Mildly toxic if swallowed; the dried form draws moisture aggressively and is acidic in solution.",
  },
  {
    slug: "alum",
    name: "Alum",
    aka: ["Stypteria", "Allume"],
    formula: "KAl(SO₄)₂·12H₂O",
    glyph: "🜕",
    type: "base",
    appearance: "Colourless to white octahedral crystals; cool, slightly puckering taste.",
    about:
      "The universal mordant of pre-industrial dyeing — the substance that fixed colour to fibre. Mined as alunite, refined by long boiling and crystallisation. Alum was a strategic commodity; control of the alum supply was a matter of state policy.",
    sources: [
      {
        region: "Tolfa, Papal States",
        note: "Discovered 1462; the Pope's monopoly broke the previous Turkish stranglehold on the European dye trade and funded several Renaissance projects.",
      },
      {
        region: "Smyrna and Phocaea (Anatolia)",
        note: "The principal medieval source, traded by Genoese merchants until the Ottoman conquest.",
      },
      {
        region: "Yorkshire alum shales (England)",
        note: "Worked from the 17th to 19th centuries; the cliffs near Whitby still show the quarry scars.",
      },
    ],
    hazards: "Astringent; large doses irritate the gut. Used safely as a styptic and a food additive.",
  },
  {
    slug: "limestone",
    name: "Limestone",
    aka: ["Chalk", "Calcareous Stone"],
    formula: "CaCO₃",
    glyph: "🜨",
    type: "base",
    appearance: "Grey, white, or buff stone; soft varieties (chalk) mark; harder ones (marble) take a polish.",
    about:
      "Sedimentary rock formed from the skeletons of marine micro-organisms — and the source from which all calcium chemistry begins. Burnt to quicklime; slaked to lime mortar; reacted with carbonic acid to put back to limestone again. The cycle is the foundation of every building older than concrete.",
    sources: [
      {
        region: "Anywhere a former sea-floor is exposed",
        note: "The chalk cliffs of Dover and Étretat, the marbles of Carrara and Pentelicon, the limestone of the Cotswolds — all are the same chemistry weathered to different appearances.",
      },
    ],
    hazards: "None in itself. Becomes hazardous when calcined to quicklime.",
  },
  {
    slug: "wine",
    name: "Wine",
    aka: ["Vinum", "The Juice of the Vine"],
    glyph: "🝆",
    type: "base",
    appearance: "Aqueous, red or pale; the fermented juice of the grape.",
    about:
      "Fermentation was understood long before its mechanism was: a sweet liquid, left alone with the right contamination, became something more potent than itself. From wine the alchemists drew aqua vitae; from wine vinegar they made acetate salts; from wine lees they obtained tartar.",
    sources: [
      {
        region: "Anywhere grapes can ripen",
        note: "The Mediterranean basin; later France, the Rhine, Iberia; later still South Africa, Chile, Australia.",
      },
    ],
    hazards: "Familiar.",
  },

  // ─── Derived materials ───────────────────────────────────────────
  {
    slug: "charcoal",
    name: "Charcoal",
    aka: ["Carbo", "Black Coal"],
    formula: "C (impure)",
    glyph: "🜳",
    type: "derived",
    appearance: "Black, brittle, porous lumps; light in the hand; smudges on the fingers.",
    about:
      "Wood deprived of air and heated until everything volatile has departed leaves behind a porous carbon skeleton — charcoal. It burns far hotter than wood, holds a steady fire, and is the reducing agent that smelted the world's first iron. For black powder the wood mattered: willow, alder, and grapevine were preferred; oak was too slow.",
    madeFrom: [{ material: "—", note: "Pyrolysis of wood in an air-starved kiln or earth pit." }],
    preparation: [
      "Stack seasoned wood in a conical pile and cover with turf or wet clay, leaving a single chimney at the top and air vents at the base.",
      "Light the centre and seal the vents progressively as the heat builds. The wood smoulders for several days without flame.",
      "When smoke turns from white (water) to blue (volatiles) and ceases, all vents are closed and the kiln is left to cool for a week.",
      "Open the kiln and rake out the charcoal. A skilled collier recovered about a fifth of the original wood weight.",
    ],
    hazards: "Charcoal dust ignites readily; a sealed warm bin can self-heat to combustion.",
  },
  {
    slug: "quicklime",
    name: "Quicklime",
    aka: ["Burnt Lime", "Calx viva"],
    formula: "CaO",
    glyph: "🜨",
    type: "derived",
    appearance: "White or pale-grey lumps; light, friable, caustic.",
    about:
      "What remains when limestone is heated past 825 °C and the carbon dioxide is driven off. Quicklime reacts violently with water, releasing enough heat to boil it; the resulting slaked lime is the binder of mortar, the whitewash of every village, and a candidate ingredient in Greek fire.",
    madeFrom: [{ material: "limestone", note: "Calcine in a lime-kiln at red heat for many hours." }],
    preparation: [
      "Stack limestone in alternating layers with charcoal or wood in a stone-built kiln.",
      "Fire the kiln from below; maintain red heat for two to three days.",
      "The stone loses some 44 % of its weight as carbon dioxide gas; the lumps that remain are quicklime.",
      "Store dry, in sealed barrels — quicklime that meets the air picks up moisture and carbonates back to chalk.",
    ],
    hazards:
      "Caustic. Contact with damp skin or eyes generates heat and free hydroxide ion — severe chemical burns. Reaction with water can be violent enough to crack the vessel.",
  },
  {
    slug: "hcl",
    name: "Hydrochloric Acid",
    aka: ["Spirit of Salt", "Muriatic Acid", "Acidum salis"],
    formula: "HCl",
    glyph: "🜄",
    type: "derived",
    appearance: "Colourless to pale-yellow liquid; sharp, suffocating odour; fumes in air.",
    about:
      "The 'spirit' of sea salt, drawn off by treating it with oil of vitriol. Pseudo-Geber describes it; Johann Glauber industrialised it. One of the strong acids — fully dissociated in water — and the gastric juice of every animal that digests protein.",
    madeFrom: [
      { material: "sea-salt" },
      { material: "sulfuric-acid", note: "The Leblanc reaction; HCl is the by-product of soda manufacture." },
    ],
    preparation: [
      "Mix common salt with concentrated oil of vitriol in a glass retort.",
      "Apply gentle heat. White fumes of hydrogen chloride evolve.",
      "Lead the fumes through a long water-cooled receiver. The gas dissolves to give the spirit.",
    ],
    hazards:
      "Severely corrosive to skin, lungs, and most metals. The vapour reacts with ammonia in air to form a white cloud of ammonium chloride — a useful test for either.",
  },
  {
    slug: "nitric-acid",
    name: "Nitric Acid",
    aka: ["Spirit of Nitre", "Aqua fortis", "Strong Water"],
    formula: "HNO₃",
    glyph: "🜅",
    type: "derived",
    appearance: "Colourless when fresh; turns pale yellow on standing as it decomposes to NO₂.",
    about:
      "Aqua fortis was a tool of the goldsmith — it dissolved silver but not gold, and so was used to separate the two metals in a single pour. The acid was prepared from saltpetre and oil of vitriol; from the Renaissance to the Haber-Bosch era it underwrote both metallurgy and explosives.",
    madeFrom: [
      { material: "saltpetre" },
      { material: "sulfuric-acid" },
    ],
    preparation: [
      "Charge a glass retort with saltpetre and an equal weight of oil of vitriol.",
      "Apply heat by degrees. Reddish-brown fumes evolve; nitric acid distils into the cool receiver.",
      "If kept cool and dark the acid is colourless; in sunlight it self-decomposes and yellows.",
    ],
    hazards:
      "Severely corrosive and oxidising. The yellow stain of nitric acid on skin (xanthoproteic reaction) is a sign of severe burn. Concentrated nitric acid reacts violently with most organic matter.",
  },
  {
    slug: "sulfuric-acid",
    name: "Sulfuric Acid",
    aka: ["Oil of Vitriol", "Spirit of Vitriol"],
    formula: "H₂SO₄",
    glyph: "🜖",
    type: "derived",
    appearance: "Colourless, oily, dense liquid; odourless when pure; fumes only at high concentration.",
    about:
      "The most-produced industrial chemical in the world and the foundation of inorganic chemistry. The alchemists drew it from green vitriol; modern industry makes it by catalytic oxidation of sulfur dioxide.",
    madeFrom: [{ material: "green-vitriol" }, { material: "sulfur", note: "Modern Contact process." }],
    experimentSlug: "oil-of-vitriol",
    hazards:
      "Severely corrosive and powerfully dehydrating. The heat of dilution is enormous — always add acid to water, never the reverse. Reaction with organic matter can char and ignite.",
  },
  {
    slug: "aqua-regia",
    name: "Aqua Regia",
    aka: ["Royal Water"],
    formula: "HCl + HNO₃ (3:1)",
    glyph: "🜅",
    type: "derived",
    appearance: "A fuming orange-red liquid; pungent and acrid.",
    about:
      "Three parts hydrochloric acid to one of nitric — the only common mixture that dissolves gold. Discovered by Jābir ibn Hayyān in the 8th century and named royal water for the metal it brought to its knees.",
    madeFrom: [{ material: "hcl" }, { material: "nitric-acid" }],
    experimentSlug: "aqua-regia",
    hazards:
      "Cannot be stored — decomposes within hours, evolving toxic gases. Use as soon as mixed.",
  },
  {
    slug: "aqueous-ammonia",
    name: "Aqueous Ammonia",
    aka: ["Spirit of Hartshorn", "Liquor ammoniae"],
    formula: "NH₃ · H₂O",
    glyph: "🜹",
    type: "derived",
    appearance: "Colourless liquid; powerful pungent smell that makes the eyes water.",
    about:
      "Long before Priestley collected the free gas in 1774, ammonia lived in pharmacies as the spirit of hartshorn — distilled from stag horn, hair, hooves, or any nitrogenous animal matter. It is a weak base, a chelator of transition-metal ions (deep blue with copper, ochre with gold), and the precursor to every nitrogen fertiliser in the modern world.",
    madeFrom: [{ material: "—", note: "Destructive distillation of horn, hair, or hide." }],
    experimentSlug: "liquor-of-hartshorn",
    hazards:
      "Vapour severely irritates eyes, nose, and lungs. Concentrated solutions burn skin and bleach paint. Never combine with bleach (releases chloramines) or with acids (heat).",
  },
  {
    slug: "spirit-of-wine",
    name: "Spirit of Wine",
    aka: ["Rectified Spirit", "Ethanol", "Aqua Vitae"],
    formula: "C₂H₅OH",
    glyph: "🝆",
    type: "derived",
    appearance: "Clear, colourless, mobile liquid; faintly sweet odour; burns with a clean blue flame.",
    about:
      "Ethanol concentrated by repeated distillation of wine. The first organic compound to be isolated and rectified in pure form, and the solvent in which much of the rest of organic chemistry first dissolved.",
    madeFrom: [{ material: "wine" }],
    experimentSlug: "aqua-vitae",
    hazards: "Highly flammable. The vapour ignites readily and tends to pool in low places.",
  },
  {
    slug: "vinegar",
    name: "Vinegar",
    aka: ["Acetum", "Sour Wine"],
    formula: "CH₃COOH (in water)",
    glyph: "🜢",
    type: "derived",
    appearance: "Pale yellow to dark amber liquid; sharply sour to taste; pungent smell.",
    about:
      "Wine left exposed to air sours, as acetic-acid bacteria oxidise its ethanol to acetic acid. The result is the oldest known weak acid: vinegar. The alchemists used it as a solvent, a cosmetic, a corrosive for soft metals, and as the active vapour in the white-lead stack process.",
    madeFrom: [
      { material: "spirit-of-wine", note: "Slow oxidation by airborne Acetobacter bacteria." },
    ],
    preparation: [
      "Pour wine into a wide-mouthed jar, cover loosely with a cloth.",
      "Let stand in a warm place; a leathery mother of vinegar forms on the surface within weeks.",
      "When the wine has turned sharp, strain off the liquid; this is the vinegar.",
      "Distil if a strong, clear product is required.",
    ],
    hazards: "Mild at culinary strength. Concentrated (glacial) acetic acid is corrosive and combustible.",
  },
  {
    slug: "heavy-spar",
    name: "Heavy Spar",
    aka: ["Baryte", "Barite", "Lapis Bononiensis"],
    formula: "BaSO₄",
    glyph: "🜨",
    type: "base",
    appearance: "Heavy white to grey crystalline lumps; surprisingly dense for a non-metallic stone.",
    about:
      "A common mineral and the heaviest of the white sulfates — its remarkable density gave it its name. Reduced with charcoal it yields the phosphorescent Bologna Stone. Today it is the principal source of barium chemistry and the weighting agent in oil-drilling muds.",
    sources: [
      {
        region: "Monte Paderno, Bologna",
        note: "The original source of Casciarolo's stones; surface nodules of remarkable purity, prized through the 17th and 18th centuries.",
      },
      {
        region: "Cumbria and Cornwall, England",
        note: "Worked as a by-product of lead mining since the 18th century.",
      },
      {
        region: "China (modern)",
        note: "The world's largest producer; mined for the oil and gas drilling industry.",
      },
    ],
    hazards: "Insoluble and chemically inert in itself. Reduction to barium sulfide produces a toxic compound; soluble barium salts are acutely poisonous.",
  },
  {
    slug: "tin",
    name: "Tin",
    aka: ["Stannum", "Jupiter", "Cassiterides"],
    formula: "Sn",
    glyph: "♃",
    type: "base",
    appearance: "Soft, silver-white, malleable metal; bends with an audible cry from the slipping of crystal planes.",
    about:
      "The lesser metal of the Bronze Age — alloyed with copper at one part in ten, it gave the bronze that named an epoch. Smelted by simply roasting cassiterite (SnO₂) over charcoal, tin was the rare half of the bronze equation, and the search for it drove some of the earliest long-distance trade.",
    sources: [
      {
        region: "Cornwall and Devon, England",
        note: "The Cassiterides — Tin Isles — of Greek geography. Worked from at least 2000 BCE; Phoenician and Roman traders bought tin here for the Mediterranean bronze industry.",
      },
      {
        region: "Erzgebirge, Bohemia/Saxony",
        note: "The medieval European source; the mountains' name simply means Ore Mountains.",
      },
      {
        region: "Malaysia, Indonesia, Bolivia (modern)",
        note: "The Bangka-Belitung islands and the Andean tin belt now supply the bulk of world demand.",
      },
    ],
    hazards: "Tin metal is nearly non-toxic; organotin compounds, however, are among the more harmful synthetic chemicals known.",
  },
  {
    slug: "lead",
    name: "Lead",
    aka: ["Plumbum", "Saturn"],
    formula: "Pb",
    glyph: "♄",
    type: "base",
    appearance: "Heavy, soft, blue-grey metal; cuts with a knife; leaves a grey streak on paper.",
    about:
      "The metal of Saturn — heaviest, dullest, and most leaden of the seven classical metals. Easy to smelt from galena (PbS) by simple roasting, it became the metal of Roman pipes, medieval roofs, printers' type, and the cosmetic ceruse. Its slow toxicity may have contributed to the decline of more than one civilisation.",
    sources: [
      {
        region: "Río Tinto and Cartagena, Spain",
        note: "Roman lead mines so vast that their isotopic signature is detectable in Greenland ice cores.",
      },
      {
        region: "The Pennines and Derbyshire, England",
        note: "Worked from the Roman period continuously into the 19th century.",
      },
      {
        region: "Broken Hill, Australia (modern)",
        note: "One of the great lead-zinc-silver ore bodies; mined since 1885.",
      },
    ],
    hazards: "Cumulative neurotoxin with no safe blood level. Tetraethyl lead in petrol is thought to have raised crime rates in the cities of the twentieth century; the chemistry has been argued over for decades, the epidemiology much less so.",
  },
  {
    slug: "sal-ammoniac",
    name: "Sal Ammoniac",
    aka: ["Ammonium Chloride", "Nūshādir", "Volatile Salt of the Lamps"],
    formula: "NH₄Cl",
    glyph: "🜹",
    type: "derived",
    appearance: "White crystalline solid; sublimes without melting; sharp salty taste.",
    about:
      "The universal flux of soldering and one of the oldest chemicals of commerce. Originally gathered as a sublimate from the soot of camel-dung fires; later prepared synthetically from spirit of hartshorn and spirit of salt.",
    madeFrom: [
      { material: "aqueous-ammonia" },
      { material: "hcl" },
    ],
    experimentSlug: "sal-ammoniac",
    hazards: "The dust irritates eyes and lungs; heating releases ammonia and HCl gases.",
  },
  {
    slug: "pyrolusite",
    name: "Pyrolusite",
    aka: ["Black Manganese", "Manganesium Nigrum", "Glassmakers' Soap"],
    formula: "MnO₂",
    glyph: "🜜",
    type: "base",
    appearance: "Black or steel-grey crystalline mineral; sooty to the touch; rubs off as a dark powder.",
    about:
      "A common manganese ore that Roman and medieval glassmakers used to clear the green tint from window glass — hence its old name, glassmakers' soap. Scheele used it in 1774 to liberate chlorine from hydrochloric acid, the discovery that set up Berthollet's bleach fifteen years later.",
    sources: [
      {
        region: "Caucasus (Chiatura, Georgia)",
        note: "One of the largest manganese deposits in the world; mined since the 1880s.",
      },
      {
        region: "Crimean and Ukrainian deposits",
        note: "Worked since classical antiquity as a black colouring oxide and glass-clearing agent.",
      },
      {
        region: "Postmasburg and Kalahari, South Africa (modern)",
        note: "The world's largest manganese reserves, vital to steelmaking.",
      },
    ],
    hazards: "Manganese dust is a chronic lung and neurological hazard at industrial exposures; in the laboratory it is far less acutely toxic than the chlorine it can liberate.",
  },
  {
    slug: "potash",
    name: "Potash",
    aka: ["Salt of Tartar", "Pot Ashes", "Salt of Wormwood"],
    formula: "K₂CO₃",
    glyph: "🝁",
    type: "derived",
    appearance: "White, hygroscopic powder; deliquesces in damp air to a syrupy liquor.",
    about:
      "Wood-ash leached with water and the lye evaporated to dryness. The standard alkali of the pre-industrial world, used for soap-making, glassmaking, bleaching, and the synthesis of saltpetre. The word potassium derives from potash itself.",
    madeFrom: [{ material: "—", note: "Wood ash, water, and a long slow evaporation in iron pots." }],
    preparation: [
      "Burn hardwood to a fine grey ash — the whiter the ash, the richer the potash.",
      "Steep the ash in warm water; strain off the brown lye.",
      "Boil the lye down in an iron pot until a hard cake remains. This is crude pot-ash.",
      "Re-calcine in a furnace to drive off remaining organics and obtain pure white pearl-ash.",
    ],
    hazards: "Caustic in solution; will burn skin and eyes.",
  },
];

export function getMaterial(slug: string): Material | undefined {
  return materials.find((m) => m.slug === slug);
}

export function getAllMaterialSlugs(): string[] {
  return materials.map((m) => m.slug);
}
