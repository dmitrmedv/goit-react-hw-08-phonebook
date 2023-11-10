import { Container, Typography } from '@mui/material';
import React from 'react';

const HomePage = () => {
  return (
    <Container sx={{ margin: '0 auto', width: '1200px' }}>
      <Typography variant="h1" color="inherit" align="center" paddingTop={10}>
        Phonebook
      </Typography>
    </Container>
  );
};

export default HomePage;
