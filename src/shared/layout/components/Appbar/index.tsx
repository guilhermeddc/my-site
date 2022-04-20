import React from 'react';

import {
  AppBar,
  Container,
  Link,
  Stack,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import {background} from 'shared/assets';
import {i18n} from 'translate/i18n';

interface IProps {
  window?: () => Window;
}

export const Appbar: React.FC<IProps> = ({window}) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 30,
    target: window ? window() : undefined,
  });

  return (
    <Stack flex={1} id="top">
      <AppBar
        variant="outlined"
        position="fixed"
        color="transparent"
        sx={{
          borderBottom: '1px solid #010001',
          backgroundImage: trigger ? `url(${background})` : 'none',
        }}>
        <Container
          sx={{
            pl: {md: '0 !important', xs: 2, sm: 3},
            pr: {md: '0 !important', xs: 2, sm: 3},
            height: 90,
            borderLeft: {md: '1px solid #010001', xs: 'none'},
            borderRight: {md: '1px solid #010001', xs: 'none'},
          }}>
          <Stack
            direction="row"
            sx={{
              borderLeft: {xs: '1px solid #010001', md: 'none'},
              borderRight: {xs: '1px solid #010001', md: 'none'},
            }}>
            <Stack
              direction="row"
              width="100%"
              justifyContent="space-between"
              pr={6}
              pl={3}
              alignItems="center">
              <Link href="#top" sx={{textDecoration: 'unset', paddingY: 4}}>
                <Typography
                  variant="body2"
                  fontWeight={700}
                  color="#010001"
                  textTransform="uppercase">
                  GUILHERME_RODRIGUES
                </Typography>
              </Link>

              <Stack
                direction="row"
                spacing={6}
                display={{md: 'flex', xs: 'none'}}>
                <Link href="#about" sx={{textDecoration: 'unset'}}>
                  <Typography
                    variant="body2"
                    color="#010001"
                    fontWeight={500}
                    textTransform="uppercase">
                    <>{i18n.t('About me')}</>
                  </Typography>
                </Link>

                <Link href="#portfolio" sx={{textDecoration: 'unset'}}>
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    color="#010001"
                    textTransform="uppercase">
                    <>{i18n.t('Portfolio')}</>
                  </Typography>
                </Link>

                <Link href="#process" sx={{textDecoration: 'unset'}}>
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    color="#010001"
                    textTransform="uppercase">
                    <>{i18n.t('Process')}</>
                  </Typography>
                </Link>

                <Link href="#prices" sx={{textDecoration: 'unset'}}>
                  <Typography
                    variant="body2"
                    fontWeight={500}
                    color="#010001"
                    textTransform="uppercase">
                    <>{i18n.t('Prices')}</>
                  </Typography>
                </Link>
              </Stack>
            </Stack>

            <Stack
              sx={{borderLeft: '1px solid #010001', p: 4}}
              display={{md: 'flex', xs: 'none'}}>
              <Link href="#contact" sx={{textDecoration: 'unset', paddingX: 3}}>
                <Typography
                  variant="body2"
                  color="#010001"
                  fontWeight={500}
                  textTransform="uppercase"
                  sx={{px: 0.9}}>
                  <>{i18n.t('Contacts')}</>
                </Typography>
              </Link>
            </Stack>
          </Stack>
        </Container>
      </AppBar>
    </Stack>
  );
};

{
  /*  */
}
