
import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';

const ContactUs = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Contact Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Our Office
              </Typography>
              <Typography variant="body1">
                ApnaBlogApp Inc.<br />
                245205 Salarpur(District: Hapur) <br />
                Meerut City, BC 245205<br />
                India
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Contact Information
              </Typography>
              <Typography variant="body1">
                Phone: + 91 8445400056<br />
                Email: developeraayush145@gmail.com
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Working Hours
              </Typography>
              <Typography variant="body1">
                Monday - Saturday: 9:00 AM - 9:00 PM<br />
                Saturday: 10:00 AM - 2:00 PM<br />
                Sunday: Closed
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Our Location
              </Typography>
              <Box
                component="iframe"
                sx={{ border: 0, width: '100%', height: '400px' }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.7767866169174!2d77.91932687450166!3d28.815724975739954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c81d0b19a7edd%3A0xc5d7de72c661013f!2sSalarpur%20outer%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1722144581977!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
              ></Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactUs;
