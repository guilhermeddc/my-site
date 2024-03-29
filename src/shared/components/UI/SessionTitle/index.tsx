import React, {memo} from 'react';

import {Stack, Container, Typography} from '@mui/material';
import {useMediaQuery} from 'shared/hook';
import {i18n} from 'translate/i18n';

interface IProps {
  title: string;
}

export const SessionTitle: React.FC<IProps> = ({title}) => {
  const {isMobile} = useMediaQuery();

  return (
    <Stack
      flex={1}
      sx={{borderTop: '1px solid #010001', borderBottom: '1px solid #010001'}}
      id="about">
      <Container
        sx={{
          pl: '0 !important',
          pr: '0 !important',
          borderLeft: '1px solid #010001',
          borderRight: '1px solid #010001',
        }}>
        <Stack flex={1} p={4}>
          <Typography variant={isMobile ? 'h3' : 'h2'}>
            <>{i18n.t(title)}</>
          </Typography>
        </Stack>
      </Container>
    </Stack>
  );
};

export default memo(SessionTitle);
