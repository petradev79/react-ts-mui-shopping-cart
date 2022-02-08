import { BrowserRouter as Router } from 'react-router-dom';
import Controller from './components/controller/Controller';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { indigo, purple } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: purple,
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    subtitle1: {
      fontSize: 18,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Controller />
      </Router>
    </ThemeProvider>
  );
};

export default App;
