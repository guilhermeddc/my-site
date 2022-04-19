import React from 'react';

import {Stack, Container, Grid} from '@mui/material';
import {ProcessItem, SessionTitle} from 'shared/components';
import {PROCESS_DATA} from 'shared/constants';

export const Process: React.FC = () => {
  return (
    <Stack flex={1} id="process">
      <SessionTitle title="Work Process " />
      <Container
        sx={{
          pl: {md: '0 !important', xs: 2, sm: 3},
          pr: {md: '0 !important', xs: 2, sm: 3},
          borderLeft: '1px solid #010001',
          borderRight: '1px solid #010001',
        }}>
        <Grid container>
          {PROCESS_DATA.map((item, index) => (
            <ProcessItem
              key={item.id}
              title={item.title}
              description={item.description}
              borderBottom={index === PROCESS_DATA.length - 1}
            />
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};
