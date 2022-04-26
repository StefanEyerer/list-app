import { List as ListIF } from '@list-app/shared/api-interfaces';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

interface PublicShareContentProps {
  list: ListIF;
}

export function PublicShareContent({ list }: PublicShareContentProps) {
  if (!list.items.length) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 1, my: 4 }}>
        <InfoOutlinedIcon />
        <Typography>The list seems to be empty.</Typography>
      </Box>
    );
  }

  return (
    <List dense={true} sx={{ listStyleType: 'circle' }}>
      {list.items.map((item) => (
        <ListItem divider={true} key={item['id']} sx={{ display: 'list-item' }}>
          <ListItemText primary={item['text']} />
        </ListItem>
      ))}
    </List>
  );
}
