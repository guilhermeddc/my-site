import React from 'react';

import {CallMadeRounded} from '@mui/icons-material';
import {Container, Grid, Stack, Typography} from '@mui/material';
import {profile} from 'shared/assets';
import {SessionTitle} from 'shared/components';
import {useMediaQuery} from 'shared/hook';
import {i18n} from 'translate/i18n';

export const About: React.FC = () => {
  const {isMobile} = useMediaQuery();

  return (
    <Stack flex={1} id="about" pt={11} mt={-11}>
      <SessionTitle title="About me" />
      <Container
        sx={{
          pl: {md: '0 !important', xs: 2, sm: 3},
          pr: {md: '0 !important', xs: 2, sm: 3},
          borderLeft: '1px solid #010001',
          borderRight: '1px solid #010001',
        }}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            minHeight={700}
            sx={{
              borderLeft: {
                sm: '1px solid #010001',
                xs: '1px solid #010001',
                md: 'none',
              },
              borderRight: '1px solid #010001',
            }}>
            <Stack p={4} flex={1} spacing={3} minHeight={500}>
              <Stack mb={4}>
                <Typography variant={isMobile ? 'h6' : 'h5'}>
                  <>{i18n.t('Hello')}</> ;)
                </Typography>
                <Typography variant={isMobile ? 'h6' : 'h5'}>
                  <>{i18n.t('My name is Guilherme')}</>
                </Typography>
              </Stack>

              <Typography variant={isMobile ? 'body2' : 'body1'}>
                <>
                  {i18n.t(
                    'I am a FULLSTACK web developer and an expert of the REACTjs and NODEjs. I can design and build websites, mobile apps, and shops.',
                  )}
                </>
              </Typography>

              <Typography variant={isMobile ? 'body2' : 'body1'}>
                <>
                  {i18n.t(
                    'I implement a complex website development from creating a visual interface (UI) and building a user experience (UX) to further building it on the REACTjs with MATERIAL UI.',
                  )}
                </>
              </Typography>

              <Typography variant={isMobile ? 'body2' : 'body1'}>
                <>
                  {i18n.t(
                    'My sites have a clean, minimalism design, solve business problems, and are easy to use.',
                  )}
                </>
              </Typography>

              <Stack spacing={1} direction="row" alignItems="center" pt={6}>
                <Typography
                  component="a"
                  textTransform="uppercase"
                  fontWeight={600}
                  sx={{textDecoration: 'none'}}
                  color="#010001"
                  variant="body1"
                  href="#contact">
                  <>{i18n.t('CONTACT WITH ME')}</>
                </Typography>
                <CallMadeRounded />
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} minHeight={700}>
            <Stack
              flex={1}
              width="100%"
              height="100%"
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
                borderTop: {xs: '1px solid #010001', md: 'none'},
                backgroundImage: `url(${profile})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};
