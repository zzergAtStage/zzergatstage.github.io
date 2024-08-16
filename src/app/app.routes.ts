import { Routes } from '@angular/router';
import { CvPageComponent } from './pages/cv-page/cv-page.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';



export const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'about', title: 'About', component: AboutComponent },
  { path: 'cv-static', title: 'static', component: CvPageComponent },
  { path: '**', title: '404', component: PageNotFoundComponent },
  

];
