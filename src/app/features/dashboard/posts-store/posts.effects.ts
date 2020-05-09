import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { PostsService } from '../shared/posts.service';
import { PostsActionsTypes } from './posts.actions';

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActionsTypes.getPosts),
      mergeMap(() =>
        this.postsService.getAll().pipe(
          map((posts) => ({
            type: PostsActionsTypes.postsLoadSuccess,
            posts,
          })),
          catchError(() => of({ type: PostsActionsTypes.postsLoadError }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private postsService: PostsService) {}
}
