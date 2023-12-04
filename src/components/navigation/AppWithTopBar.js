import React from 'react';
import { useNavigate } from 'react-router-dom';
//
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
//
import NavigationTab from './NavigationTab';

const AppWithTopBar = ({ tabs }) => {

  return (
    <Box>
      {/* App Bar with Navigation Buttons */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ marginRight: 'auto' }}>
            Jorge Hypertrophy App
          </Typography>
          {tabs.map((tab, index) => (
            <NavigationTab key={index} flex={1} icon={tab.icon} menuItems={tab.menuItems} />
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppWithTopBar;
