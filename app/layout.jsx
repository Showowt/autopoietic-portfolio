// ═══════════════════════════════════════════════════════════════════════════════
// MACHINEMIND v4.1 PREMIUM LAYOUT
// 5-Star Mobile & Desktop Experience
// ═══════════════════════════════════════════════════════════════════════════════

export const metadata = {
  title: "MachineMind | AI Infrastructure for Businesses That Never Sleep",
  description: "24/7 AI automation for hospitality, restaurants, tours & professional services. Revenue recovery, booking management, multi-language support.",
  metadataBase: new URL('https://autopoietic-portfolio.vercel.app'),
  
  // Open Graph
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
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: "MachineMind | Your Business Never Sleeps",
    description: "AI That Captures What You're Missing",
    images: ['/og-image.png'],
  },
  
  // Premium mobile settings
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: 'cover', // For iPhone notch support
  },
  
  // Theme colors - matches our void background
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#030508' },
    { media: '(prefers-color-scheme: dark)', color: '#030508' },
  ],
  
  // Apple-specific
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'MachineMind',
  },
  
  // Format detection - prevent auto-linking
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  
  // Icons
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
  },
  
  // Other
  keywords: [
    'AI automation',
    'WhatsApp business',
    'hospitality AI',
    'restaurant automation',
    'booking management',
    'revenue recovery',
    'Colombia AI',
    'Cartagena tech',
    '24/7 concierge',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://cal.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          minHeight: '100vh',
          minHeight: '100dvh',
          background: '#030508',
          color: '#e6edf3',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        {children}
      </body>
    </html>
  );
}
