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
            // this.storage.setItem('my-auth-token', user.token); // todo save token
            // this.router.navigate(['dashboard']);
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
      this.storage.setItem('my-auth-token', action.user.token); // todo save token
      this.router.navigate(['dashboard']);
    })
  );

  loginWithToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginWithToken),
      exhaustMap((action) =>
        this.authService.login(action.user).pipe(
          map((user) => {
            // this.storage.setItem('my-auth-token', user.token); // todo save token
            // this.router.navigate(['dashboard']);
            return AuthActions.loginSuccess({ user });
          }),
          catchError((error) => of(AuthActions.loginError({ error })))
        )
      )
    )
  );

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signup),
      exhaustMap((action) =>
        this.authService.signUp(action.user).pipe(
          map((user) => {
            // this.storage.setItem('my-auth-token', user.token); // todo save token
            // this.router.navigate(['dashboard']);
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
      this.storage.setItem('my-auth-token', action.user.token); // todo save token
      this.router.navigate(['dashboard']);
    })
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      exhaustMap((action) =>
        this.authService.logout(action.user).pipe(
          map((user) => {
            this.storage.removeItem('my-auth-token');
            this.router.navigate(['login']);
            return AuthActions.logoutSuccess({ user });
          }),
          catchError((error) => of(AuthActions.logoutError({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private storage: StorageService,
    private authService: AuthService,
    private router: Router
  ) {}
}
