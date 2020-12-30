import { createMuiTheme, Theme as _Theme } from '@material-ui/core/styles';

interface ThemeProps {
  sizes: { headerHeight: number }
}

const props: ThemeProps = { sizes: { headerHeight: 60 } };

const theme = createMuiTheme({}, props);

export default theme;

export type Theme = (ThemeProps & _Theme);
