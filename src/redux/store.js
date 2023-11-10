import { configureStore } from '@reduxjs/toolkit';
import { rootReduser } from './rootReduser';
import persistStore from 'redux-persist/es/persistStore';

export const store = configureStore({
  reducer: rootReduser,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
