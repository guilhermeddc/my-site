import {createTheme} from '@mui/material';
import {ptBR} from '@mui/material/locale';

export const cores = ['#6537A6', '#AA6EFF', '#8C4CE6', '#999514', '#E6E14C'];

export const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#6537a6',
        light: '#9764d8',
        dark: '#330876',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#e6e14c ',
        light: '#ffff7f',
        dark: '#b1af0c',
        contrastText: '#0d1017',
      },
      error: {
        main: '#F50000',
        light: '#F73333',
        dark: '#AB0000',
      },
      warning: {
        main: '#FFAC33',
        light: '#FF9800',
        dark: '#B26A00',
      },
      success: {
        main: '#33B673',
        light: '#00A451',
        dark: '#007238',
      },
      info: {
        main: '#018781',
        light: '#339F9A',
        dark: '#005E5A',
      },
      text: {
        primary: '#0d1017',
      },
      background: {
        default: '#f0f5fc',
        paper: '#FFFFFF',
      },
    },
    typography: {
      fontFamily: "'Quicksand', sans-serif",
      h1: {
        fontFamily: "'Major Mono Display', monospace",
        fontWeight: 600,
        textShadow:
          '-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);',
      },
      h2: {
        fontFamily: "'Major Mono Display', monospace",
        fontWeight: 600,
        textShadow:
          '-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);',
      },
      h3: {
        fontFamily: "'Major Mono Display', monospace",
        fontWeight: 600,
        textShadow:
          '-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);',
      },
      h4: {
        fontFamily: "'Major Mono Display', monospace",
        fontWeight: 600,
        textShadow:
          '-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);',
      },
      h5: {
        fontFamily: "'Major Mono Display', monospace",
        fontWeight: 600,
        textShadow:
          '-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);',
      },
      h6: {
        fontFamily: "'Major Mono Display', monospace",
        fontWeight: 600,
        textShadow:
          '-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);',
      },
      subtitle1: {
        letterSpacing: 2.8,
        textTransform: 'uppercase',
        fontWeight: 300,
        textShadow:
          '-0.4px -0.4px 0.4px rgba(255,255,255,.1), 0.4px 0.4px 0.4px rgba(0,0,0,.5);',
      },
      subtitle2: {
        letterSpacing: 2.8,
        textTransform: 'uppercase',
        fontWeight: 300,
        textShadow:
          '-0.4px -0.4px 0.4px rgba(255,255,255,.1), 0.4px 0.4px 0.4px rgba(0,0,0,.5);',
      },
      body1: {
        fontSize: 18,
        lineHeight: 1.7,
        fontWeight: 400,
      },
      caption: {
        fontFamily: "'Major Mono Display', monospace",
        lineHeight: 1.2,
        fontWeight: 600,
        fontSize: 22,
      },
      button: {
        letterSpacing: 2.8,
        fontWeight: 400,
      },
    },
    components: {},
  },
  ptBR,
);
