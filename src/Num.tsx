import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';

const Num: React.FC = () => {
  const { number } = useParams<{ number: string }>();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="black"
      color="green"
      fontFamily="Courier New, Courier, monospace"
      textAlign="center"
    >
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h1">
          Hello
          {' '}
          {number}
        </Typography>
      </motion.div>
    </Box>
  );
};

export default Num;
