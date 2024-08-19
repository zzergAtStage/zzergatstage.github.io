import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LanguageSelectorComponent } from '../../navigation/language-selector/language-selector.component';
import { Subscription } from 'rxjs';
import { PersonalService } from '../../services/personal.service';
import { LocaleService } from '../../services/locale-service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LanguageSelectorComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit, OnChanges {
  @Input() language: string = 'en_US';
  profileData: any;
  localizedProfile: any = {};
  languageSubscription: Subscription | undefined;
  showRussian: boolean = false;

  constructor(private personalService: PersonalService,
    private localeService: LocaleService
  ) { }

  ngOnInit(): void {
    this.languageSubscription = this.localeService.currentLanguage.subscribe(language => {
      this.language = language;
      this.localizeProfileData();
    });
    this.fetchProfileData();
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes: ' + changes['language'].currentValue + " " + typeof changes);
    if (changes['language']) {
      this.localizeProfileData();
    }
  }

  fetchProfileData(): void {
    this.personalService.getProfileData().subscribe(data => {
      this.profileData = data;
      this.localizeProfileData();
    });
  }

  localizeProfileData(): void {
    if (this.profileData) {
      this.localizedProfile = {
        firstName: this.profileData.firstName.localized[this.language] || this.profileData.localizedFirstName,
        lastName: this.profileData.lastName.localized[this.language] || this.profileData.localizedLastName,
        headline: this.profileData.headline.localized[this.language] || this.profileData.localizedHeadline,
        about: this.profileData.about.localized[this.language] || this.profileData.localizedAbout,
        vanityName: this.profileData.vanityName,
        id: this.profileData.id,
        profilePicture: this.profileData.profilePicture
      };
    }
  }

  getProfilePictureUrl(displayImage: string): string {
    return `https://media.licdn.com/dms/image/D4E03AQHPXUwJ5IL2EQ/profile-displayphoto-shrink_200_200/0/1664734367985?e=1727913600&v=beta&t=Y4PKUNd1Yro-T1oiRakGUCjBysu7WeQF3iHNry-wbeA`;
  }

  setLanguage(_language: string) {
    console.log("About.component: .setlanguage = " + _language);
    this.language = _language;
    this.localeService.changeLanguage(_language);
  }
}