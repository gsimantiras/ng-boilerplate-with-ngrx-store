import { createSelector, createFeatureSelector } from '@ngrx/store';

import { postFeatureKey, PostState } from './posts.reducer';

export const selectPostState = createFeatureSelector<PostState>(postFeatureKey);

export const selectPosts = createSelector(
  selectPostState,
  (state: PostState) => state.posts
);

export const selectLoading = createSelector(
  selectPostState,
  (state: PostState) => state.isLoading
);
