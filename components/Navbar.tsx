import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Link from 'next/link';
import { useState } from 'react';
import { useThemeContext } from '@/contexts/ThemeContext';

export default function Navbar() {
  const theme = useTheme();
  const { isDarkMode, toggleTheme } = useThemeContext();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Experience', href: '/experience' },
    { text: 'Projects', href: '/projects' },
  ];

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#fff' }}>
          Hayden O'Neill Portfolio
        </Typography>
        
        <IconButton
          sx={{ mr: 1, color: '#fff' }}
          onClick={toggleTheme}
          color="inherit"
        >
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              sx={{ color: '#fff' }}
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              {menuItems.map((item) => (
                <MenuItem 
                  key={item.href}
                  onClick={handleClose}
                  component={Link}
                  href={item.href}
                  sx={{ color: 'inherit' }}
                >
                  {item.text}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 1 }}>
            {menuItems.map((item) => (
              <Button
                key={item.href}
                sx={{ color: '#fff' }}
                component={Link}
                href={item.href}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}