import React from 'react';
import {
  Box, CssBaseline, makeStyles, ThemeProvider,
} from '@material-ui/core';
import { NightsStay as NightsStayIcon, WbSunny as WbSunnyIcon } from '@material-ui/icons';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import { I18nextProvider } from 'react-i18next';
import dayTheme from './theme';
import darkTheme from './darkTheme';
import Page from './Page';
import i18n from './i18n';

const useStyles = makeStyles(({
  '@global': {
    '@keyframes blink': {
      '100%': {
        opacity: 0,
      },
    },
  },
  toggle: {
    height: '40px',
    borderRadius: '16px',
    '&.Mui-selected': {
      backgroundColor: 'rgba(0,0,0,0.4)',
    },
  },
  rowCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const App: React.FC = () => {
  const { rowCenter, toggle } = useStyles();
  const [mode, setMode] = React.useState<'sun'|'night'>('sun');

  const handleMode = (_event: any, _mode: 'sun'|'night') => {
    setMode(_mode);
  };

  return (

    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={mode === 'sun' ? dayTheme : darkTheme}>
        <CssBaseline />
        <Box position="absolute" top={0} right={0} height="60px" className={rowCenter} paddingRight={2}>
          <ToggleButtonGroup
            value={mode}
            exclusive
            onChange={handleMode}
          >
            <ToggleButton className={toggle} value="sun">
              <WbSunnyIcon height="40px" />
            </ToggleButton>
            <ToggleButton className={toggle} value="night">
              <NightsStayIcon height="40px" />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Page />
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default App;
