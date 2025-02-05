import { SxProps, Theme } from '@mui/material';

export const hoverLift: SxProps<Theme> = {
  '@media (pointer: coarse)': {
    transform: 'none !important',
    transition: 'none !important',
    '&:hover': {
      transform: 'none !important'
    },
    '&:active': {
      transform: 'none !important'
    }
  },
  '@media (pointer: fine)': {
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)'
    }
  }
};
