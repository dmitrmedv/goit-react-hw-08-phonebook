import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarAuth = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <Link
        to="/register"
        style={{
          cursor: 'pointer',
          textDecoration: 'none',
          color: '#3874CB',
          textTransform: 'uppercase',
        }}
      >
        Реєстрація
      </Link>
      <Link
        to="/login"
        style={{
          cursor: 'pointer',
          textDecoration: 'none',
          color: '#3874CB',
          textTransform: 'uppercase',
        }}
      >
        Вхід
      </Link>
    </Box>
  );
};

export default NavbarAuth;
