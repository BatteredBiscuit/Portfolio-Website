import { SxProps, Theme } from '@mui/material';

export const hoverLift: SxProps<Theme> = {
  '@media (hover: none) and (pointer: coarse)': {
    transition: 'none',
    transform: 'none',
    '&:hover': {
      transform: 'none'
    },
    '&:active': {
      transform: 'none'
    }
  },
  '@media (hover: hover) and (pointer: fine)': {
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)'
    }
  }
};
