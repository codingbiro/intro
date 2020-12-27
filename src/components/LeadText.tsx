import React, { useEffect } from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import { init } from 'ityped';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) => ({

  typing: {
    '& .ityped-cursor': {
      fontSize: 50,
      opacity: 1,
      animation: 'blink 0.3s infinite',
      animationDirection: 'alternate',
      color: theme.palette.primary.main,
    },
    '& .typed': {
      fontSize: 50,
      color: theme.palette.primary.main,
    },
    '& .typedContainer > *': {
      display: 'inline-block',
    },
  },
}));

const LeadText: React.FC = () => {
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
  });

  return (
    <div id="typed" className={typing} />
  );
};

export default LeadText;