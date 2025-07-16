import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/news';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../shared/menu/menu.component';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css'],
})
export class NewsDetailsComponent implements OnInit {
  news?: News;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      if (id) {
        this.newsService.getNewsById(id).subscribe({
          next: (n) => {
            this.news = n;
            window.scrollTo({ top: 0, behavior: 'smooth' });
          },
        });
      }
    });
  }
}
