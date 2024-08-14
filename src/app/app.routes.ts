import { Routes } from '@angular/router';
import { CvPageComponent } from './pages/cv-page/cv-page.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';



export const routes: Routes = [
  { path: '',  component: AppComponent },
  { path: 'cv', title: 'CV', component: CvPageComponent },
  { path: 'cv-static', title: 'static', component: CvPageComponent },
  { path: '**', title: '404', component: PageNotFoundComponent },
  

];
