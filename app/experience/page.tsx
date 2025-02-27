"use client";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import {
  Avatar,
  Box,
  Container,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import FadeIn from "@/components/animations/FadeIn";
import { experiences } from "@/data/experiences";
import { useTheme } from "@mui/material/styles";
import Navbar from "@/components/Navbar";

export default function Experience() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: "100vh",
        background: theme.palette.background.default,
      }}
    >
      <Navbar />

      <Container
        maxWidth="lg"
        sx={{ mt: isMobile ? 4 : 8, mb: isMobile ? 4 : 8 }}
      >
        <FadeIn>
          <Paper
            elevation={2}
            sx={{
              p: isMobile ? 3 : 5,
              background: isDarkMode
                ? "linear-gradient(to right bottom, #1e293b, #0f172a)"
                : "linear-gradient(to right bottom, #ffffff, #f8fafc)",
              borderRadius: 3,
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ mb: 4, color: theme.palette.text.primary, fontWeight: 600 }}
            >
              Work Experience
            </Typography>

            <Timeline
              position={isMobile ? "right" : "alternate"}
              sx={{
                [`& .MuiTimelineItem-root:before`]: { flex: isMobile ? 0 : 1 },
                p: 0,
              }}
            >
              {experiences.map((experience, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{ background: theme.palette.primary.main, p: 0.5 }}
                    >
                      <Avatar
                        src={experience.logoPath}
                        sx={{ width: 32, height: 32 }}
                      />
                    </TimelineDot>
                    <TimelineConnector
                      sx={{ background: theme.palette.primary.light }}
                    />
                  </TimelineSeparator>
                  <TimelineContent>
                    <FadeIn delay={0.2 * index} direction="right">
                      <Box>
                        <Paper
                          elevation={2}
                          variant="hoverEnabled"
                          sx={{
                            p: isMobile ? 2 : 3,
                            background: theme.palette.background.paper,
                          }}
                        >
                          <Typography
                            variant="h6"
                            sx={{ color: theme.palette.primary.main }}
                            gutterBottom
                            fontWeight={600}
                          >
                            {experience.title}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{ color: theme.palette.text.primary }}
                            gutterBottom
                          >
                            {experience.company}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 1 }}
                          >
                            {experience.period}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              lineHeight: 1.7,
                              color: theme.palette.text.primary,
                            }}
                          >
                            {experience.description}
                          </Typography>
                        </Paper>
                      </Box>
                    </FadeIn>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Paper>
        </FadeIn>
      </Container>
    </Box>
  );
}
