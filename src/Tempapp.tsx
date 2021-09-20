import { Box, CircularProgress, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

export default function Tempapp() {
  const [hh, setHh] = useState<number>();
  useEffect(() => {
    setHh(window.innerHeight);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      window.location.href = 'https://mese.birovince.com/';
    }, 5000);
  }, []);

  return (
    <Box textAlign="center" height={hh || '100vh'} display="flex" alignItems="center" justifyContent="center">
      <Box color="pink">
        <Box height="100%" width="100%" pb={2}><Typography variant="h4">Átirányítunk a szülinapi weboldaladra...</Typography></Box>
        <CircularProgress color="inherit" />
      </Box>
    </Box>
  );
}
