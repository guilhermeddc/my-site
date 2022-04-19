import React from 'react';

import {ArrowUpwardRounded} from '@mui/icons-material';
import {Stack, Container, Link, Typography} from '@mui/material';

export const Footer: React.FC = () => {
  return (
    <Stack
      flex={1}
      id="footer"
      width={'100%'}
      height={{md: 500, xs: 100}}
      bgcolor="#010001"
      p={{md: 8, xs: 6}}>
      <Container
        sx={{
          pl: '0 !important',
          pr: '0 !important',
        }}>
        <Stack
          direction={{md: 'row', xs: 'column-reverse'}}
          justifyContent={{md: 'space-between', xs: 'center'}}
          alignItems="center"
          spacing={{md: 8, xs: 4}}
          pt={{md: 8, xs: 4}}>
          <Link href="#top" sx={{textDecoration: 'unset'}}>
            <Typography
              variant="body2"
              fontWeight={700}
              color="white"
              textTransform="uppercase">
              GUILHERME_RODRIGUES
            </Typography>
          </Link>

          <Link
            href="#top"
            sx={{textDecoration: 'unset', mr: {md: 6.5, xs: 0}}}>
            <ArrowUpwardRounded sx={{color: 'white'}} fontSize="large" />
          </Link>

          <Link
            href="#top"
            sx={{textDecoration: 'unset', display: {md: 'flex', xs: 'none'}}}>
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
