import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { MatrixCodeComponent } from "./matrix-code/matrix-code.component";
import { ProfileComponent } from './services/model/ProfileComponent';
import { LanguageSelectorComponent } from "./navigation/language-selector/language-selector.component";
import { ScrollToTopComponent } from "./navigation/scroll-to-top/scroll-to-top.component";
import { LinkedInService } from './services/linkedin.service';
import { LocaleService } from './services/locale-service';
import { CvPageComponent } from "./pages/cv-page/cv-page.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterModule, CommonModule, MatrixCodeComponent, ProfileComponent, LanguageSelectorComponent, ScrollToTopComponent, CvPageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() language = '';
  showRussian: any;
  setLanguage(arg0: string) {
    this.language = arg0;
  }



}