import { useLists } from '@list-app/shared/frontend/data-access';
import { Box, CircularProgress } from '@mui/material';
import { signIn, useSession } from 'next-auth/react';
import { AllListsContent } from '../lib/all-lists/all-lists-content';
import { AllListsHeader } from '../lib/all-lists/all-lists-header';

export function AllLists() {
  const session = useSession();
  const id_token = session.data?.['id_token'] as string;
  const { lists, isError, isLoading, mutate } = useLists(id_token);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError || !lists || !lists.items) {
    return signIn();
  }

  return (
    <>
      <AllListsHeader />
      <AllListsContent lists={lists} mutate={mutate} />
    </>
  );
}

AllLists.auth = true;
