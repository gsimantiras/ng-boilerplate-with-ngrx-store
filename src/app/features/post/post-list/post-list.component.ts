import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { PostState } from '../posts-store/posts.reducer';
import { PostsActionsTypes } from '../posts-store/posts.actions';
import { selectPosts, selectLoading } from '../posts-store/posts.selectors';
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts$: Observable<Post[]> = this.store.pipe(select(selectPosts));
  loading$: Observable<boolean> = this.store.pipe(select(selectLoading));
 
  constructor(private store: Store<{ state: PostState }>) {}

  ngOnInit() {
    setTimeout(() => {
      this.store.dispatch({ type: PostsActionsTypes.loadPosts });
    }, 0);
  }
}
