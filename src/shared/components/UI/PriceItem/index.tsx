import React from 'react';

import {Grid, Stack, Typography} from '@mui/material';
import {useMediaQuery} from 'shared/hook';

interface IProps {
  title: string;
  description: string;
  time: string;
  price: string;
  index: number;
  borderBottom?: boolean;
}

export const PriceItem: React.FC<IProps> = ({
  title,
  description,
  time,
  price,
  index,
  borderBottom,
}) => {
  const {isMobile} = useMediaQuery();

  return (
    <Grid
      item
      xs={12}
      md={6}
      sx={{
        borderBottom: !borderBottom ? '1px solid #010001' : 'none',
        borderLeft: {
          sm: '1px solid #010001',
          xs: '1px solid #010001',
          md: 'none',
        },
        borderRight: {
          sm: '1px solid #010001',
          xs: '1px solid #010001',
          md: index % 2 === 0 ? '1px solid #010001' : 'none',
        },
        p: 5,
      }}>
      <Stack spacing={3} justifyContent="space-between" height={320}>
        <Stack spacing={3}>
          <Typography variant="h6">{title}</Typography>

          <Typography variant={isMobile ? 'body2' : 'body1'} fontWeight={500}>
            {description}
          </Typography>
        </Stack>

        <Stack
          spacing={3}
          direction="row"
          alignItems="center"
          justifyContent="space-between">
          <Typography>{time}</Typography>

          <Stack spacing={1} direction="row" alignItems="center">
            <Typography
              fontWeight={600}
              color="#010001"
              variant={isMobile ? 'body2' : 'body1'}>
              {price}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
};
