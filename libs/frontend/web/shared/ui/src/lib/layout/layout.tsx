import { Box, Container } from '@mui/material';
import { Footer } from '../internal/footer/footer';
import { Header } from '../internal/header/header';

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
  return (
    <Box display={'flex'} flexDirection={'column'} height={'100vh'} margin={0}>
      <Header isAuthenticated={isAuthenticated} user={user} />
      <main>
        <Box paddingY={6}>
          <Container maxWidth={'md'}>{children}</Container>
        </Box>
      </main>
      <Footer />
    </Box>
  );
}
