"use client";

import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  IconButton,
  Stack,
  useMediaQuery,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.background.paper
            : theme.palette.background.default,
        borderTop: `1px solid ${theme.palette.divider}`,
        mt: "auto",
        py: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                textAlign: { xs: "center", sm: "left" },
                mb: { xs: 2, sm: 0 },
              }}
            >
              © {currentYear} Hayden O'Neill. All rights reserved.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                justifyContent: { xs: "center", sm: "flex-end" },
              }}
            >
              <IconButton
                component={Link}
                href="https://www.linkedin.com/in/hayden-oneill/"
                target="_blank"
                aria-label="LinkedIn"
                sx={{
                  color: theme.palette.primary.main,
                  transition: "transform 0.2s, color 0.2s",
                  "&:hover": {
                    color: "#0077B5", // LinkedIn blue
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>

              <IconButton
                component={Link}
                href="https://github.com/haydenoneill"
                target="_blank"
                aria-label="GitHub"
                sx={{
                  color: theme.palette.primary.main,
                  transition: "transform 0.2s, color 0.2s",
                  "&:hover": {
                    color:
                      theme.palette.mode === "dark" ? "#ffffff" : "#181717", // GitHub colors
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <GitHubIcon />
              </IconButton>

              <IconButton
                component={Link}
                href="mailto:hayden@haydenoneill.com"
                aria-label="Email"
                sx={{
                  color: theme.palette.primary.main,
                  transition: "transform 0.2s, color 0.2s",
                  "&:hover": {
                    color: theme.palette.secondary.main,
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <EmailIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
