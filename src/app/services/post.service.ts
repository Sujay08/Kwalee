import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  private dataUrl = '../assets/posts.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.dataUrl);
  }


  getPosts(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1/comments');
  }

}
