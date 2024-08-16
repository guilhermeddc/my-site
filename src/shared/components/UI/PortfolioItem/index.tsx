import React, {memo} from 'react';

import {CallMadeRounded} from '@mui/icons-material';
import {Grid, Stack, Typography} from '@mui/material';
import {useMediaQuery} from 'shared/hook';
import {i18n} from 'translate/i18n';

interface IProps {
  title: string;
  description: string;
  url: string;
  date: string;
  index: number;
  borderBottom?: boolean;
}

export const PortfolioItem: React.FC<IProps> = ({
  title,
  description,
  url,
  date,
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
          <Typography variant="h6">
            <>{i18n.t(title)}</>
          </Typography>

          <Typography variant={isMobile ? 'body2' : 'body1'} fontWeight={500}>
            <>{i18n.t(description)}</>
          </Typography>
        </Stack>

        <Stack
          spacing={3}
          direction="row"
          alignItems="center"
          justifyContent="space-between">
          <Typography>
            <>{i18n.t(date)}</>
          </Typography>

          <Typography
            component="a"
            target="_blank"
            href={url}
            textTransform="uppercase"
            fontWeight={600}
            sx={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
            color="#010001"
            variant="body1">
            <>{i18n.t('Learn more')}</>

            <CallMadeRounded />
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default memo(PortfolioItem);
