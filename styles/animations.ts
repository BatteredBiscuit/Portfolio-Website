import { SxProps, Theme } from '@mui/material';

export const hoverLift: SxProps<Theme> = {
  '@media (hover: none)': {
    transition: 'none',
    transform: 'none'
  },
  '@media (hover: hover)': {
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)'
    }
  }
};
