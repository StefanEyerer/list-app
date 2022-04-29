import { deleteShare } from '@list-app/frontend/shared/data-access';
import { Shares } from '@list-app/shared/api-interfaces';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LinkIcon from '@mui/icons-material/Link';
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material';
import { useSession } from 'next-auth/react';
import { KeyedMutator } from 'swr';

interface AllSharesContentProps {
  shares: Shares;
  mutate: KeyedMutator<Shares>;
}

export function AllSharesContent({ shares, mutate }: AllSharesContentProps) {
  const session = useSession();
  const id_token = session.data?.['id_token'] as string;

  const handleCopyAccessKey = (accessKey: string) => {
    navigator.clipboard.writeText(accessKey);
  };

  const handleCopyShareLink = (accessKey: string) => {
    navigator.clipboard.writeText(
      `${window.location.origin}/public/shares/${accessKey}`
    );
  };

  const handleDeleteShare = (id: string) => {
    deleteShare(id, id_token).then(() => {
      mutate();
    });
  };

  if (!shares.items.length)
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 1, my: 4 }}>
        <InfoOutlinedIcon />
        <Typography>You have no shared lists yet.</Typography>
      </Box>
    );

  return (
    <List sx={{ mt: 2 }}>
      {shares.items.map((share) => (
        <ListItem divider={true} key={share.id}>
          <ListItemText
            primary={share.list.name}
            secondary={share.list.description}
          ></ListItemText>
          <ListItemIcon>
            <Tooltip title={'Copy Access Key'}>
              <IconButton
                data-testid="copyAccessKey"
                onClick={() => handleCopyAccessKey(share.accessKey)}
              >
                <ContentCopyIcon color={'primary'} />
              </IconButton>
            </Tooltip>
          </ListItemIcon>
          <ListItemIcon>
            <Tooltip title={'Copy Share Link'}>
              <IconButton
                data-testid="copyShareLink"
                onClick={() => handleCopyShareLink(share.accessKey)}
              >
                <LinkIcon color={'primary'} />
              </IconButton>
            </Tooltip>
          </ListItemIcon>
          <ListItemIcon>
            <Tooltip title={'Delete Share'}>
              <IconButton
                data-testid="delete"
                onClick={() => handleDeleteShare(share.id)}
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
