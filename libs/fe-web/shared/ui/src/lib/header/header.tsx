import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import ListIcon from '@mui/icons-material/List';

export function Header() {
  return (
    <AppBar component="header" position="static">
      <Toolbar>
        <ListIcon sx={{ mr: 2 }} />
        <Typography flex={1} variant="h5">
          List App
        </Typography>
        <Button color="inherit" variant="outlined" sx={{ mr: 2 }}>
          My Lists
        </Button>
        <Button color="inherit" variant="outlined" sx={{ mr: 2 }}>
          Shared Lists
        </Button>
        <Typography variant="h6">Username</Typography>
      </Toolbar>
    </AppBar>
  );
}
