import { createMuiTheme } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(237, 59, 59)',
      light: '#75293a',
      dark: 'rgba(115, 25, 45, .5)',
    },
    secondary: {
      main: 'rgb(54, 50, 50, .9)',
      light: '#63361e',
      dark: '#3B3231',
    },
  },
});

export default darkTheme;
