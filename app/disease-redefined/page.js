import Link from 'next/link';
import { ArrowRight, Brain, Heart, Droplets, Baby, AlertTriangle, Zap } from 'lucide-react';

export const metadata = {
  title: 'Redefining Disease — Wallach\'s Specific Mechanisms',
  description: 'Dr. Wallach\'s exact mechanical explanations for Alzheimer\'s, AFib, acid reflux, SIDS, gray hair, kidney stones, and more — all rooted in nutritional science.',
};

const redefinitions = [
  {
    icon: Brain,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-700',
    headerBg: 'bg-gradient-to-r from-purple-800 to-purple-950',
    condition: "Alzheimer's, MS & Parkinson's",
    tag: 'Neurological',
    tagColor: 'bg-purple-600',
    conventional: 'Progressive, incurable neurological degeneration with genetic and environmental risk factors.',
    wallach: 'These three conditions share one mechanism: the brain and spinal cord\'s white matter (myelin sheath) is composed of up to 100% cholesterol. Beginning in the 1960s, the medical establishment launched a campaign against dietary cholesterol, systematically teaching people to eliminate eggs, animal fats, and cholesterol-rich foods from their diets. Simultaneously, statin drugs — the most widely prescribed pharmaceutical class in history — were engineered specifically to suppress cholesterol production.',
    mechanism: [
      'Myelin requires cholesterol as its primary structural component',
      'Low-fat diets and statins suppress the brain\'s primary building material',
      'Myelin cannot self-repair without adequate dietary cholesterol',
      'Progressive demyelination manifests as Alzheimer\'s, MS, or Parkinson\'s depending on which neural pathways are affected',
      'The Alzheimer\'s epidemic tracked precisely with the rise of low-fat dietary recommendations in the 1980s',
    ],
    protocol: '6–10 soft-yolk eggs daily (never hard-cooked — cooking oxidizes the cholesterol), I-26 Hyperimmune Egg, Synaptiv, Ultimate EFA Plus, plant-derived colloidal minerals. Eliminate all statin drugs under physician supervision.',
    redFlag: 'The first statin drug (Mevacor) was approved in 1987. Alzheimer\'s diagnoses began their exponential rise in the early 1990s.',
  },
  {
    icon: Heart,
    iconBg: 'bg-red-100',
    iconColor: 'text-red-700',
    headerBg: 'bg-gradient-to-r from-red-800 to-red-950',
    condition: 'Atrial Fibrillation (AFib) & COPD',
    tag: 'Cardiovascular',
    tagColor: 'bg-red-600',
    conventional: 'AFib is a primary electrical disorder of the heart requiring medication (blood thinners, rate controllers) or ablation. COPD is lung damage from smoking or environmental exposure.',
    wallach: 'AFib, tachycardia, and many COPD cases are not primary heart or lung disorders. They are the result of a single structural event: osteoporosis of the skull physically compressing the 10th cranial nerve — the Vagus nerve — which directly innervates and controls the heart\'s electrical rhythm, bronchial tone in the lungs, digestive motility, and multiple other organ systems.',
    mechanism: [
      'Chronic mineral deficiency causes systemic osteoporosis',
      'Parathyroid glands attempt to compensate by pulling calcium from bones',
      'Skull bones — under paradoxical parathyroid activity — can thicken while other bones thin',
      'Thickened skull compresses cranial nerves at their exit foramina (openings)',
      'The 10th cranial nerve (Vagus nerve) regulates heart rate, lung bronchodilation, and gut motility',
      'Vagus nerve compression disrupts heart rhythm (AFib), bronchial tone (COPD), and digestive function simultaneously',
    ],
    protocol: 'Healthy Bone & Joint Pack, OsteoFx Plus (plant-derived calcium with co-factors), full-spectrum colloidal minerals, Magnesium glycinate. Eliminate all carbonated beverages and gluten.',
    redFlag: 'Why do AFib, digestive disorders, and breathing problems frequently co-occur in the same patients? All three are Vagus nerve functions.',
  },
  {
    icon: Droplets,
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-700',
    headerBg: 'bg-gradient-to-r from-teal-800 to-teal-950',
    condition: 'Acid Reflux / GERD',
    tag: 'Digestive',
    tagColor: 'bg-teal-600',
    conventional: 'Excess stomach acid production requiring acid-reducing medication (proton pump inhibitors, H2 blockers).',
    wallach: 'Acid reflux is caused by LOW stomach acid, not excess acid. The stomach\'s "chief cells" require sodium chloride (table salt) to manufacture hydrochloric acid (HCl). Decades of low-salt dietary advice — primarily driven by cardiovascular medicine\'s association of sodium with hypertension — have created a global epidemic of hypochlorhydria (insufficient stomach acid).',
    mechanism: [
      'Sodium chloride provides the chloride ions required for HCl synthesis in chief cells',
      'Low-salt diets suppress stomach acid production',
      'Insufficient HCl means food ferments in the stomach rather than being chemically digested',
      'Fermentation produces organic acids and gas that create pressure and back-flush into the esophagus',
      'This is misdiagnosed as "too much acid" — when the burning sensation is from fermentation acids, not HCl',
      'Proton pump inhibitors further reduce HCl production, permanently impairing mineral absorption',
    ],
    protocol: 'Himalayan or Celtic sea salt liberally with meals. Ultimate Enzymes (ox bile + pepsin) with each meal. Biolumin Probiotics. Eliminate gluten, carbonated beverages, and PPIs under physician supervision.',
    redFlag: 'Proton pump inhibitors are the 3rd most prescribed drug class in the US. They guarantee mineral malabsorption — because mineral dissolution requires stomach acid.',
  },
  {
    icon: Baby,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
    headerBg: 'bg-gradient-to-r from-blue-800 to-blue-950',
    condition: 'SIDS (Sudden Infant Death Syndrome)',
    tag: 'Pediatric',
    tagColor: 'bg-blue-600',
    conventional: 'Unexplained infant death, historically attributed to positional suffocation. "Back to Sleep" campaigns promoted.',
    wallach: 'SIDS is not a sleep position issue. It is a severe nutritional deficiency — specifically selenium and Vitamin E — in the infant. Dr. Wallach\'s evidence came from his veterinary research, where identical sudden cardiac death syndromes in young animals (white muscle disease in lambs, mulberry heart disease in pigs) were universally caused by selenium/Vitamin E deficiency and completely prevented with supplementation.',
    mechanism: [
      'Selenium is required for glutathione peroxidase — the enzyme that protects heart muscle cells from oxidative damage',
      'Selenium-deficient cardiac muscle is vulnerable to sudden arrhythmia under normal physiological stress',
      'Infant formulas in the 1970s–1980s lacked adequate selenium and vitamin E',
      'SIDS rates were highest in regions with selenium-depleted soils',
      'After selenium was mandated in infant formulas and cereals in the 1990s, SIDS rates dropped dramatically',
    ],
    protocol: 'Maternal nutritional saturation during pregnancy and breastfeeding with all 90 essential nutrients. Ensure infant formula contains selenium. Both parents should supplement for 6+ months before conception.',
    redFlag: 'SIDS rates in New Zealand (severe selenium-depleted soils) were among the highest in the world until selenium supplementation programs were introduced.',
  },
  {
    icon: AlertTriangle,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
    headerBg: 'bg-gradient-to-r from-amber-700 to-amber-900',
    condition: 'Gray / White Hair',
    tag: 'Deficiency Warning',
    tagColor: 'bg-amber-600',
    conventional: 'Normal aging process, influenced by genetics.',
    wallach: 'Gray or white hair is not a sign of aging — it is a clinical sign of copper deficiency. Melanin, the pigment that colors hair, is produced by melanocytes using the copper-dependent enzyme tyrosinase. Without adequate copper, melanin production stops and hair loses its pigment. This is diagnostically significant because the same copper deficiency that causes gray hair simultaneously weakens arterial wall elastic tissue — raising the risk of aneurysm and varicose veins.',
    mechanism: [
      'Copper is the essential cofactor for tyrosinase — the melanin-synthesis enzyme',
      'Copper deficiency stops melanin production in hair follicles → gray hair',
      'Copper is also the cofactor for lysyl oxidase — the enzyme that cross-links collagen and elastin in arterial walls',
      'The same deficiency that blanches hair also weakens blood vessel walls',
      'Gray hair is therefore a visible early warning sign of cardiovascular risk — specifically aneurysm vulnerability',
    ],
    protocol: 'Plant-derived colloidal minerals (rich in copper), Beyond Tangy Tangerine 2.0, Ultimate Daily Classic. Balance: avoid high-dose zinc supplementation without copper (zinc competes with copper absorption).',
    redFlag: 'Premature gray hair (before age 40) is a red flag for copper deficiency and elevated cardiovascular risk — treat it as a clinical symptom, not a cosmetic issue.',
  },
  {
    icon: Zap,
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-700',
    headerBg: 'bg-gradient-to-r from-orange-700 to-orange-900',
    condition: 'Kidney Stones & Bone Spurs',
    tag: 'The Calcium Paradox',
    tagColor: 'bg-orange-600',
    conventional: 'Caused by too much calcium in the diet or urine. Standard advice: restrict calcium, drink more water.',
    wallach: 'Kidney stones and bone spurs are caused by calcium being pulled OUT of bones, not by dietary calcium excess. This is the parathyroid gland\'s emergency response to systemic mineral deficiency — specifically osteoporosis. When blood calcium drops below the threshold required for cardiac and muscular function, the parathyroid gland triggers an aggressive calcium extraction from bone tissue. This mobilized calcium — not properly bound in a mineral matrix — crystallizes in kidneys, joints, and soft tissues.',
    mechanism: [
      'Mineral deficiency causes systemic osteoporosis (bone thinning)',
      'Blood calcium drops as bones lose their mineral matrix',
      'Parathyroid hormone (PTH) is released in response to low blood calcium',
      'PTH aggressively pulls calcium from bone to maintain blood calcium levels',
      'This "free" calcium, unbound from the bone matrix, precipitates in kidneys → stones',
      'Or accumulates at joint margins → bone spurs',
      'Restricting dietary calcium makes the underlying osteoporosis worse and intensifies the PTH response',
    ],
    protocol: 'Increase plant-derived calcium and all co-minerals with OsteoFx Plus. Healthy Bone & Joint Pack. Magnesium (helps solubilize calcium deposits). The goal is to satisfy the parathyroid\'s need for calcium — eliminating the trigger for bone demineralization.',
    redFlag: 'Telling patients with kidney stones to restrict calcium is medically backwards. It guarantees worsening bone loss and continued stone formation.',
  },
];

