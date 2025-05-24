import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/system';

const HeaderContainer = styled(AppBar)({
  backgroundColor: '#1976d2', // Material UI "trader" color
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
});

const Header = () => {
  return (
    <HeaderContainer position="static">
      <Toolbar>
        {/* Logo on the left (30% width) */}
        <Box sx={{ flex: '0 0 30%' }}>
          <Typography variant="h6" component="div">
            Logo
          </Typography>
        </Box>

        {/* Menu options on the right (70% width) */}
        <Box sx={{ flex: '0 0 70%', display: 'flex', justifyContent: 'flex-end' }}>
          <MenuButton>Menu 1</MenuButton>
          <MenuButton>Menu 2</MenuButton>
          <MenuButton>Menu 3</MenuButton>
          <MenuButton>Menu 4</MenuButton>
          <MenuButton>Menu 5</MenuButton>
        </Box>
      </Toolbar>
    </HeaderContainer>
  );
};

export default Header;
