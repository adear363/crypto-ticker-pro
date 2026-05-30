import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http'; // Tambahkan ini
import { provideIonicAngular } from '@ionic/angular/standalone';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(), // Tambahkan ini agar error HttpClient hilang
    provideIonicAngular(), // Ini yang membuat 'ion-list', 'ion-item', dll dikenal
  ]
}).catch((err) => console.error(err));