import { configureStore } from '@reduxjs/toolkit';
import AppSlice from './AppSlice';

const store = configureStore({
  reducer:{
    appReducer : AppSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
