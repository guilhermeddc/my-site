import React from 'react';

import {Grid, Stack, Typography} from '@mui/material';

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
  return (
    <Grid
      item
      xs={12}
      sx={{
        borderBottom: !borderBottom ? '1px solid #010001' : 'none',
        p: 5,
      }}>
      <Stack spacing={3} height={120}>
        <Typography variant="h6">{title}</Typography>

        <Typography variant="body1" fontWeight={500}>
          {description}
        </Typography>
      </Stack>
    </Grid>
  );
};
