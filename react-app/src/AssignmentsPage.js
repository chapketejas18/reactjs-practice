import React, { useState } from "react";
import { AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem, Drawer, List, ListItem, ListItemText, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Day1Component } from "./Day1";
import { Day2Component } from "./Day2";
import { Day3Component } from "./Day3";
import { Day4Component } from "./Day4";
import { Day5Component } from "./Day5";

const AssignmentsPage = ({setIsLoggedIn}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
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
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
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
