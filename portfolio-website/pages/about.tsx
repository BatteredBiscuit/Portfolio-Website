import { Box, Container, Typography, Paper, Grid, Avatar, Chip, Stack, useMediaQuery } from '@mui/material';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import theme from '../styles/theme';
import { skills } from '../data/skills';

export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <Head>
          <title>About Me - Portfolio</title>
        </Head>
        
        <Navbar />

        <Container maxWidth="lg" sx={{ mt: isMobile ? 4 : 8, mb: isMobile ? 4 : 8 }}>
          <Grid container spacing={isMobile ? 2 : 4}>
            <Grid item xs={12} md={4}>
              <Avatar
                sx={{ 
                  width: isMobile ? 200 : 250,
                  height: isMobile ? 200 : 250,
                  margin: 'auto',
                  mb: isMobile ? 2 : 0
                }}
                alt="Your Name"
                src="/your-photo.jpg"
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper elevation={3} sx={{ p: isMobile ? 2 : 4 }}>
                <Typography variant="h4" gutterBottom>
                  About Me
                </Typography>
                <Typography paragraph>
                  [Your compelling introduction here]
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                  Skills
                </Typography>
                {skills.map((skillCategory, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Typography variant="h6" gutterBottom>
                      {skillCategory.category}
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" gap={isMobile ? 0.5 : 1}>
                      {skillCategory.items.map((skill, skillIndex) => (
                        <Chip
                          key={skillIndex}
                          label={skill.name}
                          color="primary"
                          variant="outlined"
                          icon={skill.imagePath ? 
                            <img 
                              src={skill.imagePath} 
                              alt="" 
                              style={{ width: 20, height: 20, marginLeft: 7 }}
                            /> : undefined}
                        />
                      ))}
                    </Stack>
                  </Box>
                ))}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
