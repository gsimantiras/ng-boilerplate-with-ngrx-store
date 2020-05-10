import { createReducer, on, Action } from '@ngrx/store';

import { PostsActions } from './posts.actions';
import { Post } from '../shared/post.model';

export const postFeatureKey = 'post';

export interface PostState {
  posts: Post[];
  isLoading?: boolean;
}

export const initialState: PostState = {
  posts: [],
  isLoading: false,
};

const blogReducer = createReducer(
  initialState,
  on(PostsActions.lostPosts, (state) => {
    return { ...state, isLoading: true };
  }),
  on(PostsActions.postsLoadSuccess, (state, { posts }) => {
    return { ...state, posts, isLoading: false };
  }),
  on(PostsActions.postsLoadError, (state) => {
    return { ...state, isLoading: false };
  })
);

export function reducer(state: PostState | undefined, action: Action) {
  return blogReducer(state, action);
}

// export const metaReducers: MetaReducer<State>[] = !environment.production
//   ? []
//   : [];
