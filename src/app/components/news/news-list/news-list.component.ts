import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { News } from '../../../models/news';
import { NewsCardComponent } from '../news-card/news-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [CommonModule, NewsCardComponent],
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent {
  @Input() newsList: News[] = [];
  @Input() managementMode = false;
  @Output() edit = new EventEmitter<News>();
  @Output() delete = new EventEmitter<number>();

  constructor(private router: Router) {}

  verDetalhes(id: number) {
  if (!this.managementMode) {
    console.log('teste' + id)
    this.router.navigate(['/noticias', id]);
  }
}
}
