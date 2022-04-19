import {useTheme, useMediaQuery as useMediaQueryHook} from '@mui/material';

export const useMediaQuery = () => {
  const theme = useTheme();
  const isMobile = useMediaQueryHook(theme.breakpoints.down('sm'));
  const isTablet = useMediaQueryHook(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQueryHook(theme.breakpoints.up('md'));
  return {isMobile, isTablet, isDesktop};
};
