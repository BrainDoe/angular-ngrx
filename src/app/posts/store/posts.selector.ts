import { AppState } from './app-state.state';
import { createSelector } from '@ngrx/store';

export const selectFeature = (state: AppState) => state.posts;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);
export const postsSelector = createSelector(
  selectFeature,
  (state) => state.posts
);
export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);
