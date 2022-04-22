import React, {memo} from 'react';

import {Grid, Stack, Typography} from '@mui/material';
import {useMediaQuery} from 'shared/hook';
import {i18n} from 'translate/i18n';

interface IProps {
  title: string;
  description: string;
  borderBottom?: boolean;
}

export const ProcessItem: React.FC<IProps> = ({
  title,
  description,
  borderBottom,
}) => {
  const {isMobile, isTablet} = useMediaQuery();

  return (
    <Grid
      item
      xs={12}
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
          md: 'none',
        },
        p: 5,
      }}>
      <Stack spacing={3} height={isMobile ? 300 : isTablet ? 200 : 160}>
        <Typography variant="h6">
          <>{i18n.t(title)}</>
        </Typography>

        <Typography variant={isMobile ? 'body2' : 'body1'} fontWeight={500}>
          <>{i18n.t(description)}</>
        </Typography>
      </Stack>
    </Grid>
  );
};

export default memo(ProcessItem);
