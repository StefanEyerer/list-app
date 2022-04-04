import { updateList } from '@list-app/frontend-shared-data-access';
import { List } from '@list-app/shared/api-interfaces';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Box, IconButton, Link, TextField, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';
import NextLink from 'next/link';
import { BaseSyntheticEvent, useState } from 'react';
import { KeyedMutator } from 'swr';

interface SingleListHeaderProps {
  list: List;
  mutate: KeyedMutator<List>;
}

export function SingleListHeader({ list, mutate }: SingleListHeaderProps) {
  const [text, setText] = useState('');
  const session = useSession();
  const id_token = session.data?.['id_token'] as string;

  const handleAddItem = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    if (!text) return;
    const id = `${Math.floor(Math.random() * 1000)}`;
    const newItems = [...list.items, { id, text }];
    setText('');
    updateList(list.id, { items: newItems }, id_token).then(() => {
      mutate();
    });
  };

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
        <Typography variant={'h4'}>{list.name}</Typography>
        <Box
          component={'form'}
          onSubmit={handleAddItem}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <TextField
            inputProps={{ 'data-testid': 'text' }}
            label={'New Item'}
            size={'small'}
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <IconButton data-testid="add" type={'submit'}>
            <AddCircleOutlineOutlinedIcon color={'primary'} />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ my: 2 }}>
        <Typography>{list.description}</Typography>
      </Box>
    </>
  );
}
