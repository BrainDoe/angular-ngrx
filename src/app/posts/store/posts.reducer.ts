import { IpostState } from './posts.state';
import { on, createReducer } from '@ngrx/store';
import * as PostsActions from './posts.action';

export const initialState: IpostState = {
  isLoading: false,
  posts: [],
  error: null,
};

export const postReducer = createReducer(
  initialState,
  on(PostsActions.getPosts, (state) => ({ ...state, isLoading: true })),
  on(PostsActions.getPostsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    posts: action.posts,
  })),
  on(PostsActions.getPostsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
