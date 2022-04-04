import { Box, Link, Typography } from '@mui/material';
import NextLink from 'next/link';

export function CreateListHeader() {
  return (
    <>
      <NextLink href="/lists">
        <Link sx={{ cursor: 'pointer' }}>{'<<'} Back To My Lists</Link>
      </NextLink>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          my: 2,
        }}
      >
        <Typography variant={'h4'}>Create New List</Typography>
      </Box>
    </>
  );
}
