import { PostsActionsTypes } from '../posts-store/posts.actions';
import { DashboardState } from '../posts-store/dashboard.reducer';
import { IPost } from '../shared/post.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectPosts } from '../posts-store/dashboard.selectors';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss'],
})
export class DashboardViewComponent implements OnInit {
  posts$: Observable<IPost[]>;

  constructor(private store: Store<{ user: DashboardState }>) {}

  ngOnInit() {
    this.store.dispatch({ type: PostsActionsTypes.lostPosts });
    // this.posts$ = this.store.pipe(select(selectPosts));
  }
}
