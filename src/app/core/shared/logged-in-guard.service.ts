import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';
import { AuthState } from './auth-store/auth.reducer';
import { Store } from '@ngrx/store';
import { AuthActions } from './auth-store/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuardService implements CanActivate {
  constructor(
    private auth: AuthService,
    private store: Store<{ state: AuthState }>,
    private router: Router
  ) {}

  canActivate(): boolean {

    if (this.auth.isAuthenticated()) {
      this.router.navigate(['dashboard']);
      return false;
    }
    return true;
  }
}
