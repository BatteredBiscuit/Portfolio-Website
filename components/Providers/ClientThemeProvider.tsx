"use client";

import { ThemeContextProvider, useThemeContext } from "@/contexts/ThemeContext";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import getTheme from "@/styles/theme";

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useThemeContext();
  const theme = getTheme(isDarkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default function ClientThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContextProvider>
      <ThemeWrapper>{children}</ThemeWrapper>
    </ThemeContextProvider>
  );
}
