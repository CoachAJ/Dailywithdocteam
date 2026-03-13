import Link from 'next/link';
import { ArrowRight, CheckCircle, XCircle, Leaf, Droplets, FlaskConical, Zap, Search, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'Core Philosophy — The Science of Nutrition',
  description: 'Dr. Wallach\'s core nutritional philosophy: the 90 Essential Nutrients, soil depletion, colloidal vs metallic minerals, good vs bad foods, HTMA, and the absorption factor.',
};

const minerals = [
  'Calcium','Magnesium','Phosphorus','Potassium','Sodium','Chloride','Sulfur','Chromium','Cobalt','Copper',
  'Fluorine','Iodine','Iron','Manganese','Molybdenum','Selenium','Silicon','Tin','Vanadium','Zinc',
  'Boron','Germanium','Lithium','Nickel','Rubidium','Strontium','Aluminum (plant)','Antimony','Arsenic (plant)',
  'Barium','Beryllium','Bismuth','Bromine','Cadmium (plant)','Cesium','Dysprosium','Erbium','Europium',
  'Gadolinium','Gallium','Gold','Hafnium','Holmium','Indium','Lanthanum','Lutetium','Neodymium',
  'Niobium','Osmium','Palladium','Praseodymium','Rhenium','Rhodium','Rubidium','Samarium','Scandium',
  'Silver','Tantalum','Tellurium','Terbium','Thallium','Thulium','Tungsten','Ytterbium','Yttrium',
];

const vitamins = [
  'Vitamin A (Retinol)', 'Vitamin B1 (Thiamine)', 'Vitamin B2 (Riboflavin)', 'Vitamin B3 (Niacin)',
  'Vitamin B5 (Pantothenic Acid)', 'Vitamin B6 (Pyridoxine)', 'Vitamin B12 (Cobalamin)', 'Vitamin C (Ascorbic Acid)',
  'Vitamin D3 (Cholecalciferol)', 'Vitamin E (Tocopherols)', 'Vitamin K2 (Menaquinone)', 'Folic Acid',
  'Biotin', 'Choline', 'Inositol', 'PABA',
];

const aminoAcids = [
  'Isoleucine', 'Leucine', 'Lysine', 'Methionine', 'Phenylalanine',
  'Threonine', 'Tryptophan', 'Valine', 'Histidine', 'Arginine',
  'Tyrosine', 'Cysteine',
];

const fattyAcids = [
  'Omega-3 (ALA, EPA, DHA)', 'Omega-6 (LA, GLA, AA)', 'Omega-9 (Oleic Acid)',
];

const badFoods = [
  { item: 'Wheat, Barley, Rye, Oats', reason: 'Gluten destroys intestinal villi — your absorption surface. Causes contact enteritis.' },
  { item: 'Buckwheat & Triticale', reason: 'Contains gluten-like lectins that damage the gut lining and impair mineral absorption.' },
  { item: 'Fried Foods', reason: 'Oxidized oils create trans fats and free radicals that damage arterial walls and accelerate aging.' },
  { item: 'Bottled Oils (Olive, Canola, Vegetable)', reason: 'Liquid at room temperature oils become carcinogenic when heated; even cold they oxidize rapidly.' },
  { item: 'Processed Meats (Nitrates/Nitrites)', reason: 'Sodium nitrite converts to carcinogenic N-nitrosamines in the digestive tract.' },
  { item: 'Sugar (Refined)', reason: 'Depletes B vitamins and chromium, suppresses immune function, and feeds pathogenic organisms.' },
  { item: 'Carbonated Drinks (including sparkling water)', reason: 'Carbonic acid leaches calcium from bones and teeth; even carbonated water is harmful over time.' },
  { item: 'Well-Done Red Meat', reason: 'High-heat cooking creates heterocyclic amines — known carcinogens — particularly in charred muscle.' },
];

