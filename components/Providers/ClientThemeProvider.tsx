'use client';

import { ThemeProvider } from '@mui/material/styles';
import theme from '@/styles/theme';

export default function ClientThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}