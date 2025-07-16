import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../../services/news.service';
import { News } from '../../../models/news';
import { NewsListComponent } from '../news-list/news-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [NewsListComponent, CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {
  newsList: News[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe((data) => {
      this.newsList = data;
    });
  }
}
