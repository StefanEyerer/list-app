import { List } from '@list-app/shared/api-interfaces';
import { Box, Typography } from '@mui/material';

interface PublicShareHeaderProps {
  list: List;
}

export function PublicShareHeader({ list }: PublicShareHeaderProps) {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Typography variant={'h5'}>
          This List Has Been Shared With You
        </Typography>
      </Box>
      <Box sx={{ my: 2, pl: 1 }}>
        <Typography variant={'h6'}>{list.name}</Typography>
        <Typography variant={'subtitle1'}>{list.description}</Typography>
      </Box>
    </>
  );
}
