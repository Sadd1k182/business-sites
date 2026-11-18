import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { siteContent } from '@/data/site-content';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: siteContent.seo.title,
  description: siteContent.seo.description,
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

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteContent.contact.masterName,
  description: siteContent.seo.description,
  telephone: siteContent.contact.phoneRaw,
  availableLanguage: ['uk'],
  knowsAbout: [
    'Прошивка GPS-навігаторів Garmin та iGO',
    'Українська мова та карти Європи для вантажівок',
    'Встановлення Windows та Linux під ключ',
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
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
