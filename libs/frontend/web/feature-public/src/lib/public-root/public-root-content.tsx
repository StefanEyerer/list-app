import { Box, Button, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { BaseSyntheticEvent, useState } from 'react';

export function PublicRootContent() {
  const router = useRouter();
  const [accessKey, setAccessKey] = useState('');

  const handleNavigate = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    if (!accessKey) return;
    router.push(`/public/shares/${accessKey}`);
  };

  return (
    <Box
      component={'form'}
      onSubmit={handleNavigate}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        rowGap: 4,
        my: 4,
      }}
    >
      <TextField
        inputProps={{ 'data-testid': 'accessKey' }}
        label={'Access Key'}
        autoFocus={true}
        fullWidth={true}
        required={true}
        value={accessKey}
        onChange={(event) => setAccessKey(event.target.value)}
      />
      <Button
        data-testid="navigate"
        type={'submit'}
        variant={'outlined'}
        sx={{ alignSelf: 'flex-end' }}
      >
        Show Shared List
      </Button>
    </Box>
  );
}
