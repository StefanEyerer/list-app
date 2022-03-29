import { useList } from '@list-app/shared/frontend/data-access';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { SingleListContent } from '../lib/single-list/single-list-content';
import { SingleListHeader } from '../lib/single-list/single-list-header';

export function SingleList() {
  const router = useRouter();
  const id = (router.query['id'] as string) || '';
  const { list, isError, isLoading, mutate } = useList(id);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError || !list || !list.items) {
    return <Typography>List could not be loaded.</Typography>;
  }

  return (
    <>
      <SingleListHeader list={list} mutate={mutate} />
      <SingleListContent list={list} mutate={mutate} />
    </>
  );
}
