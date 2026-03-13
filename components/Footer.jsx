import Link from 'next/link';
import { Leaf, Radio, BookOpen, FlaskConical, ShieldCheck, Phone } from 'lucide-react';

const footerLinks = {
  'Dr. Wallach': [
    { label: 'Biography & Credentials', href: '/about' },
    { label: 'Legal Battles & FDA', href: '/legal' },
    { label: 'Famous Case Studies', href: '/case-studies' },
    { label: 'Books & Media', href: '/media' },
  ],
  'The Science': [
    { label: 'Core Philosophy', href: '/philosophy' },
    { label: 'The 90 Nutrients', href: '/philosophy#90-nutrients' },
    { label: 'Redefining Disease', href: '/disease-redefined' },
    { label: 'Environmental Timeline', href: '/timeline' },
  ],
  'Health & Products': [
    { label: 'Disease Protocols', href: '/protocols' },
    { label: 'Natural Remedies', href: '/remedies' },
    { label: '90 For Life Products', href: '/products' },
    { label: 'The Youngevity Movement', href: '/business' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-forest-100">
      {/* Top CTA band */}
      <div className="bg-gradient-to-r from-earth-800 to-earth-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-playfair text-xl font-bold">Ready to Start Your Health Journey?</p>
            <p className="text-amber-100 text-sm mt-1">Explore the 90 Essential Nutrients and take control of your wellness.</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/philosophy"
              className="bg-white text-earth-800 hover:bg-amber-50 font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors shadow"
            >
              Learn the Science
            </Link>
            <Link
              href="/products"
              className="bg-forest-800 text-white hover:bg-forest-700 font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors shadow border border-forest-700"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-earth-600 to-gold-600 rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-playfair font-bold text-lg leading-tight">Wallach Revolution</div>
                <div className="text-forest-400 text-xs tracking-wider">Dr. Joel D. Wallach</div>
              </div>
            </Link>
            <p className="text-forest-300 text-sm leading-relaxed">
              Dedicated to the life, research, and nutritional protocols of Dr. Joel D. Wallach — veterinarian, naturopath, and champion of the 90 Essential Nutrients.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2 text-forest-400">
                <Radio className="w-4 h-4 text-earth-500" />
                <span>Dead Doctors Don&apos;t Lie Radio</span>
              </div>
              <div className="flex items-center gap-2 text-forest-400">
                <BookOpen className="w-4 h-4 text-earth-500" />
                <span>150M+ Copies Sold Worldwide</span>
              </div>
              <div className="flex items-center gap-2 text-forest-400">
                <FlaskConical className="w-4 h-4 text-earth-500" />
                <span>20,000+ Autopsies Performed</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-4 border-b border-forest-800 pb-2">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-forest-300 hover:text-earth-400 text-sm transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer + copyright */}
      <div className="border-t border-forest-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-start gap-2 mb-4 bg-forest-900/50 rounded-lg p-4">
            <ShieldCheck className="w-5 h-5 text-earth-500 flex-shrink-0 mt-0.5" />
            <p className="text-forest-400 text-xs leading-relaxed">
              <strong className="text-forest-300">FDA Disclaimer:</strong> These statements have not been evaluated by the Food and Drug Administration. The information on this website is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. Always consult with a qualified healthcare professional before making any changes to your diet or supplement regimen. Dr. Wallach&apos;s protocols support the body&apos;s ability to maintain optimal nutritional health and reverse nutritional deficiencies.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-forest-500 text-xs">
            <p>© {new Date().getFullYear()} The Wallach Revolution. Educational resource — not affiliated with Youngevity International, Inc.</p>
            <div className="flex gap-4">
              <Link href="/about" className="hover:text-forest-300 transition-colors">About</Link>
              <Link href="/protocols" className="hover:text-forest-300 transition-colors">Protocols</Link>
              <Link href="/products" className="hover:text-forest-300 transition-colors">Products</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
