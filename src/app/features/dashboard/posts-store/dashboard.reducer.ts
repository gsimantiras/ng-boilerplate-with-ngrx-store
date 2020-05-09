import { PostsActions } from './posts.actions';

import { createReducer, on, Action } from '@ngrx/store';
import { IPost } from '../shared/post.model';

export const dashboardFeatureKey = 'dashboard';

export interface DashboardState {
  posts: IPost[];
}

export const initialState: DashboardState = {
  posts: [],
};

const blogReducer = createReducer(
  initialState,
  on(PostsActions.lostPosts, (state, { posts }) => {
    return { ...state, posts };
  })
);

export function reducer(state: DashboardState | undefined, action: Action) {
  return blogReducer(state, action);
}

// export const metaReducers: MetaReducer<State>[] = !environment.production
//   ? []
//   : [];
