import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MatrixCodeComponent } from "./matrix-code/matrix-code.component";
import { LanguageSelectorComponent } from "./navigation/language-selector/language-selector.component";
import { ScrollToTopComponent } from "./navigation/scroll-to-top/scroll-to-top.component";
import { CvPageComponent } from "./pages/cv-page/cv-page.component";
import { ProfileComponent } from './services/model/ProfileComponent';
import { LocaleService } from './services/locale-service';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterModule, CommonModule,
    MatrixCodeComponent, ProfileComponent, LanguageSelectorComponent, ScrollToTopComponent, CvPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private language: string = '';
  instaRef: any = 'https://www.instagram.com/the_aging_zzerg/';
  constructor(

    private localeService: LocaleService,
    private route: ActivatedRoute
  ) { }

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

}