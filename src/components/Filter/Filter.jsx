import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { setFilter } from 'redux/filter/slice';
import { Box, Grid, TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();

  const findContact = event => dispatch(setFilter(event.target.value));
  const idFilter = nanoid();

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="filter"
            fullWidth
            id={idFilter}
            label="Імʼя для пошуку"
            onChange={findContact}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Filter;
