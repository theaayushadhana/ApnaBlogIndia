
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import App from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#673ab7', // Your purplish color
    },
    secondary: {
      main: '#ff4081',
    },
  },
});

export default theme;