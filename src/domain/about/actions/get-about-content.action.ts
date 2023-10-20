import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '@/data/api';

export const getAboutContent = createAsyncThunk(
  'about/getAboutContent',
  async () => {
    return api.getAboutContent();
  },
);
