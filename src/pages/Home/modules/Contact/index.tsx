import React from 'react';

import {CallMadeRounded} from '@mui/icons-material';
import {
  Stack,
  Container,
  Grid,
  Typography,
  TextField,
  Select,
  FormControl,
  InputLabel,
  Button,
  MenuItem,
} from '@mui/material';
import {ExternalLink, SessionTitle} from 'shared/components';
import {PRICES_DATA} from 'shared/constants';
import {useMediaQuery} from 'shared/hook';
import {i18n} from 'translate/i18n';

export const Contact: React.FC = () => {
  const {isMobile} = useMediaQuery();

  return (
    <Stack flex={1} id="contact">
      <SessionTitle title="Contact" />
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
            sx={{
              borderRight: '1px solid #010001',
              borderLeft: {
                sm: '1px solid #010001',
                xs: '1px solid #010001',
                md: 'none',
              },
            }}>
            <Stack p={5} height={600} justifyContent="space-between">
              <Typography variant={isMobile ? 'h5' : 'h4'}>
                <>{i18n.t('Let&apos;s make something incredible together')}</>
              </Typography>

              <Stack spacing={3} mb={3}>
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
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              borderTop: {xs: '1px solid #010001', md: 'none'},
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
            <Stack
              component="form"
              name="contact"
              method="post"
              p={5}
              height={600}
              spacing={4}
              justifyContent="space-between">
              <TextField label={`${i18n.t('NAME')}`} variant="standard" />
              <TextField label="E-MAIL" variant="standard" type="email" />

              <FormControl variant="standard" fullWidth>
                <InputLabel id="website-type">
                  <>{i18n.t('WEBSITE TYPE')}</>
                </InputLabel>
                <Select labelId="website-type" label="WEBSITE TYPE">
                  {PRICES_DATA.map((item) => (
                    <MenuItem key={item.id} value={item.title}>
                      {item.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                placeholder={i18n.t('TELL ABOUT YOU PROJECT')}
                variant="standard"
                multiline
                rows={isMobile ? 5 : 6}
              />

              <Stack
                direction={{sm: 'row', xs: 'column-reverse'}}
                spacing={2}
                justifyContent="space-between">
                <Button
                  type="submit"
                  endIcon={<CallMadeRounded fontSize="large" />}>
                  <Typography
                    variant={isMobile ? 'body2' : 'body1'}
                    fontWeight={600}
                    letterSpacing={1}>
                    <>{i18n.t('SEND')}</>
                  </Typography>
                </Button>

                <Stack>
                  <Typography
                    variant={isMobile ? 'body2' : 'body1'}
                    fontWeight={500}
                    color="#868586">
                    <>{i18n.t('BY CLICKING THE BUTTON, YOU ACCEPT')}</>
                  </Typography>
                  <Typography
                    variant={isMobile ? 'body2' : 'body1'}
                    fontWeight={500}>
                    <>{i18n.t('THE PRIVACY POLICY.')}</>
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};
