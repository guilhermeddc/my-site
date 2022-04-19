import React from 'react';

import {Stack, Container, Grid} from '@mui/material';
import {PriceItem, SessionTitle} from 'shared/components';
import {PRICES_DATA} from 'shared/constants';

export const Prices: React.FC = () => {
  return (
    <Stack flex={1} id="prices">
      <SessionTitle title="Prices" />
      <Container
        sx={{
          pl: '0 !important',
          pr: '0 !important',
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
                index === PRICES_DATA.length - 2
              }
            />
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};
