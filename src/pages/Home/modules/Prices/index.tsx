import React from 'react';

import {Stack, Container, Grid} from '@mui/material';
import {PriceItem, SessionTitle} from 'shared/components';
import {PRICES_DATA} from 'shared/constants';
import {useMediaQuery} from 'shared/hook';

export const Prices: React.FC = () => {
  const {isMobile, isTablet} = useMediaQuery();

  return (
    <Stack flex={1} id="prices">
      <SessionTitle title="Prices" />
      <Container
        sx={{
          pl: {md: '0 !important', xs: 2, sm: 3},
          pr: {md: '0 !important', xs: 2, sm: 3},
          borderLeft: '1px solid #010001',
          borderRight: '1px solid #010001',
        }}>
        <Grid container>
          {PRICES_DATA.map((item, index) => (
            <PriceItem
              key={item.id}
              index={index}
              title={item.title}
              description={item.description}
              price={item.price}
              time={item.time}
              borderBottom={
                index === PRICES_DATA.length - 1 ||
                (!isMobile && !isTablet && index === PRICES_DATA.length - 2)
              }
            />
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};
