import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor(protected _apiService: ApiService,) { }


  public getUsers(): Observable<any> {
    // https://jsonplaceholder.typicode.com/users
    return this._apiService.get("https://jsonplaceholder.typicode.com/users");
  }
  public getPosts(id: number): Observable<any> {
    // https://jsonplaceholder.typicode.com/users/2/posts
    return this._apiService.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`);


  }

}
