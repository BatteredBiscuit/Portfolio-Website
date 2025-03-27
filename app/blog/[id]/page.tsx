"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Container,
  Typography,
  Box,
  Chip,
  Button,
  Divider,
  Paper,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getBlogById } from "@/data/blogs";
import ReactMarkdown from "react-markdown";
import Navbar from "@/components/Navbar";

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const blog = getBlogById(id);

  if (!blog) {
    return (
      <Box
        sx={{
          flexGrow: 1,
          background: "background.default",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
          <Typography variant="h4" component="h1">
            Blog post not found
          </Typography>
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => router.push("/blog")}
            sx={{ mt: 4 }}
          >
            Back to Blogs
          </Button>
        </Container>
      </Box>
    );
  }

  return (
    <Box
      sx={{ flexGrow: 1, background: "background.default", minHeight: "100vh" }}
    >
      <Navbar />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={() => router.push("/blog")}
          sx={{ mb: 4 }}
        >
          Back to Blogs
        </Button>

        {blog.image && (
          <Box
            component="img"
            src={blog.image}
            alt={blog.title}
            sx={{
              width: "100%",
              height: 300,
              objectFit: "cover",
              borderRadius: 2,
              mb: 3,
            }}
          />
        )}

        <Typography
          variant="h3"
          component="h1"
          sx={{ mb: 2, fontWeight: "bold" }}
        >
          {blog.title}
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
          {new Date(blog.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4 }}>
          {blog.tags.map((tag) => (
            <Chip key={tag} label={tag} sx={{ borderRadius: 1 }} />
          ))}
        </Box>

        <Divider sx={{ mb: 4 }} />

        <Paper elevation={0} sx={{ p: 3, bgcolor: "background.paper" }}>
          <Box sx={{ typography: "body1" }} className="blog-content">
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
