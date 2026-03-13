import Link from 'next/link';
import { ArrowRight, Users, DollarSign, BookOpen, Leaf, TrendingUp, Heart, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'The Youngevity Movement — The Grassroots Health Army',
  description: 'Why Dr. Wallach chose network marketing, his no-salary stance, the home business tax advantage, and how to join the mission to take nutritional medicine to the world.',
};

const whyNetworkMarketing = [
  {
    icon: Users,
    title: 'Bypassing Institutional Gatekeepers',
    desc: 'Traditional retail (grocery stores, pharmacies) and the medical system would require FDA-approved health claims for every statement made about Youngevity products — effectively silencing the nutritional education that is the product\'s entire value. Network marketing allows independent distributors to have one-on-one educational conversations without institutional censorship.',
  },
  {
    icon: Heart,
    title: 'The Mission-Aligned Model',
    desc: 'Dr. Wallach needed an "army" of educated individuals who personally understood and believed in the 90 Essential Nutrients — people who could speak from experience, not from a script. A network of passionate, educated advocates is more effective at carrying a revolutionary health message than any advertising campaign.',
  },
  {
    icon: TrendingUp,
    title: 'Compensation for Education',
    desc: 'Every distributor who joins the Youngevity network is compensated for their time educating others — creating a financial incentive that rewards health literacy. The more people a distributor helps understand nutritional medicine, the more their business grows. The mission and the business model are aligned.',
  },
  {
    icon: DollarSign,
    title: 'The Tax Advantage',
    desc: 'A home-based Youngevity business qualifies the operator for the same category of tax deductions that corporations and the wealthy use to legally minimize tax liability — deductions for home office, vehicle use, business meals, health expenses, education, and travel. Dr. Wallach details these strategies in his book Wall Street Poker Night.',
  },
];

const wallachNoSalary = {
  title: 'Dr. Wallach Takes No Salary From Youngevity',
  points: [
    'Dr. Wallach does not receive a salary, commission, royalty, or bonus from the sale of Youngevity nutritional products.',
    'His personal income is derived entirely from the sale of his books, CDs, and educational materials — not from product revenue.',
    'This arrangement was deliberate: it eliminates any financial conflict of interest in his product recommendations.',
    'When Dr. Wallach recommends a Youngevity product, it is because his research supports it — not because he profits from its sale.',
    'He structured Youngevity\'s entire compensation model to flow to the distributor network — the people doing the educational work in communities.',
  ],
};

const businessSteps = [
  {
    step: '1',
    title: 'Start with the Products',
    desc: 'Before building a business, become a product of the product. Start with the Healthy Body Start Pack 2.0 and experience the results of the 90 Essential Nutrients personally. Authentic testimony is the most powerful sales tool in network marketing.',
  },
  {
    step: '2',
    title: 'Learn the Philosophy',
    desc: 'Study Dr. Wallach\'s core lectures and books — particularly Dead Doctors Don\'t Lie. A distributor who understands the Why behind the products can answer any question and educate anyone. Depth of knowledge creates depth of impact.',
  },
  {
    step: '3',
    title: 'Share Authentically',
    desc: 'Begin with your immediate network — family, friends, colleagues with health challenges. The goal is never to "sell" a product but to share information that changes lives. When the information is this powerful and the results this visible, sharing becomes natural.',
  },
  {
    step: '4',
    title: 'Build Systematically',
    desc: 'As your network grows, focus on duplication — teaching your team members to educate others the same way you educated them. The Youngevity compensation plan rewards both personal retail sales and team-building depth, creating a scalable income stream.',
  },
  {
    step: '5',
    title: 'Leverage the Tax Advantages',
    desc: 'From day one, track all business-related expenses: home office space, vehicle mileage to health events, business meals, educational materials, internet service, and travel. A home-based business operated with proper records can legitimately reduce taxable income by thousands of dollars annually.',
  },
];

const taxBenefits = [
  'Home office deduction (portion of rent/mortgage, utilities, internet)',
  'Vehicle expenses (mileage to/from business events, meetings)',
  'Business meals and entertainment (50% deductible)',
  'Educational materials (books, courses, seminars)',
  'Health insurance premiums',
  'Business travel (conferences, training events)',
  'Technology (phone, computer, software)',
  'Product samples used for demonstration',
];

