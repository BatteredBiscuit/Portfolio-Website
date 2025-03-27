"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Chip,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Grid,
  Container,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";
import { searchBlogs, getAllTags, type Blog } from "@/data/blogs";
import Navbar from "@/components/Navbar";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Get all tags for the filter
    setAllTags(getAllTags());

    // Initial search with empty criteria
    setFilteredBlogs(searchBlogs("", []));
  }, []);

  useEffect(() => {
    // Update filtered blogs when search query or selected tags change
    setFilteredBlogs(searchBlogs(searchQuery, selectedTags));
  }, [searchQuery, selectedTags]);

  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleBlogClick = (blogId: string) => {
    router.push(`/blog/${blogId}`);
  };

  return (
    <Box
      sx={{ flexGrow: 1, background: "background.default", minHeight: "100vh" }}
    >
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{ mb: 4, fontWeight: "bold" }}
        >
          Blog
        </Typography>

        <Box sx={{ mb: 4 }}>
          <TextField
            fullWidth
            label="Search blogs"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2 }}
          />

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
            {allTags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                onClick={() => handleTagClick(tag)}
                color={selectedTags.includes(tag) ? "primary" : "default"}
                variant={selectedTags.includes(tag) ? "filled" : "outlined"}
              />
            ))}
          </Box>
        </Box>

        <Grid container spacing={3}>
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <Grid item xs={12} sm={6} md={4} key={blog.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardActionArea onClick={() => handleBlogClick(blog.id)}>
                    {blog.image && (
                      <CardMedia
                        component="img"
                        height="140"
                        image={blog.image}
                        alt={blog.title}
                      />
                    )}
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {blog.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 1 }}
                      >
                        {new Date(blog.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 0.5,
                          mb: 2,
                        }}
                      >
                        {blog.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            variant="outlined"
                          />
                        ))}
                      </Box>
                      <Typography variant="body2">{blog.summary}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ textAlign: "center", my: 4 }}>
                No blogs found matching your criteria. Try adjusting your
                search.
              </Typography>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
