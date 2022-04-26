import { usePublicShare } from '@list-app/frontend/shared/data-access';
import { Box, CircularProgress, Link, Typography } from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { PublicShareContent } from '../lib/public-share/public-share-content';
import { PublicShareHeader } from '../lib/public-share/public-share-header';

export function PublicShare() {
  const router = useRouter();
  const accessKey = router.query['access_key'] as string;
  const { list, isError, isLoading } = usePublicShare(accessKey);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError || !list) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: 1,
          my: 4,
        }}
      >
        <Typography variant={'h5'}>
          The Shared List Could Not Be Found.
        </Typography>
        <NextLink href="/public/shares">
          <Link sx={{ cursor: 'pointer' }}>
            {'<<'} Back To Enter New Access Key
          </Link>
        </NextLink>
      </Box>
    );
  }

  return (
    <>
      <PublicShareHeader list={list} />
      <PublicShareContent list={list} />
    </>
  );
}
