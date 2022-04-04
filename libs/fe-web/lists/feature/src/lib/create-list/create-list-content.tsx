import { createList } from '@list-app/shared/frontend/data-access';
import { Box, Button, TextField } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { BaseSyntheticEvent, useState } from 'react';

export function CreateListContent() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();
  const session = useSession();
  const id_token = session.data?.['id_token'] as string;

  const handleCreateList = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    if (!name) return;
    createList({ name, description }, id_token).then(() => {
      router.push('/lists');
    });
  };

  return (
    <Box
      component={'form'}
      onSubmit={handleCreateList}
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
        inputProps={{ 'data-testid': 'name' }}
        label={'List Name'}
        autoFocus={true}
        fullWidth={true}
        required={true}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        inputProps={{ 'data-testid': 'description' }}
        label={'List Description'}
        fullWidth={true}
        multiline={true}
        required={false}
        rows={4}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <Button
        data-testid="create"
        type={'submit'}
        variant={'outlined'}
        sx={{ alignSelf: 'flex-end' }}
      >
        Create List
      </Button>
    </Box>
  );
}
