import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NavigationTab from './NavigationTab';

const AppWithTopBar = () => {
  const navigate = useNavigate();

  const handlePageChange = (page) => {
    navigate(page);
  };

  const profileMenuItems = [
    { text: 'My Profile', onClick: () => handlePageChange('/home/profile') },
  ];

  const trainingMenuItems = [
    { text: 'Calendar', onClick: () => handlePageChange('/home/training/calendar') },
    { text: 'Statistics', onClick: () => handlePageChange('/home/training/statistics') },
    { text: 'Block Review', onClick: () => handlePageChange('/home/training/block-review') },
  ];

  return (
    <Box>
      {/* App Bar with Navigation Buttons */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Jorge Hypertrophy App
          </Typography>
          <NavigationTab icon={<FitnessCenterIcon />} menuItems={trainingMenuItems} />
          <NavigationTab icon={<HomeIcon />} menuItems={profileMenuItems} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppWithTopBar;
