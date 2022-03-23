import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';
import { Footer } from '../internal/footer/footer';
import { Header } from '../internal/header/header';

export interface LayoutProps {
  children: ReactNode;
  isAuthenticated?: boolean;
  username?: string;
}

export function Layout({
  children,
  isAuthenticated = false,
  username = 'Unknown',
}: LayoutProps) {
  return (
    <Box display={'flex'} flexDirection={'column'} height={'100vh'} margin={0}>
      <Header isAuthenticated={isAuthenticated} username={username} />
      <main>
        <Box paddingY={6}>
          <Container maxWidth={'md'}>{children}</Container>
        </Box>
      </main>
      <Footer />
    </Box>
  );
}
