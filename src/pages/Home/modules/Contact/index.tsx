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

export const Contact: React.FC = () => {
  return (
    <Stack flex={1} id="contact">
      <SessionTitle title="Contact" />
      <Container
        sx={{
          pl: '0 !important',
          pr: '0 !important',
          borderLeft: '1px solid #010001',
          borderRight: '1px solid #010001',
        }}>
        <Grid container>
          <Grid item xs={6} sx={{borderRight: '1px solid #010001'}}>
            <Stack p={5} height={600} justifyContent="space-between">
              <Typography variant="h4">
                Let&apos;s make something incredible together
              </Typography>

              <Stack spacing={3} mb={3}>
                <ExternalLink title="Github" url="/" />
                <ExternalLink title="LinkedIn" url="/" />
                <ExternalLink title="WhatsApp" url="/" />
                <ExternalLink title="FacebooK" url="/" />
                <ExternalLink title="Instagram" url="/" />
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={6}>
            <Stack
              p={5}
              height={600}
              spacing={4}
              justifyContent="space-between">
              <TextField label="NAME" variant="standard" />
              <TextField label="E-MAIL" variant="standard" type="email" />

              <FormControl variant="standard" fullWidth>
                <InputLabel id="website-type">WEBSITE TYPE</InputLabel>
                <Select labelId="website-type" label="WEBSITE TYPE">
                  {PRICES_DATA.map((item) => (
                    <MenuItem key={item.id} value={item.title}>
                      {item.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                placeholder="TELL ABOUT YOU PROJECT"
                variant="standard"
                multiline
                rows={6}
              />

              <Stack direction="row" justifyContent="space-between">
                <Button endIcon={<CallMadeRounded fontSize="large" />}>
                  <Typography
                    variant="body1"
                    fontWeight={600}
                    letterSpacing={1}>
                    SEND
                  </Typography>
                </Button>

                <Stack>
                  <Typography variant="body1" fontWeight={500} color="#868586">
                    BY CLICKING THE BUTTON, YOU ACCEPT
                  </Typography>
                  <Typography variant="body1" fontWeight={500}>
                    THE PRIVACY POLICY.
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
