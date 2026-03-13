import Link from 'next/link';
import { ArrowRight, Shield, Zap, Brain, Leaf, FlaskConical, Heart } from 'lucide-react';

export const metadata = {
  title: 'Natural Remedies & Secret Weapons',
  description: 'Dr. Wallach\'s unique remedy recommendations — Colloidal Silver, Dark Chocolate, I-26 Hyperimmune Egg, and the specific tools that go beyond the standard supplement packs.',
};

const remedies = [
  {
    name: 'Colloidal Silver',
    subtitle: 'Nature\'s Antibiotic',
    icon: Shield,
    headerBg: 'bg-gradient-to-r from-slate-700 to-slate-900',
    emoji: '🥈',
    overview: 'Colloidal silver — microscopic silver particles suspended in liquid — has been used medicinally for thousands of years, predating the pharmaceutical antibiotic era by millennia. Dr. Wallach describes it as one of nature\'s most powerful antimicrobial agents, and sharply distinguishes it from pharmaceutical antibiotics.',
    mechanism: [
      {
        title: 'Broad-Spectrum Action',
        desc: 'Unlike penicillin and most pharmaceutical antibiotics, which only kill specific gram-positive bacteria, colloidal silver has demonstrated activity against a broad range of bacteria, viruses, fungi, and yeasts. It disrupts microbial respiration and cellular function through silver ion interaction with sulfur-containing proteins.',
      },
      {
        title: 'No Resistance Development',
        desc: 'Bacteria have not developed resistance to silver ions in the same way they have to pharmaceutical antibiotics. Silver\'s mechanism of action — physical disruption of cellular respiration — is not subject to the genetic mutation pathways that create antibiotic resistance.',
      },
      {
        title: 'Gut Flora Preservation',
        desc: 'Conventional antibiotics are notoriously indiscriminate — they destroy both pathogenic and beneficial gut bacteria, leading to digestive disruption, yeast overgrowth, and immune system compromise. Dr. Wallach notes that properly prepared colloidal silver at appropriate concentrations does not carry the same microbiome-disrupting effects as pharmaceutical antibiotics.',
      },
      {
        title: 'No Alcohol Base',
        desc: 'Most herbal antimicrobial tinctures use alcohol as a preservative base. Colloidal silver requires no alcohol carrier — it remains stable in purified water — making it appropriate for individuals who avoid alcohol for health or personal reasons.',
      },
    ],
    uses: 'Upper respiratory infections, sinus infections, topical wound care, fungal conditions, gut pathogen support',
    wallachQuote: '"Silver is nature\'s antibiotic — it kills viruses, bacteria, fungi, and yeast without harming the host. Penicillin only kills some bacteria and destroys your gut. Silver doesn\'t play favorites."',
    caution: 'Use pharmaceutical-grade colloidal silver (typically 5–25 ppm). Avoid home-made ionic silver solutions, which can produce argyria (skin discoloration) at very high doses. Quality matters significantly.',
  },
  {
    name: 'Dark Chocolate (70%+ Cacao)',
    subtitle: 'The 3rd Vitamin — Dr. Wallach\'s Favorite "Secret Sauce"',
    icon: Heart,
    headerBg: 'bg-gradient-to-r from-amber-800 to-amber-950',
    emoji: '🍫',
    overview: 'Dr. Wallach calls dark chocolate "nature\'s third vitamin" — one of the few foods he enthusiastically recommends as both a pleasure and a medicine. But not all chocolate qualifies. Only dark chocolate with 70% or higher cacao content contains the beneficial compounds he references — and milk chocolate does not.',
    mechanism: [
      {
        title: 'Flavonols — The Blood Pressure Compound',
        desc: 'Dark chocolate is one of the richest dietary sources of flavonols, particularly epicatechin and catechin. These compounds stimulate nitric oxide production in vascular endothelium, causing arterial vasodilation — a natural, side-effect-free mechanism for lowering blood pressure. Multiple randomized controlled trials have confirmed clinically significant blood pressure reduction from daily dark chocolate consumption.',
      },
      {
        title: 'ORAC Antioxidant Density',
        desc: 'Dark chocolate has one of the highest ORAC (Oxygen Radical Absorbance Capacity) scores of any food — higher than blueberries, acai, or pomegranate per gram. These antioxidants neutralize free radicals that damage arterial walls, DNA, and cellular membranes.',
      },
      {
        title: 'PEAs — The Love Chemical',
        desc: 'Dark chocolate contains phenylethylamines (PEAs) — the same "love chemical" the brain produces during romantic attraction and euphoria. PEAs function as mild mood elevators, support focus and mental clarity, and contribute to the profound sense of well-being associated with dark chocolate consumption.',
      },
      {
        title: 'Magnesium & Mineral Content',
        desc: 'High-quality dark chocolate is a legitimate source of dietary magnesium — one of the most deficient minerals in the modern diet. Magnesium is required for over 300 enzymatic reactions, including cardiovascular regulation, muscle relaxation, and insulin sensitivity.',
      },
    ],
    uses: 'Blood pressure support, antioxidant intake, mood enhancement, magnesium supplementation, cardiovascular health',
    wallachQuote: '"I tell people to eat dark chocolate every day. But it has to be 70% cacao or higher. Milk chocolate is just candy. Dark chocolate is medicine."',
    caution: 'Must be 70%+ cacao. Milk chocolate contains negligible flavonols and high sugar. Dairy milk in the bloodstream binds to cocoa flavonols and prevents absorption — do not consume with milk.',
  },
  {
    name: 'I-26 Hyperimmune Egg',
    subtitle: 'Myelin Rebuilder — For Neurological Conditions',
    icon: Brain,
    headerBg: 'bg-gradient-to-r from-yellow-700 to-yellow-900',
    emoji: '🥚',
    overview: 'I-26 is Dr. Wallach\'s most specialized supplement recommendation — a hyperimmune egg protein designed specifically to support the rebuilding of myelin, the white matter of the brain and spinal cord. It is his primary protocol recommendation for MS, Parkinson\'s, Alzheimer\'s, and neurological cognitive decline.',
    mechanism: [
      {
        title: 'What Is Hyperimmune Egg?',
        desc: 'I-26 is produced through a specific immunization process in hens. The hens are exposed to a defined combination of pathogens and antigens, causing their immune systems to produce highly specific IgY antibody fractions. These antibody fractions — concentrated into a powder from the egg yolks — have targeted immunomodulatory and structural effects in the human nervous system.',
      },
      {
        title: 'Myelin Structural Support',
        desc: 'The egg-derived phospholipids in I-26 — particularly phosphatidylcholine and sphingomyelin — are direct precursors to myelin membrane components. Providing these precursors in bioavailable form gives the central nervous system the specific molecular building blocks needed for myelin repair and regeneration.',
      },
      {
        title: 'Immune System Modulation',
        desc: 'In autoimmune neurological conditions (MS), the immune system attacks the myelin sheath. The IgY antibody fractions in I-26 help modulate this autoimmune response, reducing the frequency and severity of demyelinating attacks while simultaneously providing structural repair material.',
      },
      {
        title: 'Cognitive Function Support',
        desc: 'The combination of cholesterol-rich egg components, phospholipids, and IgY fractions synergistically supports the entire spectrum of cognitive function — from neurotransmitter synthesis to synaptic membrane repair. Dr. Wallach uses I-26 alongside Synaptiv (his brain-specific nootropic formula) for comprehensive neurological support.',
      },
    ],
    uses: 'Multiple Sclerosis, Parkinson\'s Disease, Alzheimer\'s Disease, cognitive decline, neurological rehabilitation, general brain health maintenance',
    wallachQuote: '"The brain is made of cholesterol. The spinal cord is made of cholesterol. If you take away cholesterol through statins and low-fat diets, and you never give back the structural material to rebuild, you get MS, Parkinson\'s, Alzheimer\'s. I-26 gives back what was taken."',
    caution: 'Egg allergy contraindication — individuals with egg allergies should consult a healthcare provider before use. Not a substitute for emergency medical care in acute neurological events.',
  },
  {
    name: 'Soft-Yolk Eggs (6–10 Daily)',
    subtitle: 'Nature\'s Most Complete Food',
    icon: Zap,
    headerBg: 'bg-gradient-to-r from-orange-700 to-orange-900',
    emoji: '🍳',
    overview: 'Perhaps Dr. Wallach\'s most counterintuitive recommendation — and the one most at odds with mainstream medical advice — is his directive to eat 6 to 10 eggs per day with soft, runny yolks. He calls the egg "nature\'s most complete food" and specifically warns that cooking the yolk fully to hard-cooked form destroys its nutritional value.',
    mechanism: [
      {
        title: 'The Cholesterol Imperative',
        desc: 'The egg yolk is the most concentrated food source of dietary cholesterol available. Dr. Wallach is emphatic: the brain needs cholesterol as its primary structural material. Neurotransmitter synthesis, myelin maintenance, hormone production, and cell membrane integrity all depend on adequate dietary cholesterol. Eggs provide this in the most bioavailable form possible.',
      },
      {
        title: 'Why Soft Yolks — Never Hard Cooked',
        desc: 'When egg yolk cholesterol is exposed to high heat (hard boiling, scrambling until dry, over-easy until yolk solidifies), the cholesterol undergoes oxidation. Oxidized cholesterol (oxysterols) is genuinely inflammatory and arterially damaging — the very thing mainstream medicine warns about. The key: keep yolks liquid (soft-boiled, poached, sunny-side up with runny yolk, soft-scrambled). Liquid yolk cholesterol is biologically native and non-inflammatory.',
      },
      {
        title: 'Choline — The Brain\'s Building Chemical',
        desc: 'Egg yolks are the richest dietary source of choline — an essential nutrient required for acetylcholine neurotransmitter synthesis (critical for memory and cognition), phospholipid cell membrane synthesis, and liver detoxification. Choline deficiency is directly linked to cognitive decline and neural tube defects in developing fetuses.',
      },
      {
        title: 'Fat-Soluble Vitamin Complex',
        desc: 'Egg yolks are a natural complex of all four fat-soluble vitamins: A (retinol), D3 (cholecalciferol), E (tocopherols), and K2 (menaquinone). These vitamins require fat to be absorbed — and the yolk\'s own fat content provides the carrier simultaneously. Eating the whole egg is nutritionally superior to any individual supplement of these vitamins in isolation.',
      },
    ],
    uses: 'Neurological health, hormone production, brain cholesterol replacement, fat-soluble vitamin delivery, choline supplementation, general nutritional foundation',
    wallachQuote: '"Six to ten eggs a day with soft yolks. If God wanted you to eat hard-boiled eggs, he would have made hens that only produced hard-boiled eggs. The yolk has to be runny."',
    caution: 'Source matters — choose pasture-raised or free-range eggs when possible for optimal Omega-3 content and reduced inflammatory fatty acid ratio. Avoid eggs from conventionally raised chickens fed soy-heavy diets if possible.',
  },
  {
    name: 'Plant-Derived Colloidal Minerals',
    subtitle: 'The Foundation of Everything',
    icon: Leaf,
    headerBg: 'bg-gradient-to-r from-forest-700 to-forest-950',
    emoji: '🌿',
    overview: 'If there is one product that represents the core of Dr. Wallach\'s entire nutritional philosophy, it is plant-derived colloidal minerals in liquid form. This is the product he built Youngevity around — and the reason his mineral research matters more than any other single discovery.',
    mechanism: [
      {
        title: 'What Makes Them "Colloidal"',
        desc: 'Colloidal minerals are minerals that have been processed through plant biology — taken up from soil by ancient plants and converted into organic mineral compounds encased in a carbon matrix. These plant-processed particles are extraordinarily small (0.001 microns) — small enough to pass directly through cell walls without requiring specialized mineral transport proteins.',
      },
      {
        title: 'The 70,000-Year-Old Source',
        desc: 'Youngevity\'s mineral deposit was formed from an ancient plant bed that accumulated over 70,000 years in a geological formation in Utah. Because this deposit predates industrial pollution by tens of thousands of years, it is entirely free from heavy metals and environmental contaminants — a critical distinction from mineral sources extracted from modern geological deposits.',
      },
      {
        title: 'Negative Electrical Charge',
        desc: 'Plant-derived colloidal minerals carry a slight negative electrical charge. Since the lining of the human intestinal tract also carries a negative charge, conventional wisdom might suggest repulsion — but the colloidal mineral particles\' size allows them to pass through inter-cellular gaps (tight junctions) that selective mineral transport cannot access. Additionally, the negative charge helps attract and bind to the positive-charge environments of target cells.',
      },
      {
        title: 'Natural Chelation',
        desc: 'Each mineral in a plant-derived colloidal suspension is naturally chelated — bonded to a carbon-based organic carrier from its time in the plant matrix. This organic bonding significantly increases the intestinal recognition and uptake of the mineral, as the body\'s transport systems recognize organic mineral complexes as food-derived rather than supplemental.',
      },
    ],
    uses: 'Foundation for all 90-nutrient protocols. All 60 essential minerals in one liquid. Superior to any metallic or chelated mineral supplement.',
    wallachQuote: '"The only thing wrong with your health is you\'re low on minerals. You can\'t get them from food anymore. You have to supplement — but you have to supplement with the right form. Plant-derived colloidal minerals are the only ones that really work."',
    caution: 'Natural mineral taste (slightly earthy) is normal. Mix with juice if desired. Store in a cool location away from direct sunlight.',
  },
  {
    name: 'Rebound FX Sports Drink',
    subtitle: 'The Exercise Safety Protocol',
    icon: FlaskConical,
    headerBg: 'bg-gradient-to-r from-green-700 to-green-950',
    emoji: '⚡',
    overview: 'Dr. Wallach created Rebound FX specifically in response to what he calls the "exercise without supplementation" crisis — the epidemic of young, fit athletes dying from mineral-depletion-induced cardiac events. It is a comprehensive sports drink containing 100 nutrients, not the 2–5 electrolytes found in commercial sports drinks.',
    mechanism: [
      {
        title: 'Beyond Electrolytes',
        desc: 'Gatorade, Powerade, and similar commercial sports drinks replace sodium, potassium, and occasionally magnesium — 2 to 3 minerals. Sweat depletes all 60 essential minerals plus water-soluble vitamins and amino acid cofactors. Rebound FX was formulated to replace the complete mineral profile lost during physical exertion.',
      },
      {
        title: 'Cardiac Protection',
        desc: 'The selenium, magnesium, and potassium in Rebound FX specifically protect cardiac muscle from the arrhythmia risk that mineral depletion creates. Dr. Wallach attributes hypertrophic cardiomyopathy (the most common cause of sudden death in young athletes) to progressive selenium and mineral depletion from sweating without replacement.',
      },
      {
        title: 'Recovery Optimization',
        desc: 'The full mineral and B-vitamin complex supports mitochondrial energy production, lactic acid clearance, and protein synthesis during the post-exercise recovery window. Athletes using Rebound FX consistently report reduced delayed onset muscle soreness, faster recovery times, and improved endurance over time.',
      },
    ],
    uses: 'Pre/during/post-workout mineral replacement, cardiac protection during exercise, endurance sports, daily mineral maintenance',
    wallachQuote: '"Exercise without supplementation is suicide. Sweat is your body\'s mineral soup — and you\'re pouring it out on the gym floor every day without replacing it."',
    caution: 'This is not a stimulant-based pre-workout product. It is a mineral and nutrient replacement formula. Begin with the recommended serving and adjust based on exercise intensity and individual needs.',
  },
];

