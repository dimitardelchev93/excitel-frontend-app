import React from 'react';

import { Box, Typography } from '@mui/material';

const NoCountriesFound: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Typography variant="h4" color="textSecondary">
        No countries found
      </Typography>
    </Box>
  );
};

export default NoCountriesFound;
