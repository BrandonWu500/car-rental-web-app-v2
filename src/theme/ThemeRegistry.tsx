'use client';

import {
  CssBaseline,
  ThemeOptions,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { NextAppDirEmotionCacheProvider } from './EmotionCache';

const themeOptions: ThemeOptions = {};

const theme = createTheme(themeOptions);

interface ThemeRegistryProps {
  children: React.ReactNode;
}

const ThemeRegistry = ({ children }: ThemeRegistryProps) => {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
};

export default ThemeRegistry;
