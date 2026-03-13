import Link from 'next/link';
import Image from 'next/image';
import { GraduationCap, FlaskConical, Award, Scale, BookOpen, ArrowRight, CheckCircle, Microscope, Star } from 'lucide-react';

export const metadata = {
  title: 'About Dr. Joel Wallach — Biography & Credentials',
  description: 'Detailed biography of Dr. Joel D. Wallach — his education, NIH research, Smithsonian thesis, major discoveries, awards, and legal victories against the FDA.',
  alternates: { canonical: 'https://dailywithdocteam.com/about' },
  openGraph: {
    title: 'About Dr. Joel Wallach — Biography & Credentials',
    description: 'Veterinarian, naturopath, NIH-grant recipient, and author of Dead Doctors Don\'t Lie. Learn the full story of Dr. Joel D. Wallach.',
    url: 'https://dailywithdocteam.com/about',
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dr. Joel D. Wallach',
  alternateName: 'Doc Wallach',
  jobTitle: 'Veterinarian, Naturopathic Physician, Author',
  description: 'Dr. Joel D. Wallach is a veterinarian, naturopath, and author who has researched the link between nutritional deficiencies and disease for over 50 years. He is known for his landmark audio lecture Dead Doctors Don\'t Lie and his advocacy for the 90 Essential Nutrients.',
  url: 'https://dailywithdocteam.com/about',
  image: 'https://dailywithdocteam.com/images/doc-tree.jpg',
  knowsAbout: [
    '90 Essential Nutrients',
    'Plant-Derived Colloidal Minerals',
    'Nutritional Deficiency and Disease',
    'Veterinary Medicine',
    'Naturopathic Medicine',
    'Youngevity Products',
  ],
  alumniOf: [
    { '@type': 'EducationalOrganization', name: 'University of Missouri' },
    { '@type': 'EducationalOrganization', name: 'National College of Naturopathic Medicine' },
  ],
  award: [
    'NIH Research Grant Recipient',
    'Smithsonian Institution Recognition',
    'Nobel Prize Nomination (Physiology/Medicine)',
  ],
  sameAs: ['https://en.wikipedia.org/wiki/Joel_Wallach'],
};

const education = [
  {
    year: '1962',
    degree: 'B.S. Agriculture',
    school: 'University of Missouri',
    detail: 'Specialization in Animal Husbandry and Nutrition — giving him a foundational understanding of how diet directly impacts biology at the cellular level.',
  },
  {
    year: '1964',
    degree: 'Doctor of Veterinary Medicine (D.V.M.)',
    school: 'University of Missouri College of Veterinary Medicine',
    detail: 'Trained to diagnose and treat disease across hundreds of species, Dr. Wallach developed a cross-species perspective on nutrition that human medicine entirely lacked.',
  },
  {
    year: '1966–1982',
    degree: 'Post-Doctoral Fellowship — Comparative Pathology',
    school: 'NIH / Yerkes Primate Research Center',
    detail: 'Funded by a $25 million grant from the National Institutes of Health, he performed over 20,000 autopsies on 454 species of zoo animals and 3,000 humans, running 10 million blood chemistries to map the relationship between nutritional deficiencies and disease.',
  },
  {
    year: '1982',
    degree: 'Doctorate of Naturopathic Medicine (N.D.)',
    school: 'National College of Naturopathic Medicine',
    detail: 'After being rejected by MD programs for his unorthodox nutritional discoveries, Dr. Wallach pursued the naturopathic path, combining his veterinary science with holistic human medicine.',
  },
];

const discoveries = [
  {
    icon: Microscope,
    title: 'Cystic Fibrosis in a Rhesus Monkey',
    year: '1977',
    body: 'At the Yerkes Primate Center, Dr. Wallach discovered the first-ever non-human case of Cystic Fibrosis in a rhesus monkey. Crucially, the animal had no genetic predisposition — it developed the disease due to a selenium and Vitamin E deficiency. This was a watershed moment: it demonstrated that CF was a nutritional deficiency disease, not a purely genetic one.',
  },
  {
    icon: FlaskConical,
    title: 'The NIH Autopsy Archive',
    year: '1966–1982',
    body: 'Over 16 years and 20,000+ autopsies, Dr. Wallach documented that every animal and human he examined had died with at least one nutritional deficiency. His 1,200-page thesis, Diseases of Exotic Animals, catalogued pathological findings across 454 species and is now held in the Smithsonian Institution as a National Treasure.',
  },
  {
    icon: BookOpen,
    title: 'Dead Doctors Don\'t Lie (1994)',
    year: '1994',
    body: 'Originally recorded as an audio cassette lecture, Dead Doctors Don\'t Lie became the most listened-to health audio recording in history with over 150 million copies sold. It presented his conclusion that the average physician dies at 58 — younger than the average American — precisely because they do not practice what they preach about nutrition.',
  },
];

const awards = [
  {
    year: '2011',
    title: 'Klaus Schwarz Commemorative Medal',
    org: 'International Association for Trace Element Research',
    desc: 'Awarded for lifetime contributions to trace element research — the same honor previously given to Nobel Laureates.',
  },
  {
    year: '2015',
    title: 'Lifetime Achievement Award',
    org: 'United Nations (UNESCO/UN Economic & Social Council)',
    desc: 'Recognized globally for his contributions to human health and nutrition research across multiple decades.',
  },
];

const legalVictories = [
  {
    claim: 'Folate & Neural Tube Defects',
    outcome: 'FDA forced to allow the claim that Folate supplementation reduces the risk of Spina Bifida and neural tube defects in newborns.',
  },
  {
    claim: 'Selenium & Cancer Risk Reduction',
    outcome: 'FDA forced to allow the claim that Selenium supplementation reduces the risk of certain types of cancer.',
  },
  {
    claim: 'Omega-3 Fatty Acids & Heart Health',
    outcome: 'FDA forced to allow the claim that Omega-3 Essential Fatty Acids reduce the risk of coronary thrombosis (blood clots) and heart disease.',
  },
  {
    claim: 'Calcium & Osteoporosis',
    outcome: 'Expanded nutrient health claims framework, establishing precedent for how nutritional science can challenge FDA regulatory orthodoxy.',
  },
];

const quotes = [
  "\"Every man-made disease, every animal disease, and every plant disease is caused by a deficiency of one or more essential nutrients.\"",
  "\"The average doctor in America dies at the age of 58 — younger than average truck drivers, coal miners, and farmers. Dead doctors don't lie.\"",
  "\"You are not what you eat — you are what you absorb.\"",
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-950 to-ocean-950 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="badge bg-earth-700/30 border border-earth-600/40 text-earth-300 mb-4">
              Biography & Credentials
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Dr. Joel D. Wallach
            </h1>
            <p className="text-xl font-playfair text-forest-200 mb-3">B.S. · D.V.M. · N.D.</p>
            <p className="text-forest-200 text-lg leading-relaxed max-w-2xl">
              Biomedical researcher, veterinarian, naturopath, author, and tireless advocate for nutritional
              medicine. A man who challenged the most powerful medical establishment in history — and won.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-divider mb-5" />
              <h2 className="section-heading mb-5">The Most Credentialed Voice in Alternative Health</h2>
              <div className="prose-wallach space-y-4">
                <p>
                  Dr. Joel Wallach did not arrive at his nutritional philosophy through speculation or anecdote.
                  He arrived there through one of the most rigorous, data-intensive research careers in modern
                  medical history — one that spanned veterinary medicine, comparative pathology, and naturopathic
                  medicine across five decades.
                </p>
                <p>
                  What began as agricultural curiosity evolved into a revolutionary thesis: that virtually every
                  chronic disease known to afflict humans — from heart disease to Alzheimer&apos;s, from diabetes to
                  cystic fibrosis — has a nutritional deficiency at its root cause.
                </p>
                <p>
                  Armed with over 20,000 autopsies, 10 million blood chemistry analyses, and a $25 million NIH
                  research grant, Dr. Wallach built an evidentiary case that the medical establishment could
                  neither ignore nor successfully refute — only suppress.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '20,000+', label: 'Autopsies Performed', color: 'bg-forest-900' },
                { value: '454', label: 'Animal Species Studied', color: 'bg-earth-700' },
                { value: '3,000', label: 'Human Autopsies', color: 'bg-ocean-900' },
                { value: '10M+', label: 'Blood Chemistries Run', color: 'bg-gold-700' },
                { value: '1,200', label: 'Pages in NIH Thesis', color: 'bg-forest-800' },
                { value: '40+', label: 'Years of Research', color: 'bg-earth-800' },
              ].map((item) => (
                <div key={item.label} className={`${item.color} text-white rounded-xl p-5 text-center`}>
                  <div className="text-3xl font-playfair font-bold">{item.value}</div>
                  <div className="text-xs mt-1 opacity-80 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-16 md:py-20 bg-cream-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="section-heading">Education & Training</h2>
            <p className="section-subheading mx-auto">
              Dr. Wallach&apos;s unique combination of agricultural science, veterinary medicine, and naturopathy
              gave him an unparalleled cross-disciplinary perspective that no single-track MD could possess.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-forest-200" />
            <div className="space-y-8">
              {education.map((item, i) => (
                <div key={i} className="relative pl-16">
                  <div className="absolute left-0 top-1 w-12 h-12 bg-forest-800 rounded-full flex items-center justify-center shadow-md">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="font-playfair font-bold text-lg text-forest-900">{item.degree}</h3>
                      <span className="badge bg-earth-100 text-earth-700 border border-earth-200">{item.year}</span>
                    </div>
                    <div className="text-sm font-semibold text-stone-500 mb-3">{item.school}</div>
                    <p className="text-stone-600 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Major Discoveries */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="section-heading">Major Discoveries & Career Milestones</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {discoveries.map((d) => (
              <div key={d.title} className="bg-cream-50 border border-stone-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-forest-900 p-5 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <d.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{d.title}</div>
                    <div className="text-forest-300 text-xs">{d.year}</div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-stone-600 text-sm leading-relaxed">{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Smithsonian Callout */}
      <section className="py-12 bg-gradient-to-r from-ocean-950 to-forest-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="w-10 h-10 text-gold-400 mx-auto mb-4" />
          <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-3">A National Treasure</h3>
          <p className="text-forest-200 text-lg leading-relaxed">
            Dr. Wallach&apos;s 1,200-page doctoral thesis — <em>Diseases of Exotic Animals</em> — is held in the
            Smithsonian Institution in Washington, D.C., recognized as a permanent record of one of the most
            comprehensive pathological surveys ever conducted.
          </p>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="section-heading">International Awards & Recognition</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {awards.map((a) => (
              <div key={a.title} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 flex gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-gold-600 to-earth-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-earth-700 tracking-widest uppercase mb-1">{a.year}</div>
                  <h3 className="font-playfair font-bold text-base text-stone-900 mb-1">{a.title}</h3>
                  <div className="text-xs text-stone-400 mb-2 font-medium">{a.org}</div>
                  <p className="text-stone-600 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Victories */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-divider mb-5" />
              <h2 className="section-heading mb-5">Legal Victories Against the FDA</h2>
              <p className="prose-wallach mb-6">
                Over the course of his career, Dr. Wallach and his legal team filed 8 to 9 federal lawsuits
                against the U.S. Food and Drug Administration — and won. These victories forced the FDA to
                recognize the scientific validity of nutritional health claims that they had previously suppressed.
              </p>
              <p className="prose-wallach mb-6">
                These weren&apos;t small skirmishes. They set legal precedents that opened the door for supplement
                manufacturers nationwide to make truthful, evidence-backed claims about their products — claims
                that physicians had been making informally for decades but the FDA had refused to acknowledge.
              </p>
              <div className="bg-forest-50 border border-forest-100 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Scale className="w-5 h-5 text-forest-700" />
                  <span className="font-semibold text-forest-800">The Broader Impact</span>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  These court victories were not merely personal triumphs — they permanently altered the landscape
                  of nutritional supplement regulation in the United States and validated decades of suppressed
                  nutritional research.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {legalVictories.map((v, i) => (
                <div key={i} className="bg-cream-50 border-l-4 border-forest-700 rounded-r-xl p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-forest-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-stone-900 mb-1">{v.claim}</div>
                      <p className="text-stone-600 text-sm leading-relaxed">{v.outcome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quotes */}
      <section className="py-16 bg-gradient-to-br from-earth-800 to-earth-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-amber-100">In His Own Words</h2>
          </div>
          <div className="space-y-6">
            {quotes.map((q, i) => (
              <blockquote key={i} className="border-l-4 border-gold-500 pl-6 italic text-amber-100 text-lg font-playfair leading-relaxed">
                {q}
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h3 className="font-playfair text-2xl font-bold text-stone-900 mb-4">Learn the Science Behind His Work</h3>
          <p className="text-stone-600 mb-6">Now that you know who Dr. Wallach is, discover the philosophy that fuels his research.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/philosophy" className="btn-primary">Core Philosophy <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/protocols" className="btn-secondary">Health Protocols <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
