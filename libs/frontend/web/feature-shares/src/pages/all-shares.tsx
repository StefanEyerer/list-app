import { useShares } from '@list-app/frontend/shared/data-access';
import { Box, CircularProgress } from '@mui/material';
import { signIn, useSession } from 'next-auth/react';
import { AllSharesContent } from '../lib/all-shares/all-shares-content';
import { AllSharesHeader } from '../lib/all-shares/all-shares-header';

export function AllShares() {
  const session = useSession();
  const id_token = session.data?.['id_token'] as string;
  const { shares, isError, isLoading, mutate } = useShares(id_token);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError || !shares || !shares.items) {
    signIn();
    return <Box />;
  }

  return (
    <>
      <AllSharesHeader />
      <AllSharesContent shares={shares} mutate={mutate} />
    </>
  );
}

AllShares.auth = true;
