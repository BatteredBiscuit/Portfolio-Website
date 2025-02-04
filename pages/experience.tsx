import { Box, Container, Typography, Paper, Avatar, useMediaQuery } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import theme from '../styles/theme';
import { experiences } from '../data/experiences';

export default function Experience() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <Head>
          <title>Experience - Hayden O'Neill</title>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        </Head>

        <Navbar />

        <Container maxWidth="lg" sx={{ mt: isMobile ? 4 : 8, mb: isMobile ? 4 : 8 }}>
          <Paper elevation={3} sx={{ p: isMobile ? 2 : 4 }}>
            <Typography variant="h4" gutterBottom sx={{ fontSize: isMobile ? '1.8rem' : '2.125rem' }}>
              Work Experience
            </Typography>
            
            <Timeline 
              position={isMobile ? "right" : "alternate"}
              sx={{ 
                [`& .MuiTimelineItem-root:before`]: {
                  flex: isMobile ? 0 : 1
                }
              }}
            >
              {experiences.map((experience, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot color="primary">
                      <Avatar 
                        src={experience.logoPath} 
                        sx={{ 
                          width: isMobile ? 20 : 24, 
                          height: isMobile ? 20 : 24 
                        }} 
                      />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Paper elevation={3} sx={{ p: isMobile ? 1.5 : 2 }}>
                      <Typography variant="h6">{experience.title}</Typography>
                      <Typography>{experience.company}</Typography>
                      <Typography variant="body2" color="textSecondary">{experience.period}</Typography>
                      <Typography>{experience.description}</Typography>
                    </Paper>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
