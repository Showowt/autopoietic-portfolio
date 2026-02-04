export const metadata = {
  title: "MachineMind | AI Infrastructure for Businesses That Never Sleep",
  description: "24/7 AI automation for hospitality, restaurants, tours & professional services. Revenue recovery, booking management, multi-language support.",
  metadataBase: new URL('https://autopoietic-portfolio.vercel.app'),
  openGraph: {
    title: "MachineMind | Your Business Never Sleeps",
    description: "AI That Captures What You're Missing. 24/7 WhatsApp concierge for hospitality & services.",
    url: 'https://autopoietic-portfolio.vercel.app',
    siteName: 'MachineMind',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MachineMind - AI That Never Sleeps',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MachineMind | Your Business Never Sleeps",
    description: "AI That Captures What You're Missing",
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
