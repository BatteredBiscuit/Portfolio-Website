import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  )
}

export default MyApp