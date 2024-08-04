
import React from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, CardMedia, Button, Avatar } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import founderImage from '../src/assets/apnaBlog.png'; 
import companyImage from '../src/assets/thumbnaill.png';
import achievement1 from '../src/assets/100k.jpg';
import achievement2 from '../src/assets/blog.jpg';
import achievement3 from '../src/assets/apnaBlog.png';


const AboutUs = () => {
  const achievements = [
    { id: 1, title: 'Monthly 100k Happy Blog Readers', description: 'This is our goal for our first 100k blog readers every month. We know it is a big target but we will continue to work hard for this.', image: achievement1 },
    { id: 2, title: '30 new blogs post every month', description: 'It is a very good thing to be consistent and post something new on our platform for our readers and engage them to come and read daily, Get some knowledge about the world what is happening?', image: achievement2 },
    { id: 3, title: 'ApnaBlogApp for the world', description: 'We are working hard on our website to get the readers from all over the world at a single place. It would be like a good dream that there are readers on our blog website from different countries.', image: achievement3 },
  ];

  return (
    <Container maxWidth="lg">
      {/* Company Image */}
      <Card sx={{ marginBottom: 4, borderRadius: 1 }}>
        <CardMedia component="img" height="300" image={companyImage} alt="Company Image" />
      </Card>

      {/* Achievements */}
      <Typography variant="h4" component="h2" gutterBottom>
        Our Achievements
      </Typography>
      <Grid container spacing={4}>
        {achievements.map((achievement) => (
          <Grid item xs={12} sm={6} md={4} key={achievement.id}>
            <Card sx={{ borderRadius: 1, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
              <CardMedia component="img" height="200" image={achievement.image} alt={achievement.title} />
              <CardContent>
                <Typography variant="h6" gutterBottom>{achievement.title}</Typography>
                <Typography variant="body2">{achievement.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Social Media Links */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h5" component="h3" gutterBottom>
          Follow Us
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: 2, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
              <Avatar sx={{ bgcolor: '#FF0000', width: 60, height: 60 }}>
                <YouTubeIcon />
              </Avatar>
              <Button variant="contained" href="https://www.youtube.com/channel/UCBbm8J2iLMHAKyEn0DI33wg" target="_blank" sx={{ mt: 1 }}>
                YouTube
              </Button>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: 2, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
              <Avatar sx={{ bgcolor: '#3b5998', width: 56, height: 56 }}>
                <FacebookIcon />
              </Avatar>
              <Button variant="contained" href="https://www.facebook.com" target="_blank" sx={{ mt: 1 }}>
                Facebook
              </Button>
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: 2, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
              <Avatar sx={{ bgcolor: '#E1306C', width: 56, height: 56 }}>
                <InstagramIcon />
              </Avatar>
              <Button variant="contained" href="https://www.instagram.com/theaayushadhana" target="_blank" sx={{ mt: 1 }}>
                Instagram
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Founder Section */}
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          ApnaBlogApp Founder
        </Typography>
        <Card sx={{ display: 'flex', alignItems: 'center', padding: 2, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
          <CardMedia component="img" image={founderImage} alt="Founder" sx={{ width: 150, height: 150, borderRadius: '50%' }} />
          <Box sx={{ ml: 2 }}>
            <Typography variant="h6">Aayush Adhana</Typography>
            <Typography variant="body2">Aayush Adhana - A passionate coder from a very young age, Aayush Adhana started his coding journey at just 15. He has a passion for technology and innovation, he has turned his dream of business into a reality through dedication and hard work. With a vision to create impactful and user-friendly websites and Apps, Aayush has been on an inspiring journey, combining his technical skills with an entrepreneurial spirit. His unwavering commitment and innovative mindset continue to propel him forward, making significant strides in the tech industry.</Typography>
          </Box>
        </Card>
      </Box>
    </Container>
  );
};

export default AboutUs;
