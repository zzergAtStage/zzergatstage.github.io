
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  getBrowserLocale(): string {
    console.log("Locale-service: " +  navigator.language || (navigator.languages && navigator.languages[0]) || 'en-US');
    return navigator.language || (navigator.languages && navigator.languages[0]) || 'en-US';
  }
}