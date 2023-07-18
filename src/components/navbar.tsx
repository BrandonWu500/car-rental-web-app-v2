'use client';

import { AppBar, Container, Toolbar } from '@mui/material';
import { Search } from './search';
import { Logo } from './ui/logo';

export const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 2,
          }}
        >
          <Logo />
          <Search />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
