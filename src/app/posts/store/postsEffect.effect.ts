import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PostAction from './posts.action';
import { mergeMap, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { PostsService } from '../services/posts.service';

@Injectable()
export class PostsEffect {
  constructor(private action$: Actions, private postService: PostsService) {}

  getPosts$ = createEffect(() =>
    this.action$.pipe(
      ofType(PostAction.getPosts),
      mergeMap(() => {
        return this.postService.getPosts().pipe(
          map((posts) => PostAction.getPostsSuccess({ posts })),
          catchError((error) =>
            of(PostAction.getPostsFailure({ error: error.message }))
          )
        );
      })
    )
  );
}
