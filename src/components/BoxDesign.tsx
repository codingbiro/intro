import React from 'react';
import { Box, makeStyles, useTheme } from '@material-ui/core';
import { Theme } from '../themes/baseTheme';

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
  darius: {
    clipPath: `polygon(${points})`,
  },
}));

const BoxDesign: React.FC<{ CURVE_SIZE: number }> = ({ CURVE_SIZE }) => {
  const { darius } = useStyles();
  const theme = useTheme<Theme>();

  return (
    <>
      <Box
        height={`${2 * CURVE_SIZE}vw`}
      />
      <Box
        position="absolute"
        borderRadius="24px 0 0 0"
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
        borderRadius="0 24px 0 0"
        bgcolor="secondary.main"
      />

      <Box
        position="absolute"
        top="75vh"
        left="0"
        height={`${2 * CURVE_SIZE}vw`}
        width={`${2 * CURVE_SIZE}vw`}
        bgcolor="primary.dark"
      />
      <Box
        position="absolute"
        top={`calc(75vh + ${2 * CURVE_SIZE}vw)`}
        left="0"
        height={`${CURVE_SIZE}vw`}
        width={`${CURVE_SIZE}vw`}
        bgcolor="primary.dark"
        className={darius}
        style={{ transform: 'scaleY(-1)' }}
      />
      <Box
        position="absolute"
        top={`calc(75vh - ${CURVE_SIZE}vw)`}
        left="0"
        height={`${CURVE_SIZE}vw`}
        width={`${CURVE_SIZE}vw`}
        bgcolor="primary.dark"
        className={darius}
      />
      <Box
        position="absolute"
        top="75vh"
        left={`${CURVE_SIZE}vw`}
        height={`${CURVE_SIZE}vw`}
        width={`${CURVE_SIZE}vw`}
        bgcolor="secondary.main"
        className={darius}
        style={{ transform: 'scaleY(-1) scaleX(-1)' }}
      />
      <Box
        position="absolute"
        top={`calc(75vh + ${CURVE_SIZE}vw)`}
        left={`${CURVE_SIZE}vw`}
        height={`${CURVE_SIZE}vw`}
        width={`${CURVE_SIZE}vw`}
        bgcolor="secondary.main"
        className={darius}
        style={{ transform: 'scaleX(-1)' }}
      />

      <Box
        position="absolute"
        top="55vh"
        left="75vw"
        height={`${2 * CURVE_SIZE}vw`}
        width={`${2 * CURVE_SIZE}vw`}
        bgcolor="secondary.light"
      />
      <Box
        position="absolute"
        top="55vh"
        left={`calc(75vw + ${CURVE_SIZE}vw)`}
        height={`${CURVE_SIZE}vw`}
        width={`${CURVE_SIZE}vw`}
        bgcolor="secondary.dark"
        className={darius}
        style={{ transform: 'scaleY(-1) scaleX(-1)' }}
      />
      <Box
        position="absolute"
        top={`calc(55vh + ${CURVE_SIZE}vw)`}
        left={`calc(75vw + ${CURVE_SIZE}vw)`}
        height={`${CURVE_SIZE}vw`}
        width={`${CURVE_SIZE}vw`}
        bgcolor="secondary.dark"
        className={darius}
        style={{ transform: 'scaleX(-1)' }}
      />
      <Box
        position="absolute"
        top={`calc(55vh + ${CURVE_SIZE}vw)`}
        left="75vw"
        height={`${CURVE_SIZE}vw`}
        width={`${CURVE_SIZE}vw`}
        bgcolor="secondary.dark"
        className={darius}
      />
      <Box
        position="absolute"
        top="55vh"
        left="75vw"
        height={`${CURVE_SIZE}vw`}
        width={`${CURVE_SIZE}vw`}
        bgcolor="secondary.dark"
        className={darius}
        style={{ transform: 'scaleY(-1)' }}
      />
    </>
  );
};

export default BoxDesign;
