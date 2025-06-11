import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { News } from '../../../models/news';

@Component({
  selector: 'app-form-news',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-news.component.html',
  styleUrls: ['./form-news.component.scss'],
})
export class FormNewsComponent implements OnInit {
  form!: FormGroup;
  coverPreviewUrl: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
      tags: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
  }

  get title() {
    return this.form.get('title')!;
  }
  get content() {
    return this.form.get('content')!;
  }
  get tags() {
    return this.form.get('tags')!;
  }
  get date() {
    return this.form.get('date')!;
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;
    const file = input.files[0];
    this.selectedFile = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.coverPreviewUrl = reader.result;
    };
    reader.readAsDataURL(file);
  }

  onSubmit(): void {
    if (this.form.invalid || !this.selectedFile) {
      this.form.markAllAsTouched();
      return;
    }

    const tagsArray = (this.tags.value as string)
      .split(',')
      .map(t => t.trim())
      .filter(t => t);

    const news: News = {
      title: this.title.value,
      content: this.content.value,
      tags: tagsArray,
      date: new Date(this.date.value),
      coverImageUrl: this.coverPreviewUrl as string
    };

    console.log(news, this.selectedFile);
  }
}
