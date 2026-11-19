import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClarityAnalytics } from '@/components/ClarityAnalytics';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { siteContent } from '@/data/site-content';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  keywords: [
    'прошивка навігаторів Рівне',
    'оновлення карт Garmin Рівне',
    'встановлення iGO для вантажівок Рівне',
    'карти для фур TIR Рівне',
    'встановлення Windows Рівне',
    'налаштування ноутбука Linux Рівне',
  ],
  openGraph: {
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    type: 'website',
    locale: 'uk_UA',
    siteName: siteContent.contact.masterName,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteContent.seo.title,
    description: siteContent.seo.description,
  },
};

const structuredDataGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: siteContent.contact.masterName,
      description: siteContent.seo.description,
      telephone: siteContent.contact.phoneRaw,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Рівне',
        addressRegion: 'Рівненська область',
        addressCountry: 'UA',
      },
      areaServed: [
        { '@type': 'City', name: 'Рівне' },
        { '@type': 'AdministrativeArea', name: 'Рівненська область' },
      ],
      availableLanguage: ['uk', 'en'],
      knowsAbout: [
        'Прошивка GPS-навігаторів Garmin та iGO у Рівному',
        'Українська мова та карти Європи для вантажівок (TIR)',
        'Встановлення Windows та Linux під ключ у Рівному',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: siteContent.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${inter.variable} scroll-smooth antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredDataGraph),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
        <ClarityAnalytics />
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
