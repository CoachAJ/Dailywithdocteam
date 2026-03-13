import Link from 'next/link';
import { Scale, Shield, CheckCircle, ArrowRight, Gavel, AlertTriangle, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Legal Battles & FDA Victories',
  description: 'Dr. Wallach\'s 8-9 federal lawsuits against the FDA, health claim victories for Selenium, Folate, and Omega-3, and his stance on the medical monopoly.',
};

const legalVictories = [
  {
    claim: 'Folate & Neural Tube Defects',
    year: '1996',
    status: 'Won',
    impact: 'The FDA was forced to allow supplement manufacturers to state that Folate supplementation reduces the risk of neural tube defects (Spina Bifida, anencephaly) in developing fetuses. Today this is universally accepted — but it required federal litigation to establish.',
    significance: 'This victory directly saves thousands of infants from birth defects annually. Prior to this ruling, supplement companies could not communicate this life-saving information.',
  },
  {
    claim: 'Selenium & Cancer Risk Reduction',
    year: '1997',
    status: 'Won',
    impact: 'The FDA was compelled to allow the health claim that selenium supplementation reduces the risk of certain types of cancer. This was validated by the Cornell/Arizona "Nutritional Prevention of Cancer" trial showing a 50% reduction in cancer mortality and significant reductions in lung, colon, and prostate cancer incidence.',
    significance: 'One of Dr. Wallach\'s most personal victories — selenium\'s anti-cancer properties were documented in his NIH research decades before the FDA would acknowledge them.',
  },
  {
    claim: 'Omega-3 Fatty Acids & Coronary Thrombosis',
    year: '1999',
    status: 'Won',
    impact: 'The FDA was required to permit the qualified health claim that Omega-3 fatty acids (EPA and DHA from fish oil) reduce the risk of coronary heart disease. This opened the door for the Omega-3 supplement industry that now generates billions in annual sales.',
    significance: 'Validated the nutritional basis of cardiovascular disease prevention, which Dr. Wallach had been teaching for decades.',
  },
  {
    claim: 'Calcium & Osteoporosis',
    year: '1993',
    status: 'Won',
    impact: 'An early victory establishing that calcium supplementation is associated with reduced risk of osteoporosis — a claim the FDA had previously prohibited as a drug claim rather than a nutrient health claim.',
    significance: 'Set the legal framework for subsequent nutrient health claim victories by establishing that nutritional relationships to disease could be communicated without FDA pre-approval.',
  },
];

const fdaConflicts = [
  {
    title: 'The Flexner Report (1910) — The Birth of the Medical Monopoly',
    desc: 'Commissioned by the Carnegie Foundation and written by Abraham Flexner, this report systematically dismantled American alternative medicine schools — homeopathy, naturopathy, chiropractic, herbal medicine — by defining "legitimate" medicine solely as pharmaceutical and surgical intervention. Medical licensing boards subsequently legislated out all competing disciplines. Dr. Wallach argues this created the protected pharmaceutical monopoly on healthcare that persists today.',
  },
  {
    title: 'The Suppression of Nutritional Medicine',
    desc: 'Dr. Wallach documents how the FDA has historically classified nutritional interventions as "unapproved drugs" when they make disease-related claims — even when the evidence base is overwhelming. By defining health claims as drug claims, the FDA effectively prohibited the communication of nutritional science to the public, protecting pharmaceutical solutions from nutritional competition.',
  },
  {
    title: 'Iatrogenic Harm Statistics',
    desc: 'Dr. Wallach frequently cites research estimating that medical professionals kill, injure, or infect approximately 15 million patients annually in U.S. hospitals and clinical settings through medication errors, hospital-acquired infections, surgical complications, and inappropriate treatments — making iatrogenic (doctor-caused) harm one of the leading causes of death in America.',
  },
  {
    title: 'The Average Physician\'s Lifespan',
    desc: 'The central thesis of Dead Doctors Don\'t Lie: if physician recommendations were truly evidence-based and effective, physicians themselves would be the healthiest demographic in America. Instead, historical data showed the average American physician dying at 58 — younger than coal miners, truck drivers, and farmers. Dr. Wallach\'s interpretation: the medical system profits from sick people, not healthy ones.',
  },
];

const muscularDystrophyStory = {
  title: 'The Jerry Lewis & MDA Controversy',
  subtitle: 'The Story That Cemented Dr. Wallach\'s Mission',
  narrative: [
    'Among the most defining chapters of Dr. Wallach\'s career is his discovery that Muscular Dystrophy — the fundraising centerpiece of Jerry Lewis\'s legendary MDA Telethon — was not a genetic disease but a selenium and Vitamin E deficiency disease in animals.',
    'Dr. Wallach documented this finding through his veterinary research: white muscle disease in lambs, stiff lamb disease, and myopathy in multiple species were all caused by selenium deficiency and completely reversed with selenium supplementation. The pathological findings were identical to human Muscular Dystrophy.',
    'When Dr. Wallach presented this evidence, Jerry Lewis became enthusiastic and reportedly brought the selenium-based nutritional cure to the Muscular Dystrophy Association\'s leadership, expecting celebration of a breakthrough that could help millions of families.',
    'What followed, according to Dr. Wallach, was the opposite: the MDA fired Jerry Lewis from his 40+ year association with the organization, placed him under a confidential settlement agreement, and canceled the iconic telethon — reportedly because a cheap nutritional "cure" for Muscular Dystrophy would eliminate the fundraising rationale for billions of dollars in ongoing genetic research donations.',
    'This event — whether interpreted charitably or critically — became a turning point for Dr. Wallach. It reinforced his belief that financial interests systematically override patient welfare in the medical-industrial complex, and redoubled his commitment to taking nutritional medicine directly to the public, bypassing institutional gatekeepers entirely.',
  ],
};

