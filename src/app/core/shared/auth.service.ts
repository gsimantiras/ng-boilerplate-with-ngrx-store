import { AuthActions } from './auth-store/auth.actions';
import { Injectable } from '@angular/core';

import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { User } from 'src/app/core/shared/user.model';
import { StorageService } from './storage.service';

const mockUser: User = {
  username: 'george',
  token: 'qwerASDF!@#$ZXCV',
};
const fakeDelay = 500;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storage: StorageService) {}

  isAuthenticated(): boolean {
    const token = this.storage.getItem('my-auth-token');
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

  logout(): Observable<User> {
    console.warn('log out User');
    return of({}).pipe(delay(fakeDelay));
  }
}
