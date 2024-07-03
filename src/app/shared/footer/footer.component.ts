import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  private lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const button = document.querySelector('.back-to-top') as HTMLElement;
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Determine if scrolling up or down
    const isScrollingDown = scrollPosition > this.lastScrollTop;
    this.lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition; // For Mobile or negative scrolling

    if (scrollPosition > 300 && (scrollPosition + windowHeight) < documentHeight - 100) {
      if (isScrollingDown) {
        button.classList.remove('show');
      } else {
        button.classList.add('show');
      }
    } else {
      button.classList.remove('show');
    }
  }

  scrollToTop(event: Event) {
    event.preventDefault(); // Prevent the default action of the anchor tag
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}