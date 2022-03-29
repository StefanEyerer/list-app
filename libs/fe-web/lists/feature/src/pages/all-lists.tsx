import { useLists } from '@list-app/shared/frontend/data-access';
import { Box, CircularProgress, Typography } from '@mui/material';
import { AllListsContent } from '../lib/all-lists/all-lists-content';
import { AllListsHeader } from '../lib/all-lists/all-lists-header';

export function AllLists() {
  const { lists, isError, isLoading, mutate } = useLists();

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError || !lists || !lists.items) {
    return <Typography>Lists could not be loaded.</Typography>;
  }

  return (
    <>
      <AllListsHeader />
      <AllListsContent lists={lists} mutate={mutate} />
    </>
  );
}
