import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { UserState } from 'src/app/core/stores/user/user.reducer';
import { UserActions } from 'src/app/core/stores/user/user.actions';
import { Observable } from 'rxjs';
import { selectUser } from 'src/app/core/stores/user/user.selectors';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss'],
})
export class AdminViewComponent implements OnInit {
  user$: Observable<UserState>;
  userName: string;

  constructor(private store: Store<{ user: UserState }>) {}

  ngOnInit() {
    this.user$ = this.store.pipe(select(selectUser));
  }

  login() {
    this.store.dispatch(
      UserActions.login({ username: 'george', password: '1234' })
    );
  }

  changeUserName(event) {
    this.store.dispatch(
      UserActions.changeUserName({ username: 'jimbo' })
    );
  }

  logout() {
    this.store.dispatch(UserActions.logout());
  }
}
