import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './user.model';
import { delay, map } from 'rxjs/operators';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.url
  private endpoint = 'users'

  getUser(userId: number): Observable<User> {
    const userRequest = `${this.endpoint}/${userId}`;
    var cachedUser = this.storageService.getItemTo<User>(userRequest);
    if(cachedUser && cachedUser.id > 0)
      return of(cachedUser);
    else
      this.storageService.removeItem(userRequest);
      return this.http.get<User>(`${this.url}/${userRequest}`)
        .pipe(map(x => 
          {
            this.storageService.setItem(userRequest, x)
            return x;
          }
          ));
  }
  
  constructor(private http: HttpClient, private storageService: StorageService) {}
   
}
