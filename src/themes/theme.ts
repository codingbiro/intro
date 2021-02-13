import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(54, 50, 50)',
      light: '#FE6B8B',
      dark: '#ff7373',
    },
    secondary: {
      main: 'rgba(237, 59, 59, .5)',
      light: '#FF8E53',
      dark: '#F6614E',
    },
  },
  typography: {
    h3: {
      fontSize: '24px',
    },
  },
});

export default theme;
