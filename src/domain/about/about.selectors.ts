import { RootState } from '@/domain/store';

export const selectAboutIsFetching = (state: RootState) => {
  return state.about.isFetching;
};

export const selectAboutContent = (state: RootState) => {
  return state.about.content;
};
