import React from 'react';

import {ArrowForwardIos} from '@mui/icons-material';
import {Container, Grid, Stack, Typography} from '@mui/material';
import {BarCode} from 'shared/components';

export const Header: React.FC = () => {
  return (
    <Container
      sx={{
        pl: '0 !important',
        pr: '0 !important',
        borderLeft: '1px solid #010001',
        borderRight: '1px solid #010001',
      }}>
      <Grid container sx={{mt: 0.4}}>
        <Grid item xs={10}>
          <Grid container>
            <Grid item xs={9.5} sx={{borderBottom: '1px solid black'}}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sx={{
                    borderBottom: '1px solid black',
                    borderRight: '1px solid black',
                    p: 3,
                  }}>
                  <Typography variant="h1">MInIMAlISt</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    borderBottom: '1px solid black',
                    borderRight: '1px solid black',
                    p: 3,
                  }}>
                  <Typography variant="h1">& CreAtive</Typography>
                </Grid>
                <Grid item xs={12} sx={{borderRight: '1px solid black', p: 3}}>
                  <Typography variant="h1">WebSiteS</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={2.5} sx={{borderBottom: '1px solid black'}}>
              <Stack p={5}>
                <Stack sx={{transform: 'rotate(90deg)'}}>
                  <Typography variant="h5">
                    Web_Designer, Desenvolvedor_Web & Mobile
                  </Typography>
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} sx={{p: 4}}>
              <Stack direction="row" spacing={3} justifyContent="space-between">
                <Stack direction="row" alignItems="center">
                  <Typography variant="h6">Github</Typography>
                  <ArrowForwardIos fontSize="small" />
                  <ArrowForwardIos sx={{ml: -2}} fontSize="small" />
                </Stack>

                <Stack direction="row" alignItems="center">
                  <Typography variant="h6">LinkedIn</Typography>
                  <ArrowForwardIos fontSize="small" />
                  <ArrowForwardIos sx={{ml: -2}} fontSize="small" />
                </Stack>

                <Stack direction="row" alignItems="center">
                  <Typography variant="h6">WhatsApp</Typography>
                  <ArrowForwardIos fontSize="small" />
                  <ArrowForwardIos sx={{ml: -1.9}} fontSize="small" />
                </Stack>

                <Stack direction="row" alignItems="center">
                  <Typography variant="h6">FacEBooK</Typography>
                  <ArrowForwardIos fontSize="small" />
                  <ArrowForwardIos sx={{ml: -1.9}} fontSize="small" />
                </Stack>

                <Stack direction="row" alignItems="center">
                  <Typography variant="h6">InstAgraM</Typography>
                  <ArrowForwardIos fontSize="small" />
                  <ArrowForwardIos sx={{ml: -1.9}} fontSize="small" />
                </Stack>
              </Stack>

              <BarCode />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={2} sx={{borderLeft: '1px solid black'}}>
          <Stack sx={{transform: 'rotate(90deg)'}} ml={2} mr={2.5}></Stack>
        </Grid>
      </Grid>
    </Container>
  );
};
