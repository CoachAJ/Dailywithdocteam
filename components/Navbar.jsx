'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Leaf } from 'lucide-react';

const primaryNav = [
  { label: 'Home', href: '/' },
  { label: 'About Dr. Wallach', href: '/about' },
  { label: 'Core Philosophy', href: '/philosophy' },
  { label: 'Health Protocols', href: '/protocols' },
  { label: 'Books & Media', href: '/media' },
  { label: 'Products', href: '/products' },
];

const deepDiveNav = [
  { label: 'Environmental Timeline', href: '/timeline' },
  { label: 'Redefining Disease', href: '/disease-redefined' },
  { label: 'Legal Battles & FDA', href: '/legal' },
  { label: 'Famous Case Studies', href: '/case-studies' },
  { label: 'Natural Remedies', href: '/remedies' },
  { label: 'The Youngevity Movement', href: '/business' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [deepDiveOpen, setDeepDiveOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav className="bg-forest-900 text-white sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-9 h-9 bg-gradient-to-br from-earth-600 to-gold-600 rounded-full flex items-center justify-center shadow-md">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="text-base font-playfair font-bold leading-tight">
                Wallach Revolution
              </div>
              <div className="text-xs text-forest-200 tracking-wider">
                Dr. Joel D. Wallach
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                  isActive(item.href)
                    ? 'bg-forest-700 text-white'
                    : 'text-forest-100 hover:bg-forest-800 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Deep Dive Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setDeepDiveOpen(true)}
                onMouseLeave={() => setDeepDiveOpen(false)}
                className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-forest-100 hover:bg-forest-800 hover:text-white transition-colors duration-150"
              >
                Deep Dive <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {deepDiveOpen && (
                <div
                  onMouseEnter={() => setDeepDiveOpen(true)}
                  onMouseLeave={() => setDeepDiveOpen(false)}
                  className="absolute right-0 top-full mt-1 w-56 bg-white rounded-lg shadow-xl border border-stone-100 py-1 z-50"
                >
                  {deepDiveNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-stone-700 hover:bg-forest-50 hover:text-forest-800 transition-colors duration-100"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-forest-200 hover:text-white hover:bg-forest-800"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-forest-950 border-t border-forest-800">
          <div className="px-4 py-3 space-y-1">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-forest-700 text-white'
                    : 'text-forest-100 hover:bg-forest-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-forest-800">
              <p className="px-3 py-1 text-xs text-forest-400 font-semibold tracking-widest uppercase">
                Deep Dive
              </p>
              {deepDiveNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 rounded-md text-sm font-medium text-forest-200 hover:bg-forest-800 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
