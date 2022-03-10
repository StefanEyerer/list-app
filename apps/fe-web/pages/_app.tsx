import { CacheProvider, ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import Head from 'next/head';
import createEmotionCache from '../utils/createEmotionCache';
import theme from '../utils/theme';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp({ Component, pageProps, emotionCache }) {
  emotionCache = clientSideEmotionCache;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>List App</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
