import { SxProps, Theme } from '@mui/material';

export const hoverLift: SxProps<Theme> = {
  transition: 'transform 0.2s ease-in-out',
  '@media (hover: hover)': {
    '&:hover': {
      transform: 'translateY(-4px)'
    }
  }
};

export const hoverLiftLight: SxProps<Theme> = {
  transition: 'transform 0.2s ease-in-out',
  '@media (hover: hover)': {
    '&:hover': {
      transform: 'translateY(-2px)'
    }
  }
};
