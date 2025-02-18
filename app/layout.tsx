import { ReactNode } from 'react';

import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import ClientThemeProvider from '@/components/Providers/ClientThemeProvider';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: {
    default: "Hayden O'Neill's Portfolio",
    template: "%s | Hayden O'Neill",
  },
  description: "Portfolio website showcasing my work and experience",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ClientThemeProvider>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <PageTransition>{children}</PageTransition>
            <Footer />
          </div>
          <Analytics />
          <SpeedInsights />
        </ClientThemeProvider>
      </body>
    </html>
  );
}
