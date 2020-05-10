import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { PostsActionsTypes } from './posts.actions';
import { PostsService } from '../shared/posts.service';

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActionsTypes.loadPosts),
      mergeMap(() =>
        this.postsService.getAll().pipe(
          map((posts) => {
            return {
              type: PostsActionsTypes.postsLoadSuccess,
              posts,
            };
          }),
          catchError(() => of({ type: PostsActionsTypes.postsLoadError }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private postsService: PostsService) {}
}
