import { AuthActions } from './auth-store/auth.actions';
import { Injectable } from '@angular/core';

import { delay, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { User } from 'src/app/core/shared/user.model';
import { StorageService } from './storage.service';
import { Store, select } from '@ngrx/store';
import { AuthState } from './auth-store/auth.reducer';
import { selectAuthState } from './auth-store/auth.selectors';

const mockUser: User = {
  username: 'george',
  token: 'qwerASDF!@#$ZXCV',
};
const fakeDelay = 0;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private storage: StorageService,
    private store: Store<{ state: AuthState }>
  ) {}

  isAuthenticated(): boolean {
    const token = this.storage.getItem('my-auth-token');
    this.store.pipe(select(selectAuthState)).subscribe((state) => {
      if (!!token && !state) {
        this.store.dispatch(AuthActions.loginWithToken({ user: { token } }));
      }
    });
    return !!token;
  }

  login(user: User): Observable<User> {
    console.log('log in User', user);
    return of(mockUser).pipe(delay(fakeDelay));
  }

  signUp(user: User): Observable<User> {
    console.log('sign up user', user);
    return of(mockUser).pipe(delay(fakeDelay));
  }

  logout(user: User): Observable<User> {
    console.log('log out User', user);
    return of({});
    // .pipe(delay(fakeDelay));
  }
}
