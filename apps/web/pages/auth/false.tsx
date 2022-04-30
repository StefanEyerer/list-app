import { Box, Typography } from '@mui/material';

export default function AuthFalse() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Typography variant={'h5'}>
        You are currently not logged in. Please login to create your first list.
      </Typography>
    </Box>
  );
}
