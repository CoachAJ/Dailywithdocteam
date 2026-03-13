import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  Dna,
  ChevronRight,
  Star,
  Leaf,
  Shield,
  Zap,
  Heart,
  Brain,
  Bone,
} from 'lucide-react';

const stats = [
  { value: '20,000+', label: 'Autopsies Performed', sub: 'Across 454 species' },
  { value: '150M+', label: 'Books & CDs Sold', sub: 'Dead Doctors Don\'t Lie' },
  { value: '90', label: 'Essential Nutrients', sub: 'Required for optimal health' },
  { value: '900+', label: 'Preventable Diseases', sub: 'Caused by deficiencies' },
];

const features = [
  {
    icon: BookOpen,
    color: 'bg-earth-700',
    title: 'Dead Doctors Don\'t Lie',
    desc: 'The most listened-to health audio recording in history. Over 150 million copies sold worldwide, challenging the genetic theory of disease and empowering individuals with nutritional truth.',
    href: '/media',
    cta: 'Explore His Works',
  },
  {
    icon: FlaskConical,
    color: 'bg-forest-700',
    title: 'The NIH Research Legacy',
    desc: 'Armed with a $25 million NIH grant, Dr. Wallach conducted over 20,000 autopsies on 454 animal species and 3,000 humans — discovering that every disease studied had a corresponding nutritional deficiency.',
    href: '/about',
    cta: 'His Credentials',
  },
  {
    icon: Dna,
    color: 'bg-ocean-900',
    title: 'Epigenetics Revolution',
    desc: 'Dr. Wallach\'s landmark work proves that genetics does not doom you to disease. Your genes are like a blueprint — but nutrition is the contractor. Nutrient-rich environments silence bad genes.',
    href: '/philosophy',
    cta: 'The Science',
  },
];

const philosophyHighlights = [
  { icon: Leaf, title: 'Plant-Derived Colloidal Minerals', desc: 'Up to 90% absorbable vs. 3–12% for metallic minerals. The difference between health and disease.' },
  { icon: Shield, title: 'Soil Depletion Since 1936', desc: 'U.S. Senate Document 264 confirmed our soils are dangerously depleted of minerals — and it\'s gotten worse.' },
  { icon: Zap, title: 'Exercise Without Supplementation', desc: 'Dr. Wallach warns that sweating without replacing minerals is "suicide" — athletes die from mineral depletion, not fitness.' },
  { icon: Heart, title: 'Cholesterol is Your Brain\'s Fuel', desc: 'Myelin — the white matter of your brain and spinal cord — is up to 100% cholesterol. Low-fat diets starve the nervous system.' },
  { icon: Brain, title: 'The Pica/Obesity Connection', desc: 'Obesity isn\'t calorie excess — it\'s a mineral deficiency driving the body to overeat in a desperate search for missing nutrients.' },
  { icon: Bone, title: 'The Calcium Paradox', desc: 'Kidney stones and bone spurs mean you need MORE calcium, not less. The parathyroid is stripping your bones to survive.' },
];

const nutrientGroups = [
  { count: '60', label: 'Essential Minerals', color: 'from-forest-700 to-forest-900', examples: 'Calcium, Magnesium, Selenium, Chromium, Vanadium, Copper, Zinc...' },
  { count: '16', label: 'Essential Vitamins', color: 'from-earth-600 to-earth-800', examples: 'A, B-complex, C, D, E, K, Folic Acid, Biotin...' },
  { count: '12', label: 'Essential Amino Acids', color: 'from-ocean-800 to-ocean-950', examples: 'Lysine, Threonine, Tryptophan, Methionine, Phenylalanine...' },
  { count: '3', label: 'Essential Fatty Acids', color: 'from-gold-700 to-earth-800', examples: 'Omega-3, Omega-6, Omega-9 — EPA, DHA, GLA...' },
];

