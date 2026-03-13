import Link from 'next/link';
import { BookOpen, Radio, Mic, ArrowRight, Play, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'Books, Media & Resources',
  description: 'Dr. Joel Wallach\'s complete bibliography — Dead Doctors Don\'t Lie, Epigenetics, Rare Earths, and more. Plus radio shows and audio recordings.',
};

const books = [
  {
    title: "Dead Doctors Don't Lie",
    year: '1994',
    color: 'from-earth-700 to-earth-900',
    tag: 'Global Bestseller',
    tagColor: 'bg-gold-600',
    copies: '150M+ copies',
    summary: "The most listened-to health audio recording in history. Originally recorded as a cassette lecture, Dr. Wallach methodically dismantles the genetic theory of disease and presents evidence that the average physician — dying at age 58 — is the least qualified person to give health advice. He introduces the concept that every disease has a nutritional deficiency at its root and outlines the 90 essential nutrients required for lifelong health.",
    keyPoints: ['The average MD dies at 58 — younger than the average citizen', 'Every disease studied had a corresponding nutritional deficiency', 'You cannot get the nutrients you need from food alone', 'The $25M NIH autopsy findings revealed'],
  },
  {
    title: 'Epigenetics: The Death of the Genetic Theory of Disease Transmission',
    year: '2014',
    color: 'from-forest-700 to-forest-950',
    tag: 'Science',
    tagColor: 'bg-forest-700',
    copies: 'Research Edition',
    summary: "Dr. Wallach's most scientifically rigorous work, presenting the case that genetics does not predetermine disease. Drawing on epigenetic science, he demonstrates that gene expression is controlled by the nutritional environment — meaning that a gene for a disease is only activated when the body lacks specific nutrients. A well-nourished cell can silence a 'bad' gene indefinitely.",
    keyPoints: ['Genes are blueprints — nutrition is the contractor', 'Epigenetic markers are reversible with nutrition', 'Family disease patterns reflect shared nutritional habits, not genetics', 'The selenium-CF discovery as proof of concept'],
  },
  {
    title: 'Rare Earths: Forbidden Cures',
    year: '1994',
    color: 'from-ocean-800 to-ocean-950',
    tag: 'Minerals',
    tagColor: 'bg-ocean-800',
    copies: 'Co-authored with Ma Lan, M.D.',
    summary: "A comprehensive examination of rare earth minerals and their role in human health. The book details how 60 essential minerals — many of them rare earth elements — are required for cellular function, and how their absence from modern food supply has created a global epidemic of preventable mineral-deficiency diseases. Includes the longevity secrets of the world's oldest cultures.",
    keyPoints: ['60 of the 90 essential nutrients are minerals', 'Rare earth minerals are the most commonly deficient', 'Longevity cultures all share mineral-rich water sources', 'Plant-derived colloidal minerals are the only bioavailable form'],
  },
  {
    title: "Hell's Kitchen",
    year: '2001',
    color: 'from-red-800 to-red-950',
    tag: 'Food Science',
    tagColor: 'bg-red-700',
    copies: 'Dietary Science',
    summary: "A detailed examination of the foods that accelerate disease and death — from fried oils to gluten grains to processed meats. Dr. Wallach catalogs the specific biochemical mechanisms by which common 'healthy' foods actually destroy nutrient absorption, damage arterial walls, and accelerate the aging process.",
    keyPoints: ['The 10 bad foods and their exact mechanisms of harm', 'Why "olive oil" and other bottled oils are dangerous', 'The truth about gluten beyond celiac disease', 'How carbonated beverages dissolve bone mineral density'],
  },
  {
    title: "It's All in Your Head",
    year: '2012',
    color: 'from-purple-800 to-purple-950',
    tag: 'Neurology',
    tagColor: 'bg-purple-700',
    copies: 'Neurological Focus',
    summary: "Focused on the neurological consequences of nutritional deficiency, this book explores how the brain and nervous system are uniquely vulnerable to mineral and cholesterol depletion. Dr. Wallach presents detailed protocols for supporting brain health and addresses conditions from Alzheimer's to ADD/ADHD through a nutritional lens.",
    keyPoints: ['The myelin-cholesterol connection explained', 'Why statin drugs accelerate neurological aging', 'Nutritional protocols for ADD, ADHD, autism spectrum', 'The I-26 hyperimmune egg protocol for myelin rebuilding'],
  },
  {
    title: 'Immortality',
    year: '1999',
    color: 'from-gold-700 to-earth-800',
    tag: 'Longevity',
    tagColor: 'bg-gold-700',
    copies: 'Longevity Research',
    summary: "Dr. Wallach's exploration of human longevity potential, drawing on historical data from cultures where people routinely lived to 120+ years without pharmaceutical intervention. He identifies the common factors — mineral-rich water, unprocessed whole foods, physical activity — and presents a framework for achieving extraordinary health span in the modern world.",
    keyPoints: ['Historical longevity cultures analyzed', 'The Hunza glacial milk mineral connection', 'Why 120 is a biologically achievable target', 'Supplement protocols for healthy aging'],
  },
  {
    title: 'Black Gene Lies',
    year: '2015',
    color: 'from-stone-700 to-stone-900',
    tag: 'Social Health',
    tagColor: 'bg-stone-700',
    copies: 'Community Health',
    summary: "A groundbreaking examination of racial health disparities in America, arguing that higher rates of hypertension, diabetes, and other chronic diseases in African American communities are not genetic destiny — they are nutritional and socioeconomic phenomena. Dr. Wallach makes the case that epigenetics, not genetics, explains the data, and that nutritional protocols can level the health playing field.",
    keyPoints: ['Health disparities are nutritional, not genetic', 'Sickle cell anemia as a mineral deficiency condition', 'Why the same protocols work across all ethnicities', 'The role of processed food marketing in minority communities'],
  },
  {
    title: 'Wall Street Poker Night',
    year: '2009',
    color: 'from-teal-700 to-teal-900',
    tag: 'Finance',
    tagColor: 'bg-teal-700',
    copies: 'Financial Health',
    summary: "Dr. Wallach applies his analytical rigor to personal finance, arguing that everyday people can access the same tax advantages used by the ultra-wealthy through a home-based business model. The principles outlined here underpin his advocacy for the Youngevity network marketing business as both a health and financial empowerment vehicle.",
    keyPoints: ['Home business tax deductions available to everyone', 'Building wealth through network marketing', 'How billionaires legally avoid income tax', 'Dr. Wallach\'s personal financial philosophy'],
  },
];

