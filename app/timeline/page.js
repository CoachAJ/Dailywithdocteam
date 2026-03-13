import Link from 'next/link';
import { ArrowRight, Flame, Waves, Mountain, Factory, Leaf } from 'lucide-react';

export const metadata = {
  title: 'Environmental & Historical Timeline',
  description: 'The two catastrophic events that cut off humanity\'s natural mineral supply — and why modern food can no longer sustain human health.',
};

const timelineEvents = [
  {
    date: 'Before 10,000 BCE',
    era: 'The Mineral-Rich World',
    icon: Mountain,
    color: 'bg-forest-800',
    lineColor: 'bg-forest-300',
    title: 'The World Before Mineral Depletion',
    content: `For hundreds of thousands of years, humans lived in a mineral-abundant world. River floodplains deposited fresh mountain mineral silt annually onto farmland. Communities burned wood and coal, returning mineral-rich ash to their soil. Glacial melt carried ground-up rock minerals into drinking water and irrigation sources. Volcanic activity continuously enriched soil profiles worldwide.

The Hunza people of northern Pakistan — who routinely lived to 120–140 years without doctors, cancer, or heart disease — exemplified this reality. Their secret was not genetic: it was that glaciers fed their irrigation channels with "glacial milk" — mineral-laden water carrying finely ground rock dust from the mountain peaks, delivering a continuous supply of all 60 essential minerals directly to their crops and drinking water.`,
    highlight: 'Hunzas lived to 120+ with zero cancer, heart disease, or Alzheimer\'s — sustained entirely by mineral-rich glacial water.',
  },
  {
    date: '~3000 BCE — 1800s AD',
    era: 'The Natural Mineral Cycle',
    icon: Flame,
    color: 'bg-earth-700',
    lineColor: 'bg-earth-300',
    title: 'The Ancient Ash Cycle — Humanity\'s Hidden Supplement',
    content: `For thousands of years, every human civilization unknowingly participated in a natural mineral supplementation ritual: burning wood and coal for heat and cooking, then returning the resulting ash to gardens, farms, and food preparation.

Wood and coal ash is 95–98% pure plant minerals — a concentrated trace mineral supplement that humanity consumed daily through their food supply. Every loaf of bread baked in a wood-fired oven, every vegetable grown in ash-amended soil, every animal fed from those fields contained a rich concentration of all 60 essential minerals. This was not a conscious health practice — it was simply how life was lived for millennia.

The residue of burned organic material (wood, coal, plant matter) contains the entire mineral profile of the original vegetation: calcium, magnesium, potassium, silicon, boron, copper, zinc, manganese, selenium, and dozens of rare earth trace minerals — all in a biologically active, water-soluble form that plants and animals readily absorb.`,
    highlight: 'Wood and coal ash is 95–98% pure plant minerals — daily supplementation embedded into ancient life.',
  },
  {
    date: 'September 4, 1882',
    era: 'The Electric Revolution',
    icon: Flame,
    color: 'bg-red-700',
    lineColor: 'bg-red-300',
    title: 'Thomas Edison\'s Pearl Street Station Goes Online',
    content: `On September 4, 1882, Thomas Edison switched on the world\'s first commercial electrical power station at 257 Pearl Street in lower Manhattan. Within a generation, the industrialized world would convert from wood and coal to electrical energy for heat, light, and cooking.

This single technological transition — celebrated as humanity\'s greatest leap forward — simultaneously terminated the ancient daily mineral supplementation cycle that had sustained human health for thousands of years. Virtually overnight, the mineral-rich ash that had been returned to soil and food vanished from human civilization.

By 1920, the transition was nearly complete in industrialized nations. The medical community at the time observed no connection between this shift and the emerging epidemics of "modern diseases" — heart disease, cancer, diabetes, and osteoporosis — that would define the 20th century.

Dr. Wallach connects this specific date to the beginning of the modern chronic disease epidemic with the same precision that an epidemiologist would track a viral outbreak to patient zero.`,
    highlight: 'Sept 4, 1882 — The exact date humanity\'s natural daily mineral supplementation ended.',
  },
  {
    date: '1900s — Present',
    era: 'The Dam Era',
    icon: Waves,
    color: 'bg-ocean-800',
    lineColor: 'bg-ocean-300',
    title: 'Hydroelectric Dams — The Second Catastrophe',
    content: `The world\'s most fertile farmland was historically located on river floodplains — the Nile Delta, the Tigris and Euphrates valley (the "Fertile Crescent"), the Yangtze floodplain, the Ganges river basin, and the Mississippi alluvial plain. These areas were not fertile by accident.

Annual flooding carried mineral-rich silt from mountain and highland sources downstream, depositing fresh layers of trace minerals onto agricultural soils each year. This was nature\'s own soil restoration system — a continuous mineral recycling loop that kept civilization\'s farmland perpetually replenished.

The construction of over 900,000 hydroelectric dams worldwide permanently ended this natural flooding. The Aswan High Dam (1970) stopped the ancient Nile mineral deposits that had sustained Egyptian agriculture for 7,000 years. The Three Gorges Dam, Hoover Dam, and countless others replicated this pattern globally. The mineral-rich silt now accumulates behind dam walls — inaccessible to the farms that once depended on it.

Modern commercial agriculture replaced this lost fertility with NPK (Nitrogen, Phosphorus, Potassium) chemical fertilizers, which support plant growth but provide none of the 57+ remaining trace minerals that human health requires.`,
    highlight: 'Over 900,000 dams have permanently blocked the annual mineral-silt deposits that fed humanity\'s farmland for millennia.',
  },
  {
    date: '1936',
    era: 'The Official Warning',
    icon: Factory,
    color: 'bg-amber-700',
    lineColor: 'bg-amber-300',
    title: 'U.S. Senate Document 264: The Government\'s Own Warning',
    content: `In 1936 — just 54 years after Edison\'s Pearl Street station opened — the United States Senate issued Document 264, which contained this stark warning:

"The alarming fact is that foods — fruits and vegetables and grains — now being raised on millions of acres of land that no longer contains enough of certain needed minerals, are starving us — no matter how much we eat of them."

This was not a fringe claim from an alternative health advocate. This was an official statement from the legislative body of the United States government, submitted into the Congressional Record. It acknowledged that American soils were so depleted of minerals that the food grown in them could no longer sustain adequate human nutrition.

That warning was issued 90 years ago. In the decades since, industrial monoculture farming, the widespread use of mineral-blocking herbicides like glyphosate, and the continued reliance on NPK-only fertilizers have made the problem dramatically worse. A tomato grown today contains approximately 19 times less mineral content than a tomato grown in 1936.`,
    highlight: 'U.S. Senate, 1936: "Our soils are starving us — no matter how much we eat."',
  },
  {
    date: '1940s — Present',
    era: 'Modern Agriculture',
    icon: Leaf,
    color: 'bg-stone-700',
    lineColor: 'bg-stone-300',
    title: 'The NPK Trap — Growing Food Without Nutrition',
    content: `Modern industrial agriculture is optimized for yield, appearance, shelf life, and transport durability. It is not optimized for mineral density.

Chemical fertilizers containing Nitrogen (N), Phosphorus (P), and Potassium (K) are sufficient to grow large, visually appealing plants that meet commodity market specifications. They are entirely insufficient to produce food with the trace mineral content that human biology requires.

The result is food that is calorically dense but nutritionally hollow. A head of broccoli grown in depleted soil with NPK fertilizer may look identical to one grown in mineral-rich soil — but the trace mineral content can differ by a factor of 10 to 50x. The human body eating the depleted broccoli receives the calories and macronutrients, but none of the chromium, selenium, vanadium, manganese, boron, or rare earth elements it needs for enzymatic function, hormonal balance, and cellular repair.

This is why Dr. Wallach argues that supplementation is not optional in the modern world — it is the biological replacement for a mineral cycle that industrial civilization permanently disrupted.`,
    highlight: 'Modern food is calorically abundant and nutritionally bankrupt. Supplementation is the necessary replacement for a broken mineral cycle.',
  },
];

