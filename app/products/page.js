import Link from 'next/link';
import { Package, Star, CheckCircle, ArrowRight, ShieldCheck, Leaf, Droplets, Zap, Phone } from 'lucide-react';

export const metadata = {
  title: '90 For Life Products — Youngevity Supplement Guide',
  description: 'The complete guide to Dr. Wallach\'s 90 For Life supplement line — foundation packs, secret sauces, and targeted formulas for every health goal.',
};

const foundationPacks = [
  {
    name: 'Healthy Body Start Pack 2.0',
    tagline: 'The Foundation — All 90 Nutrients in One Bundle',
    color: 'from-forest-800 to-forest-950',
    badge: 'Most Popular',
    badgeColor: 'bg-gold-600',
    components: [
      {
        name: 'Beyond Tangy Tangerine 2.0',
        role: 'Multi-vitamin/mineral powder',
        desc: 'The centerpiece of the 90 For Life system. A comprehensive blend of vitamins, amino acids, antioxidants, and plant-derived minerals in a highly bioavailable liquid/powder format. Contains 115 nutrients in each serving.',
      },
      {
        name: 'Beyond OsteoFx Plus',
        role: 'Bone & mineral formula',
        desc: 'Plant-derived calcium and the full spectrum of bone co-factors: magnesium, boron, silica, vitamin D3, vitamin K2, and 60+ trace minerals. Designed to reverse osteoporosis at the cellular level — not just add calcium.',
      },
      {
        name: 'Ultimate EFA Plus',
        role: 'Essential Fatty Acids (Omega-3, 6, 9)',
        desc: 'A pharmaceutical-grade blend of Omega-3 (EPA/DHA), Omega-6 (GLA), and Omega-9 fatty acids. Critical for brain myelin maintenance, cardiovascular health, hormone production, and cellular membrane integrity.',
      },
    ],
    forWho: 'Everyone — this is the non-negotiable starting point for any nutritional health program.',
  },
  {
    name: 'Healthy Brain & Heart Pack',
    tagline: 'Cardiovascular & Neurological Protection Protocol',
    color: 'from-ocean-800 to-ocean-950',
    badge: 'Cardiovascular',
    badgeColor: 'bg-ocean-800',
    components: [
      {
        name: 'Ultimate Daily Classic',
        role: 'Blood pressure & circulation support',
        desc: 'Contains the mineral co-factors that support healthy blood pressure, kidney filtration, and cerebrovascular circulation. Includes the full selenium complex for cardiac muscle support.',
      },
      {
        name: 'Ultimate Selenium',
        role: 'Cardiac & immune protection',
        desc: 'Therapeutic-strength selenium complex. Selenium is the primary antioxidant mineral for heart muscle protection, thyroid hormone conversion, immune function, and DNA repair. Deficiency is directly linked to sudden cardiac death.',
      },
      {
        name: 'Ultimate EFA Plus',
        role: 'Omega-3 cardiovascular support',
        desc: 'High-dose Omega-3 supplementation reduces inflammatory markers, supports arterial elasticity, and provides the fatty acid cofactors for cardiac and neurological membrane health.',
      },
    ],
    forWho: 'Anyone with cardiovascular wellness goals, irregular heart rhythm concerns, blood pressure challenges, or a family history of heart issues.'
  },
  {
    name: 'Healthy Bone & Joint Pack',
    tagline: 'Structural Integrity — Bone, Cartilage, Ligaments & Tendons',
    color: 'from-earth-700 to-earth-900',
    badge: 'Bone & Joint',
    badgeColor: 'bg-earth-700',
    components: [
      {
        name: 'Beyond OsteoFx Plus',
        role: 'Plant-derived calcium complex',
        desc: 'Full-spectrum bone mineral matrix: plant-derived calcium, magnesium, phosphorus, boron, silica, vitamin D3, and K2 — all the co-factors needed for calcium to actually reach the bone rather than calcify arteries.',
      },
      {
        name: 'Gluco-Gel',
        role: 'Cartilage & ligament repair',
        desc: 'Contains glucosamine sulfate, MSM (methylsulfonylmethane), chondroitin sulfate, and collagen co-factors — the raw materials the body uses to build and repair cartilage, ligaments, and tendon tissue. The Theo Ratliff recovery protocol.',
      },
      {
        name: 'Rebound FX',
        role: 'Mineral sports drink & joint support',
        desc: 'A comprehensive mineral replacement sports drink containing 100 nutrients. Supports mineral replenishment after exercise, joint lubrication, and tissue repair. Featured on the canister with NBA star Theo Ratliff.',
      },
    ],
    forWho: 'Anyone experiencing joint discomfort, athletes, aging adults, and those dealing with bone loss, bone spurs, or mobility challenges.'
  },
  {
    name: 'Healthy Blood Sugar Pack',
    tagline: 'Chromium & Vanadium — The Blood Sugar Support Protocol',
    color: 'from-purple-800 to-purple-950',
    badge: 'Blood Sugar',
    badgeColor: 'bg-purple-700',
    components: [
      {
        name: 'Sweet Eze',
        role: 'Chromium/Vanadium insulin-support formula',
        desc: 'The targeted blood sugar support formula. Contains therapeutic-dose chromium and vanadium — the two minerals Dr. Wallach identifies as the core deficiencies behind blood sugar regulation challenges. Also includes cinnamon extract and gymnema sylvestre for glucose support.'
      },
      {
        name: 'Beyond Tangy Tangerine 2.0',
        role: 'Full-spectrum nutritional support',
        desc: 'Provides the complete nutritional foundation while Sweet Eze provides the targeted blood sugar minerals. The combination addresses deficiency at both the specific (chromium/vanadium) and systemic (all 90 nutrients) level.'
      },
      {
        name: 'Plant-Derived Colloidal Minerals',
        role: '60 trace minerals in liquid form',
        desc: 'The broad-spectrum mineral foundation that includes chromium, vanadium, and all 58 other essential minerals in plant-derived colloidal form — the most bioavailable source available.',
      },
    ],
    forWho: 'Anyone managing blood sugar levels, those with metabolic wellness concerns, and anyone experiencing blood sugar irregularities.'
  },
];

