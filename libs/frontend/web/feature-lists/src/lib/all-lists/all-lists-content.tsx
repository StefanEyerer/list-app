import { createShare, deleteList } from '@list-app/frontend/shared/data-access';
import { Lists } from '@list-app/shared/api-interfaces';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ShareIcon from '@mui/icons-material/Share';
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { KeyedMutator } from 'swr';

interface AllListsContentProps {
  lists: Lists;
  mutate: KeyedMutator<Lists>;
}

export function AllListsContent({ lists, mutate }: AllListsContentProps) {
  const router = useRouter();
  const session = useSession();
  const id_token = session.data?.['id_token'] as string;

  const handleShareList = (id: string) => {
    createShare({ listId: id }, id_token);
  };

  const handleDeleteList = (id: string) => {
    deleteList(id, id_token).then(() => {
      mutate();
    });
  };

  const handleNavigate = (id: string) => {
    router.push(`/lists/${id}`);
  };

  if (!lists.items.length)
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 1, my: 4 }}>
        <InfoOutlinedIcon />
        <Typography>You have no lists yet.</Typography>
      </Box>
    );

  return (
    <List sx={{ mt: 2 }}>
      {lists.items.map((list) => (
        <ListItem divider={true} key={list.id}>
          <ListItemButton
            data-testid="navigate"
            onClick={() => handleNavigate(list.id)}
          >
            <ListItemIcon>
              <ChevronRightIcon color={'primary'} />
            </ListItemIcon>
            <ListItemText
              primary={list.name}
              secondary={list.description}
            ></ListItemText>
          </ListItemButton>
          <ListItemIcon>
            <Tooltip title={'Share List'}>
              <IconButton
                data-testid="share"
                onClick={() => handleShareList(list.id)}
              >
                <ShareIcon color={'primary'} />
              </IconButton>
            </Tooltip>
          </ListItemIcon>
          <ListItemIcon>
            <Tooltip title={'Delete List'}>
              <IconButton
                data-testid="delete"
                onClick={() => handleDeleteList(list.id)}
              >
                <DeleteIcon color={'error'} />
              </IconButton>
            </Tooltip>
          </ListItemIcon>
        </ListItem>
      ))}
    </List>
  );
}
