import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './features/favoriteSlice';
import listReducer from './features/listSlice';
import { pokemonApi } from './services/pokeApi';

export const store = configureStore({
  reducer: {
    favoriteReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    listReducer
  },
  // Adding the api middleware to enable caching
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

// setting types of the state and dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch