import { SxProps, Theme } from '@mui/material';

export const hoverLift: SxProps<Theme> = {
  '@media (hover: hover)': {
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)'
    }
  }
};

export const hoverLiftLight: SxProps<Theme> = {
  '@media (hover: hover)': {
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-2px)'
    }
  }
};
