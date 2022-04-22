import React, {memo} from 'react';

import {ArrowForwardIos} from '@mui/icons-material';
import {Stack, Typography} from '@mui/material';
import {useMediaQuery} from 'shared/hook';

interface IProps {
  title: string;
  url: string;
}

export const ExternalLink: React.FC<IProps> = ({title, url}) => {
  const {isMobile} = useMediaQuery();

  return (
    <Stack direction="row" alignItems="center">
      <Typography
        component="a"
        target="_blank"
        color="#010001"
        sx={{textDecoration: 'none'}}
        href={url}
        variant="h6"
        fontSize={isMobile ? 14 : 20}>
        {title}
      </Typography>
      <ArrowForwardIos fontSize="small" />
      <ArrowForwardIos sx={{ml: -1.4}} fontSize="small" />
    </Stack>
  );
};

export default memo(ExternalLink);
