import { updateList } from '@list-app/frontend/shared/data-access';
import { List as ListIF } from '@list-app/shared/api-interfaces';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {
  Alert,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Snackbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { KeyedMutator } from 'swr';

interface SingleListContentProps {
  list: ListIF;
  mutate: KeyedMutator<ListIF>;
}

export function SingleListContent({ list, mutate }: SingleListContentProps) {
  const [message, setMessage] = useState('');
  const session = useSession();
  const id_token = session.data?.['id_token'] as string;

  const handleDeleteItem = (id: string) => {
    const newItems = list.items.filter((item) => item['id'] !== id);
    updateList(list.id, { items: newItems }, id_token).then(() => {
      setMessage('Item has been deleted :)');
      mutate();
    });
  };

  if (!list.items.length)
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 1, my: 4 }}>
        <InfoOutlinedIcon />
        <Typography>You have no list items yet.</Typography>
      </Box>
    );

  return (
    <>
      <List dense={true} sx={{ listStyleType: 'circle' }}>
        {list.items.map((item) => (
          <ListItem
            divider={true}
            key={item['id']}
            sx={{ display: 'list-item' }}
          >
            <ListItemText primary={item['text']} />
            <ListItemSecondaryAction>
              <Tooltip title={'Delete List Item'}>
                <IconButton
                  data-testid="delete"
                  onClick={() => handleDeleteItem(item['id'])}
                >
                  <DeleteIcon color={'error'} />
                </IconButton>
              </Tooltip>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        autoHideDuration={2000}
        open={!!message}
        onClose={() => setMessage('')}
        sx={{ marginBottom: 6 }}
      >
        <Alert severity={'success'} variant={'filled'}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
