'use client';

import {
  CssBaseline,
  ThemeOptions,
  ThemeProvider,
  createTheme,
} from '@mui/material';

const themeOptions: ThemeOptions = {};

const theme = createTheme(themeOptions);

interface ThemeRegistryProps {
  children: React.ReactNode;
}

const ThemeRegistry = ({ children }: ThemeRegistryProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeRegistry;
