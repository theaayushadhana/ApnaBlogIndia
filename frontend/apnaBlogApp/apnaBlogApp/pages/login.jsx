
import React from 'react';
import { Container, Box, Card, CardContent, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import GoogleAuthButton from '../components/googleButton';
// Styled Components for Animation
const AnimatedCard = styled(Card)(({ theme }) => ({
  animation: 'fadeIn 1s ease-in-out',
  '@keyframes fadeIn': {
    '0%': { opacity: 0, transform: 'translateY(-20px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
}));

const LoginBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#f5f5f5',
}));


const LoginPage = () => {
  return (
    <LoginBox>
      
      <Container maxWidth="xs" >
        <AnimatedCard>
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom align="center">
              Login to ApnaBlogApp
            </Typography>
            <Box
              sx={{ mt: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <GoogleAuthButton
                fullWidth
                variant="contained"
                startIcon={<img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" style={{ width: 20, height: 20 }} />}
              >
                Sign In with Google
              </GoogleAuthButton>

            </Box>
          </CardContent>
        </AnimatedCard>
      </Container>
    </LoginBox>
  );
};

export default LoginPage;



