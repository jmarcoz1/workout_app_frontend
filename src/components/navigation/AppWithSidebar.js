import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const AppWithSidebar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState('profile'); // Default selected page

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handlePageChange = (page) => {
    setSelectedPage(page);
    handleDrawerClose(); // Close the drawer after selecting a page
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
          <ListItemButton onClick={() => handlePageChange('profile')} selected={selectedPage === 'profile'}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="My profile" />
          </ListItemButton>

          <ListItemButton onClick={() => handlePageChange('training')} selected={selectedPage === 'training'}>
            <ListItemIcon>
              <FitnessCenterIcon />
            </ListItemIcon>
            <ListItemText primary="My training" />
          </ListItemButton>
        </List>
      </Drawer>

      {/* Main Content */}
      <div>
        {selectedPage === 'profile' && (
          // Render the content for the 'My profile' page
          <div>
            <Typography variant="h4">My Profile Page</Typography>
            {/* Add your profile page content here */}
          </div>
        )}

        {selectedPage === 'training' && (
          // Render the content for the 'My training' page
          <div>
            <Typography variant="h4">My Training Page</Typography>
            {/* Add your training page content here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppWithSidebar;
