import { CacheProvider, ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { SessionProvider } from 'next-auth/react';
import Head from 'next/head';
import Root from '../components/root';
import createEmotionCache from '../utils/create-emotion-cache';
import theme from '../utils/theme';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp({ Component, pageProps, emotionCache, session }) {
  emotionCache = clientSideEmotionCache;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>List App</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SessionProvider session={session}>
          <Root requiresAuth={Component.auth}>
            <Component {...pageProps} />
          </Root>
        </SessionProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
