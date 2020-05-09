import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IPost } from './post.model';

export class PostsService {
  constructor(private http: HttpClient) {}

  mockPosts: IPost[] = [
    {
      id: 1,
      body: 'This is the first and only dummy post',
      title: 'Welcome to my Blog',
      date: new Date(2020, 5, 8),
    },
  ];

  getAll(): Observable<IPost[]> {
    return this.http.get<IPost[]>('/posts');
    // return Promise.resolve(this.mockPosts);
  }
}
