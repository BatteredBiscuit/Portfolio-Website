import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
} from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useThemeContext } from "@/contexts/ThemeContext";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useState, useRef } from "react";
import Link from "next/link";

interface MenuItem {
  text: string;
  href: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { text: "Home", href: "/" },
  {
    text: "About",
    href: "/about",
    children: [
      { text: "Experience", href: "/experience" },
      { text: "Projects", href: "/projects" },
    ],
  },
  { text: "Blog", href: "/blog" },
];

export default function Navbar() {
  const theme = useTheme();
  const { isDarkMode, toggleTheme } = useThemeContext();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // For dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownAnchorRef = useRef<HTMLDivElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggleDropdown = () => {
    setDropdownOpen((prevOpen) => !prevOpen);
  };

  const handleCloseDropdown = (event: Event | React.SyntheticEvent) => {
    if (
      dropdownAnchorRef.current &&
      dropdownAnchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setDropdownOpen(false);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: theme.palette.primary.main,
        borderBottom: `1px solid ${theme.palette.divider}`,
        boxShadow: `0 2px 10px rgba(0, 0, 0, 0.1)`,
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          href="/"
          sx={{
            flexGrow: 1,
            color: theme.palette.primary.contrastText,
            textDecoration: "none",
            fontWeight: 600,
            letterSpacing: "0.5px",
          }}
        >
          Hayden O'Neill Portfolio
        </Typography>

        <IconButton
          sx={{
            mr: 1,
            color: theme.palette.primary.contrastText,
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "rotate(90deg)",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="end"
              aria-label="menu"
              onClick={handleMenu}
              sx={{
                color: theme.palette.primary.contrastText,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
              PaperProps={{
                sx: {
                  mt: 1.5,
                  borderRadius: 2,
                  boxShadow: 4,
                  backgroundColor: theme.palette.background.paper,
                },
              }}
            >
              {menuItems.map((item) => (
                <div key={item.text}>
                  <MenuItem
                    onClick={handleClose}
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: 500,
                      "&:hover": {
                        backgroundColor: theme.palette.action.hover,
                      },
                    }}
                  >
                    <Link
                      href={item.href}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "block",
                        width: "100%",
                      }}
                    >
                      {item.text}
                    </Link>
                  </MenuItem>
                  {item.children &&
                    item.children.map((child) => (
                      <MenuItem
                        key={child.text}
                        onClick={handleClose}
                        sx={{
                          pl: 4,
                          color: theme.palette.text.primary,
                          "&:hover": {
                            backgroundColor: theme.palette.action.hover,
                          },
                        }}
                      >
                        <Link
                          href={child.href}
                          style={{
                            textDecoration: "none",
                            color: "inherit",
                            display: "block",
                            width: "100%",
                          }}
                        >
                          {child.text}
                        </Link>
                      </MenuItem>
                    ))}
                </div>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: "flex" }}>
            {menuItems.map((item) =>
              item.children ? (
                <div key={item.text} ref={dropdownAnchorRef}>
                  <Button
                    component={Link}
                    href={item.href}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onClick={handleToggleDropdown}
                    sx={{
                      color: theme.palette.primary.contrastText,
                      fontSize: "1rem",
                      fontWeight: 500,
                      padding: "6px 16px",
                      borderRadius: 2,
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    {item.text}
                  </Button>
                  <Popper
                    open={dropdownOpen}
                    anchorEl={dropdownAnchorRef.current}
                    role={undefined}
                    placement="bottom"
                    transition
                    disablePortal
                    onMouseLeave={() => setDropdownOpen(false)}
                    sx={{
                      zIndex: 1300,
                      width: "auto",
                      minWidth: dropdownAnchorRef.current
                        ? dropdownAnchorRef.current.offsetWidth + 20
                        : "auto",
                      marginTop: "0",
                    }}
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin: "center top",
                        }}
                      >
                        <Paper
                          elevation={4}
                          sx={{
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.primary.contrastText,
                            borderRadius: "0 0 8px 8px",
                            mt: 0,
                            width: "100%",
                            overflow: "hidden",
                          }}
                        >
                          <ClickAwayListener onClickAway={handleCloseDropdown}>
                            <MenuList
                              autoFocusItem={dropdownOpen}
                              sx={{
                                padding: 0,
                                display: "flex",
                                flexDirection: "column",
                                width: "100%",
                              }}
                            >
                              {item.children.map((child, index) => (
                                <MenuItem
                                  key={child.text}
                                  component={Link}
                                  href={child.href}
                                  onClick={handleCloseDropdown}
                                  sx={{
                                    color: theme.palette.primary.contrastText,
                                    padding: "8px 16px",
                                    justifyContent: "center",
                                    fontSize: "1rem",
                                    fontWeight: 500,
                                    width: "100%",
                                    whiteSpace: "nowrap",
                                    backgroundColor: "transparent",
                                    "&:hover": {
                                      backgroundColor:
                                        "rgba(255, 255, 255, 0.1)",
                                    },
                                    borderRadius:
                                      index === item.children.length - 1
                                        ? "0 0 8px 8px"
                                        : "0",
                                  }}
                                >
                                  {child.text}
                                </MenuItem>
                              ))}
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </div>
              ) : (
                <Button
                  key={item.text}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: theme.palette.primary.contrastText,
                    fontSize: "1rem",
                    fontWeight: 500,
                    padding: "6px 16px",
                    borderRadius: 2,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  {item.text}
                </Button>
              )
            )}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
