import React from 'react';

import {ArrowUpwardRounded} from '@mui/icons-material';
import {Stack, Container, Link, Typography} from '@mui/material';

export const Footer: React.FC = () => {
  return (
    <Stack
      flex={1}
      id="footer"
      width={'100%'}
      height={500}
      bgcolor="#010001"
      p={8}>
      <Container
        sx={{
          pl: '0 !important',
          pr: '0 !important',
        }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          pt={8}>
          <Link href="#top" sx={{textDecoration: 'unset'}}>
            <Typography
              variant="body2"
              fontWeight={700}
              color="white"
              textTransform="uppercase">
              GUILHERME_RODRIGUES
            </Typography>
          </Link>

          <Link href="#top" sx={{textDecoration: 'unset', mr: 6.5}}>
            <ArrowUpwardRounded sx={{color: 'white'}} fontSize="large" />
          </Link>

          <Link href="#top" sx={{textDecoration: 'unset'}}>
            <Typography
              variant="body2"
              fontWeight={700}
              color="white"
              textTransform="uppercase">
              PRIVACY POLICY
            </Typography>
          </Link>
        </Stack>
      </Container>
    </Stack>
  );
};
