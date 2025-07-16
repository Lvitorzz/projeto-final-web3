import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter }        from '@angular/router';
import { provideHttpClient }    from '@angular/common/http';
import { AppComponent }         from './app/app.component';
import { routes }               from './app/app.routes';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    { provide: 'LOCALE_ID', useValue: 'pt-BR' }
  ]
});