const secretSauces = [
  {
    name: 'Gluco-Gel',
    icon: '🦴',
    target: 'Cartilage, Ligaments, Bone Matrix',
    color: 'border-earth-200 bg-earth-50',
    headerColor: 'bg-earth-700',
    desc: 'The joint and connective tissue support formula. Glucosamine sulfate provides the raw material for synovial fluid and cartilage matrix. MSM delivers organic sulfur for collagen cross-linking. Chondroitin attracts water into cartilage to maintain cushioning. Essential for any bone or joint wellness protocol.',
    keyNutrients: ['Glucosamine Sulfate 1500mg', 'MSM (Methylsulfonylmethane)', 'Chondroitin Sulfate', 'Collagen co-factors'],
  },
  {
    name: 'Sweet Eze',
    icon: '🩸',
    target: 'Blood Sugar, Insulin Sensitivity',
    color: 'border-purple-200 bg-purple-50',
    headerColor: 'bg-purple-700',
    desc: 'The Chromium + Vanadium blood sugar formula. Dr. Wallach\'s go-to recommendation for anyone with blood sugar challenges or metabolic wellness concerns. Chromium activates insulin receptors; vanadium mimics insulin\'s action directly. Also contains cinnamon extract and gymnema sylvestre for synergistic glucose support.',
    keyNutrients: ['Chromium (Picolinate)', 'Vanadium (Sulfate)', 'Gymnema Sylvestre', 'Cinnamon Bark Extract'],
  },
  {
    name: 'Ultimate Selenium',
    icon: '❤️',
    target: 'Heart, Immune System, Cancer Prevention',
    color: 'border-red-200 bg-red-50',
    headerColor: 'bg-red-700',
    desc: 'Therapeutic-dose selenium complex in multiple bioavailable forms. Selenium is the primary mineral for cardiac muscle protection, immune system amplification (NK cell activity), thyroid hormone activation, and DNA repair enzyme function. Dr. Wallach\'s legal victory over the FDA established the right to claim selenium\'s cancer risk reduction properties.',
    keyNutrients: ['Selenomethionine', 'Selenium Glycinate', 'Selenium Citrate', 'Vitamin E (as cofactor)'],
  },
  {
    name: 'Ultimate Daily Classic',
    icon: '🧠',
    target: 'Blood Pressure, Kidney Function, Circulation',
    color: 'border-blue-200 bg-blue-50',
    headerColor: 'bg-blue-700',
    desc: 'The blood pressure and circulation formula. Contains the mineral co-factors that support kidney filtration efficiency (critical for blood pressure regulation), cerebrovascular blood flow, and the adrenal mineral balance needed for healthy vasomotor tone. Recommended for hypertension, kidney function, and brain circulation.',
    keyNutrients: ['Potassium complex', 'Magnesium complex', 'B-vitamin complex', 'Selenium, Chromium, Zinc'],
  },
  {
    name: 'Ultimate Enzymes',
    icon: '🫁',
    target: 'Digestion, Mineral Absorption',
    color: 'border-teal-200 bg-teal-50',
    headerColor: 'bg-teal-700',
    desc: 'Dr. Wallach\'s complete digestive enzyme formula. Contains ox bile (critical for fat-soluble vitamin absorption), pepsin (protein digestion), and a full enzyme blend. The ox bile component is unique — it replaces the bile production capacity that declines with age, directly enabling absorption of vitamins A, D, E, K, and all fat-soluble nutrients.',
    keyNutrients: ['Ox Bile Extract 500mg', 'Pepsin (from porcine)', 'Protease, Lipase, Amylase', 'Bromelain, Papain'],
  },
  {
    name: 'Rebound FX',
    icon: '⚡',
    target: 'Athletic Recovery, Mineral Replacement',
    color: 'border-green-200 bg-green-50',
    headerColor: 'bg-green-700',
    desc: 'The mineral-replacement sports drink containing 100 nutrients. The antidote to the athlete death problem Dr. Wallach warns about. Contains the full electrolyte and mineral profile lost through sweat, plus energy co-factors. NBA star Theo Ratliff features on the canister after recovering from a career-ending joint condition using this protocol.',
    keyNutrients: ['60 Plant-Derived Minerals', 'Full electrolyte complex', 'B-vitamins', 'CoQ10, L-Carnitine'],
  },
  {
    name: 'Biolumin Probiotics',
    icon: '🦠',
    target: 'Gut Flora, Immune Axis, Absorption',
    color: 'border-orange-200 bg-orange-50',
    headerColor: 'bg-orange-700',
    desc: 'A multi-strain probiotic formula for rebuilding the gut microbiome — the critical foundation for nutrient absorption. Particularly important after any antibiotic use, for autoimmune conditions, and for anyone recovering from gluten-induced gut damage. The gut-immune axis means probiotic health directly impacts systemic immunity.',
    keyNutrients: ['Multi-strain Lactobacillus', 'Bifidobacterium strains', 'Prebiotic fiber (FOS)', '50+ billion CFU per serving'],
  },
  {
    name: 'I-26 Hyperimmune Egg',
    icon: '🧬',
    target: 'Brain Myelin, MS, Neurological Rebuilding',
    color: 'border-yellow-200 bg-yellow-50',
    headerColor: 'bg-yellow-700',
    desc: 'Perhaps the most unique product in the Youngevity line. I-26 is a hyperimmune egg protein containing specific antibody fractions that physically support the rebuilding of myelin — the white matter of the brain and spinal cord. Dr. Wallach\'s primary recommendation for MS, Parkinson\'s, Alzheimer\'s, and other neurological conditions involving demyelination.',
    keyNutrients: ['Hyperimmune Egg Powder', 'IgY antibody fractions', 'Phosphatidylcholine', 'Sphingomyelin (myelin precursor)'],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-950 to-forest-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="badge bg-gold-600/30 border border-gold-500/40 text-gold-300 mb-4">
              90 For Life Products
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              The Youngevity Supplement Line
            </h1>
            <p className="text-forest-200 text-lg leading-relaxed">
              Dr. Wallach designed the Youngevity product line to deliver all 90 essential nutrients
              in plant-derived, highly bioavailable form — with targeted &quot;secret sauce&quot; formulas for
              specific deficiency conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Plant-Derived */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-start gap-3">
            <Leaf className="w-5 h-5 text-forest-700 flex-shrink-0 mt-0.5" />
            <p className="text-stone-700 text-sm leading-relaxed">
              <strong>Why Plant-Derived Colloidal Minerals?</strong> Metallic minerals (most supplements) are only 3–12% absorbable. Plant-derived colloidal minerals — harvested from 70,000-year-old ancient plant deposits — are up to <strong>90%+ bioavailable</strong> because they arrive pre-processed by plant biology into particles small enough (0.001 microns) to pass directly through cell walls.
            </p>
          </div>
        </div>
      </div>

      {/* Foundation Packs */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="section-heading">Foundation Packs</h2>
            <p className="section-subheading mx-auto">
              Start here. Every health protocol begins with one of these comprehensive bundles,
              each designed around a specific health focus while delivering all 90 essential nutrients.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {foundationPacks.map((pack) => (
              <div key={pack.name} className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className={`bg-gradient-to-r ${pack.color} p-6`}>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-playfair font-bold text-xl text-white leading-tight">{pack.name}</h3>
                    <span className={`${pack.badgeColor} text-white text-xs px-2.5 py-1 rounded-full font-semibold flex-shrink-0`}>{pack.badge}</span>
                  </div>
                  <p className="text-white/70 text-sm">{pack.tagline}</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4 mb-5">
                    {pack.components.map((comp) => (
                      <div key={comp.name} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-forest-100 border border-forest-200 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Package className="w-4 h-4 text-forest-700" />
                        </div>
                        <div>
                          <div className="font-semibold text-stone-900 text-sm">{comp.name}</div>
                          <div className="text-xs text-earth-700 font-medium mb-1">{comp.role}</div>
                          <p className="text-stone-500 text-xs leading-relaxed">{comp.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-forest-50 border border-forest-100 rounded-xl p-3">
                    <div className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
                      <p className="text-forest-800 text-xs leading-relaxed"><strong>Best For:</strong> {pack.forWho}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coach CTA */}
      <section className="py-10 bg-ocean-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-ocean-800/60 border border-ocean-700 rounded-2xl px-8 py-7">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-ocean-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-white font-playfair font-bold text-xl leading-tight">You Are Not Alone</p>
                <p className="text-ocean-200 text-sm mt-0.5">Guidance from a Certified Wholistic Health Coach is in reach — get help choosing the right protocol for you.</p>
              </div>
            </div>
            <a
              href="tel:8559493377"
              className="flex items-center gap-2.5 bg-earth-600 hover:bg-earth-500 text-white font-bold px-7 py-3.5 rounded-xl text-xl transition-colors shadow-lg whitespace-nowrap flex-shrink-0"
            >
              <Phone className="w-5 h-5" />
              855-949-3377
            </a>
          </div>
        </div>
      </section>

      {/* Secret Sauces */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="section-heading">The &quot;Secret Sauces&quot;</h2>
            <p className="section-subheading mx-auto">
              These targeted add-on formulas address specific deficiency conditions. Stack them on top
              of a Foundation Pack for condition-specific nutritional support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {secretSauces.map((sauce) => (
              <div key={sauce.name} className={`rounded-2xl border ${sauce.color} overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300`}>
                <div className={`${sauce.headerColor} px-4 py-3 flex items-center gap-2`}>
                  <span className="text-xl">{sauce.icon}</span>
                  <h3 className="font-playfair font-bold text-white text-base">{sauce.name}</h3>
                </div>
                <div className="p-4">
                  <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">{sauce.target}</div>
                  <p className="text-stone-600 text-xs leading-relaxed mb-3">{sauce.desc}</p>
                  <div>
                    <div className="text-xs font-semibold text-stone-700 mb-1.5">Key Nutrients:</div>
                    <ul className="space-y-1">
                      {sauce.keyNutrients.map((n) => (
                        <li key={n} className="flex items-center gap-1.5 text-xs text-stone-600">
                          <CheckCircle className="w-3 h-3 text-forest-600 flex-shrink-0" />
                          {n}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Start */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-forest-900 to-ocean-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-4">How to Build Your Protocol</h2>
          <p className="text-forest-200 mb-10 text-lg">Follow this three-step approach to building a complete nutritional program.</p>
          <div className="grid md:grid-cols-3 gap-6 text-left mb-10">
            {[
              {
                step: '1',
                title: 'Start with a Foundation Pack',
                desc: 'Choose the pack that matches your primary health concern. Every pack delivers all 90 essential nutrients as the baseline.',
                icon: Droplets,
              },
              {
                step: '2',
                title: 'Eliminate the Bad Foods',
                desc: 'Remove all gluten, fried oils, carbonated beverages, and processed meats. This step is non-negotiable — supplementing while consuming these foods reduces efficacy dramatically.',
                icon: ShieldCheck,
              },
              {
                step: '3',
                title: 'Add Targeted Secret Sauces',
                desc: 'Stack condition-specific formulas (Sweet Eze, Gluco-Gel, Ultimate Selenium) based on your individual health goals and deficiency profile.',
                icon: Zap,
              },
            ].map((step) => (
              <div key={step.step} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-5">
                <div className="w-10 h-10 bg-earth-700 rounded-full flex items-center justify-center mb-3">
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <h3 className="font-playfair font-bold text-base mb-2">{step.title}</h3>
                <p className="text-forest-300 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/protocols" className="inline-flex items-center justify-center gap-2 bg-earth-600 hover:bg-earth-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
              Find Your Protocol <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/philosophy" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
              Learn Why These Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
