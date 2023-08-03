'use client';

import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import { Search } from './search';
import { Logo } from './ui/logo';
import UserMenu from './user-menu';

export const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'inherit' }}>
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
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
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
            <UserMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
