'use client';

import { AppBar, Container, Toolbar } from '@mui/material';

export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar></Toolbar>
      </Container>
    </AppBar>
  );
};