export default function LegalPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-ocean-950 to-forest-950 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="badge bg-blue-700/30 border border-blue-500/40 text-blue-300 mb-4">
              Legal Battles & The FDA
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Fighting for the Right to Tell the Truth
            </h1>
            <p className="text-forest-200 text-lg leading-relaxed">
              Dr. Wallach didn&apos;t just research nutritional medicine — he fought for the legal right
              to communicate it. Eight to nine federal lawsuits against the FDA. Multiple victories.
              A permanent expansion of your right to know what nutrients can do for your health.
            </p>
          </div>
        </div>
      </section>

      {/* Overview stats */}
      <section className="py-8 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '8–9', label: 'Federal Lawsuits Filed', sub: 'Against the FDA' },
              { value: '4+', label: 'Health Claims Won', sub: 'Permanently established' },
              { value: '1910', label: 'Flexner Report', sub: 'Origin of medical monopoly' },
              { value: '15M', label: 'Annual Iatrogenic Injuries', sub: 'Doctor-caused harm' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-playfair font-bold text-forest-800">{s.value}</div>
                <div className="text-sm font-semibold text-stone-700 mt-0.5">{s.label}</div>
                <div className="text-xs text-stone-400 mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Victories */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="section-heading">The Health Claim Victories</h2>
            <p className="section-subheading mx-auto">
              Each of these victories required litigation against the most powerful regulatory body
              in American healthcare. Each one permanently expanded your legal right to receive
              nutritional health information.
            </p>
          </div>

          <div className="space-y-6">
            {legalVictories.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
                <div className="bg-gradient-to-r from-forest-800 to-forest-900 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                      <Gavel className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-playfair font-bold text-white text-lg">{v.claim}</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-forest-300 text-sm">{v.year}</span>
                    <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> {v.status}
                    </span>
                  </div>
                </div>
                <div className="p-6 grid md:grid-cols-2 gap-5">
                  <div>
                    <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">What Was Won</div>
                    <p className="text-stone-600 text-sm leading-relaxed">{v.impact}</p>
                  </div>
                  <div className="bg-forest-50 border border-forest-100 rounded-xl p-4">
                    <div className="text-xs font-bold text-forest-700 uppercase tracking-wider mb-2">Why It Matters</div>
                    <p className="text-forest-800 text-sm leading-relaxed">{v.significance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Medical Monopoly */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="section-heading">The Medical Monopoly — Dr. Wallach&apos;s Critique</h2>
            <p className="section-subheading mx-auto">
              To understand why Dr. Wallach fought the FDA, you must understand the broader system
              he was fighting against.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {fdaConflicts.map((item, i) => (
              <div key={i} className="bg-cream-50 border border-stone-200 rounded-2xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 bg-earth-100 border border-earth-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-4 h-4 text-earth-700" />
                  </div>
                  <h3 className="font-playfair font-bold text-base text-stone-900 leading-snug">{item.title}</h3>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MDA / Jerry Lewis Story */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-earth-900 to-earth-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-gold-400" />
            </div>
            <div>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white">{muscularDystrophyStory.title}</h2>
              <p className="text-amber-200 text-sm">{muscularDystrophyStory.subtitle}</p>
            </div>
          </div>

          <div className="space-y-4">
            {muscularDystrophyStory.narrative.map((para, i) => (
              <p key={i} className="text-amber-100 text-sm md:text-base leading-relaxed">{para}</p>
            ))}
          </div>

          <div className="mt-8 bg-white/10 border border-white/20 rounded-xl p-5">
            <p className="text-gold-300 text-sm italic font-playfair leading-relaxed">
              &quot;The MDA did not fire Jerry Lewis because they disagreed with the science. They fired him because
              a nutritional solution to Muscular Dystrophy would have eliminated the fundraising basis of a
              billion-dollar charity industry built on the promise of finding a genetic cure.&quot;
              <span className="text-gold-400 not-italic block mt-1">— Dr. Joel Wallach (paraphrase)</span>
            </p>
          </div>
        </div>
      </section>

      {/* Shield / Resolution */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-forest-50 border border-forest-200 rounded-2xl">
            <div className="w-16 h-16 bg-forest-800 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="font-playfair font-bold text-xl text-forest-900 mb-2">The Lasting Legacy</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Dr. Wallach&apos;s legal battles permanently altered the regulatory landscape of nutritional health claims
                in the United States. The health claims won through his litigation are now used daily by thousands of
                supplement companies to communicate life-saving nutritional information. Every Folate label that
                mentions Spina Bifida prevention, every fish oil label that mentions heart health — these exist because
                of these court victories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-forest-900 text-white">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h3 className="font-playfair text-2xl font-bold mb-4">Learn the Science Behind the Battles</h3>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/about" className="btn-secondary">Dr. Wallach&apos;s Credentials <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/case-studies" className="btn-outline">Famous Case Studies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
