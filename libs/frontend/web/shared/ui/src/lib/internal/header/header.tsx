import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import { signIn, signOut } from 'next-auth/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export interface HeaderProps {
  isAuthenticated: boolean;
  user: { name: string; email: string; image: string };
}

export function Header({ isAuthenticated, user }: HeaderProps) {
  const router = useRouter();

  return (
    <AppBar component={'header'} position={'static'}>
      <Toolbar>
        <ModeOutlinedIcon sx={{ mr: 2 }} />
        <NextLink href="/">
          <Box flex={1}>
            <Typography
              variant={'h5'}
              sx={{ cursor: 'pointer', width: 'fit-content' }}
            >
              List App
            </Typography>
          </Box>
        </NextLink>
        {isAuthenticated ? (
          <>
            <Tooltip title={'Show My Lists'}>
              <Button
                color={'primary'}
                variant={'outlined'}
                sx={{ mr: 2 }}
                onClick={() => router.push('/lists')}
              >
                Lists
              </Button>
            </Tooltip>
            <Tooltip title={'Show My Shared Lists'}>
              <Button
                color={'primary'}
                variant={'outlined'}
                sx={{ mr: 2 }}
                onClick={() => router.push('/shares')}
              >
                Shared Lists
              </Button>
            </Tooltip>
            <Tooltip title={'Logout'}>
              <Button
                color={'primary'}
                variant={'outlined'}
                sx={{ mr: 2 }}
                onClick={() => signOut()}
              >
                Logout
              </Button>
            </Tooltip>
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
