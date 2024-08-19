import { Component, HostListener, OnInit } from '@angular/core';
import { PersonalService } from '../../services/personal.service';
import { LocaleService } from '../../services/locale-service';
import { ActivatedRoute } from '@angular/router';
import { ProfileComponent } from '../../services/model/ProfileComponent';

@Component({
  selector: 'app-cv-page',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './cv-page.component.html',
  styleUrl: './cv-page.component.css'
})
export class CvPageComponent implements OnInit {
  isSticky: boolean = false;
  currentLanguage: string = 'en_US';
  jobCode: string | null = null;
  windowScrolled: boolean = false;
  queryParams: { [key: string]: any } = {};
  showRussian: boolean = false;

  constructor(private linkedInProfiler: PersonalService,
    private localeService: LocaleService,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    console.log("Full route snapshot:", this.route.snapshot);
    this.route.queryParams.subscribe(params => {
      console.log("Query Parameters:", params);
    });

    this.route.params.subscribe(params => {
      console.log("Route Parameters:", params);
    });

    this.route.data.subscribe(data => {
      console.log("Route Data:", data);
    });
    this.route.queryParams.subscribe(params => {
      this.queryParams = params;
      this.handleQueryParams(this.queryParams);
    });
    const locale = this.localeService.getBrowserLocale();
    console.log("End of init: " + locale, "# " + this.jobCode + " #" + this.currentLanguage);
    this.showRussian = locale === 'ru-RU';

  }

  /**
   * default query params processing
   * @param params [key: string]: any
   * Default expected query: http://localhost:4200/?lang=de&job-code=wer
   */
  handleQueryParams(params: { [key: string]: any }): void {
    for (const key in params) {
      console.log(` query parameter: ${key} = ${params[key]}`);
      if (params.hasOwnProperty(key)) {
        switch (key) {
          case 'lang':
            this.setLanguage(params[key]);
            break;
          case 'jobCode':
            this.jobCode = params[key];
            break;
          // Handle other parameters as needed
          default:
            console.log(`Unhandled query parameter: ${key} = ${params[key]}`);
            break;
        }
      }
    }
  }

  //scrolling sections
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const section1 = document.getElementById('section1');
    const section1Rect = section1?.getBoundingClientRect();
    if (section1Rect) {
      this.isSticky = section1Rect.bottom <= 0;
      this.updateContentVisibility(section1Rect.top - 10);
    }

    if (window.scrollY || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.scrollY || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }



  setLanguage(language: string): void {
    this.localeService.getLocaleMap().subscribe(data => {
      if (data && data.localeShorted && data.localeShorted.hasOwnProperty(language)) {
        const localeShorted = data.localeShorted[language];
        console.log(localeShorted); // for debugging purposes
        this.currentLanguage = localeShorted;
      } else {
        console.error("unsupported language param: " + language);
      }
    });
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
      const contentId = section.id;
      if (content) {
        const contentRect = content.getBoundingClientRect();
        console.log(" cv-page.updateContentVisibility: (" + contentId + ") "  + contentRect.bottom );
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
