import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LinkedInService } from '../linkedin.service';
import { CommonModule } from '@angular/common';
import { LanguageSelectorComponent } from '../../navigation/language-selector/language-selector.component';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [CommonModule, LanguageSelectorComponent],
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit, OnChanges {
    @Input() language: string = 'en_US';
    profileData: any;
    localizedProfile: any = {};
  
    constructor(private linkedInService: LinkedInService) { }
  
    ngOnInit(): void {
      this.fetchProfileData();
    }
  
    ngOnChanges(changes: SimpleChanges): void {
      console.log('changes: ' + changes['language'].currentValue + " " + typeof changes);
      if (changes['language']) {
        this.localizeProfileData();
      }
    }
  
    fetchProfileData(): void {
      this.linkedInService.getProfileData().subscribe(data => {
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
  }