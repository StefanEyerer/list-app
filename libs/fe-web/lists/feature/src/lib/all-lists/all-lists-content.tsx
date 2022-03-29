import { Lists } from '@list-app/shared/api-interfaces';
import { deleteList } from '@list-app/shared/frontend/data-access';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { KeyedMutator } from 'swr';

interface AllListsContentProps {
  lists: Lists;
  mutate: KeyedMutator<Lists>;
}

export function AllListsContent({ lists, mutate }: AllListsContentProps) {
  const router = useRouter();

  const handleDeleteList = (id: string) => {
    deleteList(id).then(() => {
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
        <ListItem
          divider={true}
          key={list['id']}
          secondaryAction={
            <IconButton
              data-testid="delete"
              onClick={() => handleDeleteList(list.id)}
            >
              <DeleteIcon color={'error'} />
            </IconButton>
          }
        >
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
        </ListItem>
      ))}
    </List>
  );
}
