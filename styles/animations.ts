import { SxProps, Theme } from '@mui/material';

export const hoverLift: SxProps<Theme> = {
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    '@media (hover: none)': {
      transform: 'none'
    }
  }
};

export const hoverLiftLight: SxProps<Theme> = {
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    '@media (hover: none)': {
      transform: 'none'
    }
  }
};
