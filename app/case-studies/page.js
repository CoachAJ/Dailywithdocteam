import Link from 'next/link';
import { ArrowRight, Star, Quote, Trophy, Heart, Zap } from 'lucide-react';

export const metadata = {
  title: 'Famous Case Studies & Endorsements',
  description: 'Documented success stories validating Dr. Wallach\'s nutritional protocols — NBA star Theo Ratliff, actor Danny Glover, Pastor Mike Freeman, and more.',
};

const caseStudies = [
  {
    name: 'Theo Ratliff',
    role: 'NBA Professional Basketball Player',
    icon: Trophy,
    headerBg: 'bg-gradient-to-r from-ocean-800 to-ocean-950',
    tagColor: 'bg-blue-500',
    tag: 'Athletic Recovery',
    photo: '🏀',
    summary: 'Lost a $30 million contract due to career-ending arthritis and joint injuries. Recovered using Dr. Wallach\'s bone and joint protocol, returned to the NBA for 11 more years, and earned an additional $75 million.',
    full: [
      'Theo Ratliff was a rising professional basketball player when severe arthritis and joint deterioration prematurely ended his ability to perform at the NBA level. The condition was severe enough to cost him a $30 million contract.',
      'Through a mutual connection, Ratliff was introduced to Dr. Wallach\'s nutritional protocols. Wallach diagnosed the issue as a classic mineral and structural nutrient deficiency — specifically glucosamine, MSM, chondroitin, and the full mineral complex needed for cartilage and joint tissue repair.',
      'Ratliff was placed on the Healthy Bone & Joint Pack, with Gluco-Gel as the primary "secret sauce," combined with Rebound FX for daily mineral replacement around training. The protocol provided the raw materials his body needed to repair and regenerate cartilage and joint tissue.',
      'The results were dramatic. Ratliff\'s joint function was sufficiently restored for him to return to competitive NBA play. He went on to play an additional 11 seasons in the NBA after his "career-ending" diagnosis, earning another $75 million in contracts.',
      'Today, Theo Ratliff is featured prominently on the Rebound FX product canister — a visible, permanent endorsement of the protocol that extended his athletic career by over a decade.',
    ],
    protocol: 'Healthy Bone & Joint Pack, Gluco-Gel, Rebound FX, plant-derived colloidal minerals',
    outcome: '+11 NBA seasons, +$75M in earnings, featured on Rebound FX canister',
  },
  {
    name: 'Danny Glover',
    role: 'Award-Winning American Actor',
    icon: Star,
    headerBg: 'bg-gradient-to-r from-earth-700 to-earth-900',
    tagColor: 'bg-amber-600',
    tag: 'Neurological Recovery',
    photo: '🎬',
    summary: 'The Lethal Weapon star successfully overcame a severe seizure disorder using Dr. Wallach\'s nutritional approach, and subsequently became one of his most prominent advocates.',
    full: [
      'Danny Glover — known worldwide for his role as Detective Roger Murtaugh in the Lethal Weapon franchise — developed a debilitating seizure disorder that significantly impacted his life and career.',
      'Conventional medicine offered pharmaceutical management of the seizure activity, but did not address the underlying cause or offer the prospect of reversal.',
      'Glover was introduced to Dr. Wallach\'s nutritional philosophy and began implementing the full 90-nutrient protocol, with specific attention to the minerals and nutrients required for stable neurological function and prevention of abnormal electrical activity in the brain.',
      'The neurological support protocol — including plant-derived colloidal minerals providing the full mineral spectrum, Omega-3 fatty acids for neuronal membrane integrity, and elimination of nutritional antagonists like gluten and bottled oils — supported a dramatic reduction in seizure activity.',
      'Following his recovery, Danny Glover became one of Dr. Wallach\'s most prominent celebrity advocates, traveling with him internationally to give health education presentations to large audiences. His endorsement brought enormous credibility and public attention to the nutritional medicine approach.',
    ],
    protocol: 'Full 90 Essential Nutrients, plant-derived colloidal minerals, Ultimate EFA Plus, neurological mineral protocol, strict gluten-free diet',
    outcome: 'Seizure disorder overcome. International health advocacy with Dr. Wallach.',
  },
  {
    name: 'Pastor Mike Freeman',
    role: 'Baltimore Community Pastor',
    icon: Heart,
    headerBg: 'bg-gradient-to-r from-forest-800 to-forest-950',
    tagColor: 'bg-forest-600',
    tag: 'Critical Recovery',
    photo: '🙏',
    summary: 'In a coma for months and given hours to live, with no IV or feeding tube available — Dr. Wallach\'s associates administered liquid minerals transdermally. Three days later, the pastor woke up and returned to his church.',
    full: [
      'Pastor Mike Freeman of Baltimore was admitted to the hospital in a critical condition that deteriorated until he fell into a prolonged coma. Medical staff gave him only hours to live and, at some point, removed or were unable to maintain his IV and feeding tube access.',
      'With conventional medical intervention exhausted and the patient near death, Dr. Wallach was contacted by associates connected to the pastor\'s community. Because there was no intravenous or oral access available, Dr. Wallach proposed an unconventional delivery method: transdermal (through the skin) application of his liquid plant-derived mineral formula.',
      'Associates physically rubbed the liquid plant-derived mineral concentrate onto the pastor\'s skin — specifically his belly, chest, and back — in multiple applications over several days. This transdermal approach was based on the understanding that plant-derived colloidal minerals, at 0.001 microns in particle size, are small enough to be absorbed through intact skin.',
      'Three days after the transdermal mineral protocol began, Pastor Freeman woke from his coma. He was reported to have shaved and prepared himself, and subsequently returned to his church to resume his pastoral duties.',
      'This case represents one of the most dramatic documented applications of Dr. Wallach\'s nutritional protocols under emergency circumstances, and demonstrates the fundamental premise of his work: the body, given the raw nutritional materials it needs, has an extraordinary innate capacity to heal.',
    ],
    protocol: 'Transdermal application of liquid plant-derived colloidal minerals (belly, chest, back) — applied topically due to unavailability of IV or oral access',
    outcome: 'Regained consciousness after 3 days of transdermal mineral application. Returned to community ministry.',
  },
  {
    name: 'Unnamed Elite Athletes',
    role: 'Composite — Multiple Professional Athletes',
    icon: Zap,
    headerBg: 'bg-gradient-to-r from-purple-800 to-purple-950',
    tagColor: 'bg-purple-600',
    tag: 'Athletic Mortality Prevention',
    photo: '⚡',
    summary: 'Dr. Wallach\'s warning about mineral depletion in athletes explains the epidemic of young, fit athletes dying suddenly from hypertrophic cardiomyopathy — and why mineral replacement changes everything.',
    full: [
      'The sudden death of young, physically fit athletes is one of the most paradoxical tragedies in modern medicine. How can the most physically conditioned individuals die of heart failure? Dr. Wallach\'s answer: intense physical training without mineral replacement creates the most severe and rapid mineral deficiencies possible.',
      'Sweat is not water — it is a concentrated mineral soup. Every hour of intense exercise depletes calcium, magnesium, potassium, selenium, zinc, and dozens of trace minerals through perspiration. A professional athlete training 4–8 hours daily can lose extraordinary amounts of minerals.',
      'Commercial sports drinks (Gatorade, Powerade, etc.) replace sodium, potassium, and perhaps magnesium — 2 to 5 of the 60 essential minerals. The remaining 55+ minerals continue to be depleted with every training session. Over months and years, these compounding deficiencies manifest as precisely the same cardiac pathologies Dr. Wallach found in deficient animals: hypertrophic cardiomyopathy, arrhythmia, and sudden cardiac death.',
      'Dr. Wallach\'s recommendation for all athletes: Rebound FX (containing 100 nutrients including all 60 plant-derived minerals) before, during, and after any significant physical exertion. The Healthy Body Start Pack 2.0 as a baseline. Never train hard without replacing everything lost.',
      'His protocol has been adopted by professional athletes in multiple sports who credit full-spectrum mineral replacement with elimination of cramping, faster recovery, reduction in injury frequency, and dramatic improvements in endurance and performance.',
    ],
    protocol: 'Rebound FX (100 nutrients, 60 minerals) before/during/after training. Healthy Body Start Pack 2.0. Ultimate Selenium for cardiac protection.',
    outcome: 'Prevention of mineral-depletion-induced cardiac events. Enhanced athletic performance and recovery.',
  },
];

