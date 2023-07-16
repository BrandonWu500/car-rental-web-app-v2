'use client';

import {
  CssBaseline,
  ThemeOptions,
  ThemeProvider,
  createTheme,
} from '@mui/material';

import { NextAppDirEmotionCacheProvider } from '../lib/EmotionCache';

const themeOptions: ThemeOptions = {
  palette: {
    background: {
      default: 'royalblue',
    },
  },
};

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
