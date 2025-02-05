'use client';

import { Box, Container, Typography, Paper, useMediaQuery, Grid } from '@mui/material';
import Navbar from '@/components/Navbar';
import { useTheme } from '@mui/material/styles';

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ 
      flexGrow: 1,
      minHeight: '100vh',
      background: theme.palette.background.default
    }}>
      <Navbar />

      <Container maxWidth="lg" sx={{ mt: isMobile ? 4 : 8, mb: isMobile ? 4 : 8 }}>
        <Paper 
          elevation={2} 
          sx={{ 
            p: isMobile ? 4 : 6,
            background: 'linear-gradient(to right bottom, #ffffff, #f8f9fa)',
            borderRadius: 3,
            textAlign: 'center',
            mb: 4
          }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontSize: isMobile ? '2.5rem' : '3.75rem',
              fontWeight: 700,
              backgroundImage: 'linear-gradient(45deg, #2c3e50, #34495e)',
              backgroundClip: 'text',
              color: 'transparent',
              mb: 3
            }}
          >
            Hayden O'Neill
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{ 
              fontSize: isMobile ? '1.2rem' : '1.5rem',
              color: theme.palette.text.secondary,
              mb: 4,
              fontWeight: 500
            }}
          >
            Software Developer | Problem Solver | Innovation Enthusiast
          </Typography>
        </Paper>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={2} 
              sx={{ 
                p: isMobile ? 3 : 4,
                height: '100%',
                background: 'linear-gradient(to right bottom, #ffffff, #f8f9fa)',
                borderRadius: 3
              }}
            >
              <Typography variant="h5" gutterBottom color="primary" fontWeight={600}>
                About Me
              </Typography>
              <Typography paragraph>
                Hi, I'm Hayden O’Neill, a final-year Computer Science student at Northumbria University, on track to graduate with a first-class degree. With a strong passion for technology and coding, I have developed expertise in software engineering, web development, and systems analysis, as well as many other aspects of the industry. My academic achievements reflect my dedication, having ranked jointly third in my second year with an 82% average.
              </Typography>
              <Typography paragraph>
                Beyond academics, I bring a well-rounded skill set from my experiences in retail, hospitality, and sports officiating. My roles as a basketball referee and table official in high-profile leagues have sharpened my ability to perform under pressure, communicate effectively, and adapt to dynamic environments.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={2} 
              sx={{ 
                p: isMobile ? 3 : 4,
                height: '100%',
                background: 'linear-gradient(to right bottom, #ffffff, #f8f9fa)',
                borderRadius: 3
              }}
            >
              <Typography variant="h5" gutterBottom color="primary" fontWeight={600}>
                Technical Overview
              </Typography>
              <Typography paragraph>
                Technically, I have experience working with multiple programming languages, including Python, Java, C#, and JavaScript, along with proficiency in many computing aspects not limited to cloud computing, machine learning, and data security. I thrive in collaborative settings and enjoy solving complex problems with innovative solutions.
              </Typography>
              <Typography paragraph>
                I am eager to apply my technical expertise and problem-solving skills in a fast-moving, tech-driven environment. Whether it's software development, web technologies, or data analysis, or something else entirely, I am always looking for opportunities to grow and create impactful solutions.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
