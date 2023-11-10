import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAddContact,
  fetchAllContacts,
  fetchdeleteContact,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contact',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchAllContacts.pending]: handlePending,
    [fetchAllContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchAllContacts.rejected]: handleRejected,

    [fetchAddContact.pending]: handlePending,
    [fetchAddContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [fetchAddContact.rejected]: handleRejected,

    [fetchdeleteContact.pending]: handlePending,
    [fetchdeleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      console.log(action.payload);
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      console.log(index);
      state.items.splice(index, 1);
    },
    [fetchdeleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
