import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';

export function AllListsHeader() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/lists/create');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant={'h4'}>My Lists</Typography>
      <Button
        data-testid="navigate"
        variant={'outlined'}
        onClick={handleNavigate}
      >
        Create New List
      </Button>
    </Box>
  );
}
