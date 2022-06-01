import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import { signIn, signOut } from 'next-auth/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { MouseEvent, useState } from 'react';

export interface HeaderMobileProps {
  isAuthenticated: boolean;
  user: { name: string; email: string; image: string };
}

export function HeaderMobile({ isAuthenticated, user }: HeaderMobileProps) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar component={'header'} position={'static'}>
      <Toolbar>
        <ModeOutlinedIcon sx={{ mr: 2 }} />
        <NextLink href="/">
          <Typography flex={1} variant={'h5'} sx={{ cursor: 'pointer' }}>
            List App
          </Typography>
        </NextLink>
        {isAuthenticated ? (
          <>
            <IconButton onClick={handleClick} sx={{ mr: 2 }}>
              <MenuOutlinedIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={handleClose}>
              <MenuItem
                onClick={() => {
                  router.push('/lists');
                  handleClose();
                }}
              >
                Lists
              </MenuItem>
              <MenuItem
                onClick={() => {
                  router.push('/shares');
                  handleClose();
                }}
              >
                Shared Lists
              </MenuItem>
              <MenuItem onClick={() => signOut()}>Logout</MenuItem>
            </Menu>
            <Tooltip title={user.email}>
              <Avatar alt={user.name} src={user.image} />
            </Tooltip>
          </>
        ) : (
          <Tooltip title={'Login'}>
            <Button
              color={'primary'}
              variant={'outlined'}
              sx={{ mr: 2 }}
              onClick={() => signIn()}
            >
              Login
            </Button>
          </Tooltip>
        )}
      </Toolbar>
    </AppBar>
  );
}
