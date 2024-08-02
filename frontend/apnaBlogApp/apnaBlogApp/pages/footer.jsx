
import React from 'react';
import { Container, Typography, Link, Grid, IconButton, Box } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, py: 3, bgcolor: '#f5f5f5' }}>
      <Grid container spacing={4}>
        {/* Social Media Icons */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton component="a" href="https://facebook.com/" aria-label="Facebook">
              <Facebook />
            </IconButton>
            <IconButton component="a" href="https://twitter.com/" aria-label="Twitter">
              <Twitter />
            </IconButton>
            <IconButton component="a" href="https://instagram.com/theaayushadhana" aria-label="Instagram">
              <Instagram />
            </IconButton>
            <IconButton component="a" href="https://linkedin.com/" aria-label="LinkedIn">
              <LinkedIn />
            </IconButton>
            <IconButton component="a" href="https://www.youtube.com/@DeveloperAayush-Adhana" aria-label="YouTube">
              <YouTube />
            </IconButton>
          </Box>
        </Grid>

        {/* Legal Pages */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Legal
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <Link href="/privacyPolicy" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Privacy Policy
            </Link>
            <Link href="/terms&Conditions" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Terms and Conditions
            </Link>
            <Link href="/disclaimer" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Disclaimer
            </Link>
          </Typography>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <Link href="mailto:developeraayush145@gmail.com" color="inherit" sx={{ display: 'block', mb: 1 }}>
              support@apnaBlogApp.com
            </Link>
            <Link href="tel:+91 8445400056" color="inherit">
              +91 8445400056
            </Link>
          </Typography>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box sx={{ mt: 4, textAlign: 'center', borderTop: '1px solid #ddd', pt: 2 }}>
        <Typography variant="body2" color="textSecondary">
          © 2024 ApnaBlogApp.com All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
