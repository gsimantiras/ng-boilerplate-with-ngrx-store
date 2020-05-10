import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Post } from '../shared/post.model';
import { PostState } from '../posts-store/posts.reducer';
import { PostsService } from '../shared/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  commentsNumber: number;
  user: any = {
    username: 'User',
  };

  constructor(
    private store: Store<{ state: PostState }>,
    private postService: PostsService,
    // private userService: UserService
  ) {}

  loadComments() {
    // this.store.dispatch({type: '' })
  }

  ngOnInit() {
    this.postService
      .getPostComments(this.post.id)
      .subscribe((comments) => (this.commentsNumber = comments.length));
    // this.userService
    //   .getUser(this.post.userId)
    //   .subscribe((user) => (this.user = user));
  }
}
