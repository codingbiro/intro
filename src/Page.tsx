import React from 'react';
import {
  Box, makeStyles, Theme, Typography, useTheme,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import LeadText from './components/LeadText';

const useStyles = makeStyles((theme: Theme) => ({
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
  darius: {
    '&:after': {
      content: '""',
      width: '50px',
      height: '50px',
      background: theme.palette.primary.dark,
      zIndex: '100',
      position: 'absolute',
      right: '-50px',
      bottom: 0,
      borderBottomLeftRadius: '50%',
    },
  },
  beforius: {
    '&:before': {
      content: '""',
      width: '50px',
      height: '50px',
      background: theme.palette.primary.dark,
      zIndex: '100',
      position: 'absolute',
      left: '-50px',
      bottom: 0,
      borderBottomRightRadius: '50%',
    },
  },
}));

const Page: React.FC = () => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const { beforius, darius, toggle } = useStyles();
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
        <Box
          display="grid"
          margin="auto"
          paddingX={2}
          gridTemplateColumns="1fr 1fr 1fr"
          justifyItems="start"
          alignItems="center"
          width="100%"
          height="60px"
          color="primary.main"
          fontSize={24}
        >
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
          <Box justifySelf="center">
            <Typography>{t('main:title')}</Typography>
          </Box>
          <div />
        </Box>
      </header>
      <Box
        height="100px"
      />
      <Box position="absolute" top="60px" left="0" height="100px" width="100px" bgcolor="secondary.main" />
      <Box
        position="absolute"
        top="60px"
        left="100px"
        height="100px"
        width="100px"
        bgcolor="secondary.main"
        borderRadius="0px 40% 0px 0px"
        className={darius}
      />
      <Box
        position="absolute"
        top="110px"
        left="200px"
        height="50px"
        width="50px"
        bgcolor="secondary.main"
      />
      <Box
        position="absolute"
        top="110px"
        left="550px"
        height="50px"
        width="50px"
        bgcolor="secondary.main"
      />
      <Box
        position="absolute"
        top="60px"
        left="600px"
        height="100px"
        width="100px"
        bgcolor="secondary.main"
        borderRadius="40% 0px 0px 0px"
        className={beforius}
      />
      <Box
        position="absolute"
        top="60px"
        left="700px"
        height="100px"
        width="calc(100% - 700px)"
        bgcolor="secondary.main"
      />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="calc(100vh - 160px)"
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
