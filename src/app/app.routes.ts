import { Routes } from '@angular/router';
import { PageFullpostsComponent } from './pages/page-fullposts/page-fullposts.component';

import { ManageComponent } from './components/admin/manage/manage.component';
import { NewsDetailsComponent } from './components/news-details/news-details.component';
import { PageNewsDetailsComponent } from './pages/page-news-details/page-news-details.component';
import { NewsFormComponent } from './components/admin/form-news/form-news.component';

export const routes: Routes = [
  { path: '',          redirectTo: 'page_fullposts', pathMatch: 'full' },
  { path: 'page_fullposts',  component: PageFullpostsComponent },
  { path: 'cadastrar-noticia', component: NewsFormComponent },
  { path: 'editar-noticia/:id', component: NewsFormComponent },
  { path: 'gerenciar-noticias', component: ManageComponent },
  { path: 'noticias/:id', component: PageNewsDetailsComponent  },
  { path: '**',      redirectTo: 'page_fullposts' },
  
];
