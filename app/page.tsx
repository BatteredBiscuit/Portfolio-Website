"use client";

import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import FadeIn from "@/components/animations/FadeIn";
import { useTheme } from "@mui/material/styles";
import Navbar from "@/components/Navbar";
import PageMetaTags from "@/components/PageMetaTags";
import { pageMetadata } from "@/app/utils/metadata";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: "100vh",
        background: theme.palette.background.default,
      }}
    >
      <PageMetaTags
        title={pageMetadata.home.title}
        description={pageMetadata.home.description}
      />
      <Navbar />

      <Container
        maxWidth="lg"
        sx={{ mt: isMobile ? 4 : 8, mb: isMobile ? 4 : 8 }}
      >
        <FadeIn>
          <Paper
            elevation={2}
            sx={{
              p: isMobile ? 4 : 6,
              borderRadius: 3,
              textAlign: "center",
              mb: 4,
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontSize: isMobile ? "2.5rem" : "3.75rem",
                fontWeight: 700,
                backgroundImage: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                mb: 3,
              }}
            >
              Hayden O'Neill
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontSize: isMobile ? "1.2rem" : "1.5rem",
                color: theme.palette.text.secondary,
                mb: 4,
                fontWeight: 500,
              }}
            >
              Software Developer | Problem Solver | Innovation Enthusiast
            </Typography>
          </Paper>
        </FadeIn>

        <Grid container spacing={3}>
          {["About Me", "Technical Overview", "Career Aspirations"].map(
            (title, index) => (
              <Grid item xs={12} md={index === 2 ? 12 : 6} key={index}>
                <FadeIn delay={0.1 * (index + 1)}>
                  <Box>
                    <Paper
                      elevation={2}
                      sx={{
                        p: isMobile ? 3 : 4,
                        height: "100%",
                        borderRadius: 3,
                      }}
                    >
                      <Typography
                        variant="h5"
                        gutterBottom
                        sx={{ color: theme.palette.primary.main }}
                        fontWeight={600}
                      >
                        {title}
                      </Typography>
                      {index === 0 ? (
                        <>
                          <Typography paragraph>
                            Hi, I'm Hayden O'Neill, a final-year Computer
                            Science student at Northumbria University, on track
                            to graduate with a first-class degree. With a strong
                            passion for technology and coding, I have developed
                            expertise in software engineering, web development,
                            and systems analysis, as well as many other aspects
                            of the industry. My academic achievements reflect my
                            dedication, having ranked jointly third in my second
                            year with an 82% average.
                          </Typography>
                          <Typography paragraph>
                            Beyond academics, I bring a well-rounded skill set
                            from my experiences in retail, hospitality, and
                            sports officiating. My roles as a basketball referee
                            and table official in high-profile leagues have
                            sharpened my ability to perform under pressure,
                            communicate effectively, and adapt to dynamic
                            environments.
                          </Typography>
                        </>
                      ) : index === 1 ? (
                        <>
                          <Typography paragraph>
                            Technically, I have experience working with multiple
                            programming languages, including Python, Java, C#,
                            and JavaScript, along with proficiency in many
                            computing aspects not limited to cloud computing,
                            machine learning, and data security. I thrive in
                            collaborative settings and enjoy solving complex
                            problems with innovative solutions.
                          </Typography>
                          <Typography paragraph>
                            I am eager to apply my technical expertise and
                            problem-solving skills in a fast-moving, tech-driven
                            environment. Whether it's software development, web
                            technologies, or data analysis, or something else
                            entirely, I am always looking for opportunities to
                            grow and create impactful solutions.
                          </Typography>
                        </>
                      ) : (
                        <>
                          <Typography paragraph>
                            My dream career lies in web and application
                            development, where I can leverage my skills in
                            creating intuitive, responsive, and powerful digital
                            experiences. Whether focusing on front-end
                            development to craft engaging user interfaces,
                            back-end development to build robust systems and
                            APIs, or working as a full-stack developer to bring
                            entire applications to life, I'm passionate about
                            the entire web development ecosystem.
                          </Typography>
                          <Typography paragraph>
                            I thrive in environments that encourage creative
                            thinking and innovation, where I can develop
                            original ideas and approaches to solve complex
                            challenges. Equally important to me is the
                            collaborative aspect of development-I enjoy building
                            upon others' ideas and contributing to a team's
                            collective vision. My experience has shown me that
                            the best solutions often emerge from diverse
                            perspectives coming together.
                          </Typography>
                          <Typography paragraph>
                            I'm excited about opportunities that allow me to
                            work with modern frameworks and technologies, solve
                            complex problems, and continuously learn in this
                            rapidly evolving field. My goal is to contribute to
                            innovative projects that make a meaningful impact
                            while growing as a developer and collaborating with
                            talented professionals in the industry.
                          </Typography>
                        </>
                      )}
                    </Paper>
                  </Box>
                </FadeIn>
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </Box>
  );
}
