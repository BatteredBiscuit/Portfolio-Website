import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Ocean blue
      light: '#63a4ff',
      dark: '#004ba0',
    },
    secondary: {
      main: '#03a9f4', // Sky blue
      light: '#67daff',
      dark: '#007ac1',
    },
  },
});

export default theme;
