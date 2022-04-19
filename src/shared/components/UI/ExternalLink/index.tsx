import React from 'react';

import {ArrowForwardIos} from '@mui/icons-material';
import {Stack, Typography} from '@mui/material';

interface IProps {
  title: string;
  url: string;
}

export const ExternalLink: React.FC<IProps> = ({title, url}) => {
  return (
    <Stack direction="row" alignItems="center">
      <Typography
        component="a"
        target="_blank"
        color="#010001"
        sx={{textDecoration: 'none'}}
        href={url}
        variant="h6">
        {title}
      </Typography>
      <ArrowForwardIos fontSize="small" />
      <ArrowForwardIos sx={{ml: -1.4}} fontSize="small" />
    </Stack>
  );
};
