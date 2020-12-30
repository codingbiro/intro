import { createMuiTheme } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(237, 59, 59)',
      light: '#75293a',
    },
    secondary: {
      main: 'rgb(54, 50, 50, .9)',
      light: '#63361e',
    },
  },
});

export default darkTheme;
