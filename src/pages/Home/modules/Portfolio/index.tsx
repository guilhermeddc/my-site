import React from 'react';

import {Stack, Container, Grid} from '@mui/material';
import {PortfolioItem, SessionTitle} from 'shared/components';
import {PORTFOLIO_DATA} from 'shared/constants';
import {useMediaQuery} from 'shared/hook';

export const Portfolio: React.FC = () => {
  const {isMobile, isTablet} = useMediaQuery();

  return (
    <Stack flex={1} id="portfolio" pt={11} mt={-11}>
      <SessionTitle title="Portfolio" />
      <Container
        sx={{
          pl: {md: '0 !important', xs: 2, sm: 3},
          pr: {md: '0 !important', xs: 2, sm: 3},
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
              borderBottom={
                index === PORTFOLIO_DATA.length - 1 ||
                (!isMobile && !isTablet && index === PORTFOLIO_DATA.length - 2)
              }
            />
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};
