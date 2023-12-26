import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";

function AppSideBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer}>
        <h1>MENU</h1>
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        variant="temporary"
      >
        <List>
          <ListItem button key="Home">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button key="About">
            <ListItemText primary="About" />
          </ListItem>
          {/* 他のメニュー項目 */}
        </List>
      </Drawer>
      {/* メインコンテンツ */}
      {/* メインコンテンツの内容 */}
    </div>
  );
}

export default AppSideBar;
