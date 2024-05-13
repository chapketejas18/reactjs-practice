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
import { Day1Component } from "./Day1";
import { Day2Component } from "./Day2";
import { Day3Component } from "./Day3";
import { Day4Component } from "./Day4";
import { Day5Component } from "./Day5";

const AssignmentsPage = ({ setIsLoggedIn }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dashboardAnchorEl, setDashboardAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [selectedDay, setSelectedDay] = useState(0);
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
            {selectedDay !== null
              ? dayComponents[selectedDay].name
              : "Assignments"}
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
          {dayComponents.map((item, index) => (
            <ListItem
              key={index}
              onClick={() => handleDaySelect(index)}
              sx={{
                backgroundColor:
                  selectedDay === index ? "lightgrey" : "inherit",
              }}
            >
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box ml={2} mt={2} mb={5} position="relative">
        {selectedDay !== null && dayComponents[selectedDay].component}
        <Box
          sx={{
            position: "absolute",
            bottom: "-50px",
            right: "16px",
          }}
        >
          <Button
            onClick={() =>
              setSelectedDay((prev) =>
                prev === 0 ? dayComponents.length - 1 : prev - 1
              )
            }
            sx={{ marginRight: "8px" }}
          >
            Prev
          </Button>
          <Button
            onClick={() =>
              setSelectedDay((prev) => (prev + 1) % dayComponents.length)
            }
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AssignmentsPage;
