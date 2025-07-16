import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { News } from '../../../models/news';
import { NewsService } from '../../../services/news.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-news',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-news.component.html',
  styleUrls: ['./form-news.component.scss'],
})
export class NewsFormComponent implements OnInit {
  form: FormGroup;
  editing = false;
  newsId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private newsService: NewsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      tags: ['', Validators.required],
      coverImageUrl: ['', Validators.required]
    });
  }

  get title() { return this.form.get('title'); }
  get content() { return this.form.get('content'); }
  get tags() { return this.form.get('tags'); }
  get coverImageUrl() { return this.form.get('coverImageUrl'); }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.editing = true;
        this.newsId = +idParam;
        this.loadNews(this.newsId);
      }
    });
  }

  loadNews(id: number) {
    this.newsService.getNewsById(id).subscribe(news => {
      this.form.patchValue({
        title: news.title,
        content: news.content,
        tags: news.tags.join(', '),
        coverImageUrl: news.coverImageUrl
      });
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const tagsArray = this.form.value.tags.split(',')
      .map((t: string) => t.trim())
      .filter((t: string) => !!t);

    const news: News = {
      title: this.form.value.title,
      content: this.form.value.content,
      tags: tagsArray,
      coverImageUrl: this.form.value.coverImageUrl,
      date: new Date()
    };

    if (this.editing && this.newsId) {
      this.newsService.updateNews(this.newsId, news).subscribe({
        next: () => this.router.navigate(['/news']),
        error: () => alert('Erro ao editar notícia!')
      });
    } else {
      this.newsService.createNews(news).subscribe({
        next: () => this.router.navigate(['/news']),
        error: () => alert('Erro ao cadastrar notícia!')
      });
    }
  }
}
