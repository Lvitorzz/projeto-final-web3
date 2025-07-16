import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../models/news';

@Injectable({ providedIn: 'root' })
export class NewsService {
  private apiUrl = 'http://localhost:3000/news';

  constructor(private http: HttpClient) {}

  createNews(news: News): Observable<{ id: number }> {
    return this.http.post<{ id: number }>(this.apiUrl, news);
  }

  getAllNews(): Observable<News[]> {
    return this.http.get<News[]>(this.apiUrl);
  }

  getNewsById(id: number): Observable<News> {
    return this.http.get<News>(`${this.apiUrl}/${id}`);
  }

  updateNews(id: number, news: News): Observable<{ success: boolean }> {
    return this.http.put<{ success: boolean }>(`${this.apiUrl}/${id}`, news);
  }

  deleteNews(id: number): Observable<{ success: boolean }> {
    return this.http.delete<{ success: boolean }>(`${this.apiUrl}/${id}`);
  }
}
