import React from 'react';

import {Container, Grid, Stack, Typography} from '@mui/material';
import {BarCode, ExternalLink} from 'shared/components';

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
            <Grid item xs={9.5} sx={{borderBottom: '1px solid #010001'}}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sx={{
                    borderBottom: '1px solid #010001',
                    borderRight: '1px solid #010001',
                    p: 3,
                  }}>
                  <Typography variant="h2" fontSize={80}>
                    Minimalistic
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    borderBottom: '1px solid #010001',
                    borderRight: '1px solid #010001',
                    p: 3,
                  }}>
                  <Typography variant="h2" fontSize={80}>
                    & Creative
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{borderRight: '1px solid #010001', p: 3}}>
                  <Typography variant="h2" fontSize={80}>
                    Websites
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={2.5} sx={{borderBottom: '1px solid primary.main'}}>
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
                <ExternalLink title="Github" url="/" />
                <ExternalLink title="LinkedIn" url="/" />
                <ExternalLink title="WhatsApp" url="/" />
                <ExternalLink title="FacebooK" url="/" />
                <ExternalLink title="Instagram" url="/" />
              </Stack>

              <BarCode />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={2} sx={{borderLeft: '1px solid #010001'}}>
          <Stack sx={{transform: 'rotate(90deg)'}} ml={2} mr={2.5}></Stack>
        </Grid>
      </Grid>
    </Container>
  );
};
