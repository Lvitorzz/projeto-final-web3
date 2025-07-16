import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../../services/news.service';
import { News } from '../../../models/news';
import { NewsCardComponent } from '../../news/news-card/news-card.component';
import { NewsListComponent } from "../../news/news-list/news-list.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [CommonModule, NewsCardComponent, NewsListComponent, HeaderComponent],
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  newsList: News[] = [];

  constructor(
    private newsService: NewsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carregarNoticias();
  }

  carregarNoticias(): void {
    this.newsService.getAllNews().subscribe(data => {
      this.newsList = data;
    });
  }

  onDelete(id: number): void {
    if (confirm('Tem certeza que deseja apagar esta notícia?')) {
      this.newsService.deleteNews(id).subscribe({
        next: () => {
          this.newsList = this.newsList.filter(news => news.id !== id);
        },
        error: () => alert('Erro ao apagar notícia!')
      });
    }
  }

  onEdit(news: News): void {
    this.router.navigate(['/editar-noticia', news.id]);
  }
}
