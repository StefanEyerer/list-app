import { Box, Container, useMediaQuery } from '@mui/material';
import { Footer } from '../internal/footer/footer';
import { Header } from '../internal/header/header';
import { HeaderMobile } from '../internal/header-mobile/header-mobile';

export interface LayoutProps {
  children: JSX.Element;
  isAuthenticated?: boolean;
  user?: { name: string; email: string; image: string };
}

export function Layout({
  children,
  isAuthenticated = false,
  user = { name: '', email: '', image: '' },
}: LayoutProps) {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box display={'flex'} flexDirection={'column'} height={'100vh'} margin={0}>
      {isMobile ? (
        <HeaderMobile isAuthenticated={isAuthenticated} user={user} />
      ) : (
        <Header isAuthenticated={isAuthenticated} user={user} />
      )}
      <main>
        <Box paddingY={6}>
          <Container maxWidth={'md'}>{children}</Container>
        </Box>
      </main>
      <Footer />
    </Box>
  );
}
