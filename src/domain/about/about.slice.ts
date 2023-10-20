import { createSlice } from '@reduxjs/toolkit';

import { getAboutContent } from '@/domain/about/actions/get-about-content.action';

export interface AboutState {
  isFetching: boolean;
  content: string;
}

const initialState: AboutState = {
  isFetching: false,
  content: '',
};

export const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAboutContent.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(getAboutContent.fulfilled, (state, action) => {
        state.isFetching = false;
        state.content = action.payload;
      });
  },
});
