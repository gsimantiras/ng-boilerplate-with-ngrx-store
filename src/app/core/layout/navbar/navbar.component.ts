import { AuthActions } from './../../shared/auth-store/auth.actions';
import { selectToken } from './../../shared/auth-store/auth.selectors';
import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  selectState,
  selectUserName,
} from '../../shared/auth-store/auth.selectors';
import { AuthService } from '../../shared/auth.service';
import { AuthState } from '../../shared/auth-store/auth.reducer';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  title = 'App';
  state$: Observable<AuthState> = this.store.pipe(select(selectState));

  constructor(
    private store: Store<{ state: AuthState }>,
    public auth: AuthService
  ) {}

  logout() {
    this.store.dispatch(AuthActions.logout());
  }

  ngOnInit() {
    this.store.pipe(select(selectState), take(1)).subscribe((state) => {
      const token = localStorage.getItem('my-auth-token');
      if (token && state.user.username === '') {
        this.store.dispatch(AuthActions.loginWithToken({ user: { token } }));
      }
    });
  }
}
