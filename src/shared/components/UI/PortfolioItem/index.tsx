import React from 'react';

import {CallMadeRounded} from '@mui/icons-material';
import {Grid, Stack, Typography} from '@mui/material';

interface IProps {
  title: string;
  description: string;
  url: string;
  date: string;
  index: number;
}

export const PortfolioItem: React.FC<IProps> = ({
  title,
  description,
  url,
  date,
  index,
}) => {
  return (
    <Grid
      item
      xs={6}
      sx={{
        borderRight: index % 2 === 0 ? '1px solid #010001' : 'none',
        borderBottom: '1px solid #010001',
        p: 5,
      }}>
      <Stack spacing={3} justifyContent="space-between" height={320}>
        <Stack spacing={3}>
          <Typography variant="h6">{title}</Typography>

          <Typography variant="body1" fontWeight={500}>
            {description}
          </Typography>
        </Stack>

        <Stack
          spacing={3}
          direction="row"
          alignItems="center"
          justifyContent="space-between">
          <Typography>{date}</Typography>

          <Stack spacing={1} direction="row" alignItems="center">
            <Typography
              component="a"
              textTransform="uppercase"
              target="_blank"
              fontWeight={600}
              sx={{textDecoration: 'none'}}
              color="#010001"
              variant="body1"
              href={url}>
              Learn more
            </Typography>
            <CallMadeRounded />
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
};
