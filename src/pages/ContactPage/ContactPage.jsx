import { Box, Container } from '@mui/material';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react';

const ContactPage = () => {
  return (
    <Container
      sx={{
        marginTop: 4,
        display: 'flex',
        padding: '20px',
        justifyContent: 'space-around',
        gap: '20px',
      }}
    >
      <ContactForm />
      <Box
        sx={{
          width: '40%',
          padding: '30px',
        }}
      >
        <Filter />
        <ContactList />
      </Box>
    </Container>
  );
};

export default ContactPage;