export default function BusinessPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-forest-950 to-earth-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="badge bg-gold-600/30 border border-gold-500/40 text-gold-300 mb-4">
              The Youngevity Movement
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Building a Grassroots Health Army
            </h1>
            <p className="text-forest-200 text-lg leading-relaxed">
              Dr. Wallach intentionally chose network marketing to bypass the institutional gatekeepers
              that had suppressed nutritional medicine for a century. Here&apos;s the strategy, the philosophy,
              and the financial opportunity behind the mission.
            </p>
          </div>
        </div>
      </section>

      {/* The Mission */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-divider mb-5" />
              <h2 className="section-heading mb-5">Why Network Marketing?</h2>
              <p className="prose-wallach mb-4">
                Dr. Wallach faced a dilemma that every health revolutionary before him has confronted:
                how do you distribute life-changing information when the institutions that control
                distribution — hospitals, pharmacies, regulatory bodies, retail chains — are financially
                incentivized to keep that information suppressed?
              </p>
              <p className="prose-wallach mb-4">
                His answer was elegant and counterintuitive: build an army of informed, passionate individuals
                who take the message directly to the streets, one conversation at a time. Multi-level marketing
                — stripped of its commercial stigma — is exactly this: a network of educators, each financially
                rewarded for the health literacy they spread.
              </p>
              <p className="prose-wallach mb-6">
                The model creates what institutions cannot: authentic peer-to-peer health education from
                individuals who have personally experienced the results, with a financial structure that
                rewards depth of knowledge and breadth of reach simultaneously.
              </p>
              <div className="bg-forest-50 border border-forest-200 rounded-xl p-5">
                <p className="text-forest-800 font-playfair text-base italic">
                  &quot;I don&apos;t want salespeople. I want an army of educated, healthy people who can look
                  their neighbors in the eye and say: this changed my life, and here&apos;s the science behind it.&quot;
                </p>
                <cite className="text-forest-600 text-sm not-italic block mt-2">— Dr. Joel Wallach</cite>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {whyNetworkMarketing.map((item) => (
                <div key={item.title} className="bg-cream-50 border border-stone-100 rounded-2xl p-5">
                  <div className="w-10 h-10 bg-forest-100 border border-forest-200 rounded-xl flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-forest-700" />
                  </div>
                  <h3 className="font-playfair font-bold text-base text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* No Salary Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-earth-800 to-earth-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Leaf className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-4">
                {wallachNoSalary.title}
              </h2>
              <div className="space-y-3">
                {wallachNoSalary.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <p className="text-amber-100 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Build */}
      <section className="py-16 md:py-24 bg-cream-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="section-heading">How to Build Your Health Business</h2>
            <p className="section-subheading mx-auto">
              Five steps that take you from first product user to mission-driven business builder.
            </p>
          </div>

          <div className="space-y-5">
            {businessSteps.map((step) => (
              <div key={step.step} className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm flex gap-5">
                <div className="w-12 h-12 bg-gradient-to-br from-forest-700 to-forest-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow">
                  <span className="text-white font-playfair font-bold text-xl">{step.step}</span>
                </div>
                <div>
                  <h3 className="font-playfair font-bold text-lg text-stone-900 mb-2">{step.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Benefits */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-divider mb-5" />
              <h2 className="section-heading mb-5">The Tax Advantage — Get the Deductions of the Wealthy</h2>
              <p className="prose-wallach mb-4">
                In his financial work, Dr. Wallach makes a point that most Americans never learn:
                the U.S. tax code contains a vast array of legitimate business deductions that the
                wealthy use aggressively — deductions that are available to <em>anyone</em> who operates
                a legitimate home-based business.
              </p>
              <p className="prose-wallach mb-4">
                A Youngevity distributorship qualifies as a legitimate home-based business — which means
                the operator can access the same deduction categories used by corporations to legally
                reduce their taxable income. For a household earning $60,000–$100,000 annually, these
                deductions can represent $5,000–$15,000 in legitimate tax savings per year.
              </p>
              <p className="prose-wallach mb-6">
                Dr. Wallach details the full strategy in his book <em>Wall Street Poker Night</em>,
                which teaches everyday people to operate their personal finances with the same sophistication
                as institutional investors and corporate structures.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="flex items-start gap-2">
                  <BookOpen className="w-5 h-5 text-earth-700 flex-shrink-0 mt-0.5" />
                  <p className="text-earth-800 text-sm leading-relaxed">
                    <strong>Wall Street Poker Night</strong> — Dr. Wallach&apos;s financial empowerment book
                    detailing how to legally use the same tax strategies as America&apos;s wealthiest individuals
                    through a home-based business model.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-forest-900 text-white rounded-2xl p-6">
                <h3 className="font-playfair font-bold text-xl mb-5">Potential Home Business Deductions</h3>
                <div className="space-y-2.5">
                  {taxBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-forest-400 flex-shrink-0 mt-0.5" />
                      <span className="text-forest-100 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-white/10 border border-white/20 rounded-xl p-4">
                  <p className="text-forest-300 text-xs leading-relaxed">
                    <strong className="text-forest-200">Note:</strong> Tax deductibility depends on business legitimacy, documentation, and your jurisdiction. Consult a tax professional to implement these strategies correctly for your specific situation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Bigger Picture */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-forest-900 to-ocean-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Beyond a Business — A Movement</h2>
          <p className="text-forest-200 text-lg mb-8 max-w-2xl mx-auto">
            Dr. Wallach&apos;s vision was never simply commercial. He wanted to build a force large enough to
            counterbalance a medical-pharmaceutical system that he believed had captured both the
            regulatory apparatus and the public&apos;s imagination. The Youngevity network is, in his words,
            an army — one conversation, one family, one community at a time.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
            {[
              { title: 'Health Freedom', desc: 'Every educated Youngevity distributor represents one more person who has taken responsibility for their own health and rejected dependency on pharmaceutical management.', icon: '🛡️' },
              { title: 'Economic Independence', desc: 'The business model creates a pathway to financial autonomy for people who do the educational work — rewarding mission alignment with financial sustainability.', icon: '💰' },
              { title: 'Generational Impact', desc: 'Teaching the 90 Essential Nutrients to parents means their children grow up in nutritionally replete households — breaking the multi-generational cycle of preventable deficiency diseases.', icon: '🌱' },
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
              Start With the Products <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/philosophy" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
              Learn the Philosophy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
