import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { contactSlise } from './slises/contactSlise';
import { filterSlise } from './slises/filterSlise';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistProportion = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const reducer = combineReducers({
  contacts: contactSlise.reducer,
  filter: filterSlise.reducer,
});

const persistedReducer = persistReducer(persistProportion, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