const radioShows = [
  {
    title: "Dead Doctors Don't Lie Radio",
    description: "Dr. Wallach's flagship radio program, broadcast for decades. Each episode features clinical case studies, listener call-ins, and deep dives into specific nutritional deficiencies and disease mechanisms. The show became the longest-running alternative health radio program in American history.",
    format: 'Daily call-in show',
    icon: Radio,
  },
  {
    title: 'Daily with Doc',
    description: "A more recent format featuring Dr. Wallach in conversation with health advocates, patients, and nutritional scientists. Covers breaking research, current events in nutritional medicine, and the ongoing battle between evidence-based nutrition and pharmaceutical-driven medical practice.",
    format: 'Podcast / Online Radio',
    icon: Mic,
  },
];

export default function MediaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-950 to-earth-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="badge bg-earth-700/30 border border-earth-500/40 text-earth-300 mb-4">
              Books, Media & Resources
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              A Legacy in Print & Audio
            </h1>
            <p className="text-forest-200 text-lg leading-relaxed">
              From cassette tapes sold out of the trunk of a car to a global media empire —
              Dr. Wallach&apos;s message has reached over 150 million people through books, radio, and recordings.
            </p>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="section-heading">Complete Bibliography</h2>
            <p className="section-subheading mx-auto">
              Each work represents a different facet of Dr. Wallach&apos;s mission: to equip humanity with the nutritional knowledge suppressed by a medical establishment focused on symptom management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {books.map((book) => (
              <div key={book.title} className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className={`bg-gradient-to-r ${book.color} p-6 flex items-start gap-5`}>
                  <div className="w-20 h-28 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 shadow-inner">
                    <BookOpen className="w-8 h-8 text-white/70" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className={`${book.tagColor} text-white text-xs px-2.5 py-0.5 rounded-full font-semibold`}>{book.tag}</span>
                      <span className="text-white/60 text-xs">{book.year}</span>
                    </div>
                    <h3 className="font-playfair font-bold text-white text-lg leading-snug mb-2">{book.title}</h3>
                    <span className="text-white/60 text-xs">{book.copies}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">{book.summary}</p>
                  <div>
                    <p className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Key Topics</p>
                    <ul className="space-y-1.5">
                      {book.keyPoints.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-xs text-stone-600">
                          <span className="w-1.5 h-1.5 bg-forest-600 rounded-full mt-1.5 flex-shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Radio & Audio */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-forest-900 to-ocean-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Radio, Podcasts & Audio</h2>
            <p className="text-forest-200 max-w-2xl mx-auto">
              Dr. Wallach&apos;s message was born on audio — and it&apos;s where his most candid, clinical,
              and compelling teaching happens.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {radioShows.map((show) => (
              <div key={show.title} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-earth-700 rounded-xl flex items-center justify-center">
                    <show.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-lg text-white">{show.title}</h3>
                    <p className="text-forest-300 text-xs">{show.format}</p>
                  </div>
                </div>
                <p className="text-forest-200 text-sm leading-relaxed mb-4">{show.description}</p>
                <div className="flex items-center gap-2 text-gold-400 text-sm font-semibold">
                  <Play className="w-4 h-4" />
                  <span>Available on major podcast platforms</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Cassette Story */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-divider mb-5" />
          <h2 className="section-heading mb-5">The Cassette That Changed the World</h2>
          <div className="prose-wallach space-y-4">
            <p>
              The story of <em>Dead Doctors Don&apos;t Lie</em> is itself a testament to the power of the message.
              In 1994, Dr. Wallach recorded a 60-minute lecture on a cassette tape, summarizing 30 years of
              research into a format that any person with a car stereo could access. There was no publisher,
              no distributor, no advertising budget.
            </p>
            <p>
              He sold the cassettes from the trunk of his car. Word of mouth — the oldest form of marketing —
              did the rest. Within months, copies were being duplicated and passed between strangers. Doctors
              were receiving them anonymously in the mail. Radio hosts were playing the full recording on air.
            </p>
            <p>
              Within a decade, over 150 million copies had been distributed worldwide in more than 30 languages.
              It became the most-listened-to health audio recording in history — not because of a marketing
              campaign, but because the information in it worked.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-earth-800 text-white">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h3 className="font-playfair text-2xl font-bold mb-4">Put the Knowledge to Work</h3>
          <p className="text-amber-100 mb-6">Books and audio are just the beginning. Explore the protocols and products that turn Dr. Wallach&apos;s research into daily action.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/protocols" className="inline-flex items-center justify-center gap-2 bg-white text-earth-800 hover:bg-amber-50 font-semibold px-6 py-3 rounded-xl transition-colors">
              Health Protocols <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/products" className="inline-flex items-center justify-center gap-2 bg-forest-800 text-white hover:bg-forest-900 font-semibold px-6 py-3 rounded-xl transition-colors border border-forest-700">
              90 For Life Products <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
