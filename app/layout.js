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
    default: 'The Wallach Revolution | Dr. Joel D. Wallach',
    template: '%s | Dr. Joel Wallach',
  },
  description:
    'Discover the groundbreaking nutritional research of Dr. Joel D. Wallach — veterinarian, naturopath, and author of Dead Doctors Don\'t Lie. Learn about the 90 Essential Nutrients and how to support your body\'s natural health.',
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
    siteName: 'The Wallach Revolution',
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
