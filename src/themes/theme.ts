import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(54, 50, 50)',
      light: '#FE6B8B',
    },
    secondary: {
      main: 'rgba(237, 59, 59, .5)',
      light: '#FF8E53',
    },
  },
});

export default theme;
