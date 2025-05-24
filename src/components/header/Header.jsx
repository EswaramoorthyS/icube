import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/system';

const HeaderContainer = styled(AppBar)({
  background: 'linear-gradient(90deg, #ff7e5f, #feb47b)', // Vibrant gradient
});

const MenuButton = styled(Button)({
  color: '#fff',
  margin: '0 10px',
  '&:hover': {
    backgroundColor: '#1565c0', // Slightly darker shade for hover
  },
  '&.active': {
    backgroundColor: '#0d47a1', // Active state color
  },
  justifyContent: 'flex-end'
});

const Header = () => {
  return (
    <HeaderContainer position="static">
      <Toolbar>
        {/* Logo on the left */}
        <Typography variant="h6" component="div" 
        sx={{ flex: 1,
        justifyContent: 'flex-end' 
        }}>
          ICube Logo
        </Typography>

        {/* Menu options on the right */}
        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
          <MenuButton>Home</MenuButton>
          <MenuButton>Mission</MenuButton>
          <MenuButton>Vision</MenuButton>
          <MenuButton>About</MenuButton>
          <MenuButton>Contact US</MenuButton>
        </Box>
      </Toolbar>
    </HeaderContainer>
  );
};

export default Header;
