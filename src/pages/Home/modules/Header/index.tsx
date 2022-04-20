import React from 'react';

import {Container, Grid, Stack, Typography} from '@mui/material';
import {BarCode, ExternalLink} from 'shared/components';
import {useMediaQuery} from 'shared/hook';
import {i18n} from 'translate/i18n';

export const Header: React.FC = () => {
  const {isMobile, isTablet} = useMediaQuery();

  return (
    <Container
      sx={{
        pl: {md: '0 !important', xs: 2, sm: 3},
        pr: {md: '0 !important', xs: 2, sm: 3},
        borderLeft: '1px solid #010001',
        borderRight: '1px solid #010001',
      }}>
      <Grid container>
        <Grid item xs={12} md={10}>
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{
                borderBottom: '1px solid #010001',
                borderLeft: {
                  sm: '1px solid #010001',
                  xs: '1px solid #010001',
                  md: 'none',
                },
                borderRight: {
                  sm: '1px solid #010001',
                  xs: '1px solid #010001',
                  md: 'none',
                },
              }}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sx={{
                    borderBottom: '1px solid #010001',
                    p: 3,
                  }}>
                  <Typography
                    variant={isMobile ? 'h4' : isTablet ? 'h2' : 'h1'}>
                    <>{i18n.t('Minimalistic')}</>
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    borderBottom: '1px solid #010001',
                    p: 3,
                  }}>
                  <Typography
                    variant={isMobile ? 'h4' : isTablet ? 'h2' : 'h1'}>
                    & <>{i18n.t('Creative')}</>
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{p: 3}}>
                  <Typography
                    variant={isMobile ? 'h4' : isTablet ? 'h2' : 'h1'}>
                    Websites
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                borderLeft: {
                  sm: '1px solid #010001',
                  xs: '1px solid #010001',
                  md: 'none',
                },
                borderRight: {
                  sm: '1px solid #010001',
                  xs: '1px solid #010001',
                  md: 'none',
                },
                p: 4,
              }}>
              <Stack
                direction={{md: 'row', xs: 'column'}}
                spacing={3}
                justifyContent="space-between">
                <ExternalLink
                  title="Github"
                  url="https://github.com/guilhermeddc"
                />
                <ExternalLink
                  title="LinkedIn"
                  url="https://www.linkedin.com/in/guilhermeddc"
                />
                <ExternalLink
                  title="WhatsApp"
                  url="https://wa.me/+5555999937833"
                />
                <ExternalLink
                  title="FacebooK"
                  url="https://www.facebook.com/guilhermeddc"
                />
                <ExternalLink
                  title="Instagram"
                  url="https://www.instagram.com/guilhermeddc"
                />
              </Stack>

              <BarCode />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={0} md={2} sx={{borderLeft: '1px solid #010001'}}>
          <Stack p={{md: 5, xs: 0}} display={{md: 'flex', xs: 'none'}}>
            <Stack
              sx={{
                transform: 'rotate(90deg)',
              }}>
              <Typography variant="h5">
                Web_Designer, Desenvolvedor_Web & Mobile
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};
