import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private jsonUrl = 'assets/news.json';

  constructor(private http: HttpClient) {}

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.jsonUrl);
  }
}
