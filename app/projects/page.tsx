'use client';

import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Stack, Chip, useMediaQuery } from '@mui/material';
import Navbar from '@/components/Navbar';
import { useTheme } from '@mui/material/styles';
import { projects } from '@/data/projects';

export default function Projects() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ 
      flexGrow: 1,
      background: theme.palette.background.default,
      minHeight: '100vh'
    }}>
      <Navbar />

      <Container maxWidth="lg" sx={{ mt: isMobile ? 4 : 8, mb: isMobile ? 4 : 8 }}>
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            mb: 4,
            color: theme.palette.text.primary,
            fontWeight: 600
          }}
        >
          My Projects
        </Typography>
        
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                }
              }}>
                <CardContent sx={{ 
                  flexGrow: 1, 
                  p: isMobile ? 2.5 : 3 
                }}>
                  <Typography 
                    variant="h6" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 600,
                      color: theme.palette.primary.main
                    }}
                  >
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
                <CardActions sx={{ 
                  p: isMobile ? 2 : 2.5,
                  borderTop: `1px solid ${theme.palette.divider}`
                }}>
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
  );
}
