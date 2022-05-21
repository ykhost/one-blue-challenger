import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#2194D2',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#EFEFEF'
    },
    text: {
      primary: '#404048'
    }
  },
  typography: {
    fontFamily: '"Poppins"',
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  components: {
    MuiButton:{
      styleOverrides: {
        root: {
          fontFamily: '"Poppins"'
        }
      }
    }
  },

});

export default theme;
