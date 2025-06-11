import { Routes } from '@angular/router';
import { PageFullpostsComponent } from './pages/page-fullposts/page-fullposts.component';
import { FormNewsComponent } from './components/admin/form-news/form-news.component';
import { ManageComponent } from './components/admin/manage/manage.component';

export const routes: Routes = [
  { path: '',          redirectTo: 'page_fullposts', pathMatch: 'full' },
  { path: 'page_fullposts',  component: PageFullpostsComponent },
  { path: 'cadastrar-noticia', component: FormNewsComponent },
  { path: 'gerenciar_noticias', component: ManageComponent },
  { path: '**',      redirectTo: 'page_fullposts' },
  
];
