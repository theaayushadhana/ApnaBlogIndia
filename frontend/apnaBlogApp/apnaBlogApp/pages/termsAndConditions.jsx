import React from 'react';
import { Container, Typography, Box, Link, Divider } from '@mui/material';

const TermsAndConditions = () => {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Terms and Conditions
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to our website! These Terms and Conditions outline the rules and regulations for the use of our website. By accessing or using this website, you agree to comply with these terms. If you do not agree with any part of these terms, you should not use our website.
      </Typography>
      <Divider sx={{ my: 4 }} />
      <Typography variant="h4" component="h2" gutterBottom>
        1. Acceptance of Terms
      </Typography>
      <Typography variant="body1" paragraph>
        By accessing or using this website, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, you must discontinue use of our website immediately.
      </Typography>
      <Divider sx={{ my: 4 }} />
      <Typography variant="h4" component="h2" gutterBottom>
        2. User Responsibilities
      </Typography>
      <Typography variant="body1" paragraph>
        You agree to use this website only for lawful purposes and in accordance with these Terms and Conditions. You must not use the website in any way that could damage, disable, or impair the website or interfere with any other party’s use and enjoyment of the website.
      </Typography>
      <Divider sx={{ my: 4 }} />
      <Typography variant="h4" component="h2" gutterBottom>
        3. Intellectual Property
      </Typography>
      <Typography variant="body1" paragraph>
        All content and materials on this website, including but not limited to text, graphics, logos, and images, are the property of our company or our licensors and are protected by copyright and other intellectual property laws. You may not reproduce, distribute, or otherwise use any content from this website without our express written permission.
      </Typography>
      <Divider sx={{ my: 4 }} />
      <Typography variant="h4" component="h2" gutterBottom>
        4. Limitation of Liability
      </Typography>
      <Typography variant="body1" paragraph>
        We are not liable for any damages arising from the use or inability to use this website, including but not limited to direct, indirect, incidental, punitive, and consequential damages. Your use of the website is at your own risk.
      </Typography>
      <Divider sx={{ my: 4 }} />
      <Typography variant="h4" component="h2" gutterBottom>
        5. Termination
      </Typography>
      <Typography variant="body1" paragraph>
        We reserve the right to terminate or suspend your access to the website at our sole discretion, without notice, for conduct that we believe violates these Terms and Conditions or is harmful to other users of the website.
      </Typography>
      <Divider sx={{ my: 4 }} />
      <Typography variant="h4" component="h2" gutterBottom>
        6. Governing Law
      </Typography>
      <Typography variant="body1" paragraph>
        These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in [Your City/State].
      </Typography>
      <Divider sx={{ my: 4 }} />
      <Typography variant="h4" component="h2" gutterBottom>
        7. Changes to Terms
      </Typography>
      <Typography variant="body1" paragraph>
        We reserve the right to update or modify these Terms and Conditions at any time. Your continued use of the website following any changes constitutes your acceptance of the new terms.
      </Typography>
      <Divider sx={{ my: 4 }} />
      <Typography variant="h4" component="h2" gutterBottom>
        8. Contact Information
      </Typography>
      <Typography variant="body1" paragraph>
        If you have any questions about these Terms and Conditions, please contact us at <Link href="mailto:support@yourwebsite.com">support@yourwebsite.com</Link>.
      </Typography>
    </Container>
  );
};

export default TermsAndConditions;
