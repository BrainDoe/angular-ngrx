import { createAction, props } from '@ngrx/store';
import { Ipost } from '../interfaces/posts.interface';

export const getPosts = createAction('[Posts] Get Posts');
export const getPostsSuccess = createAction(
  '[Posts] Get Posts Success',
  props<{ posts: Ipost[] }>()
);
export const getPostsFailure = createAction(
  '[Posts] Get Posts Failure',
  props<{ error: string }>()
);
