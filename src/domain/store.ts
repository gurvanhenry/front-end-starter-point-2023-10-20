import { configureStore } from '@reduxjs/toolkit';

import { aboutSlice } from '@/domain/about/about.slice';

import { thunkExtraArgument } from './store.thunk';

export const store = configureStore({
  reducer: {
    [aboutSlice.name]: aboutSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: {
        extraArgument: thunkExtraArgument,
      },
    });
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
