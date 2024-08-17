import { Routes } from '@angular/router';
import { CvPageComponent } from './pages/cv-page/cv-page.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ProjectsComponent } from './pages/projects/projects.component';



export const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'about', title: 'About', component: AboutComponent },
  { path: 'contacts', title: 'Contacts', component: ContactsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', title: 'Not found 404', component: PageNotFoundComponent },
  

];
