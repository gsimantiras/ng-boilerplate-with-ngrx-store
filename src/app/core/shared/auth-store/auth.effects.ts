import { AuthState } from './auth.reducer';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { map, catchError, exhaustMap, tap, take } from 'rxjs/operators';
import { of } from 'rxjs';

import { StorageService } from './../storage.service';
import { AuthService } from './../auth.service';
import { AuthActions, AuthActionTypes } from './auth.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      exhaustMap((action) =>
        this.authService.login(action.user).pipe(
          map((user) => {
            return AuthActions.loginSuccess({ user });
          }),
          catchError((error) => of(AuthActions.loginError({ error })))
        )
      )
    )
  );

  loginWithToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginWithToken),
      take(1),
      exhaustMap((action) =>
        this.authService.login(action.user).pipe(
          map((user) => {
            return AuthActions.loginSuccess({ user });
          }),
          catchError((error) => of(AuthActions.loginError({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.loginSuccess),
    map((action: any) => action),
    tap((action: AuthState) => {
      this.storage.setItem('my-auth-token', action.user.token);
      this.storage.setItem('auth-state', action.user);
      this.router.navigate(['dashboard']);
    })
  );

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signup),
      exhaustMap((action) =>
        this.authService.signUp(action.user).pipe(
          map((user) => {
            return AuthActions.signupSuccess({ user });
          }),
          catchError((error) => of(AuthActions.signupError({ error })))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  signupSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.signupSuccess),
    map((action: any) => action),
    tap((action: AuthState) => {
      this.storage.setItem('my-auth-token', action.user.token);
      this.storage.setItem('auth-state', action.user);
      this.router.navigate(['dashboard']);
    })
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      tap(() => {
        this.authService.logout();
        this.storage.removeItem('my-auth-token');
        this.storage.removeItem('auth-state');
        this.router.navigate(['login']);
      }),
      map(() => {
        return { type: 'NO_ACTION' };
      })
    )
  );

  @Effect({ dispatch: false })
  logoutSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.logoutSuccess),
    tap(() => this.storage.removeItem('my-auth-token')),
    map(() => {
      this.storage.removeItem('my-auth-token');
      return this.router.navigate(['login']);
    })
  );

  constructor(
    private actions$: Actions,
    private storage: StorageService,
    private authService: AuthService,
    private router: Router
  ) {}
}
