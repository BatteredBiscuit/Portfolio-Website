'use client';

import { Box, Container, Typography, Paper, useMediaQuery } from '@mui/material';
import Navbar from '@/components/Navbar';
import { useTheme } from '@mui/material/styles';

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar />

      <Container maxWidth="lg" sx={{ mt: isMobile ? 4 : 8, mb: isMobile ? 4 : 8 }}>
        <Paper elevation={3} sx={{ p: isMobile ? 2 : 4, textAlign: 'center' }}>
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontSize: isMobile ? '2.5rem' : '3.75rem',
              wordWrap: 'break-word'
            }}
          >
            Welcome to My Portfolio!
          </Typography>
          <Typography 
            variant="h5" 
            color="textSecondary" 
            paragraph
            sx={{ 
              fontSize: isMobile ? '1.2rem' : '1.5rem'
            }}
          >
            Software Developer | Problem Solver | Innovation Enthusiast
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
