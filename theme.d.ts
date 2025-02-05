// src/theme.d.ts
import '@mui/material/Paper';
import '@mui/material/Button';
import '@mui/material/Chip';

// Extend Paper to support the custom variant "hoverEnabled"
declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    hoverEnabled: true;
  }
}

// Extend Button to support the custom variant "hoverEnabled"
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    hoverEnabled: true;
  }
}

// Extend Chip to support the custom variant "hoverEnabled"
declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    hoverEnabled: true;
  }
}