const goodFoods = [
  { item: 'Butter (raw or cultured)', reason: 'Rich in fat-soluble vitamins A, D, E, K2 and healthy saturated fats. Anti-inflammatory.' },
  { item: 'Soft-Yolk Eggs (6–10 daily)', reason: 'The yolk is nature\'s most complete food — cholesterol, choline, B12, and all fat-soluble vitamins.' },
  { item: 'Rice & Sweet Potatoes', reason: 'Clean complex carbohydrates with no gluten. Excellent energy source that doesn\'t damage the gut.' },
  { item: 'Colorful Vegetables', reason: 'Rich in antioxidants, flavonoids, and plant-based cofactors that enhance mineral absorption.' },
  { item: 'Wild-Caught Fish & Clean Meats', reason: 'Complete protein with essential amino acids and naturally occurring Omega-3s.' },
  { item: 'Dark Chocolate (70%+ cacao)', reason: 'Rich in flavonols that lower blood pressure, antioxidants (high ORAC), and PEAs — the "love chemical."' },
  { item: 'Organ Meats (Liver, Heart)', reason: 'The most nutrient-dense foods on earth — concentrated sources of B12, iron, copper, CoQ10.' },
  { item: 'Himalayan/Sea Salt', reason: 'Essential for stomach acid production (HCl). The stomach NEEDS salt to function properly.' },
];

const mineralComparison = [
  { type: 'Metallic / Elemental Minerals', absorption: '3–12%', source: 'Ground-up rocks, oyster shells, Tums, limestone, calcium carbonate', note: 'Absorption drops to 3–5% with age. The remainder accumulates in joints, arteries, and soft tissues as calcification.' },
  { type: 'Chelated Minerals', absorption: '40–60%', source: 'Minerals bonded to amino acids (found in many health food store supplements)', note: 'Better than metallic, but the chelating bond can break in the gut, reducing effectiveness.' },
  { type: 'Plant-Derived Colloidal Minerals', absorption: '90%+', source: 'Ancient, unpolluted plant deposits (like the Youngevity 70,000-year-old Utah deposit)', note: 'Naturally encased in plant-matrix particles 0.001 microns in size — small enough to be absorbed directly through cell walls.' },
];

