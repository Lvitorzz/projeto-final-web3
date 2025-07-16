import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/shared/header/header.component";
import { MenuComponent } from "../../components/shared/menu/menu.component";
import { NewsDetailsComponent } from "../../components/news-details/news-details.component";
import { MoreNewsComponent } from "../../components/news/more-news/more-news.component";

@Component({
  selector: 'app-page-news-details',
  standalone: true,
  imports: [HeaderComponent, MenuComponent, NewsDetailsComponent, MoreNewsComponent],
  templateUrl: './page-news-details.component.html',
  styleUrl: './page-news-details.component.css'
})
export class PageNewsDetailsComponent {

}
