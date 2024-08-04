import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

const Disclaimer = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          Disclaimer
        </Typography>
        <Divider sx={{ mb: 4 }} />

        <Typography variant="h6" component="h2" gutterBottom>
          General Information
        </Typography>
        <Typography paragraph>
          The information provided by ApnaBlogApp is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site.
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          External Links
        </Typography>
        <Typography paragraph>
          The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          Professional Disclaimer
        </Typography>
        <Typography paragraph>
          The Site cannot and does not contain [professional/medical/legal/financial] advice. The [professional/medical/legal/financial] information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          Limitation of Liability
        </Typography>
        <Typography paragraph>
          In no event shall we or our directors, employees, partners, agents, suppliers, or affiliates be liable to you for any indirect, incidental, special, consequential or punitive damages, including without limitation, lost profits, data, use, goodwill, or other intangible losses, resulting from (i) your use of or inability to use the Site; (ii) any unauthorized access to or use of our servers and/or any personal information stored therein.
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          Changes to This Disclaimer
        </Typography>
        <Typography paragraph>
          We reserve the right to update or change our Disclaimer at any time and you should check this Disclaimer periodically. Your continued use of the Service after we post any modifications to the Disclaimer on this page will constitute your acknowledgment of the modifications and your consent to abide by and be bound by the modified Disclaimer.
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          Contact Us
        </Typography>
        <Typography paragraph>
          If you have any questions about this Disclaimer, please contact us at <a href="mailto:developeraayush145@gmail.com">support@apnablogapp.com</a>.
        </Typography>
      </Box>
    </Container>
  );
};

export default Disclaimer;
