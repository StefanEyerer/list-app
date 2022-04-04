import { Box, CircularProgress } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

interface AuthProps {
  children: JSX.Element;
}

export function Auth({ children }: AuthProps) {
  const router = useRouter();
  const { status } = useSession();

  if (status === 'authenticated') return children;

  if (status === 'unauthenticated') router.push('/auth/false');

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  );
}
