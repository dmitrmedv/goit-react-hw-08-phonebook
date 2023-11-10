import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/slice';
import { authSliceReduser } from './auth/slice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { filterReduser } from './filter/slice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const rootReduser = combineReducers({
  contacts: contactsReducer,
  filter: filterReduser,
  auth: persistReducer(persistConfig, authSliceReduser),
});
