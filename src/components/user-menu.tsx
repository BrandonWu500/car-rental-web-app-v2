'use client';

import { Menu } from '@mui/icons-material';
import { Avatar, Fab } from '@mui/material';

const UserMenu = () => {
  return (
    <Fab
      sx={{
        width: 'auto',
        display: 'flex',
        gap: 1,
        backgroundColor: 'inherit',
      }}
      variant="extended"
    >
      <Menu />
      <Avatar />
    </Fab>
  );
};
export default UserMenu;
