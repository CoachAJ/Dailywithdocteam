import Link from 'next/link';
import { ShieldAlert, ArrowRight } from 'lucide-react';
import ProtocolsClient from './ProtocolsClient';

export const metadata = {
  title: 'Disease Protocols & Nutritional Solutions',
  description: "Dr. Wallach's nutritional protocols for common conditions — cardiovascular, neurological, metabolic, digestive, and more. Educational purposes only.",
  alternates: { canonical: 'https://dailywithdocteam.com/protocols' },
  openGraph: {
    title: 'Disease Protocols & Nutritional Solutions | Dr. Wallach',
    description: 'Dr. Wallach mapped every chronic condition to its root nutritional deficiency. Explore the protocols for heart health, brain function, blood sugar, bone strength, and more.',
    url: 'https://dailywithdocteam.com/protocols',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does Dr. Wallach say causes congestive heart failure?',
      acceptedAnswer: { '@type': 'Answer', text: 'Dr. Wallach identifies Vitamin B1 (Thiamine) deficiency as the root cause of congestive heart failure. The heart muscle requires Thiamine to convert carbohydrates into cellular energy (ATP). Without sufficient B1, the heart weakens and loses pumping efficiency.' },
    },
    {
      '@type': 'Question',
      name: 'What causes sudden cardiac death according to Dr. Wallach?',
      acceptedAnswer: { '@type': 'Answer', text: 'Dr. Wallach links sudden cardiac death to Selenium deficiency. Selenium is required for glutathione peroxidase, the enzyme that protects heart muscle from oxidative damage. A selenium-deficient heart is vulnerable to sudden arrhythmia, particularly under physical stress.' },
    },
    {
      '@type': 'Question',
      name: 'What does Dr. Wallach say about Alzheimer\'s disease?',
      acceptedAnswer: { '@type': 'Answer', text: 'Dr. Wallach attributes the Alzheimer\'s epidemic to cholesterol starvation of the brain. The brain\'s white matter (myelin sheath) is composed largely of cholesterol. Low-fat diets and statin drugs have systematically removed this critical structural material, leading to neurological decline.' },
    },
    {
      '@type': 'Question',
      name: 'What does Dr. Wallach say causes Type 2 blood sugar issues?',
      acceptedAnswer: { '@type': 'Answer', text: 'Dr. Wallach identifies deficiencies of two trace minerals — Chromium and Vanadium — as the core cause of blood sugar regulation challenges. Chromium is an essential cofactor for insulin receptor sensitivity, while Vanadium acts as an insulin mimetic. Both are virtually absent from modern depleted soils.' },
    },
    {
      '@type': 'Question',
      name: 'What does Dr. Wallach say about acid reflux and GERD?',
      acceptedAnswer: { '@type': 'Answer', text: 'Dr. Wallach explains that acid reflux is caused by LOW stomach acid, not excess acid. Low-salt diets suppress acid production. Food then ferments and creates organic acids that back-flush into the esophagus — a condition misdiagnosed as excess acid and treated with acid-blocking drugs.' },
    },
    {
      '@type': 'Question',
      name: 'What are the 90 Essential Nutrients according to Dr. Wallach?',
      acceptedAnswer: { '@type': 'Answer', text: 'Dr. Wallach identifies 90 essential nutrients the human body cannot manufacture: 60 minerals, 16 vitamins, 12 essential amino acids, and 2-3 essential fatty acids. He argues that deficiency in any one of these is the root cause of virtually every chronic disease.' },
    },
    {
      '@type': 'Question',
      name: 'What does Dr. Wallach say causes osteoporosis?',
      acceptedAnswer: { '@type': 'Answer', text: 'Dr. Wallach says osteoporosis is caused by deficiency of all 60 minerals, not just calcium. Bone is a matrix of 12+ minerals integrated in a collagen framework. The parathyroid gland responds to mineral deficiency by pulling calcium from bone, which paradoxically shows as elevated serum calcium while bones hollow out.' },
    },
    {
      '@type': 'Question',
      name: 'Why does Dr. Wallach recommend plant-derived colloidal minerals?',
      acceptedAnswer: { '@type': 'Answer', text: 'Dr. Wallach recommends plant-derived colloidal minerals because they are up to 90% bioavailable, compared to only 3–12% for metallic minerals in most supplements. These minerals are harvested from ancient 70,000-year-old plant deposits and arrive pre-processed by plant biology into particles small enough to pass directly through cell walls.' },
    },
  ],
};

export default function ProtocolsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-950 to-ocean-950 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="badge bg-red-700/30 border border-red-500/40 text-red-300 mb-4">
              Nutritional Protocols
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Disease Protocols &amp; Solutions
            </h1>
            <p className="text-forest-200 text-lg leading-relaxed">
              Dr. Wallach mapped every chronic disease to its nutritional deficiency. Below are the mechanisms,
              causes, and nutritional support protocols for the most common conditions.
            </p>
          </div>
        </div>
      </section>

      {/* FDA Disclaimer */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <p className="text-amber-800 text-sm leading-relaxed">
              <strong>Educational Disclaimer:</strong> The following protocols are presented for educational purposes based on Dr. Wallach&apos;s nutritional research. These statements have not been evaluated by the FDA. This information does not constitute medical advice and is not intended to diagnose, treat, cure, or prevent any disease. Always consult your healthcare provider before changing your supplement regimen.
            </p>
          </div>
        </div>
      </div>

      {/* Protocols Client Component */}
      <section className="py-12 md:py-16 bg-cream-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProtocolsClient />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-forest-900 text-white">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h3 className="font-playfair text-2xl font-bold mb-4">Find the Right Products</h3>
          <p className="text-forest-200 mb-6">Explore the Healthy Body Packs and targeted supplements that deliver the 90 essential nutrients in plant-derived, highly bioavailable form.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/products" className="btn-secondary">Shop 90 For Life Products <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/philosophy" className="btn-outline">The Core Philosophy</Link>
          </div>
        </div>
      </section>
    </>
  );
}
