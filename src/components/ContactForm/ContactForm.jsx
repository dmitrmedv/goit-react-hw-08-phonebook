import { Box, Button, Grid, TextField } from '@mui/material';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { fetchAddContact } from 'redux/contacts/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const idName = nanoid();
  const idNumber = nanoid();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = event.target.name.value;
    const number = event.target.number.value;
    dispatch(fetchAddContact({ name, number }));
    form.reset();
  };

  return (
    <Box
      sx={{ width: '30%', padding: '30px' }}
      component="form"
      onSubmit={handleSubmit}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            autoComplete="given-name"
            name="name"
            required
            fullWidth
            id={idName}
            label="Імʼя"
            autoFocus
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id={idNumber}
            label="Номер телефону"
            name="number"
            autoComplete="phone"
          />
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" sx={{ mt: 3, width: '50%' }}>
        Додати контакт
      </Button>
    </Box>
  );
};
