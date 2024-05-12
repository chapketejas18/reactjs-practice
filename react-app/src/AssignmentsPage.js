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
import { Day1Component } from "./Day1";
import { Day2Component } from "./Day2";
import { Day3Component } from "./Day3";
import { Day4Component } from "./Day4";
import { Day5Component } from "./Day5";

const AssignmentsPage = ({ setIsLoggedIn }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dashboardAnchorEl, setDashboardAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

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
  };

  const handleDaySelect = (index) => {
    setSelectedDay(index);
    handleDrawerClose();
  };

  const dayComponents = [
    { name: "Assignment Day 1", component: <Day1Component /> },
    { name: "Assignment Day 2", component: <Day2Component /> },
    { name: "Assignment Day 3", component: <Day3Component /> },
    { name: "Assignment Day 4", component: <Day4Component /> },
    { name: "Assignment Day 5", component: <Day5Component /> },
  ];

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
            Assignments
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
              <MenuItem>About Us</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Home</MenuItem>
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
            <MenuItem>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <List>
          {dayComponents.map((item, index) => (
            <ListItem key={index} onClick={() => handleDaySelect(index)}>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box ml={2} mt={2}>
        {selectedDay !== null && dayComponents[selectedDay].component}
      </Box>
    </Box>
  );
};

export default AssignmentsPage;
