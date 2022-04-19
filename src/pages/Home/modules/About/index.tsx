import React from 'react';

import {Container, Grid, Stack, Typography} from '@mui/material';
import {profile} from 'shared/assets';
import {SessionTitle} from 'shared/components';
import {useMediaQuery} from 'shared/hook';

export const About: React.FC = () => {
  const {isMobile} = useMediaQuery();

  return (
    <Stack flex={1} id="about">
      <SessionTitle title="About Me" />
      <Container
        sx={{
          pl: {md: '0 !important', xs: 2, sm: 3},
          pr: {md: '0 !important', xs: 2, sm: 3},
          borderLeft: '1px solid #010001',
          borderRight: '1px solid #010001',
        }}>
        <Grid container>
          <Grid item xs={12} md={6} minHeight={550}>
            <Stack
              p={4}
              spacing={3}
              sx={{
                borderLeft: {
                  sm: '1px solid #010001',
                  xs: '1px solid #010001',
                  md: 'none',
                },
                borderRight: '1px solid #010001',
              }}>
              <Stack mb={4}>
                <Typography variant={isMobile ? 'h6' : 'h5'}>
                  Hello :)
                </Typography>
                <Typography variant={isMobile ? 'h6' : 'h5'}>
                  My name is Guilherme
                </Typography>
              </Stack>

              <Typography variant={isMobile ? 'body2' : 'body1'}>
                I&apos;m a web developer and designer based in Brazil. I have a
                passion for creating and developing web applications. I&apos;m
                currently working as a freelancer.
              </Typography>

              <Typography variant={isMobile ? 'body2' : 'body1'}>
                I&apos;m a web developer and designer based in Brazil. I have a
                passion for creating and developing web applications. I&apos;m
                currently working as a freelancer.
              </Typography>

              <Typography variant={isMobile ? 'body2' : 'body1'}>
                I&apos;m a web developer and designer based in Brazil. I have a
                passion for creating and developing web applications. I&apos;m
                currently working as a freelancer.
              </Typography>

              <Typography variant={isMobile ? 'body2' : 'body1'}>
                I&apos;m a web developer and designer based in Brazil. I have a
                passion for creating and developing web applications. I&apos;m
                currently working as a freelancer.
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} minHeight={550}>
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
