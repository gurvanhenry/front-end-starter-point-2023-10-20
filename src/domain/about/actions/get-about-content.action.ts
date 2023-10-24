import { createAppAsyncThunk } from '@/domain/store.thunk';

export const getAboutContent = createAppAsyncThunk(
  'about/getAboutContent',
  async (_, { extra: { apiAbout } }) => {
    return apiAbout.getAboutContent();
  },
);
