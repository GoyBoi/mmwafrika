import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white py-6">
      <Typography variant="body1" className="text-center">
        © {new Date().getFullYear()} MMWafrika. All rights reserved.
      </Typography>
      <Typography variant="body2" className="text-center mt-2 text-indigo-200">
        Bringing African culture to the world
      </Typography>
    </Box>
  );
}

export default Footer;