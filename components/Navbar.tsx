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
];

export default function Navbar() {
  const theme = useTheme();
  const { isDarkMode, toggleTheme } = useThemeContext();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // For dropdown
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownAnchorRef = useRef<HTMLDivElement>(null); // Changed from HTMLButtonElement to HTMLDivElement

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
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "#fff" }}
        >
          Hayden O'Neill Portfolio
        </Typography>

        <IconButton
          sx={{
            mr: 1,
            color: "#fff",
            transition: "transform 0.2s ease-in-out",
            "&:hover": {
              transform: "rotate(90deg)",
            },
          }}
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
              aria-label="menu"
              onClick={handleMenu}
              sx={{ color: "#fff" }}
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
            >
              {menuItems.map((item) => (
                <div key={item.text}>
                  <MenuItem onClick={handleClose}>
                    <Link
                      href={item.href}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {item.text}
                    </Link>
                  </MenuItem>
                  {item.children &&
                    item.children.map((child) => (
                      <MenuItem
                        key={child.text}
                        onClick={handleClose}
                        sx={{ pl: 4 }}
                      >
                        <Link
                          href={child.href}
                          style={{ textDecoration: "none", color: "inherit" }}
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
                    color="inherit"
                    component={Link}
                    href={item.href}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onClick={handleToggleDropdown}
                    sx={{
                      color: "#fff",
                      fontSize: "1rem",
                      fontWeight: 500,
                      "&:hover": {
                        backgroundColor: (theme) => theme.palette.primary.dark,
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
                      marginTop: "0", // Remove any default margin
                    }}
                    modifiers={[
                      {
                        name: "offset",
                        options: {
                          offset: [0, 0], // Align with bottom of navbar
                        },
                      },
                    ]}
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
                            backgroundColor: (theme) =>
                              theme.palette.primary.main,
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
                                    color: "#fff",
                                    padding: "8px 16px",
                                    justifyContent: "center",
                                    fontSize: "1rem",
                                    fontWeight: 500,
                                    width: "100%",
                                    whiteSpace: "nowrap",
                                    // Make sure background matches exactly with AppBar
                                    backgroundColor: "transparent",
                                    "&:hover": {
                                      backgroundColor: (theme) =>
                                        theme.palette.primary.dark,
                                    },
                                    // Apply border radius to last item
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
                  color="inherit"
                  component={Link}
                  href={item.href}
                  sx={{
                    color: "#fff",
                    fontSize: "1rem",
                    fontWeight: 500,
                    "&:hover": {
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark"
                          ? theme.palette.primary.dark
                          : theme.palette.primary.dark,
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
