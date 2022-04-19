import React from 'react';

import {Container, Grid, Stack, Typography} from '@mui/material';
import {profile} from 'shared/assets';

export const About: React.FC = () => {
  return (
    <Stack flex={1} sx={{borderTop: '1px solid black'}} id="about">
      <Container
        sx={{
          pl: '0 !important',
          pr: '0 !important',
          borderLeft: '1px solid #010001',
          borderRight: '1px solid #010001',
        }}>
        <Grid container>
          <Grid item xs={6}>
            <Stack p={4} mt={3} spacing={3}>
              <Stack mb={4}>
                <Typography variant="h5">Hello :)</Typography>
                <Typography variant="h5">My name is Guilherme</Typography>
              </Stack>

              <Typography>
                I&apos;m a web developer and designer based in Brazil. I have a
                passion for creating and developing web applications. I&apos;m
                currently working as a freelancer.
              </Typography>

              <Typography>
                I&apos;m a web developer and designer based in Brazil. I have a
                passion for creating and developing web applications. I&apos;m
                currently working as a freelancer.
              </Typography>

              <Typography>
                I&apos;m a web developer and designer based in Brazil. I have a
                passion for creating and developing web applications. I&apos;m
                currently working as a freelancer.
              </Typography>

              <Typography>
                I&apos;m a web developer and designer based in Brazil. I have a
                passion for creating and developing web applications. I&apos;m
                currently working as a freelancer.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack
              flex={1}
              width="100%"
              height="100%"
              sx={{
                borderLeft: '1px solid black',
                backgroundImage: `url(${profile})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}></Stack>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};
