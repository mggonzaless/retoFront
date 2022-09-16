import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Posts } from '../models/Posts';
import { ApiService } from '../shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private newPostbyUser = new BehaviorSubject<Posts>({ userId: 0, body: "", title: "", id: 0 });
  constructor(protected _apiService: ApiService,) { }


  public createPosts(data: any): Observable<any> {
    // https://jsonplaceholder.typicode.com/users/2/posts
    return this._apiService.post("https://jsonplaceholder.typicode.com/posts", data);


  }

  changelistaPost(posts: Posts) {
    this.newPostbyUser.next(posts);
  }
  getNewPosts(): Observable<Posts> {
    return this.newPostbyUser.asObservable();
  }

}
