import { Box, Typography } from '@mui/material';

export function PublicRootHeader() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Typography variant={'h5'}>
        Enter The Access Key For A Shared List To View It
      </Typography>
    </Box>
  );
}
