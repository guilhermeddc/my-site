import React from 'react';

import {Stack} from '@mui/material';
import {
  background,
  ellipse33,
  ellipse35,
  ellipse15,
  ellipse23,
} from 'shared/assets';
import {ButtonFixed} from 'shared/components';
import {useMediaQuery} from 'shared/hook';

import {Appbar, Footer} from './components';

interface IProps {
  children?: React.ReactNode;
}

export const BaseLayout: React.FC<IProps> = ({children}) => {
  const {isMobile} = useMediaQuery();

  return (
    <Stack
      sx={{
        backgroundImage: `
          url(${ellipse33}), 
          url(${ellipse35}), 
          url(${ellipse15}), 
          url(${ellipse23}), 
          url(${ellipse35}), 
          url(${background})
        `,
        backgroundPosition: `
          ${isMobile ? 'left -250px top -150px' : 'left -400px top -400px'},
          ${isMobile ? 'top 1600px right -200px' : 'top 1000px right -300px'},
          ${isMobile ? 'top 3600px left -200px' : 'bottom 1800px left -500px'},
          ${
            isMobile ? 'top 5000px right -200px' : 'bottom 1000px right -300px'
          },
          ${
            isMobile ? 'bottom 1000px left -200px' : 'bottom 100px left -500px'
          },
          center
        `,
        backgroundRepeat: `
          no-repeat,
          no-repeat, 
          no-repeat, 
          no-repeat, 
          no-repeat, 
          repeat
        `,
        backgroundSize: `
        ${isMobile ? '150%' : '100%'}, 
        ${isMobile ? '150%' : '70%'}, 
        ${isMobile ? '150%' : '100%'}, 
        ${isMobile ? '150%' : '70%'}, 
        ${isMobile ? '150%' : '100%'}, 
          auto
        `,
        backgroundBlendMode: 'multiply',
      }}>
      <Appbar />
      <Stack height={91} />
      {children}
      <Footer />
      <ButtonFixed />
    </Stack>
  );
};
