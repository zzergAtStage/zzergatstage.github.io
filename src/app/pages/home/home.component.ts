import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../../services/personal.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  profileData: any;

  constructor(private personalService: PersonalService) {}
  ngOnInit(): void {
    this.fetchProfileData();
  }
  fetchProfileData(): void {
    this.personalService.getProfileData().subscribe(data => {
      this.profileData = data;
    });
  }
}
