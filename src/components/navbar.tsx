'use client';

import { AppBar, Button, Container, Toolbar } from '@mui/material';
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
          <Button
            sx={{
              borderRadius: '100vh',
              px: 2,
              py: 1,
              display: { xs: 'none', md: 'block' },
            }}
          >
            Rent out your car
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
