'use client';

import { CarRental } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href={'/'}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <CarRental />
        <Typography
          variant="h6"
          sx={{
            display: { xs: 'none', sm: 'block' },
            fontWeight: 'bold',
          }}
        >
          Car Rental
        </Typography>
      </Box>
    </Link>
  );
};
