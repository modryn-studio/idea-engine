import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { DM_Serif_Display, DM_Mono } from 'next/font/google';
import { site } from '@/config/site';
import { SiteSchema } from '@/components/site-schema';
import './globals.css';

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.ogTitle,
  description: site.description,
  openGraph: {
    title: site.ogTitle,
    description: site.ogDescription ?? site.description,
    url: site.url,
    siteName: site.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: site.social?.twitterHandle,
    title: site.ogTitle,
    description: site.ogDescription ?? site.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${dmMono.variable}`}>
      <body className="font-heading antialiased">
        <SiteSchema />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
