import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';

const PolicyCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  padding: theme.spacing(2),
}));

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
       ApnaBlogApp Privacy Policy
      </Typography>
      <PolicyCard>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Introduction
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to ApnaBlogApp. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully.
          </Typography>
          
          <Typography variant="h5" gutterBottom>
            Information Collection
          </Typography>
          <Typography variant="body1" paragraph>
            We collect information that you provide directly to us, such as your name, email address, and any content you submit. We may also collect information about your interactions with our site through cookies and tracking technologies.
          </Typography>
          
          <Typography variant="h5" gutterBottom>
            Cookies and Tracking Technologies
          </Typography>
          <Typography variant="body1" paragraph>
            We use cookies and similar tracking technologies to enhance your experience on our site. Cookies are small files stored on your device that help us improve our services. You can control cookie settings through your browser settings.
          </Typography>
          <Typography variant="body1" paragraph>
            We use Google AdSense to serve ads. Google may use cookies to serve ads based on your visit to our site and other sites on the Internet. You can learn more about how Google uses data by visiting the Google Privacy Policy.
          </Typography>

          <Typography variant="h5" gutterBottom>
            Use of Information
          </Typography>
          <Typography variant="body1" paragraph>
            The information we collect is used to improve our website, provide customer support, and communicate with you. We may also use it for marketing and advertising purposes.
          </Typography>
          
          <Typography variant="h5" gutterBottom>
            Third-Party Services
          </Typography>
          <Typography variant="body1" paragraph>
            We may use third-party services, including Google AdSense, to display advertisements. These third parties may collect and use information about your visits to our site and other sites to provide ads that are relevant to you. For more details, please refer to Google's Privacy Policy.
          </Typography>

          <Typography variant="h5" gutterBottom>
            Data Security
          </Typography>
          <Typography variant="body1" paragraph>
            We implement reasonable security measures to protect your information from unauthorized access and disclosure. However, no method of transmission over the Internet or electronic storage is completely secure.
          </Typography>

          <Typography variant="h5" gutterBottom>
            User Rights
          </Typography>
          <Typography variant="body1" paragraph>
            You have the right to access, correct, or delete your personal information. You can also opt-out of certain data collection practices by adjusting your browser settings or contacting us directly.
          </Typography>

          <Typography variant="h5" gutterBottom>
            Changes to the Privacy Policy
          </Typography>
          <Typography variant="body1" paragraph>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website. You are advised to review this Privacy Policy periodically for any changes.
          </Typography>

          <Typography variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions or concerns about this Privacy Policy, please contact us at: contact@apnblogapp.com.
          </Typography>
        </CardContent>
      </PolicyCard>
    </Container>
  );
};

export default PrivacyPolicy;
