import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css'
})
export class LanguageSelectorComponent {
  @Output() languageChanged = new EventEmitter<string>();
  selectedLanguage = 'en_US';

  changeLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.languageChanged.emit(this.selectedLanguage);
  }

}
