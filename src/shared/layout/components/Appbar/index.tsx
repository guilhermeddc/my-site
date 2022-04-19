import React from 'react';

import {AppBar, Container, Link, Stack, Typography} from '@mui/material';

export const Appbar: React.FC = () => {
  return (
    <AppBar
      variant="outlined"
      color="transparent"
      position="static"
      sx={{
        borderBottom: '2px solid #010001',
      }}>
      <Container
        sx={{
          borderLeft: '1px solid #010001',
          borderRight: '1px solid #010001',
        }}>
        <Stack direction="row">
          <Stack
            direction="row"
            width="100%"
            justifyContent="space-between"
            pr={6}
            pl={3}
            alignItems="center">
            <Link href="#top" sx={{textDecoration: 'unset'}}>
              <Typography
                variant="body2"
                fontWeight={700}
                color="#010001"
                textTransform="uppercase">
                GUILHERME_RODRIGUES
              </Typography>
            </Link>

            <Stack direction="row" spacing={6}>
              <Link href="#about" sx={{textDecoration: 'unset'}}>
                <Typography
                  variant="body2"
                  color="#010001"
                  fontWeight={500}
                  textTransform="uppercase">
                  about me
                </Typography>
              </Link>

              <Link href="#portfolio" sx={{textDecoration: 'unset'}}>
                <Typography
                  variant="body2"
                  fontWeight={500}
                  color="#010001"
                  textTransform="uppercase">
                  portfolio
                </Typography>
              </Link>

              <Link href="#process" sx={{textDecoration: 'unset'}}>
                <Typography
                  variant="body2"
                  fontWeight={500}
                  color="#010001"
                  textTransform="uppercase">
                  process
                </Typography>
              </Link>

              <Link href="#prices" sx={{textDecoration: 'unset'}}>
                <Typography
                  variant="body2"
                  fontWeight={500}
                  color="#010001"
                  textTransform="uppercase">
                  prices
                </Typography>
              </Link>
            </Stack>
          </Stack>

          <Stack sx={{borderLeft: '1px solid #010001', p: 4}}>
            <Link href="#contacts" sx={{textDecoration: 'unset', pl: 3}}>
              <Typography
                variant="body2"
                color="#010001"
                fontWeight={500}
                textTransform="uppercase"
                sx={{px: 0.9}}>
                contacts
              </Typography>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
};
