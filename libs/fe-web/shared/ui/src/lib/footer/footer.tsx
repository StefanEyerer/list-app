import { Box, Typography } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';

export function Footer() {
  return (
    <Box component="footer" position="static" marginTop={'auto'}>
      <Typography
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        variant="h6"
        gutterBottom
      >
        <CopyrightIcon sx={{ mr: 1 }} /> 2022 - Stefan Eyerer
      </Typography>
    </Box>
  );
}
