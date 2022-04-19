import React from 'react';

import {WhatsApp} from '@mui/icons-material';
import {IconButton, Link, Paper, Stack} from '@mui/material';

export const ButtonFixed: React.FC = () => {
  return (
    <Stack
      component={Paper}
      position="fixed"
      right={{md: 48, xs: 24}}
      bottom={{md: 48, xs: 24}}
      bgcolor="primary.main"
      borderRadius={8}>
      <Link
        href="https://wa.me/+5555999937833"
        component={IconButton}
        target="_blank"
        size="large"
        color="primary">
        <WhatsApp fontSize="large" sx={{color: 'white'}} />
      </Link>
    </Stack>
  );
};
