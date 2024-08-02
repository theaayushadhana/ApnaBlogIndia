
import React from 'react';
import { Button } from '@mui/material'; 
import Google from '../src/assets/google.png';
const GoogleAuthButton = () => (
  <Button
    variant="contained"
    color="primary"
    href="http://localhost:5000/auth/google"
    startIcon={<img src={Google} alt="Google" style={{ width: 20, height: 20 }} />}
    sx={{
      display: 'flex',
      alignItems: 'center',
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: 0.5,
    }}
  >
    Login with Google
  </Button>
);

export default GoogleAuthButton;
