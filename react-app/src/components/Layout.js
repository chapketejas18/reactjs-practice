import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const Layout = ({ children, setIsLoggedIn }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dashboardAnchorEl, setDashboardAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [selectedDayName, setSelectedDayName] = useState("Assignments");
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleDashboardMenu = (event) => {
    setDashboardAnchorEl(event.currentTarget);
  };

  const handleDashboardClose = () => {
    setDashboardAnchorEl(null);
  };

  const handleProfileMenu = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleDaySelect = (day) => {
    const dayNames = [
      "Assignment Day 1",
      "Assignment Day 2",
      "Assignment Day 3",
      "Assignment Day 4",
      "Assignment Day 5",
      "Assignment Day 6",
    ];
    setSelectedDayName(dayNames[day - 1]);
    navigate(`/assignments/day${day}`);
    handleDrawerClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {selectedDayName}
          </Typography>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "16px",
            }}
          >
            <Button
              variant="text"
              color="inherit"
              aria-controls="dashboard-menu"
              aria-haspopup="true"
              onClick={handleDashboardMenu}
              style={{ cursor: "pointer", marginRight: "8px" }}
            >
              Dashboard
            </Button>
            <Menu
              id="dashboard-menu"
              anchorEl={dashboardAnchorEl}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(dashboardAnchorEl)}
              onClose={handleDashboardClose}
            >
              <MenuItem onClick={() => navigate("/assignments")}>
                Overview
              </MenuItem>
              <MenuItem onClick={() => navigate("/about")}>About Us</MenuItem>
              <MenuItem onClick={() => navigate("/settings")}>
                Settings
              </MenuItem>
              <MenuItem onClick={() => navigate("/products")}>
                Products
              </MenuItem>
            </Menu>
            <Divider
              orientation="vertical"
              flexItem
              style={{ margin: "0 8px" }}
            />
          </div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="profile-menu"
            aria-haspopup="true"
            onClick={handleProfileMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="profile-menu"
            anchorEl={profileAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(profileAnchorEl)}
            onClose={handleProfileClose}
          >
            <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <List>
          {[
            "Assignment Day 1",
            "Assignment Day 2",
            "Assignment Day 3",
            "Assignment Day 4",
            "Assignment Day 5",
            "Assignment Day 6",
          ].map((name, index) => (
            <ListItem
              button
              key={index}
              onClick={() => handleDaySelect(index + 1)}
            >
              <ListItemText primary={name} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box ml={2} mt={2}>
        {React.cloneElement(children, { setSelectedDayName })}
      </Box>
    </Box>
  );
};

export default Layout;
