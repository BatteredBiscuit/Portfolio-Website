'use client';

import { Box, Container, Typography, Paper, Grid, Avatar, Chip, Stack, useMediaQuery, Tabs, Tab } from '@mui/material';
import Navbar from '@/components/Navbar';
import { useTheme } from '@mui/material/styles';
import { skills } from '@/data/skills';
import { modules, degreeInfo } from '@/data/modules';
import { useState } from 'react';
import Image from 'next/image';

export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isDarkMode = theme.palette.mode === 'dark';
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh', background: theme.palette.background.default }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: isMobile ? 4 : 8, mb: isMobile ? 4 : 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ 
              p: 3, 
              background: isDarkMode
                ? 'linear-gradient(to right bottom, #1e293b, #0f172a)'
                : 'linear-gradient(to right bottom, #ffffff, #f8f9fa)',
              borderRadius: 3,
              textAlign: 'center',
              position: 'sticky',
              top: 20
            }}>
              <Avatar
                sx={{ 
                  width: isMobile ? 200 : 250,
                  height: isMobile ? 200 : 250,
                  margin: 'auto',
                  mb: 2,
                  border: `4px solid ${theme.palette.primary.main}`
                }}
                alt="Hayden O'Neill"
                src="/images/myself.png"
              />
              <Typography variant="h5" gutterBottom sx={{ color: theme.palette.primary.main }} fontWeight={600}>
                Hayden O'Neill
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Software Developer
              </Typography>
              <Typography paragraph sx={{ mt: 2, textAlign: 'left', color: theme.palette.text.primary }}>
              Motivated final-year Computer Science student at Northumbria University, on course to graduate with a first-class degree. Jointly placed third in the second year with an 82% average. Passionate about technology and coding, with strong expertise in many different aspects of computer science. Proficient in communication and teamwork, as well as being recognised for problem-solving abilities and a high level of mathematical proficiency, seeking a graduate role to apply technical expertise and passion for innovation in a fast-moving, tech-driven environment.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={8}>
            <Paper elevation={2} sx={{ 
              background: isDarkMode
                ? 'linear-gradient(to right bottom, #1e293b, #0f172a)'
                : 'linear-gradient(to right bottom, #ffffff, #f8f9fa)',
              borderRadius: 3
            }}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                centered
                sx={{ 
                  borderBottom: 1, 
                  borderColor: 'divider',
                  '& .MuiTab-root': {
                    color: theme.palette.text.secondary,
                    '&.Mui-selected': {
                      color: theme.palette.primary.main,
                    },
                  },
                }}
              >
                <Tab label="Education" />
                <Tab label="Skills" />
              </Tabs>
              
              <Box sx={{ p: isMobile ? 2 : 3 }}>
                {tabValue === 0 && (
                  <Box>
                    <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Chip
                        label={`${degreeInfo.classification} (${degreeInfo.overallPercentage})`}
                        color="success"
                        sx={{ fontSize: '1rem', height: 32 }}
                      />
                      {degreeInfo.status === 'predicted' && (
                        <Typography variant="caption" color="text.secondary">
                          Predicted
                        </Typography>
                      )}
                    </Box>
                    {modules.map((year, yearIndex) => (
                      <Box key={yearIndex} sx={{ mb: 3 }}>
                        <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                          {year.year}
                          {year.average && (
                            <Chip
                              label={`Average: ${year.average}`}
                              size="small"
                              color="secondary"
                              sx={{ ml: 2 }}
                            />
                          )}
                        </Typography>
                        <Grid container spacing={2}>
                          {year.modules.map((module, moduleIndex) => (
                            <Grid item xs={12} sm={6} key={moduleIndex}>
                              <Paper elevation={2} sx={{ 
                                p: 2,
                                background: theme.palette.background.paper,
                                transition: 'transform 0.2s',
                                '&:hover': {
                                  transform: 'translateY(-4px)',
                                  '@media (hover: none)': {
                                    transform: 'none'
                                  }
                                }
                              }}>
                                <Typography variant="subtitle1" gutterBottom>
                                  {module.name}
                                  {module.grade && (
                                    <Chip
                                      label={module.grade}
                                      size="small"
                                      color="primary"
                                      sx={{ ml: 1 }}
                                    />
                                  )}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  {module.description}
                                </Typography>
                              </Paper>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    ))}
                  </Box>
                )}
                
                {tabValue === 1 && (
                  <Box>
                    {skills.map((skillCategory, index) => (
                      <Box key={index} sx={{ mb: 3 }}>
                        <Typography variant="h6" gutterBottom sx={{ color: theme.palette.text.primary }}>
                          {skillCategory.category}
                        </Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                          {skillCategory.items.map((skill, skillIndex) => (
                            <Chip
                              key={skillIndex}
                              label={skill.name}
                              sx={{
                                background: isDarkMode ? theme.palette.primary.main : theme.palette.primary.dark,
                                color: '#ffffff',
                                '&:hover': {
                                  background: isDarkMode ? theme.palette.primary.dark : theme.palette.primary.main,
                                  '@media (hover: none)': {
                                    background: isDarkMode ? theme.palette.primary.main : theme.palette.primary.dark
                                  }
                                }
                              }}
                              icon={skill.imagePath ? 
                                <Box sx={{ width: 20, height: 20, marginLeft: '7px', position: 'relative' }}>
                                  <Image
                                    src={`/${skill.imagePath}`}
                                    alt=""
                                    fill
                                    style={{ objectFit: 'contain' }}
                                  />
                                </Box> : undefined}
                            />
                          ))}
                        </Stack>
                      </Box>
                    ))}
                  </Box>
                )}
                
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
