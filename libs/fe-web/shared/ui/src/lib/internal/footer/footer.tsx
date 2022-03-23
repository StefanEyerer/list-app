import { Box, Typography } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';

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
        Copyright
        <CopyrightIcon fontSize={'small'} sx={{ mx: 1 }} />
        Stefan Eyerer 2022
      </Typography>
    </Box>
  );
}
