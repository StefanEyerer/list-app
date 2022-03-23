import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import ListIcon from '@mui/icons-material/List';

export interface HeaderProps {
  isAuthenticated: boolean;
  username: string;
}

export function Header({ isAuthenticated, username }: HeaderProps) {
  return (
    <AppBar component={'header'} position={'static'}>
      <Toolbar>
        <ListIcon sx={{ mr: 2 }} />
        <Typography flex={1} variant={'h5'}>
          List App
        </Typography>
        {isAuthenticated ? (
          <>
            <Button color={'inherit'} variant={'outlined'} sx={{ mr: 2 }}>
              My Lists
            </Button>
            <Button color={'inherit'} variant={'outlined'} sx={{ mr: 2 }}>
              Shared Lists
            </Button>
            <Typography variant={'h6'}>{username}</Typography>
          </>
        ) : (
          <Button color={'inherit'} variant={'outlined'} sx={{ mr: 2 }}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
