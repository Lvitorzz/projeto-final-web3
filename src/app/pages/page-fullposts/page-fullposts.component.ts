import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/shared/header/header.component';
import { MenuComponent } from '../../components/shared/menu/menu.component';
import { NewsComponent } from '../../components/news/news/news.component';

@Component({
  selector: 'app-page-fullposts',
  standalone: true,
  imports: [
    HeaderComponent,
    MenuComponent,
    NewsComponent
  ],
  templateUrl: './page-fullposts.component.html',
  styleUrls: ['./page-fullposts.component.scss']
})
export class PageFullpostsComponent {}