const testimonialQuotes = [
  {
    quote: "I was told my career was over. I couldn't walk without pain. Dr. Wallach's protocol gave me eleven more years in the NBA.",
    attribution: 'Theo Ratliff, NBA Professional',
    color: 'border-ocean-300',
  },
  {
    quote: "The information Dr. Wallach shares is life-changing. I've seen it change lives. I've experienced it changing mine.",
    attribution: 'Danny Glover, Actor & Health Advocate',
    color: 'border-earth-400',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-950 to-earth-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="badge bg-gold-600/30 border border-gold-500/40 text-gold-300 mb-4">
              Famous Case Studies
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              When the Protocols Met Real Lives
            </h1>
            <p className="text-forest-200 text-lg leading-relaxed">
              Theory becomes truth when tested against reality. These documented cases — from NBA courts
              to hospital comas — represent the most compelling validations of Dr. Wallach&apos;s
              nutritional protocols.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial quotes */}
      <section className="py-10 bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonialQuotes.map((q, i) => (
              <div key={i} className={`border-l-4 ${q.color} pl-5 py-2`}>
                <Quote className="w-6 h-6 text-stone-300 mb-2" />
                <p className="text-stone-700 italic font-playfair text-lg leading-relaxed mb-2">&quot;{q.quote}&quot;</p>
                <p className="text-stone-500 text-sm font-semibold">— {q.attribution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {caseStudies.map((cs) => (
            <div key={cs.name} className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
              {/* Header */}
              <div className={`${cs.headerBg} px-6 py-5`}>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="text-4xl">{cs.photo}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h2 className="font-playfair font-bold text-2xl text-white">{cs.name}</h2>
                      <span className={`${cs.tagColor} text-white text-xs px-2.5 py-0.5 rounded-full font-semibold`}>{cs.tag}</span>
                    </div>
                    <p className="text-white/70 text-sm">{cs.role}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Summary */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
                  <p className="text-amber-900 font-semibold text-sm leading-relaxed">{cs.summary}</p>
                </div>

                {/* Full story */}
                <div className="space-y-3 mb-5">
                  {cs.full.map((para, i) => (
                    <p key={i} className="text-stone-600 text-sm leading-relaxed">{para}</p>
                  ))}
                </div>

                {/* Protocol & Outcome */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-forest-50 border border-forest-200 rounded-xl p-4">
                    <div className="text-xs font-bold text-forest-700 uppercase tracking-wider mb-2">Protocol Used</div>
                    <p className="text-forest-800 text-sm leading-relaxed">{cs.protocol}</p>
                  </div>
                  <div className="bg-gold-50 border border-gold-200 rounded-xl p-4">
                    <div className="text-xs font-bold text-gold-700 uppercase tracking-wider mb-2">Outcome</div>
                    <p className="text-gold-800 text-sm leading-relaxed">{cs.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What This Means */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-forest-900 to-ocean-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">The Pattern Is Consistent</h2>
          <p className="text-forest-200 text-lg mb-8 max-w-2xl mx-auto">
            Across diverse demographics, conditions, and severities — from a comatose pastor to a $30M
            NBA contract — the same fundamental principle holds: provide the body with the nutritional
            raw materials it needs, and its innate healing capacity responds.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left mb-8">
            {[
              { title: 'Identify the Deficiency', desc: 'Every condition traced back to one or more missing nutrients from the 90 essential list.' },
              { title: 'Eliminate the Antagonists', desc: 'Remove the foods and substances that block absorption or actively deplete the missing nutrients.' },
              { title: 'Provide in Bioavailable Form', desc: 'Plant-derived colloidal minerals at 90%+ absorption — not metallic supplements at 3–12%.' },
            ].map((step) => (
              <div key={step.title} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-5">
                <h3 className="font-playfair font-bold text-base mb-2">{step.title}</h3>
                <p className="text-forest-300 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/protocols" className="inline-flex items-center justify-center gap-2 bg-earth-600 hover:bg-earth-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
              Find Your Protocol <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/products" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
              View the Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
