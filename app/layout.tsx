import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import ClientThemeProvider from '@/components/Providers/ClientThemeProvider'

export const metadata = {
  title: {
    default: "Hayden O'Neill's Portfolio",
    template: "%s | Hayden O'Neill"
  },
  description: 'Portfolio website showcasing my work and experience',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientThemeProvider>
          {children}
          <Analytics />
          <SpeedInsights />
        </ClientThemeProvider>
      </body>
    </html>
  )
}
