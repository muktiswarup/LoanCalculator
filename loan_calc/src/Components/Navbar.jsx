import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DarkModeToggle from "react-dark-mode-toggle";
import { Link } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FaBars } from "react-icons/fa"; // Importing the menu icon from react-icons

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/exchange_rates_live">
            <ListItemText primary="Exchange Rates (Live)" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/about">
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/error_page">
            <ListItemText primary="Error Page" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: isDarkMode ? "#333" : "#2979ff",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left side: Loan Calculator */}
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "left", color: "white" }}>
          Loan Calculator
        </Typography>

        {/* Right side: Navigation buttons */}
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <FaBars size={24} /> {/* Using react-icons FaBars for the menu icon */}
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              {drawerContent}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button sx={{ color: "white" }}>Home</Button>
            </Link>
            <Link to="/exchange_rates_live" style={{ textDecoration: "none" }}>
              <Button sx={{ color: "white" }}>Exchange Rates (Live)</Button>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Button sx={{ color: "white" }}>About</Button>
            </Link>
            <Link to="/error_page" style={{ textDecoration: "none" }}>
              <Button sx={{ color: "white" }}>Error Page</Button>
            </Link>
            <DarkModeToggle onChange={toggleDarkMode} checked={isDarkMode} size={60} />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;