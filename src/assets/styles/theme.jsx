import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#f8f9ff',
      paper: '#e5e8f0',
    },
    text: {
      primary: '#005389',
      secondary: '#0079c4',
    },
    primary: {
      main: '#33618d',
    },
    secondary: {
      main: '#506072',
    },
    error: {
      main: '#410002',
    },
    surface: {
      main: '#ffffff',
    },
    onSurface: {
      main: '#181c21',
    },
    outline: {
      main: '#707883',
    },
    action: {
      hover: '#e0e0e0',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Source Sans 3', system-ui, sans-serif",
    lineHeight: 1.5,
    fontWeight: 400,
    h6: {
      color: '#33618d',
    },
    body1: {
      color: '#1a1c1f',
    },
    body2: {
      color: '#42474e',
    },
    subtitle1: {
      color: '#33618d',
    },
    subtitle2: {
      color: '#506072',
    },
  },
});

export default theme;
