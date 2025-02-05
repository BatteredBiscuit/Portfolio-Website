'use client';

import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Stack, Chip, useMediaQuery } from '@mui/material';
import Navbar from '@/components/Navbar';
import { useTheme } from '@mui/material/styles';
import { projects } from '@/data/projects';

export default function Projects() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isDarkMode = theme.palette.mode === 'dark';

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
                backgroundColor: theme.palette.background.paper,
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                  '@media (hover: none)': {
                    transform: 'none',
                    boxShadow: 1
                  }
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
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mb: 2,
                      color: theme.palette.text.secondary
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} sx={{ mb: 2 }} flexWrap="wrap" gap={1}>
                    {project.technologies.map((tech, techIndex) => (
                      <Chip 
                        key={techIndex} 
                        label={tech} 
                        size="small"
                        sx={{
                          backgroundColor: isDarkMode ? 'rgba(96, 165, 250, 0.1)' : 'rgba(37, 99, 235, 0.1)',
                          color: theme.palette.primary.main
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ 
                  p: isMobile ? 2 : 2.5,
                  borderTop: `1px solid ${theme.palette.divider}`
                }}>
                  <Button 
                    size="small" 
                    href={project.githubUrl}
                    sx={{ color: theme.palette.primary.main }}
                  >
                    GitHub
                  </Button>
                  {project.demoUrl && (
                    <Button 
                      size="small" 
                      href={project.demoUrl}
                      sx={{ color: theme.palette.primary.main }}
                    >
                      Live Demo
                    </Button>
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
