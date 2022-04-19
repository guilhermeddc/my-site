import React from 'react';

import {Stack} from '@mui/material';
import {background} from 'shared/assets';

import {Appbar} from './components';

interface IProps {
  children?: React.ReactNode;
}

export const BaseLayout: React.FC<IProps> = ({children}) => {
  return (
    <Stack
      sx={{
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        minWidth: '100vw',
        width: '100%',
        minHeight: '100vh',
        height: '100%',
        p: 0,
        m: 0,
      }}>
      <Appbar />

      {children}
    </Stack>
  );
};
