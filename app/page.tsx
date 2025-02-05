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
          <Typography 
            variant="body1" 
            paragraph
            sx={{ 
              fontSize: isMobile ? '1rem' : '1.1rem',
              textAlign: 'left',
              maxWidth: '800px',
              margin: '0 auto',
              mt: 3
            }}
          >
            Hi, I'm Hayden O’Neill, a final-year Computer Science student at Northumbria University, on track to graduate with a first-class degree. With a strong passion for technology and coding, I have developed expertise in software engineering, web development, and systems analysis, as well as many other aspects of the industry. My academic achievements reflect my dedication, having ranked jointly third in my second year with an 82% average.

            Beyond academics, I bring a well-rounded skill set from my experiences in retail, hospitality, and sports officiating. My roles as a basketball referee and table official in high-profile leagues have sharpened my ability to perform under pressure, communicate effectively, and adapt to dynamic environments.

            Technically, I have experience working with multiple programming languages, including Python, Java, C#, and JavaScript, along with proficiency in many computing aspects not limited to cloud computing, machine learning, and data security. I thrive in collaborative settings and enjoy solving complex problems with innovative solutions.

            I am eager to apply my technical expertise and problem-solving skills in a fast-moving, tech-driven environment. Whether it's software development, web technologies, or data analysis, or something else entirely, I am always looking for opportunities to grow and create impactful solutions.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
