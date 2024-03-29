import React from 'react';

import {Stack} from '@mui/material';
import {useMediaQuery} from 'shared/hook';

export const BarCode: React.FC = () => {
  const {isMobile} = useMediaQuery();

  return (
    <Stack direction="row" spacing={0.5} mt={4}>
      <Stack height={60} width={4} bgcolor="#010001" />
      <Stack height={60} width={12} bgcolor="#010001" />
      <Stack height={60} width={4} bgcolor="#010001" />
      <Stack height={60} width={8} bgcolor="transparent" />
      <Stack height={60} width={4} bgcolor="#010001" />
      <Stack height={60} width={12} bgcolor="#010001" />
      <Stack height={60} width={4} bgcolor="#010001" />
      <Stack height={60} width={8} bgcolor="#010001" />
      <Stack height={60} width={8} bgcolor="transparent" />
      <Stack height={60} width={4} bgcolor="#010001" />
      <Stack height={60} width={4} bgcolor="#010001" />
      <Stack height={60} width={8} bgcolor="#010001" />
      <Stack height={60} width={4} bgcolor="#010001" />
      <Stack height={60} width={4} bgcolor="#010001" />
      <Stack height={60} width={8} bgcolor="transparent" />
      <Stack height={60} width={12} bgcolor="#010001" />
      <Stack height={60} width={4} bgcolor="#010001" />
      <Stack height={60} width={4} bgcolor="#010001" />
      <Stack height={60} width={4} bgcolor="#010001" />
      <Stack height={60} width={8} bgcolor="transparent" />
      <Stack height={60} width={4} bgcolor="#010001" />
      <Stack height={60} width={4} bgcolor="#010001" />
      <Stack height={60} width={8} bgcolor="transparent" />
      <Stack height={60} width={4} bgcolor="#010001" />
      <Stack height={60} width={4} bgcolor="#010001" />
      <Stack height={60} width={16} bgcolor="transparent" />
      <Stack height={60} width={4} bgcolor="#010001" />
      <Stack height={60} width={4} bgcolor="#010001" />
      <Stack height={60} width={4} bgcolor="#010001" />
      <Stack height={60} width={12} bgcolor="#010001" />
      {!isMobile && (
        <>
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={12} bgcolor="#010001" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={8} bgcolor="transparent" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={12} bgcolor="#010001" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={8} bgcolor="#010001" />
          <Stack height={60} width={8} bgcolor="transparent" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={8} bgcolor="#010001" />
          <Stack height={60} width={8} bgcolor="transparent" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={12} bgcolor="#010001" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={8} bgcolor="#010001" />
          <Stack height={60} width={8} bgcolor="transparent" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={8} bgcolor="#010001" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={8} bgcolor="transparent" />
          <Stack height={60} width={8} bgcolor="#010001" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={8} bgcolor="transparent" />
          <Stack height={60} width={12} bgcolor="#010001" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={8} bgcolor="transparent" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={8} bgcolor="transparent" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={16} bgcolor="transparent" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={12} bgcolor="#010001" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={8} bgcolor="transparent" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={12} bgcolor="#010001" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={8} bgcolor="#010001" />
          <Stack height={60} width={8} bgcolor="transparent" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={12} bgcolor="#010001" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={8} bgcolor="transparent" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={12} bgcolor="#010001" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={8} bgcolor="#010001" />
          <Stack height={60} width={8} bgcolor="transparent" />
          <Stack height={60} width={4} bgcolor="#010001" />
          <Stack height={60} width={12} bgcolor="#010001" />
          <Stack height={60} width={4} bgcolor="#010001" />
        </>
      )}
    </Stack>
  );
};
