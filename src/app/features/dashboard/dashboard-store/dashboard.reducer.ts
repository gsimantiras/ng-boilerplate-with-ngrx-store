import { PostsActions } from './dashboard.actions';

import { createReducer, on, Action } from '@ngrx/store';
import { IPost } from '../models/post';

export const dashboardFeatureKey = 'dashboard';

export interface DashboardState {
  posts: IPost[];
}

export const initialState: DashboardState = {
  posts: [
    {
      id: 1,
      body: 'This is the first and only dummy post',
      title: 'Welcome to my Blog',
      date: new Date(2020, 5, 8),
    },
  ],
};

const blogReducer = createReducer(
  initialState,
  on(PostsActions.getPosts, (state, { posts }) => {
    return { ...state, posts };
  })
);

export function reducer(state: DashboardState | undefined, action: Action) {
  return blogReducer(state, action);
}

// export const metaReducers: MetaReducer<State>[] = !environment.production
//   ? []
//   : [];
