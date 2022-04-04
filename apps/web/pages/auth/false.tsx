import { Box, Typography } from '@mui/material';

export default function AuthFalse() {
  return (
    <Box>
      <Typography variant={'h5'} sx={{ mb: 4 }}>
        Use this application to create all kinds of lists.
      </Typography>
      <Typography variant={'body1'}>
        You are currently not logged in. Please login to create your first list.
      </Typography>
    </Box>
  );
}
