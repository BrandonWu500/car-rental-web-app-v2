'use client';

import { Search as SearchIcon } from '@mui/icons-material';
import { Box, Divider, Fab, IconButton, Typography } from '@mui/material';

export const Search = () => {
  return (
    <Fab
      sx={{ width: 'auto', backgroundColor: 'inherit', textTransform: 'none' }}
      variant="extended"
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 5,
        }}
      >
        <Typography>Anywhere in US</Typography>
        <Divider orientation="vertical" flexItem />
        <Typography>Any Week</Typography>
        <Divider orientation="vertical" flexItem />
        <Typography>Any Seating Capacity</Typography>
        <IconButton
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            '&:hover': {
              backgroundColor: 'primary.light',
            },
          }}
        >
          <SearchIcon />
        </IconButton>
      </Box>
    </Fab>
  );
};
