import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserState } from '../../stores/user/user.reducer';
import { UserActions } from '../../stores/user/user.actions';
import { Store, select } from '@ngrx/store';
import { selectUserName } from 'src/app/core/stores/user/user.selectors';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  title = 'App';
  userName$: Observable<string>;

  constructor(private store: Store<{ user: UserState }>) {}

  ngOnInit() {
    this.userName$ = this.store.pipe(select(selectUserName));
  }
}
