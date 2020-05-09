import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { delay, take, map } from 'rxjs/operators';

import { Post, Comment } from './post.model';
import { environment } from 'src/environments/environment';

const mockPosts: Post[] = [{id:1, title:'fake', body:'fake body', userId:1}];
const mockComments: Comment[] = [{id:1, postId:1, body:'fake comment', name:'commenter', email:'comm@email.com' }];
const fakeDelay = 500;

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {}
  
  private url = environment.url
  private postsEndPoint = 'posts'

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/${this.postsEndPoint}`).pipe(
      map(posts =>{
        let arr1 =  posts.slice(0, 5);
        let arr2 =  posts.slice(10, 15);
       return [...arr1, ...arr2];
      }),
      delay(fakeDelay)
      );
  }

  getPost(id: number): Observable<Post>{
    return this.http.get<Post>(`${this.url}/${this.postsEndPoint}/${id}`).pipe(delay(fakeDelay));
  }

  getPostComments(id: number): Observable<Comment[]>{
    return of(mockComments);
    // return this.http.get<Comment[]>(`${this.url}/${this.postsEndPoint}/${id}/comments`).pipe(delay(fakeDelay));
  }

}
