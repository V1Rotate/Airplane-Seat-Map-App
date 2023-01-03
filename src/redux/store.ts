import { configureStore } from '@reduxjs/toolkit';
import airplane from './airplane/slice';
import search from './search/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    airplane, // Airplane models fetched from the API server.
    search, // Airplane search reducer - so the user search for the exact airplane from the list using input.
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
