import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthState } from '../core/shared/auth-store/auth.reducer';
import { AuthActions } from '../core/shared/auth-store/auth.actions';
import { selectLoader } from '../core/shared/auth-store/auth.selectors';

import { User } from 'src/app/core/shared/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loading$: Observable<boolean> = this.store.select(selectLoader);

  loginForm: any;
  user: User = new User();

  constructor(private store: Store<{ state: AuthState }>) {}

  login() {
    this.store.dispatch(AuthActions.login({ user: this.user }));
  }

  ngOnInit() {}
}
