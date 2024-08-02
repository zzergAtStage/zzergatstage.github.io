import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatrixCodeComponent } from "./matrix-code/matrix-code.component";
import { ProfileComponent } from './services/model/ProfileComponent';
import { LanguageSelectorComponent } from "./navigation/language-selector/language-selector.component";
import { ScrollToTopComponent } from "./navigation/scroll-to-top/scroll-to-top.component";
import { LinkedInService } from './services/linkedin.service';
import { LocaleService } from './services/locale-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatrixCodeComponent, ProfileComponent, LanguageSelectorComponent, ScrollToTopComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isSticky: boolean = false;
  currentLanguage: string = 'en_US';
  windowScrolled: boolean = false;

  showRusskiy: boolean = false;

  constructor(private linkedInProfiler: LinkedInService,private localeService: LocaleService) { }


  ngOnInit() {
    const locale = this.localeService.getBrowserLocale();
    this.showRusskiy = locale === 'ru-RU';
  }
  //scrolling sections
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const section1 = document.getElementById('section1');
    const section1Rect = section1?.getBoundingClientRect();
    if (section1Rect) {
      this.isSticky = section1Rect.top <= 0;
      this.updateContentVisibility(section1Rect.bottom);
    }

    if (window.scrollY || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.scrollY || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }

  setLanguage(language: string): void {
    this.currentLanguage = language;
  }
  scrollToTop(): void {
    // scroll to the top of the body
    return document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
  updateContentVisibility(section1Bottom: number): void {
    const sections = document.querySelectorAll('.section');
   
    sections.forEach((section, index) => {
      if (index === 0) return; // Skip the first section

      const content = section.querySelector('.content');
      if (content) {
        const contentRect = content.getBoundingClientRect();
        if (contentRect.top < section1Bottom) {
          content.classList.add('hidden-content');
          content.classList.remove('visible-content');
        } else {
          content.classList.add('visible-content');
          content.classList.remove('hidden-content');
        }
      }
    });
  }
}