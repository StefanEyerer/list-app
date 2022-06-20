import { Box, Link, Typography } from '@mui/material';

export function Footer() {
  return (
    <Box component={'footer'} position={'static'} marginTop={'auto'}>
      <Typography
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        borderTop={1}
        paddingY={2}
        variant={'body1'}
      >
        Copyright &copy; 2022 &nbsp;
        <Link href="https://github.com/StefanEyerer/list-app" target="_blank">
          Stefan Eyerer
        </Link>
      </Typography>
    </Box>
  );
}