export default function TimelinePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-950 via-earth-900 to-forest-950 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="badge bg-earth-700/30 border border-earth-500/40 text-earth-300 mb-4">
              Environmental Timeline
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              How Modern Civilization Destroyed Our Mineral Supply
            </h1>
            <p className="text-forest-200 text-lg leading-relaxed">
              Two catastrophic — and entirely unintentional — historical events cut off humanity&apos;s
              natural mineral supplementation cycle. Dr. Wallach traces the modern chronic disease
              epidemic directly to these two dates.
            </p>
          </div>
        </div>
      </section>

      {/* The Two Events Summary */}
      <section className="py-10 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4 p-5 bg-red-50 border border-red-200 rounded-xl">
              <div className="w-12 h-12 bg-red-700 rounded-xl flex items-center justify-center flex-shrink-0">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold text-red-700 uppercase tracking-widest mb-1">Event #1 — September 4, 1882</div>
                <h3 className="font-playfair font-bold text-base text-stone-900 mb-1">The Switch to Electricity</h3>
                <p className="text-stone-600 text-sm">Edison&apos;s power station ended humanity&apos;s 10,000-year practice of returning mineral-rich wood/coal ash to soil and food.</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 bg-blue-50 border border-blue-200 rounded-xl">
              <div className="w-12 h-12 bg-ocean-800 rounded-xl flex items-center justify-center flex-shrink-0">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold text-ocean-800 uppercase tracking-widest mb-1">Event #2 — 1900s–Present</div>
                <h3 className="font-playfair font-bold text-base text-stone-900 mb-1">The Dam Construction Era</h3>
                <p className="text-stone-600 text-sm">Over 900,000 hydroelectric dams permanently blocked the annual mineral-silt deposits that naturally fertilized river floodplain farmland.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-stone-200 hidden md:block" />

            <div className="space-y-12">
              {timelineEvents.map((event, i) => (
                <div key={i} className="relative md:pl-20">
                  {/* Timeline dot */}
                  <div className={`absolute left-4 top-4 w-9 h-9 ${event.color} rounded-full flex items-center justify-center shadow-md hidden md:flex`}>
                    <event.icon className="w-4 h-4 text-white" />
                  </div>

                  <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
                    {/* Header */}
                    <div className={`${event.color} px-6 py-4`}>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <div className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-0.5">{event.era}</div>
                          <h3 className="font-playfair font-bold text-lg text-white leading-snug">{event.title}</h3>
                        </div>
                        <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full font-semibold flex-shrink-0">
                          {event.date}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="prose-wallach whitespace-pre-line text-sm leading-relaxed mb-4">
                        {event.content}
                      </div>

                      {/* Highlight */}
                      <div className="bg-amber-50 border-l-4 border-amber-500 pl-4 py-3 rounded-r-lg">
                        <p className="text-amber-800 text-sm font-semibold italic">{event.highlight}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-forest-900 to-ocean-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">The Only Viable Solution</h2>
          <p className="text-forest-200 text-lg mb-8 max-w-2xl mx-auto">
            We cannot reverse industrial civilization. We cannot un-build 900,000 dams or restore coal-burning
            to urban homes. We can, however, replicate the mineral content that humanity consumed naturally
            for thousands of years — through plant-derived colloidal mineral supplementation harvested from
            ancient, unpolluted botanical deposits.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
            {[
              { title: 'Ancient Deposits', desc: 'Youngevity\'s plant-derived minerals are sourced from a 70,000-year-old deposit in Utah — ancient enough to predate industrial pollution entirely.', icon: '🏔️' },
              { title: '60+ Minerals', desc: 'The liquid mineral formula contains all 60 essential minerals in plant-derived colloidal form, exactly as ancient ash and glacial water once delivered them.', icon: '⚗️' },
              { title: '90%+ Bioavailable', desc: 'Plant-derived colloidal minerals are absorbed at up to 10x the rate of metallic mineral supplements — replicating the bioavailability of naturally occurring food minerals.', icon: '🧬' },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-5">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-playfair font-bold text-base mb-2">{item.title}</h3>
                <p className="text-forest-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="inline-flex items-center justify-center gap-2 bg-earth-600 hover:bg-earth-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
              View 90 For Life Products <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/philosophy" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
              The Absorption Science
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
