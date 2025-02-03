import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Stack, Chip, useMediaQuery } from '@mui/material';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import theme from '../styles/theme';
import { projects } from '../data/projects';

export default function Projects() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <Head>
          <title>Projects - Portfolio</title>
        </Head>

        <Navbar />

        <Container maxWidth="lg" sx={{ mt: isMobile ? 4 : 8, mb: isMobile ? 4 : 8 }}>
          <Typography variant="h4" gutterBottom sx={{ fontSize: isMobile ? '1.8rem' : '2.125rem' }}>
            My Projects
          </Typography>
          
          <Grid container spacing={isMobile ? 2 : 4}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1, p: isMobile ? 2 : 3 }}>
                    <Typography gutterBottom variant="h5">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {project.description}
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mb: 2 }} flexWrap="wrap" gap={1}>
                      {project.technologies.map((tech, techIndex) => (
                        <Chip key={techIndex} label={tech} size="small" />
                      ))}
                    </Stack>
                  </CardContent>
                  <CardActions sx={{ p: isMobile ? 1.5 : 2 }}>
                    <Button size="small" href={project.githubUrl}>GitHub</Button>
                    {project.demoUrl && (
                      <Button size="small" href={project.demoUrl}>Live Demo</Button>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
