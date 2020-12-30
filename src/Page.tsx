import React from 'react';
import {
  Box, makeStyles, Typography, useTheme,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Skeleton } from '@material-ui/lab';
import LeadText from './components/LeadText';
import { Theme } from './themes/baseTheme';

const CURVE_SIZE = 2.5;

const points: string[] = [];
for (let i = 0; i < 51; i += 1) {
  const b = i * i;
  const cc = 2500 - b;
  const xx = Math.round(Math.sqrt(cc));
  const n = 50 - xx;
  points.push(`${n}% ${50 + i}%`);
}
for (let i = 50; i > -1; i -= 1) {
  points.push(`${i}% 100%`);
}

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
  darius: {
    clipPath: `polygon(${points})`,
  },
}));

const Page: React.FC = () => {
  const theme = useTheme<Theme>();
  const { t, i18n } = useTranslation();
  const { darius, toggle } = useStyles();
  const [lang, setLang] = React.useState<'en'|'hu'>('en');
  const [loading, setLoading] = React.useState(true);

  setTimeout(() => { setLoading(false); }, 1100);

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
          height={`${theme.sizes.headerHeight}px`}
          color="primary.main"
          fontSize={24}
        >
          {loading
            ? (
              <Skeleton animation="wave" height={60} width="15%" />
            )
            : (
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
            )}
          <Box justifySelf="center">
            {loading
              ? (
                <Skeleton animation="wave" variant="rect" width="120px" />
              )
              : (
                <Typography>{t('main:title')}</Typography>
              )}
          </Box>
          <div />
        </Box>
      </header>
      <Box
        height={`${2 * CURVE_SIZE}vw`}
      />
      <Box
        position="absolute"
        top={`${theme.sizes.headerHeight}px`}
        left="0"
        height={`${2 * CURVE_SIZE}vw`}
        width={`${2 * CURVE_SIZE}vw`}
        bgcolor="secondary.main"
      />
      <Box
        position="absolute"
        top={`${theme.sizes.headerHeight}px`}
        left={`${2 * CURVE_SIZE}vw`}
        height={`${2 * CURVE_SIZE}vw`}
        width={`${2 * CURVE_SIZE}vw`}
        bgcolor="secondary.main"
        borderRadius="0px 40% 0px 0px"
      />
      <Box
        position="absolute"
        top={`calc(${theme.sizes.headerHeight}px + ${CURVE_SIZE}vw)`}
        left={`${4 * CURVE_SIZE}vw`}
        height={`${CURVE_SIZE}vw`}
        width={`${CURVE_SIZE}vw`}
        bgcolor="secondary.main"
        className={darius}
      />
      <Box
        position="absolute"
        top={`calc(${theme.sizes.headerHeight}px + ${CURVE_SIZE}vw)`}
        left={`${11 * CURVE_SIZE}vw`}
        height={`${CURVE_SIZE}vw`}
        width={`${CURVE_SIZE}vw`}
        bgcolor="secondary.main"
        className={darius}
        style={{ transform: 'scaleX(-1)' }}
      />
      <Box
        position="absolute"
        top={`${theme.sizes.headerHeight}px`}
        left={`${12 * CURVE_SIZE}vw`}
        height={`${2 * CURVE_SIZE}vw`}
        width={`${2 * CURVE_SIZE}vw`}
        bgcolor="secondary.main"
        borderRadius="40% 0px 0px 0px"
      />
      <Box
        position="absolute"
        top={`${theme.sizes.headerHeight}px`}
        left={`${14 * CURVE_SIZE}vw`}
        height={`${2 * CURVE_SIZE}vw`}
        width={`calc(100% - ${14 * CURVE_SIZE}vw)`}
        bgcolor="secondary.main"
      />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height={`calc(100vh - ${theme.sizes.headerHeight}px - ${2 * CURVE_SIZE}vw)`}
        bgcolor="secondary.main"
        style={{
          border: 0,
          borderRadius: 0,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        }}
      >
        <LeadText loading={loading} />
      </Box>
    </Box>
  );
};

export default Page;
