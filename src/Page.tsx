import React from 'react';
import {
  Box, Button, makeStyles, Typography, useMediaQuery, useTheme,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Element, Link } from 'react-scroll';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Skeleton } from '@material-ui/lab';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { Home as HomeIcon } from '@material-ui/icons';

import LeadText from './components/LeadText';
import { Theme } from './themes/baseTheme';
import MyTimeline from './components/MyTimeline';
import Arrow from './components/Arrow';
import BoxDesign from './components/BoxDesign';

const CURVE_SIZE = 2.5;
const CURVE_SIZE_MOBILE = 6;

const useStyles = makeStyles((theme: Theme) => ({
  '@global': {
    '@keyframes blink': {
      '100%': {
        opacity: 0,
      },
    },
    '*::-webkit-scrollbar': {
      width: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': `inset 10px 10px 6px ${theme.palette.secondary.main}`,
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.main,
      outline: `1px solid ${theme.palette.primary.main}`,
    },
    '@keyframes zoomeffect': {
      '0%': {
        transform: 'scale(1,1)',
      },
      '50%': {
        transform: 'scale(2,2)',
      },
      '100%': {
        transform: 'scale(1,1)',
      },
    },
  },
  toggle: {
    height: '40px',
    borderRadius: '16px',
    '&.Mui-selected': {
      backgroundColor: 'rgba(0,0,0,0.4)',
    },
    '& > span': {
      position: 'absolute',
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
  const theme = useTheme<Theme>();
  const { t, i18n } = useTranslation();
  const { toggle } = useStyles();
  const [lang, setLang] = React.useState<'en'|'hu'>('en');
  const [loading, setLoading] = React.useState(true);
  const [firstPage, setFirstPage] = React.useState(false);
  const [secondPage, setSecondPage] = React.useState(true);
  const [thirdPage, setThirdPage] = React.useState(true);
  const mobile = useMediaQuery('(max-width:960px)');

  useScrollPosition(({ prevPos, currPos }) => {
    const posy = Math.abs(currPos.y);
    const hei = window.innerHeight * 0.9;
    if (prevPos.y < currPos.y) {
      const isFirst = !(posy < hei * 0.4);
      const isSecond = !(hei * 0.4 <= posy && posy < hei * 1.35);
      const isThird = !(hei * 1.35 <= posy && posy < hei * 3);
      if (isFirst !== firstPage) setFirstPage(isFirst);
      if (isSecond !== secondPage) setSecondPage(isSecond);
      if (isThird !== thirdPage) setThirdPage(isThird);
    } else {
      const isFirst = !(posy < hei);
      const isSecond = !(hei <= posy && posy < hei * 2);
      const isThird = !(hei * 2 <= posy && posy < hei * 3);
      if (isFirst !== firstPage) setFirstPage(isFirst);
      if (isSecond !== secondPage) setSecondPage(isSecond);
      if (isThird !== thirdPage) setThirdPage(isThird);
    }
  }, [firstPage, secondPage, thirdPage]);

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
      <Element name="home">
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
                <Skeleton animation="wave" height={theme.sizes.headerHeight} width="15%" />
              )
              : (

                <Box display="flex" justifyContent="center" alignItems="center">
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
              )}
            <Box justifySelf="center">
              {loading
                ? (
                  <Skeleton animation="wave" variant="rect" width="10vw" />
                )
                : (
                  <Typography variant="h5">{t('main:company')}</Typography>
                )}
            </Box>
            <div />
          </Box>
        </header>
        <BoxDesign CURVE_SIZE={mobile ? CURVE_SIZE_MOBILE : CURVE_SIZE} />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          height={`calc(100vh - ${theme.sizes.headerHeight}px - ${mobile ? 2 * CURVE_SIZE_MOBILE : 2 * CURVE_SIZE}vw)`}
          bgcolor="secondary.main"
          style={{
            border: 0,
            borderRadius: 0,
          }}
        >
          <Box zIndex="10">
            {loading
              ? (
                <Skeleton animation="wave" height="10vh" width="30vw" />
              ) : (
                <LeadText />
              )}
          </Box>
          <Box position="absolute" bottom="10px" zIndex="10" display={firstPage ? 'none' : 'block'}>
            {loading
              ? (
                <Skeleton animation="wave" height="7vh" width="5vw" />
              ) : (
                <Link
                  to="timeline"
                  spy
                  smooth
                  duration={500}
                >
                  <Button variant="outlined" color="primary">
                    {t('main:callToAction')}
                  </Button>
                  <Box textAlign="center" pt={1.5}>
                    <Arrow />
                  </Box>
                </Link>
              )}
          </Box>
        </Box>
      </Element>
      <Element name="timeline">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          height="100vh"
          position="relative"
          bgcolor="secondary.main"
          style={{
            border: 0,
            borderRadius: 0,
          }}
        >
          <Box><MyTimeline /></Box>
          <Box position="absolute" top="10px" zIndex="10" display={secondPage ? 'none' : 'block'}>
            {loading
              ? (
                <Skeleton animation="wave" height="7vh" width="5vw" />
              ) : (
                <Link
                  to="home"
                  spy
                  smooth
                  duration={500}
                >
                  <Box textAlign="center" pt={1.5}>
                    <Arrow up />
                  </Box>
                  <Button variant="outlined" color="primary">
                    {t('main:home')}
                  </Button>
                </Link>
              )}
          </Box>
          <Box position="absolute" bottom="10px" zIndex="10" display={secondPage ? 'none' : 'block'}>
            {loading
              ? (
                <Skeleton animation="wave" height="7vh" width="5vw" />
              ) : (
                <Link
                  to="contact"
                  spy
                  smooth
                  duration={500}
                >
                  <Button variant="outlined" color="primary">
                    {t('main:contact')}
                  </Button>
                  <Box textAlign="center" pt={1.5}>
                    <Arrow />
                  </Box>
                </Link>
              )}
          </Box>
        </Box>
      </Element>
      <Element name="contact">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          height="100vh"
          position="relative"
          bgcolor="secondary.main"
          style={{
            border: 0,
            borderRadius: 0,
          }}
        >
          <Typography variant="h3" color="primary">{t('main:letsTalk')}</Typography>
          <Box position="absolute" top="10px" zIndex="10" display={thirdPage ? 'none' : 'block'}>
            {loading
              ? (
                <Skeleton animation="wave" height="7vh" width="5vw" />
              ) : (
                <Link
                  to="timeline"
                  spy
                  smooth
                  duration={500}
                >
                  <Box textAlign="center" pt={1.5}>
                    <Arrow up />
                  </Box>
                  <Button variant="outlined" color="primary">
                    {t('main:callToAction')}
                  </Button>
                </Link>
              )}
          </Box>
          <Box position="absolute" bottom="10px" zIndex="10" display={thirdPage ? 'none' : 'block'}>
            {loading
              ? (
                <Skeleton animation="wave" height="7vh" width="5vw" />
              ) : (
                <Link
                  to="home"
                  spy
                  smooth
                  duration={500}
                >
                  <Box textAlign="center" pt={1.5}>
                    <HomeIcon fontSize="large" color="primary" style={{ cursor: 'pointer' }} />
                  </Box>
                  <Typography color="primary">{t('main:scrollToHome')}</Typography>
                </Link>
              )}
          </Box>
        </Box>
      </Element>
    </Box>
  );
};

export default Page;
