

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { useParams } from 'react-router-dom';

// Utility function to remove HTML tags and special symbols
const removeHtmlTagsAndSpecialSymbols = (htmlString) => {
  // Remove HTML tags
  let cleanString = htmlString.replace(/<[^>]+>/g, '');
  // Remove special symbols
  cleanString = cleanString.replace(/[^\w\s]/g, '');
  return cleanString;
};

// Utility function to get the first 100 words from a string
const getFirst100Words = (text) => {
  const words = text.split(/\s+/); // Split by whitespace
  return words.slice(0, 50).join(' ') + (words.length > 100 ? '...' : ''); // Join the first 100 words and add ellipsis if needed
};

const PostsByCategory = () => {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostsByCategory = async () => {
      try {
        // used 4173 instead of 5000
        const response = await axios.get(`https://api.apnablogapp.com/api/posts/category/${category}`);
        // https://api.apnablogapp.com/api/posts
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts by category:', error);
        setLoading(false);
      }
    };

    fetchPostsByCategory();
  }, [category]);

  if (loading) {
    return <Typography variant="h6" align="center">Loading...</Typography>;
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" align="center" gutterBottom>Posts in {category}</Typography>
        {posts.length > 0 ? (
          <Grid container spacing={4}>
            {posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post._id}>
                <Card>
                  {post.imageUrls && (
                    <CardMedia
                      component="img"
                      height="140"
                      image={post.imageUrls}
                      alt={post.title}
                    />
                  )}
                  <CardContent>
                    <Typography variant="h6" component="div">{post.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {getFirst100Words(removeHtmlTagsAndSpecialSymbols(post.content))}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href={`/posts/${post.slug}`}>Read More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="h6" align="center">No posts found in this category.</Typography>
        )}
      </Box>
    </Container>
  );
};

export default PostsByCategory;

