import React, { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const AppWithSidebar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      {/* App Bar with Hamburger Icon */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleDrawerOpen} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Jorge Hypertrophy App
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
      >
        <List>
          <ListItemButton onClick={handleDrawerClose}>
            <ListItemText primary="My profile" />
          </ListItemButton>
          <ListItemButton onClick={handleDrawerClose}>
            <ListItemText primary="My training" />
          </ListItemButton>
        </List>
      </Drawer>

      {/* Main Content */}
      <div>
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default AppWithSidebar;
