import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { init } from 'ityped';
import { useTranslation } from 'react-i18next';

import { Theme } from '../themes/baseTheme';

const useStyles = makeStyles((theme: Theme) => ({
  typing: {
    textAlign: 'center',
    '& .ityped-cursor': {
      fontSize: 50,
      opacity: 1,
      animation: 'blink 0.3s infinite',
      animationDirection: 'alternate',
      color: theme.palette.primary.main,
      display: 'inline',
    },
    '& .typed': {
      fontSize: 50,
      color: theme.palette.primary.main,
      display: 'inline',
    },
  },
}));

const LeadText: React.FC<{ loading?: boolean }> = ({ loading }) => {
  const { typing } = useStyles();
  const { t } = useTranslation();

  useEffect(() => {
    const typedBox = document.querySelector('#typed');
    const container = document.createElement('div');
    container.className = 'typedContainer';
    const typedDiv = document.createElement('div');
    typedDiv.className = 'typed';
    if (typedBox) {
      typedBox?.appendChild(container);
      container?.appendChild(typedDiv);
      init(typedDiv, {
        showCursor: true,
        strings: [t('main:lead1'), t('main:lead2'), t('main:lead3')],
        typeSpeed: 100,
        backSpeed: 30,
        startDelay: 500,
        backDelay: 1600,
      });
    }
    return () => container.remove();
  }, [t]);

  return (
    loading
      ? (
        <Skeleton animation="wave" variant="rect" width="30%">
          <div id="typed" className={typing} />
        </Skeleton>
      )
      : <div id="typed" className={typing} />
  );
};

export default LeadText;