export default function PhilosophyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-950 to-forest-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="badge bg-forest-700/40 border border-forest-500/40 text-forest-200 mb-4">
              The Science of Nutrition
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Core Philosophy
            </h1>
            <p className="text-forest-200 text-lg leading-relaxed">
              Dr. Wallach&apos;s medical philosophy rests on a single, evidence-backed foundation:{' '}
              <strong className="text-white">every chronic disease has a nutritional deficiency at its root.</strong>{' '}
              Provide the body with all 90 essential nutrients, and it has the raw materials to rebuild, repair, and thrive.
            </p>
          </div>
        </div>
      </section>

      {/* 90 Nutrients Overview */}
      <section id="90-nutrients" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="section-heading">The 90 Essential Nutrients</h2>
            <p className="section-subheading mx-auto">
              Your body requires exactly 90 nutrients to sustain life and prevent disease. It cannot synthesize
              these itself — they must come from diet and supplementation. Deficiency in any one creates conditions
              for up to <strong>900 preventable diseases.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {/* 60 Minerals */}
            <div className="col-span-full lg:col-span-2 bg-gradient-to-br from-forest-900 to-forest-950 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-playfair font-bold">60</span>
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-xl">Essential Minerals</h3>
                  <p className="text-forest-300 text-sm">The foundation of every bodily function</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {minerals.slice(0, 30).map((m) => (
                  <span key={m} className="text-xs bg-white/10 border border-white/15 text-forest-200 px-2 py-0.5 rounded-full">{m}</span>
                ))}
                <span className="text-xs bg-white/10 border border-white/15 text-forest-300 px-2 py-0.5 rounded-full italic">+30 more rare earth minerals...</span>
              </div>
            </div>

            {/* 16 Vitamins */}
            <div className="bg-gradient-to-br from-earth-800 to-earth-900 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-playfair font-bold">16</span>
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-xl">Essential Vitamins</h3>
                  <p className="text-amber-200 text-sm">Organic cofactors for metabolism</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {vitamins.map((v) => (
                  <span key={v} className="text-xs bg-white/10 border border-white/15 text-amber-100 px-2 py-0.5 rounded-full">{v}</span>
                ))}
              </div>
            </div>

            {/* 12 Amino + 3 Fatty */}
            <div className="flex flex-col gap-6">
              <div className="bg-gradient-to-br from-ocean-900 to-ocean-950 rounded-2xl p-6 text-white flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-xl font-playfair font-bold">12</span>
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-base">Amino Acids</h3>
                    <p className="text-blue-200 text-xs">Protein & neurotransmitter building blocks</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {aminoAcids.map((a) => (
                    <span key={a} className="text-xs bg-white/10 text-blue-100 px-1.5 py-0.5 rounded-full">{a}</span>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-gold-700 to-earth-800 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <span className="text-xl font-playfair font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-base">Essential Fatty Acids</h3>
                    <p className="text-yellow-100 text-xs">Brain, heart & hormonal health</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {fattyAcids.map((f) => (
                    <span key={f} className="text-xs bg-white/10 text-yellow-100 px-1.5 py-0.5 rounded-full">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Total callout */}
          <div className="bg-gradient-to-r from-forest-50 to-cream-100 border border-forest-200 rounded-2xl p-6 md:p-8 text-center">
            <div className="text-5xl font-playfair font-bold text-forest-900 mb-2">60 + 16 + 12 + 3 = 90</div>
            <p className="text-stone-700 text-base max-w-2xl mx-auto">
              The body cannot manufacture any of these 90 nutrients on its own. Each one must be consumed daily
              through a combination of diet and supplementation. This is Dr. Wallach&apos;s &quot;90 For Life&quot; protocol.
            </p>
          </div>
        </div>
      </section>

      {/* The Absorption Factor */}
      <section className="py-16 md:py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-divider mb-5" />
              <h2 className="section-heading mb-5">
                &quot;You Are Not What You Eat — You Are What You <em>Absorb.</em>&quot;
              </h2>
              <p className="prose-wallach mb-4">
                Dr. Wallach&apos;s most quoted maxim points to a critical but overlooked truth: the nutritional value
                of what you consume is irrelevant if your body cannot absorb it. Two people can eat the same meal
                and extract radically different levels of nutrition based on their gut health, stomach acid levels,
                and the form of minerals they consume.
              </p>
              <p className="prose-wallach mb-4">
                The primary destroyer of absorption capacity is <strong>gluten</strong>. When gluten-sensitive
                individuals consume wheat, barley, or rye, it triggers an immune response that flattens the
                intestinal villi — the finger-like projections responsible for absorbing nutrients. A person with
                damaged villi may eat a perfectly nutritious meal and absorb almost none of it.
              </p>
              <p className="prose-wallach mb-6">
                The second factor is <strong>stomach acid</strong>. The chief cells of the stomach require sodium
                chloride (salt) to manufacture hydrochloric acid. Low-salt diets destroy this capacity —
                leading to undigested minerals passing straight through the body.
              </p>
              <div className="bg-white border border-forest-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <Droplets className="w-5 h-5 text-forest-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-forest-800 text-sm mb-1">The Hair Tissue Mineral Analysis (HTMA)</p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      Standard blood tests do not accurately reflect mineral levels in body tissues. Dr. Wallach
                      recommends Hair Tissue Mineral Analysis (HTMA), which reveals exactly which of the 60 minerals
                      are deficient, whether an absorption problem exists, and if dangerous heavy metals like lead,
                      mercury, or aluminum are present.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mineral Types Comparison */}
            <div>
              <h3 className="font-playfair text-xl font-bold text-stone-900 mb-5">Mineral Bioavailability: A Critical Distinction</h3>
              <div className="space-y-4">
                {mineralComparison.map((m) => (
                  <div key={m.type} className="bg-white rounded-xl p-5 border border-stone-100 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-stone-900 text-sm">{m.type}</h4>
                      <span className={`badge text-sm font-bold ${
                        m.absorption.startsWith('9') ? 'bg-forest-100 text-forest-800 border border-forest-200' :
                        m.absorption.startsWith('4') ? 'bg-gold-100 text-gold-800 border border-gold-200' :
                        'bg-red-50 text-red-700 border border-red-200'
                      }`}>
                        {m.absorption}
                      </span>
                    </div>
                    <div className="w-full bg-stone-100 rounded-full h-2 mb-3">
                      <div
                        className={`h-2 rounded-full ${
                          m.absorption.startsWith('9') ? 'bg-forest-600' :
                          m.absorption.startsWith('4') ? 'bg-gold-500' : 'bg-red-400'
                        }`}
                        style={{ width: m.absorption.startsWith('9') ? '90%' : m.absorption.startsWith('4') ? '50%' : '10%' }}
                      />
                    </div>
                    <p className="text-xs text-stone-500 mb-1"><strong>Source:</strong> {m.source}</p>
                    <p className="text-xs text-stone-600 leading-relaxed">{m.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soil Depletion */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="section-heading">The Soil Depletion Problem</h2>
            <p className="section-subheading mx-auto">
              Plants do not manufacture minerals — they pull them from the soil. If the soil is depleted,
              the plant is depleted, and so are you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-10">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <div className="w-12 h-12 bg-earth-700 rounded-xl flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-playfair font-bold text-lg text-stone-900 mb-3">U.S. Senate Document 264 (1936)</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                In 1936, the U.S. Senate officially warned that American farm soils were &quot;so impoverished in
                minerals that they could no longer provide adequate nutrition.&quot; This was 90 years ago — and
                industrial farming has only made the problem exponentially worse since then.
              </p>
            </div>
            <div className="bg-forest-50 border border-forest-200 rounded-2xl p-6">
              <div className="w-12 h-12 bg-forest-800 rounded-xl flex items-center justify-center mb-4">
                <FlaskConical className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-playfair font-bold text-lg text-stone-900 mb-3">The Electricity Switch (1882)</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Before September 4, 1882, all of humanity burned wood and coal for heat and light. The ashes
                (95–98% pure plant minerals) were returned to gardens and soil. When Thomas Edison&apos;s Pearl
                Street station went online, that daily mineral recycling stopped almost overnight.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <div className="w-12 h-12 bg-ocean-900 rounded-xl flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-playfair font-bold text-lg text-stone-900 mb-3">The Dam Effect</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                The world&apos;s most fertile lands were historically river floodplains. Annual floods deposited
                mineral-rich mountain silt onto farmland. Over 900,000 hydroelectric dams have permanently
                blocked this natural mineral replenishment, starving modern agriculture of trace elements.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-forest-900 to-ocean-950 text-white rounded-2xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="font-playfair text-xl font-bold mb-3">The Glacial Milk Secret of Longevity</h3>
                <p className="text-forest-200 text-sm leading-relaxed">
                  The Hunza people of Pakistan — who routinely lived to 120–140 years without doctors, surgeries,
                  or pharmaceutical drugs — irrigated their crops with &quot;glacial milk&quot;: mineral-laden water
                  carrying ground-up rock dust from mountain glaciers. Similarly, cultures living near active
                  volcanoes receive constant deposits of mineral-rich volcanic ash on their farmland — nature&apos;s
                  own supplement delivery system.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-playfair font-bold text-gold-400">120</div>
                <div className="text-forest-200 text-lg">Years Old — Without Doctors</div>
                <div className="text-forest-400 text-sm mt-1">The Hunza People of Pakistan</div>
                <p className="text-forest-300 text-xs mt-3 italic">
                  &quot;They had no cancer, no heart disease, no diabetes, and no Alzheimer&apos;s.
                  They simply had the 90 essential nutrients — naturally.&quot; — Dr. Wallach
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Good Foods / Bad Foods */}
      <section className="py-16 md:py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="section-heading">The Definitive Good Foods / Bad Foods List</h2>
            <p className="section-subheading mx-auto">
              Dr. Wallach&apos;s dietary recommendations are based on one principle: does this food support or
              destroy your ability to absorb the 90 essential nutrients?
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Bad Foods */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-red-100">
              <div className="bg-red-700 px-6 py-4 flex items-center gap-3">
                <XCircle className="w-6 h-6 text-white" />
                <h3 className="font-playfair font-bold text-xl text-white">Foods to Eliminate</h3>
              </div>
              <div className="p-4 space-y-3">
                {badFoods.map((f) => (
                  <div key={f.item} className="flex items-start gap-3 p-3 bg-red-50 rounded-xl border border-red-100">
                    <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-stone-900 text-sm">{f.item}</div>
                      <div className="text-stone-600 text-xs mt-0.5 leading-relaxed">{f.reason}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Good Foods */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-forest-100">
              <div className="bg-forest-800 px-6 py-4 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-white" />
                <h3 className="font-playfair font-bold text-xl text-white">Foods to Embrace</h3>
              </div>
              <div className="p-4 space-y-3">
                {goodFoods.map((f) => (
                  <div key={f.item} className="flex items-start gap-3 p-3 bg-forest-50 rounded-xl border border-forest-100">
                    <CheckCircle className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-stone-900 text-sm">{f.item}</div>
                      <div className="text-stone-600 text-xs mt-0.5 leading-relaxed">{f.reason}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exercise Warning */}
      <section className="py-12 bg-gradient-to-r from-earth-800 to-earth-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-gold-400" />
                <h3 className="font-playfair text-xl font-bold text-amber-100">
                  &quot;Exercise Without Supplementation is Suicide&quot; — Dr. Wallach
                </h3>
              </div>
              <p className="text-amber-100 text-sm leading-relaxed mb-4">
                Sweat is a concentrated soup of your body&apos;s essential minerals. Every workout session, every
                sauna, every physical exertion draws down your mineral reserves. Simply rehydrating with water
                — or even commercial sports drinks containing only one or two electrolytes — creates
                compounding deficiencies that manifest as hypertrophic cardiomyopathy, sudden cardiac death,
                muscle tears, and joint damage.
              </p>
              <p className="text-amber-100 text-sm leading-relaxed">
                Dr. Wallach attributes the sudden deaths of young, fit athletes to severe mineral depletion
                caused by intense sweating without proper replacement. He recommends a full-spectrum mineral
                sports drink containing all 90 nutrients — such as Rebound FX — before, during, and after
                any exercise. This is why the most disciplined athletes are also the most deficient if they
                are not supplementing correctly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Obesity / Pica */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-divider mb-5" />
          <h2 className="section-heading mb-5">Obesity Is Not a Calorie Problem — It&apos;s a Mineral Deficiency</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="prose-wallach space-y-4">
              <p>
                Dr. Wallach identifies a condition called <strong>Pica</strong> — the medical term for the compulsive
                consumption of non-food substances — as the true driver of obesity. When the body is deficient
                in trace minerals, the brain triggers uncontrollable hunger signals, compelling the individual
                to eat and eat in a desperate search for the missing nutrients.
              </p>
              <p>
                A body starving for chromium will crave sugar. A body starving for zinc will crave meat obsessively.
                A body starving for a combination of trace minerals will simply crave <em>everything</em>, driving
                massive caloric intake without ever achieving true satiety — because the caloric density of modern
                food has no relationship to its mineral density.
              </p>
            </div>
            <div className="bg-forest-50 border border-forest-100 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Search className="w-6 h-6 text-forest-700" />
                <h3 className="font-playfair font-bold text-lg text-forest-900">The Pica Mechanism</h3>
              </div>
              <ol className="space-y-3">
                {[
                  'Soil is depleted of trace minerals → food has almost no mineral content',
                  'Body detects mineral deficiency → brain triggers intense hunger signals',
                  'Individual overeats processed, calorie-dense but mineral-poor food',
                  'Deficiency persists despite caloric excess → hunger never resolves',
                  'Result: weight gain, fatigue, and continued cravings — misdiagnosed as "willpower failure"',
                  'Solution: Supplement with plant-derived colloidal minerals containing all 60 essential minerals → hunger normalizes naturally',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-forest-800 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                    <span className="text-stone-600 text-sm leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Preconception */}
      <section className="py-12 bg-cream-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-100 shadow-sm">
            <h3 className="font-playfair text-xl font-bold text-stone-900 mb-4">Preconception Nutrition & Birth Defects</h3>
            <p className="prose-wallach mb-4">
              Dr. Wallach makes a forceful claim: <strong>birth defects are never genetic — they are nutritional.</strong>{' '}
              Conditions like cleft palate, spina bifida, cerebral palsy, and even Down syndrome result from
              nutritional deficiencies in the embryo during the first critical weeks of development, when the
              mother&apos;s body lacks the raw materials to properly construct the baby&apos;s tissues.
            </p>
            <p className="prose-wallach">
              His protocol: both parents should saturate their bodies with all 90 essential nutrients for a
              minimum of <strong>six months prior to conception</strong>. This gives the embryo an abundant supply
              of every building block it needs to develop without compromise.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-forest-900 text-white">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h3 className="font-playfair text-2xl font-bold mb-4">Apply This to Specific Conditions</h3>
          <p className="text-forest-200 mb-6">See exactly how Dr. Wallach maps nutritional deficiencies to specific diseases — and the protocols that support the body&apos;s natural restoration.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/protocols" className="btn-secondary">Disease Protocols <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/products" className="btn-outline">View Supplements</Link>
          </div>
        </div>
      </section>
    </>
  );
}
