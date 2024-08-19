import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MatrixCodeComponent } from "./matrix-code/matrix-code.component";
import { LanguageSelectorComponent } from "./navigation/language-selector/language-selector.component";
import { ScrollToTopComponent } from "./navigation/scroll-to-top/scroll-to-top.component";
import { CvPageComponent } from "./pages/cv-page/cv-page.component";
import { LocaleService } from './services/locale-service';
import { ProfileComponent } from './services/model/ProfileComponent';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { NavbarComponent } from "./navigation/navbar/navbar.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterModule, CommonModule,
    MatrixCodeComponent, ProfileComponent, LanguageSelectorComponent, ScrollToTopComponent, CvPageComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'cv-website';

  private language: string = '';
  instagramRef: any = 'https://www.instagram.com/the_aging_zzerg/';
  githubRef: any = 'https://github.com/zzergAtStage';
  linkedInRef: any = 'https://www.linkedin.com/in/undefined-errors-handler/';
  constructor(

    private localeService: LocaleService,
    private route: ActivatedRoute
  ) { }

  // Add listener to re-calculate --app-height whenever the window is resized.
  resizeObservable$: Observable<Event> = fromEvent(window, 'resize');
  resizeSubscription$: Subscription = this.resizeObservable$.subscribe(
    (evt) => {
      this.calculateAppHeight();
    }
  );

  ngOnInit() {
    //TODO: handle query params
    const locale = this.localeService.getBrowserLocale();
    this.showRussian = locale === 'ru-RU';
  }


  showRussian: any;
  setLanguage(_language: string) {
    this.language = _language;
    this.localeService.changeLanguage(_language);
  }
  ngAfterViewInit() {
    this.calculateAppHeight();
  }

  calculateAppHeight() {
    const body = document.querySelector('body');
    if (body) {
      body.style.setProperty('--app-height', `${window.innerHeight}px`);
    }
  }

}