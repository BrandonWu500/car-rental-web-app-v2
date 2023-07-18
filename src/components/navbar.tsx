'use client';

import { AppBar, Container, Toolbar } from '@mui/material';
import { Logo } from './ui/logo';

export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar>
          <Logo />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
