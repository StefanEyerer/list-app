import { useList } from '@list-app/shared/frontend/data-access';
import { Box, CircularProgress } from '@mui/material';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { SingleListContent } from '../lib/single-list/single-list-content';
import { SingleListHeader } from '../lib/single-list/single-list-header';

export function SingleList() {
  const router = useRouter();
  const id = (router.query['id'] as string) || '';
  const session = useSession();
  const id_token = session.data?.['id_token'] as string;
  const { list, isError, isLoading, mutate } = useList(id, id_token);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError || !list || !list.items) {
    return signIn();
  }

  return (
    <>
      <SingleListHeader list={list} mutate={mutate} />
      <SingleListContent list={list} mutate={mutate} />
    </>
  );
}

SingleList.auth = true;
