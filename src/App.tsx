import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { init } from 'ityped';

import theme from './theme';

const useStyles = makeStyles({
  '@global': {
    '@keyframes blink': {
      '100%': {
        opacity: 0,
      },
    },
  },
  header: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  lead: {
    fontSize: 24,
  },
  typing: {
    '& .ityped-cursor': {
      fontSize: 24,
      opacity: 1,
      animation: 'blink 0.3s infinite',
      animationDirection: 'alternate',
    },
  },
});

const App: React.FC = () => {
  const { lead, typing } = useStyles();
  useEffect(() => {
    const myElement = document.querySelector('#myElement');
    if (myElement) {
      init(myElement, {
        showCursor: true,
        strings: ['Online solutions for you', 'Project management', 'Mobile first web applications'],
        typeSpeed: 100,
        backSpeed: 50,
        startDelay: 500,
        backDelay: 500,
      });
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <header>
        <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="10vh">
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </Box>
      </header>
      <Box className={typing} display="flex" alignItems="center" justifyContent="center" width="100%" height="90vh">
        <div className={lead} id="myElement" />
      </Box>
    </ThemeProvider>
  );
};

export default App;
