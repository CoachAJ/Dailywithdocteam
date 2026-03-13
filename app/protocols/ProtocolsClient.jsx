'use client';

import { useState } from 'react';
import { ChevronDown, Pill, AlertCircle, CheckCircle2, XCircle, Heart, Brain, Activity, Wind, Bone, Eye, Zap } from 'lucide-react';

const protocolCategories = [
  {
    category: 'Cardiovascular & Heart',
    icon: Heart,
    iconBg: 'bg-red-100',
    iconColor: 'text-red-700',
    protocols: [
      {
        title: 'Congestive Heart Failure',
        subtitle: 'Vitamin B1 (Thiamine) Deficiency',
        deficiency: 'Vitamin B1 (Thiamine)',
        mechanism: 'The heart muscle requires Thiamine (B1) to convert carbohydrates into cellular energy (ATP). Without sufficient B1, the heart muscle weakens and loses pumping efficiency — leading to fluid accumulation in the lungs and extremities.',
        solution: 'Ultimate Daily Classic, Beyond Tangy Tangerine 2.0, B-complex supplementation',
        avoid: 'Alcohol, refined carbohydrates, raw fish (which destroys B1)',
      },
      {
        title: 'Sudden Cardiac Death',
        subtitle: 'Selenium Deficiency',
        deficiency: 'Selenium',
        mechanism: 'Selenium is required for glutathione peroxidase — the enzyme that protects the heart muscle from oxidative damage. A selenium-deficient heart is vulnerable to sudden arrhythmia, particularly under physical stress.',
        solution: 'Ultimate Selenium (2mg/day therapeutic), Beyond Tangy Tangerine 2.0, Healthy Brain & Heart Pack',
        avoid: 'Strenuous exercise without selenium supplementation',
      },
      {
        title: 'Aneurysms & Varicose Veins',
        subtitle: 'Copper Deficiency',
        deficiency: 'Copper',
        mechanism: 'Copper is the cofactor for lysyl oxidase — the enzyme that cross-links collagen and elastin fibers in arterial walls. Without copper, vessel walls become fragile. Gray hair is an early warning sign of the same deficiency.',
        solution: 'Healthy Brain & Heart Pack, Ultimate Daily Classic, plant-derived colloidal minerals',
        avoid: 'High-dose zinc without balancing copper (zinc competes with copper absorption)',
      },
      {
        title: 'Atrial Fibrillation (AFib)',
        subtitle: 'Vagus Nerve Compression from Skull Osteoporosis',
        deficiency: '60 Minerals (Calcium, Magnesium, Copper, others)',
        mechanism: 'Osteoporosis of the skull — caused by chronic mineral deficiency — causes skull bones to thicken as the parathyroid pulls calcium to compensate. This physically compresses the 10th cranial nerve (Vagus nerve), which directly controls heart rhythm.',
        solution: 'Healthy Bone & Joint Pack (OsteoPak), 60 plant-derived colloidal minerals, Magnesium supplementation',
        avoid: 'Carbonated beverages (leach calcium), gluten (destroys absorption), low-salt diets',
      },
    ],
  },
  {
    category: 'Neurological & Brain Health',
    icon: Brain,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-700',
    protocols: [
      {
        title: "Alzheimer's Disease",
        subtitle: 'Cholesterol Starvation of the Brain',
        deficiency: 'Dietary Cholesterol, B12, Omega-3, Selenium',
        mechanism: 'The brain and spinal cord white matter (myelin sheath) is composed of up to 100% cholesterol. Low-fat diets and statin drugs have systematically starved the brain of its primary structural material. The Alzheimer\'s epidemic tracks precisely with the rise of low-fat dietary dogma.',
        solution: 'I-26 Hyperimmune Egg, Synaptiv, 6–10 soft-yolk eggs daily, Ultimate EFA Plus, Healthy Brain & Heart Pack',
        avoid: 'Statin drugs (consult physician before changing), low-fat diets, bottled oils',
      },
      {
        title: 'Multiple Sclerosis (MS)',
        subtitle: 'Myelin Demyelination — Cholesterol & Mineral Deficiency',
        deficiency: 'Dietary Cholesterol, Selenium, B12, Omega-3',
        mechanism: 'MS is characterized by progressive destruction of the myelin sheath surrounding nerve fibers. Without adequate dietary cholesterol and synthesis cofactors, the nervous system cannot repair this damage. Gluten sensitivity frequently drives upstream gut absorption failure.',
        solution: 'I-26 Hyperimmune Egg, Synaptiv, 6–10 eggs daily, strict gluten-free diet, Ultimate EFA Plus',
        avoid: 'All gluten, low-fat diets, statin drugs, fried foods',
      },
      {
        title: "Parkinson's Disease",
        subtitle: 'Dopamine Pathway Disruption — Mineral Deficiency',
        deficiency: 'Manganese, Iron, B vitamins, essential fatty acids',
        mechanism: 'Dopamine-producing neurons in the substantia nigra require specific mineral cofactors. Their progressive death corresponds to long-term nutritional deficiency patterns. Cholesterol-lowering interventions also remove critical precursors for neuronal membrane integrity.',
        solution: 'Synaptiv, I-26 Hyperimmune Egg, plant-derived colloidal minerals, Ultimate EFA Plus, 6–10 soft-yolk eggs daily',
        avoid: 'Statin drugs, low-fat/low-cholesterol diets, gluten, bottled oils',
      },
    ],
  },
  {
    category: 'Metabolic & Endocrine',
    icon: Activity,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
    protocols: [
      {
        title: 'Type 2 Diabetes',
        subtitle: 'Chromium & Vanadium Deficiency',
        deficiency: 'Chromium, Vanadium',
        mechanism: 'Type 2 Diabetes is a deficiency of two trace minerals: chromium (essential cofactor for insulin receptor sensitivity) and vanadium (acts as an insulin mimetic, directly facilitating glucose transport into cells). These minerals are virtually absent from depleted modern soils.',
        solution: 'Sweet Eze (Chromium/Vanadium formula), Healthy Blood Sugar Pack, plant-derived colloidal minerals',
        avoid: 'Sugar, refined carbohydrates, fruit juices, carbonated beverages, gluten',
      },
      {
        title: 'Obesity & Metabolic Syndrome',
        subtitle: 'Mineral Deficiency / Pica Response',
        deficiency: 'Multiple trace minerals (primarily Chromium, Vanadium, Zinc)',
        mechanism: 'Uncontrollable hunger is a physiological Pica response to mineral deficiency. When the body lacks trace minerals, the brain drives compulsive eating as a search mechanism. Caloric restriction without mineral replacement fails permanently because it ignores the root cause.',
        solution: 'Plant-derived colloidal minerals, Beyond Tangy Tangerine 2.0, Sweet Eze, Healthy Body Start Pack 2.0',
        avoid: 'Caloric restriction without simultaneous mineral supplementation, sugar, gluten',
      },
      {
        title: 'Hypothyroidism',
        subtitle: 'Iodine & Selenium Deficiency',
        deficiency: 'Iodine, Selenium, Zinc',
        mechanism: 'Thyroid hormones T3 and T4 require iodine atoms as their core structural component. Selenium-dependent deiodinase enzymes convert inactive T4 to active T3. Without both minerals, thyroid function collapses — driving fatigue, weight gain, and cold intolerance.',
        solution: 'Plant-derived colloidal minerals (containing iodine), Ultimate Selenium, Beyond Tangy Tangerine 2.0',
        avoid: 'Gluten (triggers autoimmune thyroid attack in Hashimoto\'s), excess raw cruciferous vegetables',
      },
    ],
  },
  {
    category: 'Digestive & Autoimmune',
    icon: Wind,
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-700',
    protocols: [
      {
        title: 'Acid Reflux / GERD',
        subtitle: 'Low Stomach Acid (Hypochlorhydria) — Not Excess Acid',
        deficiency: 'Sodium Chloride (Salt), Zinc, B vitamins',
        mechanism: 'Stomach chief cells require sodium chloride to manufacture hydrochloric acid. Low-salt diets suppress acid production. Low stomach acid causes food to ferment, creating organic acids that back-flush into the esophagus — misdiagnosed as excess acid.',
        solution: 'Himalayan or sea salt with meals, Ultimate Enzymes (ox bile and pepsin), Biolumin Probiotics',
        avoid: 'Low-salt diets, proton pump inhibitors long-term, gluten',
      },
      {
        title: "Crohn's Disease / IBS / Lupus",
        subtitle: 'Gluten-Triggered Contact Enteritis',
        deficiency: 'All 90 nutrients (due to absorption destruction)',
        mechanism: 'These conditions share a common root: gluten sensitivity destroying intestinal villi — the absorption surface of the gut. When villi are flattened, the body cannot absorb minerals, vitamins, or amino acids regardless of diet quality.',
        solution: '100% strict gluten-free diet, Ultimate Enzymes, Biolumin Probiotics, Healthy Body Start Pack 2.0',
        avoid: 'Any trace of gluten, NSAIDs',
      },
      {
        title: 'SIDS (Sudden Infant Death Syndrome)',
        subtitle: 'Severe Nutritional Deficiency in Infants',
        deficiency: 'Selenium, B vitamins, essential minerals',
        mechanism: 'SIDS is a severe nutritional deficiency — not positional suffocation. Selenium and Vitamin E deficiency in the infant causes the same sudden cardiac death pathology Dr. Wallach documented in animals (white muscle disease in lambs, mulberry heart disease in pigs).',
        solution: 'Maternal nutritional saturation during pregnancy and breastfeeding. Infant formulas with all essential nutrients.',
        avoid: 'Deficient infant formulas, maternal nutritional depletion during pregnancy',
      },
    ],
  },
  {
    category: 'Bone, Joint & Structural',
    icon: Bone,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
    protocols: [
      {
        title: 'Osteoporosis & Bone Loss',
        subtitle: '60-Mineral Deficiency — Not Just Calcium',
        deficiency: 'Calcium, Magnesium, Phosphorus, Boron, Silica, Copper, Manganese, and 53 other minerals',
        mechanism: 'Bone is a matrix of 12+ minerals integrated in a collagen framework. Supplementing calcium carbonate (Tums) without co-factors is ineffective. The parathyroid gland responds to systemic mineral deficiency by pulling calcium from bone — appearing as elevated serum calcium while bones hollow out.',
        solution: 'Healthy Bone & Joint Pack, OsteoFx Plus (plant-derived calcium + co-factors), Gluco-Gel',
        avoid: 'Carbonated beverages, gluten, low-fat dairy',
      },
      {
        title: 'Arthritis (Osteo & Rheumatoid)',
        subtitle: 'Collagen Matrix Destruction — Mineral & EFA Deficiency',
        deficiency: 'Glucosamine, Chondroitin, Calcium, Magnesium, Selenium, Omega-3',
        mechanism: 'Cartilage requires a continuous supply of glucosamine sulfate, mineral cofactors, and Omega-3 fatty acids for repair. Rheumatoid arthritis carries an additional autoimmune component frequently triggered by gluten sensitivity and leaky gut.',
        solution: 'Healthy Bone & Joint Pack, Gluco-Gel (glucosamine + MSM + chondroitin), Rebound FX, strict gluten-free diet',
        avoid: 'Nightshade vegetables (tomatoes, peppers, potatoes) exacerbate inflammation, gluten, fried foods',
      },
      {
        title: 'Kidney Stones & Bone Spurs',
        subtitle: 'The Calcium Paradox — Increase Calcium, Don\'t Restrict',
        deficiency: 'Calcium, Magnesium, Boron, all 60 minerals',
        mechanism: 'Kidney stones and bone spurs are NOT caused by too much dietary calcium. They form because the parathyroid pulls calcium from bones to compensate for blood calcium deficiency — and that mobilized calcium crystallizes in kidneys and joints.',
        solution: 'Increase plant-derived calcium with OsteoFx Plus. Healthy Bone & Joint Pack. Magnesium (softens existing stones).',
        avoid: 'Restricting calcium intake, carbonated beverages, vitamin D in isolation without K2',
      },
    ],
  },
  {
    category: 'Vision, Hearing & Sensory',
    icon: Eye,
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-700',
    protocols: [
      {
        title: "Tinnitus, Bell's Palsy & Trigeminal Neuralgia",
        subtitle: 'Cranial Nerve Compression from Skull Osteoporosis',
        deficiency: '60 Minerals (Calcium, Magnesium, Copper, Boron)',
        mechanism: 'These conditions share one structural cause: skull osteoporosis causing paradoxical thickening that compresses cranial nerves — the 7th (facial/Bell\'s Palsy), 5th (trigeminal neuralgia), and 8th (acoustic/tinnitus).',
        solution: 'Healthy Bone & Joint Pack, OsteoFx Plus, plant-derived colloidal minerals (full-spectrum)',
        avoid: 'All mineral-depleting foods and beverages (carbonated drinks, gluten, alcohol)',
      },
      {
        title: 'Macular Degeneration & Vision Loss',
        subtitle: 'Lutein, Zeaxanthin, Zinc & Selenium Deficiency',
        deficiency: 'Lutein, Zeaxanthin, Zinc, Selenium, Vitamins A, C, E',
        mechanism: 'The macula requires specific antioxidant carotenoids to filter damaging blue light, and zinc plus selenium to maintain enzymatic repair capacity. Modern diets strip these nutrients through poor soil quality and processed food consumption.',
        solution: 'Beyond Tangy Tangerine 2.0, Ultimate Selenium, plant-derived colloidal minerals, 6 eggs daily',
        avoid: 'Smoking, sun exposure without UV protection, sugar, processed foods',
      },
    ],
  },
  {
    category: 'Energy, Skin & Hair',
    icon: Zap,
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-700',
    protocols: [
      {
        title: 'Chronic Fatigue & Adrenal Exhaustion',
        subtitle: 'B-Vitamin, Iron, Magnesium & Mineral Deficiency',
        deficiency: 'B vitamins (especially B12, B5), Iron, Magnesium, CoQ10',
        mechanism: 'Cellular energy production (ATP synthesis) depends on multiple B vitamins, magnesium, and iron as essential cofactors. Chronic deficiency starves cells of energy production capacity — creating fatigue that no amount of sleep resolves.',
        solution: 'Beyond Tangy Tangerine 2.0, Ultimate Daily Classic, plant-derived colloidal minerals, Rebound FX',
        avoid: 'Caffeine dependency (depletes B vitamins), sugar, gluten',
      },
      {
        title: 'Gray / White Hair',
        subtitle: 'Copper Deficiency — A Serious Warning Sign',
        deficiency: 'Copper, Pantothenic Acid (B5), PABA',
        mechanism: 'Melanin production in hair follicles requires copper-dependent tyrosinase enzyme. Gray or white hair signals systemic copper deficiency — the same deficiency that simultaneously weakens arterial walls and raises aneurysm risk.',
        solution: 'Plant-derived colloidal minerals (high copper content), Beyond Tangy Tangerine 2.0, Ultimate Daily Classic',
        avoid: 'High-dose zinc without copper (zinc blocks copper absorption), carbonated beverages',
      },
    ],
  },
];

