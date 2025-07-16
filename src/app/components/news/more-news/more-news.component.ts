import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../../services/news.service';
import { News } from '../../../models/news';
import { Router, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-more-news',
  templateUrl: './more-news.component.html',
  styleUrls: ['./more-news.component.css']
})
export class MoreNewsComponent implements OnInit {
  newsList: News[] = [];

  constructor(
    private newsService: NewsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe(data => {
      this.newsList = data.slice(0, 3);
    });
  }

  goToNews(id: number) {
    this.router.navigate(['/noticias', id]).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
