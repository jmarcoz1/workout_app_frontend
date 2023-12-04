import React from 'react';
import { IconButton, Menu, MenuItem, Box } from '@mui/material';

const NavigationTab = ({ flex, icon, menuItems }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: flex}} >
      <IconButton
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleMenu}
        onMouseEnter={handleMenu}
      >
        {icon}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {menuItems.map((menuItem, index) => (
          <MenuItem key={index} onClick={menuItem.onClick}>
            {menuItem.text}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default NavigationTab;
