import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectState } from '../../shared/auth-store/auth.selectors';
import { AuthService } from '../../shared/auth.service';
import { AuthState } from '../../shared/auth-store/auth.reducer';
import { AuthActions } from '../../shared/auth-store/auth.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  title = 'App';
  state$: Observable<AuthState>;

  constructor(
    private store: Store<{ state: AuthState }>,
    public auth: AuthService
  ) {}

  logout() {
    this.store.dispatch(AuthActions.logout({ user: {} }));
  }

  ngOnInit() {
    this.state$ = this.store.pipe(select(selectState));
  }
}
