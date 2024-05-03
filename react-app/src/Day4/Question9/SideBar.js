import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link, Outlet } from "react-router-dom";
const SideBar = () => {
  const menuItems = [
    { menu: "Charts", link: "/charts" },
    { menu: "Setting", link: "/setting" },
    { menu: "AboutUS", link: "/about" },
    { menu: "LogOut", link: "/logout" },
  ];

  const [open, setOpen] = React.useState(false);

  const DrawerList = (
    <Box sx={{ width: 260 }} role="presentation" onClick={() => setOpen(false)}>
      <List>
        {menuItems.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText>
                <Link to={text.link}>{text.menu}</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        {DrawerList}
      </Drawer>
      <Outlet />
    </div>
  );
};
export default SideBar;
