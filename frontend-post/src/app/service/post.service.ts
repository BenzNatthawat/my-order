import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';
import { environment } from 'src/environments/environment';
import { Score } from '../model/score';

const baseUrl = `${environment.apiUrl}/post`;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAll(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${baseUrl}/by-poster/${id}`);
  }

  score(poterId: number): Observable<Score> {
    return this.http.get<Score>(`${baseUrl}/score/${poterId}`);
  }

  create(poterId: number, body: Post): Observable<Post> {
    return this.http.post<Post>(`${baseUrl}/${poterId}`, body);
  }

  update(id: number, body: Post): Observable<Post> {
    return this.http.patch<Post>(`${baseUrl}/${id}`, body);
  }

  delete(id: number): Observable<Post> {
    return this.http.delete<Post>(`${baseUrl}/${id}`);
  }
}
