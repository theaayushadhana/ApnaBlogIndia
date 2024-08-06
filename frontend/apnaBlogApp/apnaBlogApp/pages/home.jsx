
import React, { useState, useEffect } from 'react';
import {
  Container, Typography, Box, Grid, Card, CardContent, Button, TextField, CircularProgress,Link,
  CardMedia, useMediaQuery, useTheme
} from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import world from '../src/assets/world.jpg';

// Custom styled components
const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${world})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  padding: theme.spacing(8, 2),
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[6],
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4, 2),
  },
}));

const RecentPostsCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate(); // Use useNavigate correctly

  useEffect(() => {
    
    axios.get('https://api.apnablogapp.com/api/posts')
    // https://api.apnablogapp.com/api/posts
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  

  return (
    <>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <HeroSection>
          <Typography variant="h2" component="h1" >Welcome to ApnaBlogApp</Typography>
          <Typography variant="h6" component="h2"  fontSize={18}>Discover Insights and Inspiration</Typography>
          <br />
          <Button variant="contained" color="secondary" href="/discover" sx={{ marginTop: '20px' }}>Explore Now</Button>
        </HeroSection>

      

        {/* Recent Posts */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#000' }}>Recent Posts</Typography>
          {loading ? (
            <Box sx={{ textAlign: 'center', my: 4 }}>
              <CircularProgress />
            </Box>
          ) : (
            <Grid container spacing={4}>
              {posts.map((post) => (
                <Grid item xs={12} sm={6} md={4} key={post._id}>
                  <RecentPostsCard>
                    <CardMedia
                      component="img"
                      height="140"
                      width={"100%"}
                      image={post.imageUrls} 
                      alt={post.title}
                    />
                    <CardContent>
                      <Typography variant="h6" sx={{ color: '#000' }}>{post.title}</Typography>
                      <Typography variant="body2" sx={{ color: '#555' }}>{post.description}</Typography>
                      <Button variant="text" href={`/posts/${post.slug}`}>Read More</Button>
                    </CardContent>
                  </RecentPostsCard>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>

        {/* Categories */}
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#000' }}>Categories</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {['TECH', 'INSTAGRAM', 'HOW TO ?', 'TREDING', 'MOBILE PHONES'].map((category) => (
              <Button
                key={category}
                variant="outlined"
                sx={{ m: 1, color: '#000', borderColor: '#000' }}
                component={Link}
                href={`/category/${category}`}
              >
                {category}
              </Button>
            ))}
          </Box>
        </Box>

        {/* CTA Section */}
        <Box sx={{ my: 4, textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#000' }}>Ready to Dive In ApnaBlogApp?</Typography>
          <Button variant="contained" color="primary" href="/discover">Dive Now</Button>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
