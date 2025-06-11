import { Component, Input } from '@angular/core';
import { News } from '../../../models/news';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent {
  @Input() newsItem!: News;
}
