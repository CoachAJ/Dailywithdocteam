import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = 'https://dailywithdocteam.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Daily With Doc Team | Dr. Joel D. Wallach',
    template: '%s | DailyWithDocTeam.com',
  },
  description:
    'Bringing clarity to Dr. Joel Wallach\'s endorsement of the 90 Essential Nutrients. Discover the research, protocols, and products behind Dead Doctors Don\'t Lie.',
  keywords: [
    'Dr. Joel Wallach',
    '90 essential nutrients',
    'Dead Doctors Don\'t Lie',
    'Youngevity',
    'colloidal minerals',
    'nutritional deficiency',
    'holistic health',
    'plant-derived minerals',
    'nutritional supplements',
    'DailyWithDocTeam',
  ],
  authors: [{ name: 'Daily With Doc Team', url: siteUrl }],
  creator: 'Daily With Doc Team',
  publisher: 'Daily With Doc Team',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
  },
  openGraph: {
    type: 'website',
    siteName: 'Daily With Doc Team',
    locale: 'en_US',
    url: siteUrl,
    title: 'Daily With Doc Team | Dr. Joel D. Wallach',
    description: 'Bringing clarity to Dr. Joel Wallach\'s endorsement of the 90 Essential Nutrients.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daily With Doc Team | Dr. Joel D. Wallach',
    description: 'Bringing clarity to Dr. Joel Wallach\'s endorsement of the 90 Essential Nutrients.',
  },
  alternates: {
    canonical: siteUrl,
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Daily With Doc Team',
  alternateName: 'DailyWithDocTeam.com',
  url: 'https://dailywithdocteam.com',
  description: 'Bringing clarity to Dr. Joel Wallach\'s endorsement of the 90 Essential Nutrients.',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://dailywithdocteam.com/?q={search_term_string}' },
    'query-input': 'required name=search_term_string',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Daily With Doc Team',
  url: 'https://dailywithdocteam.com',
  logo: 'https://dailywithdocteam.com/images/doc-tree.jpg',
  description: 'An educational resource dedicated to bringing clarity to Dr. Joel Wallach\'s research on the 90 Essential Nutrients and nutritional medicine.',
  sameAs: ['https://github.com/CoachAJ/Dailywithdocteam'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body className="min-h-screen flex flex-col bg-cream-50">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
