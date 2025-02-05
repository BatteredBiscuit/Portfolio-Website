'use client';

import Image from 'next/image';
import { Box, Container, Typography, Paper, Grid, Avatar, Chip, Stack, useMediaQuery } from '@mui/material';
import Navbar from '@/components/Navbar';
import { useTheme } from '@mui/material/styles';
import { skills } from '@/data/skills';
import { modules, degreeInfo } from '@/data/modules';

export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ flexGrow: 1 }}>
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
              alt="Hayden O'Neill"
              src="/images/myself.png"
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: isMobile ? 2 : 4 }}>
              <Typography variant="h4" gutterBottom>
                About Me
              </Typography>
              <Typography paragraph>
                Motivated final-year Computer Science student at Northumbria University, on course to graduate with a first-class degree. Jointly placed third in the second year with an 82% average. Passionate about technology and coding, with strong expertise in many different aspects of computer science such as software engineering, web technology, and systems analysis. Proficient in communication and teamwork, demonstrated through experience in retail, hospitality, and sports roles, including leadership roles within sports and sports officiating. Recognised for problem-solving abilities and a high level of mathematical proficiency, seeking a graduate role to apply technical expertise and passion for innovation in a fast-moving, tech-driven environment.
              </Typography>
              <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                University Modules
              </Typography>
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
                        <Paper elevation={2} sx={{ p: 2 }}>
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
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
