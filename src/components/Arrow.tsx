import React from 'react';
import { ExpandLessOutlined as ExpandLessOutlinedIcon, ExpandMoreOutlined as ExpandMoreOutlinedIcon } from '@material-ui/icons';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({
  anim: {
    animation: 'zoomeffect 3s infinite',
  },
}));

interface Props {
  up?: boolean;
}

const Arrow: React.FC<Props> = ({ up }) => {
  const { anim } = useStyles();

  return (
    <Box>
      {up
        ? <ExpandLessOutlinedIcon color="primary" style={{ fontSize: '24px', cursor: 'pointer' }} className={anim} />
        : <ExpandMoreOutlinedIcon color="primary" style={{ fontSize: '24px', cursor: 'pointer' }} className={anim} /> }
    </Box>
  );
};

export default Arrow;
