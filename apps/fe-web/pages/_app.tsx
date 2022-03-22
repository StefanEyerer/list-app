import { CacheProvider, ThemeProvider } from '@emotion/react';
import { Layout } from '@list-app/fe-web/shared/ui';
import { CssBaseline } from '@mui/material';
import Head from 'next/head';
import createEmotionCache from '../utils/create-emotion-cache';
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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}
