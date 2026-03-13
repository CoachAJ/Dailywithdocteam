import Link from 'next/link';
import { ShieldAlert, ArrowRight } from 'lucide-react';
import ProtocolsClient from './ProtocolsClient';

export const metadata = {
  title: 'Disease Protocols & Nutritional Solutions',
  description: "Dr. Wallach's nutritional protocols for common conditions — cardiovascular, neurological, metabolic, digestive, and more. Educational purposes only.",
};

export default function ProtocolsPage() {
  return (
    <>
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
