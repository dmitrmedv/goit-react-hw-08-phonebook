import { Box, Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { getUserData } from 'redux/auth/selectors';

const NavbarUser = () => {
  const { name } = useSelector(getUserData);

  const dispatch = useDispatch();

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
        to="/contacts"
        style={{
          cursor: 'pointer',
          textDecoration: 'none',
          color: '#3874CB',
          textTransform: 'uppercase',
        }}
      >
        Контакти
      </Link>
      <p>{name}</p>
      <Button variant="outlined" onClick={() => dispatch(logOut())}>
        Вийти
      </Button>
    </Box>
  );
};

export default NavbarUser;
