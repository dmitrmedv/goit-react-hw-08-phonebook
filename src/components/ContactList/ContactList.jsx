import { IconButton, List, ListItem, ListItemText } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import DeleteIcon from '@mui/icons-material/Delete';
import { getAllContacts } from 'redux/contacts/selectors';
import {
  fetchAllContacts,
  fetchdeleteContact,
} from 'redux/contacts/operations';
import { getFilteredContacts } from 'redux/filter/selectors';
import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const contacts = useSelector(getAllContacts);

  const filter = useSelector(getFilteredContacts);

  const normalizeFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <List
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <ListItem
            sx={{ border: '1px solid #C4C4C4', borderRadius: '5px' }}
            key={id}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => dispatch(fetchdeleteContact(id))}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={name} secondary={number} />
          </ListItem>
        );
      })}
    </List>
  );
};
