import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import mockData from '../../assets/mock-data.json';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  private mockData = mockData;
  
  constructor() { }

  getProfileData(): Observable<any> {
    return of(this.mockData);
  }
}
