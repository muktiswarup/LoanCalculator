import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import DarkModeToggle from "react-dark-mode-toggle";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2979ff' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Left side: Loan Calculator */}
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'left', color: 'white' }}>
          Loan Calculator
        </Typography>

        {/* Right side: Navigation buttons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Button sx={{ color: 'white' }}>Home</Button>
          </Link>
          <Link to='/exchange_rates_live' style={{ textDecoration: 'none' }}>
            <Button sx={{ color: 'white' }}>Exchange Rates (Live)</Button>
          </Link>
          <Link to='/about' style={{ textDecoration: 'none' }}>
            <Button sx={{ color: 'white' }}>About</Button>
          </Link>
          <Link to='/error_page' style={{ textDecoration: 'none' }}>
            <Button sx={{ color: 'white' }}>Error Page</Button>
          </Link>
          <DarkModeToggle className='dark' size={60} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;