export default function RemediesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-950 to-earth-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="badge bg-forest-700/40 border border-forest-500/40 text-forest-200 mb-4">
              Natural Remedies
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Dr. Wallach&apos;s Unique Remedies & Secret Weapons
            </h1>
            <p className="text-forest-200 text-lg leading-relaxed">
              Beyond the foundation packs, Dr. Wallach maintains a toolkit of specific remedies and
              unconventional recommendations that address targeted conditions with precision and elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Remedies */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {remedies.map((remedy) => (
            <div key={remedy.name} className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
              {/* Header */}
              <div className={`${remedy.headerBg} px-6 py-5`}>
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{remedy.emoji}</span>
                  <div>
                    <h2 className="font-playfair font-bold text-2xl text-white leading-tight">{remedy.name}</h2>
                    <p className="text-white/70 text-sm mt-0.5">{remedy.subtitle}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Overview */}
                <p className="text-stone-700 leading-relaxed">{remedy.overview}</p>

                {/* Mechanisms */}
                <div>
                  <h3 className="font-playfair font-bold text-base text-stone-900 mb-4">Why It Works — The Mechanisms</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {remedy.mechanism.map((m) => (
                      <div key={m.title} className="bg-cream-50 border border-stone-100 rounded-xl p-4">
                        <h4 className="font-semibold text-forest-800 text-sm mb-2">{m.title}</h4>
                        <p className="text-stone-600 text-sm leading-relaxed">{m.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Uses */}
                <div className="bg-forest-50 border border-forest-200 rounded-xl p-4">
                  <div className="text-xs font-bold text-forest-700 uppercase tracking-wider mb-1">Primary Uses</div>
                  <p className="text-forest-800 text-sm">{remedy.uses}</p>
                </div>

                {/* Wallach Quote */}
                <blockquote className="border-l-4 border-earth-500 pl-5 py-2 bg-amber-50 rounded-r-xl">
                  <p className="text-earth-800 italic font-playfair text-base leading-relaxed">{remedy.wallachQuote}</p>
                  <cite className="text-earth-600 text-sm not-italic block mt-1">— Dr. Joel Wallach</cite>
                </blockquote>

                {/* Caution */}
                <div className="bg-stone-50 border border-stone-200 rounded-xl p-4">
                  <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">Important Notes</div>
                  <p className="text-stone-600 text-sm leading-relaxed">{remedy.caution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-forest-900 text-white">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h3 className="font-playfair text-2xl font-bold mb-4">Build Your Complete Protocol</h3>
          <p className="text-forest-200 mb-6">These targeted remedies work best when layered on top of a Foundation Pack delivering all 90 essential nutrients. Start with the foundation, then add precision.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/products" className="btn-secondary">View All Products <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/protocols" className="btn-outline">Disease Protocols</Link>
          </div>
        </div>
      </section>
    </>
  );
}
