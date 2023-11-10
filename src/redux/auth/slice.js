import { createSlice } from '@reduxjs/toolkit';
import { logIn, register, logOut, current } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: '',
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = '';
      state.isLoggedIn = false;
    },
    [current.fulfilled](state, { payload }) {
      state.user = { ...payload.data };
      state.isLoggedIn = true;
    },
  },
});

export const authSliceReduser = authSlice.reducer;
