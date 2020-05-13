import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, concatMap } from 'rxjs/operators';

import { PostsActionsTypes } from './posts.actions';
import { PostsService } from '../shared/posts.service';
import { AuthActionTypes } from 'src/app/core/shared/auth-store/auth.actions';

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActionsTypes.loadPosts),
      concatMap(() =>
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

  @Effect ({ dispatch: false })
  logoutSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.logoutSuccess),
    map((action) => {
      return {
        type: PostsActionsTypes.clearPosts,
      };
    })
  );

  constructor(private actions$: Actions, private postsService: PostsService) {}
}
