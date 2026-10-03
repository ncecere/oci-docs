import type { Metadata, Viewport } from 'next';
import { Provider } from '@/components/provider';
import { siteUrl } from '@/lib/shared';
import './global.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s · Open Chat Interface docs',
    default: 'Open Chat Interface docs',
  },
  description:
    'Documentation for Open Chat Interface (OCI), the self-hosted, multi-model chat application for institutions: using it, administering it and running it.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  // The logo's Open Graph base card (oci-assets logo/turns/png/og-card.png).
  // Titles and descriptions come from each page's own <title> and description.
  openGraph: {
    type: 'website',
    siteName: 'Open Chat Interface docs',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Open Chat Interface: self-hosted AI chat for institutions',
      },
    ],
  },
  twitter: { card: 'summary_large_image', images: ['/og.png'] },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f0f' },
  ],
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
