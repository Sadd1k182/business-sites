import type { Metadata } from 'next';
import { JetBrains_Mono, Manrope } from 'next/font/google';
import { ClarityAnalytics } from '@/components/ClarityAnalytics';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { siteContent } from '@/data/site-content';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600', '700'],
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
        'Свіжі карти Європи для вантажівок (TIR) та українська мова за підтримки моделі',
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
    <html
      lang="uk"
      className={`${manrope.variable} ${jetBrainsMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredDataGraph),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-blue-100 selection:text-blue-900">
        <ClarityAnalytics />
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
