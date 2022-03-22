import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

export interface LayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Box display={'flex'} flexDirection={'column'} height="100vh" margin={0}>
      <Header />
      <main>
        <Box sx={{ py: 6 }}>
          <Container maxWidth="sm">{children}</Container>
        </Box>
      </main>
      <Footer />
    </Box>
  );
}
