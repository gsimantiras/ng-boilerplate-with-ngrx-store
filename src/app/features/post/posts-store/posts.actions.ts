import { PostState } from './posts.reducer';
import { createAction, props } from '@ngrx/store';

export const PostsActionsTypes = {
  loadPosts: '[Post] Load Posts',
  postsLoadSuccess: '[Post] Posts Load Success',
  postsLoadError: '[Post] Posts Load Error',
  postSetComments: '[Post] Post Set Comments',
  clearPosts: '[Post] Clear Posts',
};

const lostPosts = createAction(PostsActionsTypes.loadPosts);

const postsLoadSuccess = createAction(
  PostsActionsTypes.postsLoadSuccess,
  props<PostState>()
);

const postsLoadError = createAction(PostsActionsTypes.postsLoadError);

const postSetComments = createAction(PostsActionsTypes.postSetComments);

const clearPosts = createAction(PostsActionsTypes.clearPosts);

export const PostsActions = {
  lostPosts,
  postsLoadSuccess,
  postsLoadError,
  postSetComments,
  clearPosts
};
