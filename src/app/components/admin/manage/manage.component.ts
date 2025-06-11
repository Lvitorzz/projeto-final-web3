import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../../services/news.service';
import { News } from '../../../models/news';
import { NewsCardComponent } from '../../news/news-card/news-card.component';
import { NewsListComponent } from "../../news/news-list/news-list.component";
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [CommonModule, NewsCardComponent, NewsListComponent, HeaderComponent],
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  newsList: News[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe(data => {
      this.newsList = data;
    });

  }

  onDelete(id: number): void {
    
  }

  onEdit(news: News): void {
    
  }
}
