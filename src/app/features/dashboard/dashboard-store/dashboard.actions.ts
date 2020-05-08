import { DashboardState } from './dashboard.reducer';
import { createAction, props } from '@ngrx/store';

export const PostsActionsTypes = {
  getPosts: '[Dashboard] GetPosts',
};

const getPosts = createAction(PostsActionsTypes.getPosts, props<DashboardState>());

export const PostsActions = { getPosts };
