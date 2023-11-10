import React from 'react';
import { Link } from 'react-router-dom';
import NavbarUser from './NavbarUser/NavbarUser';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import { AppBar, Box, Toolbar } from '@mui/material';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <AppBar
        position="static"
        color="default"
        sx={{ margin: '0 auto', width: '1200px' }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Link
            to="/"
            style={{
              cursor: 'pointer',
              textDecoration: 'none',
              color: '#3874CB',
              textTransform: 'uppercase',
            }}
          >
            HOME
          </Link>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            {isLoggedIn ? <NavbarUser /> : <NavbarAuth />}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navigation;
