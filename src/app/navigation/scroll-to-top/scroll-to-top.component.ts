import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.css'
})
export class ScrollToTopComponent   
 {
  showScroll = false;

  constructor() { }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', ['$event'])
  checkScrollPosition() {
    const showScroll = window.scrollY >= 20;
    if (this.showScroll !== showScroll) {
      this.showScroll = showScroll;
    }
  }
}