import { createAsyncThunk } from '@reduxjs/toolkit';

import { ApiAbout } from '@/data/api.about';
import { AppDispatch, RootState } from '@/domain/store';

export type ThunksExtraArgument = {
  apiAbout: typeof ApiAbout;
};

export const thunkExtraArgument = {
  apiAbout: new ApiAbout(),
};

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  extra: ThunksExtraArgument;
}>();