const books = [
  { title: 'Dead Doctors Don\'t Lie', color: 'from-earth-700 to-earth-900', year: '1994', tag: 'Bestseller' },
  { title: 'Epigenetics', color: 'from-forest-700 to-forest-950', year: '2014', tag: 'Science' },
  { title: 'Rare Earths: Forbidden Cures', color: 'from-ocean-800 to-ocean-950', year: '1994', tag: 'Minerals' },
  { title: 'Immortality', color: 'from-gold-700 to-earth-800', year: '1999', tag: 'Longevity' },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-gradient-to-br from-forest-950 via-forest-900 to-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-40" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10"
          style={{ background: 'radial-gradient(circle at 70% 40%, #ca8a04 0%, transparent 60%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-earth-700/30 border border-earth-600/40 rounded-full px-4 py-1.5 mb-6">
              <Star className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-gold-300 text-xs font-semibold tracking-widest uppercase">
                The Wallach Revolution
              </span>
            </div>

            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Empowering Your Health Through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-earth-400">
                Essential Nutrition
              </span>
            </h1>

            <p className="text-forest-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Discover the groundbreaking research of{' '}
              <strong className="text-white">Dr. Joel D. Wallach, B.S., D.V.M., N.D.</strong> — the man who proved
              that optimal health is a nutritional formula, not a genetic lottery. Over 20,000 autopsies.
              One revolutionary conclusion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/philosophy"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-earth-600 to-earth-700 hover:from-earth-700 hover:to-earth-800 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-sm"
              >
                The 90 Essential Nutrients <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 text-sm"
              >
                Meet Dr. Wallach
              </Link>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 fill-cream-50">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="bg-white border-b border-stone-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-playfair font-bold text-forest-800">{s.value}</div>
                <div className="text-sm font-semibold text-stone-700 mt-0.5">{s.label}</div>
                <div className="text-xs text-stone-400 mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURE CARDS ─── */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="section-heading">Why the World Listens to Dr. Wallach</h2>
            <p className="section-subheading mx-auto">
              Three decades of research, legal battles, and global outreach — all in service of one mission:
              teaching humanity that disease is a choice, not a destiny.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-stone-100">
                <div className={`${f.color} p-6`}>
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <f.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-stone-900 mb-3">{f.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-5">{f.desc}</p>
                  <Link href={f.href} className="inline-flex items-center gap-1.5 text-forest-700 font-semibold text-sm hover:text-earth-700 transition-colors">
                    {f.cta} <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT SNAPSHOT ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-forest-100 to-forest-200 shadow-xl">
                <Image
                  src="/images/doc-tree.jpg"
                  alt="Dr. Joel Wallach"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-forest-800/80 to-ocean-900/80">
                  <div className="text-center text-white px-8">
                    <div className="font-playfair text-2xl font-bold mb-2">Dr. Joel D. Wallach</div>
                    <div className="text-forest-200 text-sm">B.S. · D.V.M. · N.D.</div>
                  </div>
                </div>
              </div>
              {/* Floating credential badge */}
              <div className="absolute -bottom-4 -right-4 bg-earth-700 text-white px-5 py-3 rounded-xl shadow-lg">
                <div className="text-xl font-playfair font-bold">$25M</div>
                <div className="text-xs text-amber-200">NIH Research Grant</div>
              </div>
            </div>

            <div>
              <div className="section-divider mb-5" />
              <h2 className="section-heading mb-4">A Man Who Crossed Every Boundary</h2>
              <p className="prose-wallach mb-4">
                Dr. Joel Wallach is a biomedical research pioneer who spent decades working as a veterinarian and
                pathologist before earning his N.D. He holds a B.S. in Agriculture with a focus on Animal Husbandry
                and Nutrition, a Doctorate in Veterinary Medicine, and a Naturopathic Medicine degree.
              </p>
              <p className="prose-wallach mb-6">
                His landmark 1,200-page thesis, <em>Diseases of Exotic Animals</em>, is housed in the Smithsonian
                Institute as a National Treasure. He discovered the first non-human case of Cystic Fibrosis in a
                rhesus monkey — proving it was a nutritional deficiency, not a genetic fate.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: '2011 Klaus Schwarz Medal', sub: 'International Award' },
                  { label: 'UN Lifetime Achievement', sub: '2015 Award' },
                  { label: 'Smithsonian Thesis', sub: 'National Treasure' },
                  { label: '8 FDA Lawsuits Won', sub: 'Federal Court' },
                ].map((item) => (
                  <div key={item.label} className="bg-forest-50 border border-forest-100 rounded-lg p-3">
                    <div className="text-sm font-semibold text-forest-800">{item.label}</div>
                    <div className="text-xs text-stone-500 mt-0.5">{item.sub}</div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-primary">
                Full Biography <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 90 NUTRIENTS ─── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-forest-900 to-ocean-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge bg-gold-600/20 border border-gold-500/30 text-gold-300 mb-4">
              The Foundation of Health
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              The <span className="text-gold-400">90 Essential Nutrients</span>
            </h2>
            <p className="text-forest-200 text-lg max-w-2xl mx-auto">
              Your body cannot manufacture these compounds — it must receive them daily. Missing even one creates
              conditions for preventable disease. Dr. Wallach calls this the &quot;90 for Life&quot; protocol.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {nutrientGroups.map((g) => (
              <div key={g.label} className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-6 text-center hover:bg-white/15 transition-colors">
                <div className={`text-5xl font-playfair font-bold bg-gradient-to-b ${g.color} bg-clip-text text-transparent mb-2`}>
                  {g.count}
                </div>
                <div className="text-white font-semibold mb-3">{g.label}</div>
                <div className="w-8 h-0.5 bg-gold-500/60 mx-auto mb-3" />
                <p className="text-forest-300 text-xs leading-relaxed">{g.examples}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-forest-300 mb-6 text-sm">
              <strong className="text-gold-400">Total: 90 nutrients</strong> — missing any one can trigger up to
              900 preventable diseases, according to Dr. Wallach&apos;s research.
            </p>
            <Link href="/philosophy" className="inline-flex items-center gap-2 bg-earth-600 hover:bg-earth-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-lg">
              Explore the Full Philosophy <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY HIGHLIGHTS ─── */}
      <section className="py-16 md:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="section-heading">Core Discoveries That Changed Everything</h2>
            <p className="section-subheading mx-auto">
              Dr. Wallach&apos;s research shattered conventional wisdom about disease causation, nutrition, and longevity.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {philosophyHighlights.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                <div className="w-11 h-11 bg-forest-50 border border-forest-100 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-forest-700" />
                </div>
                <h3 className="font-playfair font-bold text-lg text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/disease-redefined" className="inline-flex items-center gap-2 text-forest-700 font-semibold hover:text-earth-700 transition-colors">
              See How Wallach Redefines 20+ Common Diseases <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BOOKS PREVIEW ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="section-divider mb-4" />
              <h2 className="section-heading">Books, Media & Resources</h2>
              <p className="text-stone-600 mt-2 max-w-xl">From cassette tapes to global radio — Dr. Wallach&apos;s message has reached every corner of the world.</p>
            </div>
            <Link href="/media" className="inline-flex items-center gap-1.5 text-forest-700 font-semibold text-sm hover:text-earth-700 whitespace-nowrap">
              View All Works <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <div key={book.title} className="group cursor-pointer">
                <div className={`aspect-[3/4] rounded-xl bg-gradient-to-b ${book.color} shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 flex items-end p-5 relative overflow-hidden`}>
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full font-medium">{book.tag}</span>
                  </div>
                  <div>
                    <div className="text-white/70 text-xs mb-1">{book.year}</div>
                    <div className="text-white font-playfair font-bold text-base leading-snug">{book.title}</div>
                    <div className="text-white/60 text-xs mt-1">Dr. Joel D. Wallach</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-earth-800 to-earth-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Leaf className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Your Health is Not a Genetic Lottery
          </h2>
          <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
            Dr. Wallach spent 40+ years proving that virtually every disease has a nutritional cause — and a
            nutritional solution. Start learning the protocols that support your body&apos;s natural healing capacity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/protocols" className="inline-flex items-center justify-center gap-2 bg-white text-earth-800 hover:bg-amber-50 font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-lg">
              Explore Health Protocols <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/products" className="inline-flex items-center justify-center gap-2 bg-forest-800 text-white hover:bg-forest-900 font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-lg border border-forest-700">
              View 90 For Life Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
