import { lime, teal } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: teal[400],
    },
    secondary: {
      main: lime[400],
    },
  },
});

export default theme;
