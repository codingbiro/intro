import React from 'react';
import { Box, makeStyles, useTheme } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import LeadText from './LeadText';

const useStyles = makeStyles(({
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

const Page: React.FC = () => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const { rowCenter, toggle } = useStyles();
  const [lang, setLang] = React.useState<'en'|'hu'>('en');

  const handleLang = (_event: any, _lang: 'en'|'hu') => {
    setLang(_lang);
    i18n.changeLanguage(_lang);
  };

  return (
    <Box
      style={{
        background: `linear-gradient(45deg, ${theme.palette.primary.light} 30%, ${theme.palette.secondary.light} 90%)`,
        border: 0,
        borderRadius: 0,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      }}
    >
      <header>
        <Box position="absolute" top={0} left={0} height="60px" className={rowCenter} paddingLeft={2}>
          <ToggleButtonGroup
            value={lang}
            exclusive
            onChange={handleLang}
          >
            <ToggleButton className={toggle} value="hu">
              <img src="hu.png" alt="hu" height="30px" />
            </ToggleButton>
            <ToggleButton className={toggle} value="en">
              <img src="en.png" alt="en" height="30px" />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          margin="auto"
          paddingX={2}
          justifyContent="space-between"
          maxWidth="1200px"
          width="100%"
          height="60px"
          color="primary.main"
          fontSize={24}
        >
          {t('main:company')}
          <p>
            {t('main:title')}
          </p>
          <p>
            {t('main:friend')}
          </p>
        </Box>
      </header>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="calc(100vh - 60px)"
        bgcolor="secondary.main"
        style={{
          border: 0,
          borderRadius: 0,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        }}
      >
        <LeadText />
      </Box>
    </Box>
  );
};

export default Page;
