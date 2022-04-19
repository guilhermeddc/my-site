import React from 'react';

import {Stack, Container, Grid} from '@mui/material';
import {PortfolioItem, SessionTitle} from 'shared/components';
import {PORTFOLIO_DATA} from 'shared/constants';

export const Portfolio: React.FC = () => {
  return (
    <Stack flex={1} id="portfolio">
      <SessionTitle title="Portfolio" />
      <Container
        sx={{
          pl: '0 !important',
          pr: '0 !important',
          borderLeft: '1px solid #010001',
          borderRight: '1px solid #010001',
        }}>
        <Grid container>
          {PORTFOLIO_DATA.map((item, index) => (
            <PortfolioItem
              key={item.id}
              index={index}
              title={item.title}
              description={item.description}
              url={item.url}
              date={item.date}
            />
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};
