import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poster } from '../model/poster';
import { environment } from 'src/environments/environment';

const baseUrl = `${environment.apiUrl}/poster`;

@Injectable({
  providedIn: 'root'
})
export class PosterService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Poster[]> {
    return this.http.get<Poster[]>(baseUrl);
  }

  getOne(id: number): Observable<Poster> {
    return this.http.get<Poster>(`${baseUrl}/${id}`);
  }
}
