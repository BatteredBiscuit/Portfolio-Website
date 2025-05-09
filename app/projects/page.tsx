"use client";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import FadeIn from "@/components/animations/FadeIn";
import { useTheme } from "@mui/material/styles";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import PageMetaTags from "@/components/PageMetaTags";
import { pageMetadata } from "@/app/utils/metadata";

export default function Projects() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        flexGrow: 1,
        background: theme.palette.background.default,
        minHeight: "100vh",
      }}
    >
      <PageMetaTags
        title={pageMetadata.projects.title}
        description={pageMetadata.projects.description}
      />
      <Navbar />

      <Container
        maxWidth="lg"
        sx={{ mt: isMobile ? 4 : 8, mb: isMobile ? 4 : 8 }}
      >
        <FadeIn>
          <Typography variant="h4" gutterBottom sx={{ mb: 4, fontWeight: 600 }}>
            My Projects
          </Typography>
        </FadeIn>

        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <FadeIn delay={0.1 * index}>
                <Box>
                  <Card
                    variant="hoverEnabled"
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, p: isMobile ? 2.5 : 3 }}>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.primary.main,
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {project.description}
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={1}
                        sx={{ mb: 2 }}
                        flexWrap="wrap"
                        gap={1}
                      >
                        {project.technologies.map((tech, techIndex) => (
                          <Chip
                            key={techIndex}
                            label={tech}
                            size="small"
                            variant="technology"
                          />
                        ))}
                      </Stack>
                    </CardContent>
                    {(project.githubUrl ||
                      project.demoUrl ||
                      project.linkUrl) && (
                      <CardActions
                        sx={{
                          p: isMobile ? 2 : 2.5,
                          borderTop: `1px solid ${theme.palette.divider}`,
                        }}
                      >
                        {project.githubUrl && (
                          <Button
                            size="small"
                            href={project.githubUrl}
                            target="_blank"
                            color="primary"
                          >
                            GitHub
                          </Button>
                        )}
                        {project.demoUrl && (
                          <Button
                            size="small"
                            href={project.demoUrl}
                            target="_blank"
                            color="primary"
                          >
                            Live Demo
                          </Button>
                        )}
                        {project.linkUrl && (
                          <Button
                            size="small"
                            href={project.linkUrl}
                            target="_blank"
                            color="primary"
                          >
                            {project.title} Link
                          </Button>
                        )}
                      </CardActions>
                    )}
                  </Card>
                </Box>
              </FadeIn>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