export default function DiseaseRedefinedPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-950 to-ocean-950 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="badge bg-red-700/30 border border-red-500/40 text-red-300 mb-4">
              Redefining Disease
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              What Medicine Gets Wrong
            </h1>
            <p className="text-forest-200 text-lg leading-relaxed">
              Dr. Wallach identified the exact physiological mechanisms that conventional medicine misses —
              or ignores. Here are his specific explanations for common conditions that medicine has
              been treating backwards.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 p-5 bg-amber-50 border border-amber-200 rounded-xl">
            <AlertTriangle className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-900 mb-1">Educational Information Only</p>
              <p className="text-amber-800 text-sm leading-relaxed">
                The following represents Dr. Wallach&apos;s nutritional research and theoretical frameworks based on his autopsy studies and clinical observations. This is not medical advice. These protocols support the body&apos;s natural nutritional balance. Always work with a qualified healthcare provider for your individual health needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disease Redefinitions */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {redefinitions.map((item) => (
            <div key={item.condition} className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
              {/* Header */}
              <div className={`${item.headerBg} px-6 py-5`}>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-playfair font-bold text-xl text-white">{item.condition}</h2>
                    <span className={`${item.tagColor} text-white text-xs px-2.5 py-0.5 rounded-full font-semibold mt-1 inline-block`}>{item.tag}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-5">
                {/* Two columns: conventional vs Wallach */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-stone-50 border border-stone-200 rounded-xl p-4">
                    <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Conventional View</div>
                    <p className="text-stone-700 text-sm leading-relaxed">{item.conventional}</p>
                  </div>
                  <div className="bg-forest-50 border border-forest-200 rounded-xl p-4">
                    <div className="text-xs font-bold text-forest-700 uppercase tracking-wider mb-2">Wallach&apos;s Explanation</div>
                    <p className="text-forest-800 text-sm leading-relaxed">{item.wallach}</p>
                  </div>
                </div>

                {/* Mechanism */}
                <div>
                  <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">The Mechanism</div>
                  <ol className="space-y-2">
                    {item.mechanism.map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-5 h-5 bg-forest-800 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                        <span className="text-stone-600 text-sm leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Protocol */}
                <div className="bg-forest-50 border-l-4 border-forest-600 pl-4 py-3 rounded-r-xl">
                  <div className="text-xs font-bold text-forest-700 uppercase tracking-wider mb-1">Nutritional Support Protocol</div>
                  <p className="text-forest-800 text-sm leading-relaxed">{item.protocol}</p>
                </div>

                {/* Red Flag */}
                <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-red-700 text-sm italic">{item.redFlag}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-forest-900 text-white">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h3 className="font-playfair text-2xl font-bold mb-4">See All Disease Protocols</h3>
          <p className="text-forest-200 mb-6">Explore the complete nutritional protocol database for cardiovascular, neurological, metabolic, digestive, and structural conditions.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/protocols" className="btn-secondary">All Health Protocols <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/products" className="btn-outline">View Products</Link>
          </div>
        </div>
      </section>
    </>
  );
}
