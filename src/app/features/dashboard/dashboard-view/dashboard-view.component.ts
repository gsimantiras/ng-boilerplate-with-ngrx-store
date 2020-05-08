import { DashboardState } from '../dashboard-store/dashboard.reducer';
import { IPost } from './../models/post';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectPosts } from '../dashboard-store/dashboard.selectors';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss'],
})
export class DashboardViewComponent implements OnInit {
  posts$: Observable<IPost[]>;

  constructor(private store: Store<{ user: DashboardState }>) {}

  ngOnInit() {
    this.posts$ = this.store.pipe(select(selectPosts));
  }
}
