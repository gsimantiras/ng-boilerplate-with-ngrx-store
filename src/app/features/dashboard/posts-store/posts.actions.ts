import { DashboardState } from './dashboard.reducer';
import { createAction, props } from '@ngrx/store';

export const PostsActionsTypes = {
  lostPosts: '[Dashboard] lostPosts',
  postsLoadSuccess: '[Dashboard] postsLoadSuccess',
  postsLoadError: '[Dashboard] postsLoadError',
};

const lostPosts = createAction(PostsActionsTypes.lostPosts, props<DashboardState>());

export const PostsActions = { lostPosts };
