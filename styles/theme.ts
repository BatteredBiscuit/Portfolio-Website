import { createTheme, alpha } from "@mui/material/styles";

// Define color palette constants
const colors = {
  light: {
    primary: {
      main: "#0f3460", // Deeper navy blue
      light: "#1a5086",
      dark: "#092547",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#e6a417", // Warmer gold/amber
      light: "#f2b940",
      dark: "#c38a14",
      contrastText: "#ffffff",
    },
    background: {
      default: "#8fa8c6", // Muted blue-gray
      paper: "#aabfdb", // Slightly lighter but still muted
      gradient: "linear-gradient(to right bottom, #aabfdb, #8fa8c6)",
    },
    text: {
      primary: "#0f2d50", // Dark navy
      secondary: "#2c4970", // Medium navy
    },
    divider: "rgba(0, 0, 0, 0.12)",
    chipBackground: "rgba(15, 52, 96, 0.15)",
  },
  dark: {
    primary: {
      main: "#3b82f6", // Bright blue for dark mode
      light: "#60a5fa",
      dark: "#2563eb",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#fbbf24", // Brighter amber for dark mode
      light: "#fcd34d",
      dark: "#f59e0b",
      contrastText: "#0f172a",
    },
    background: {
      default: "#0a1929",
      paper: "#10243e",
      gradient: "linear-gradient(to right bottom, #10243e, #0a1929)",
    },
    text: {
      primary: "#f8fafc",
      secondary: "#cbd5e1",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    chipBackground: "rgba(42, 91, 153, 0.2)",
  },
};

// Function to get theme based on mode
const getTheme = (isDarkMode: boolean) => {
  const colorMode = isDarkMode ? "dark" : "light";

  return createTheme({
    palette: {
      mode: colorMode as "light" | "dark",
      primary: colors[colorMode].primary,
      secondary: colors[colorMode].secondary,
      background: {
        default: colors[colorMode].background.default,
        paper: colors[colorMode].background.paper,
      },
      text: colors[colorMode].text,
      divider: colors[colorMode].divider,
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundImage: colors[colorMode].background.gradient,
            transition: "all 0.3s ease-in-out",
          }),
        },
        variants: [
          {
            props: { variant: "hoverEnabled" },
            style: {
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              },
            },
          },
        ],
      },
      MuiCard: {
        variants: [
          {
            props: { variant: "hoverEnabled" },
            style: {
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              },
            },
          },
        ],
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: 600,
            borderRadius: "8px",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: "6px",
            "&.MuiChip-colorPrimary": {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            },
            "&.MuiChip-colorSecondary": {
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
            },
          }),
        },
        variants: [
          {
            props: { variant: "hoverEnabled" },
            style: ({ theme }) => ({
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              cursor: "pointer",
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
                transform: "translateY(-2px)",
              },
            }),
          },
          {
            props: { variant: "technology" },
            style: ({ theme }) => ({
              backgroundColor: colors[colorMode].chipBackground,
              color: theme.palette.primary.main,
            }),
          },
        ],
      },
      MuiLink: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.primary.main,
            textDecoration: "none",
            fontWeight: 500,
            "&:hover": {
              textDecoration: "underline",
            },
          }),
        },
      },
      MuiTypography: {
        styleOverrides: {
          h1: {
            fontSize: "2.5rem",
            "@media (min-width:600px)": {
              fontSize: "3.5rem",
            },
          },
          h2: {
            fontSize: "2rem",
            "@media (min-width:600px)": {
              fontSize: "2.75rem",
            },
          },
          h3: {
            fontSize: "1.75rem",
            "@media (min-width:600px)": {
              fontSize: "2.25rem",
            },
          },
          h4: {
            fontSize: "1.5rem",
            "@media (min-width:600px)": {
              fontSize: "1.75rem",
            },
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollBehavior: "smooth",
            transition: "background-color 0.3s ease",
          },
        },
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 700,
      },
      h3: {
        fontWeight: 600,
      },
      h4: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: 600,
      },
      h6: {
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 8,
    },
    transitions: {
      easing: {
        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
        easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
        easeIn: "cubic-bezier(0.4, 0, 1, 1)",
        sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
      },
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195,
      },
    },
  });
};

export default getTheme;

// Custom theme declaration to support new variants and properties
declare module "@mui/material/styles" {
  interface Theme {
    status?: {
      danger?: string;
    };
  }

  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }

  interface Palette {
    chipBackground?: string;
  }

  interface PaletteOptions {
    chipBackground?: string;
  }

  interface TypeBackground {
    gradient?: string;
  }
}

// Add Paper variant
declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    hoverEnabled: true;
  }
}

// Add Card variant
declare module "@mui/material/Card" {
  interface CardPropsVariantOverrides {
    hoverEnabled: true;
  }
}

// Add Chip variants
declare module "@mui/material/Chip" {
  interface ChipPropsVariantOverrides {
    hoverEnabled: true;
    technology: true;
  }
}
