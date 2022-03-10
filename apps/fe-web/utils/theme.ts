import { blue, purple, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[200],
    },
    secondary: {
      main: purple[200],
    },
    error: {
      main: red[500],
    },
  },
});

export default theme;
