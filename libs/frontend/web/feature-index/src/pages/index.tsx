import { Box, Link, Typography } from '@mui/material';
import NextLink from 'next/link';

export function Index() {
  return (
    <Box>
      <Typography variant={'h4'} sx={{ mb: 2 }}>
        Welcome To List App :)
      </Typography>
      <Typography variant={'body1'} sx={{ my: 1 }}>
        In order to create your first list, you have to click on the LOGIN
        button on the top right corner.
      </Typography>
      <Typography variant={'body1'} sx={{ my: 1 }}>
        In case you are already logged in, just click on the LISTS button to
        view your lists.
      </Typography>
      <Typography variant={'body1'} sx={{ my: 1 }}>
        In case somebody shared an Access Key for a shared list with you, you
        can click&nbsp;
        <NextLink href="/public/shares">
          <Link sx={{ cursor: 'pointer' }}>here</Link>
        </NextLink>
        &nbsp;to enter the Access Key and view the shared list.
      </Typography>
    </Box>
  );
}
