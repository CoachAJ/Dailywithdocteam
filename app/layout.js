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

export const metadata = {
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
  ],
  openGraph: {
    type: 'website',
    siteName: 'Daily With Doc Team',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream-50">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