function ProtocolCard({ protocol }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm hover:border-forest-300 transition-colors">
      <button
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <div>
          <div className="font-semibold text-stone-900 text-sm md:text-base">{protocol.title}</div>
          <div className="text-xs text-earth-700 font-medium mt-0.5">{protocol.subtitle}</div>
        </div>
        <ChevronDown className={`w-5 h-5 text-stone-400 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 border-t border-stone-100 pt-4 space-y-4">
          <div className="flex items-start gap-2.5 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wide">Root Deficiency: </span>
              <span className="text-sm text-amber-900">{protocol.deficiency}</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">The Mechanism</h4>
            <p className="text-stone-600 text-sm leading-relaxed">{protocol.mechanism}</p>
          </div>

          <div className="flex items-start gap-2.5 p-3 bg-forest-50 border border-forest-200 rounded-lg">
            <CheckCircle2 className="w-4 h-4 text-forest-700 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-forest-800 uppercase tracking-wide">Nutritional Support: </span>
              <span className="text-sm text-forest-900">{protocol.solution}</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 bg-red-50 border border-red-200 rounded-lg">
            <XCircle className="w-4 h-4 text-red-700 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-red-800 uppercase tracking-wide">Avoid: </span>
              <span className="text-sm text-red-900">{protocol.avoid}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProtocolsClient() {
  const categories = protocolCategories;
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div>
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(i)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
              activeCategory === i
                ? 'bg-forest-800 text-white border-forest-800 shadow-md'
                : 'bg-white text-stone-600 border-stone-200 hover:border-forest-300 hover:text-forest-700'
            }`}
          >
            <cat.icon className="w-4 h-4" />
            {cat.category}
          </button>
        ))}
      </div>

      {/* Active category protocols */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${categories[activeCategory].iconBg}`}>
            {(() => {
              const Icon = categories[activeCategory].icon;
              return <Icon className={`w-5 h-5 ${categories[activeCategory].iconColor}`} />;
            })()}
          </div>
          <div>
            <h2 className="font-playfair font-bold text-xl text-stone-900">{categories[activeCategory].category}</h2>
            <p className="text-xs text-stone-500">{categories[activeCategory].protocols.length} conditions</p>
          </div>
        </div>

        <div className="space-y-3">
          {categories[activeCategory].protocols.map((p, i) => (
            <ProtocolCard key={i} protocol={p} />
          ))}
        </div>
      </div>

      {/* Quick reference legend */}
      <div className="mt-8 bg-white rounded-xl p-5 border border-stone-100">
        <div className="flex items-center gap-2 mb-3">
          <Pill className="w-4 h-4 text-stone-500" />
          <span className="text-sm font-semibold text-stone-600">How to Read These Protocols</span>
        </div>
        <div className="grid sm:grid-cols-3 gap-3 text-xs">
          <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-amber-400 flex-shrink-0" /> <span className="text-stone-600"><strong>Root Deficiency</strong> — the missing nutrient</span></div>
          <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-forest-600 flex-shrink-0" /> <span className="text-stone-600"><strong>Nutritional Support</strong> — what to add</span></div>
          <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-500 flex-shrink-0" /> <span className="text-stone-600"><strong>Avoid</strong> — what depletes further</span></div>
        </div>
      </div>
    </div>
  );
}
