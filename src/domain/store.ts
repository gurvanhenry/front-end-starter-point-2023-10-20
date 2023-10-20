import { configureStore } from '@reduxjs/toolkit';

import { aboutSlice } from '@/domain/about/about.slice';

export const store = configureStore({
  reducer: {
    [aboutSlice.name]: aboutSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
