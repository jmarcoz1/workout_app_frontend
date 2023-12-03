import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom'
import ProfilePage from '../pages/ProfilePage'
import TrainingPage from '../pages/TrainingPage';

const AppWithSidebar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handlePageChange = (page) => {
    handleDrawerClose(); // Close the drawer after selecting a page
    navigate(page)
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
          <ListItemButton onClick={() => handlePageChange('/profile')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="My profile" />
          </ListItemButton>

          <ListItemButton onClick={() => handlePageChange('/training')}>
            <ListItemIcon>
              <FitnessCenterIcon />
            </ListItemIcon>
            <ListItemText primary="My training" />
          </ListItemButton>
        </List>
      </Drawer>
    </div>
  );
};

export default AppWithSidebar;
