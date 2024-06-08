import { Component, AfterViewInit, ViewChild, ElementRef,}  from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule } from '@angular/router'; // Import RouterModule
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Ensure this is set if using standalone components
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent] // Include CommonModule, RouterModule, headercomponent and footercomponent in the imports array
})
export class AppComponent implements AfterViewInit {
  @ViewChild('spinnerElement', { static: true }) spinnerElement!: ElementRef;
  title = 'Olakanmi';
  loader: boolean =true; // Define the loader property

  constructor(){
    setTimeout(() => {
      // Hide the spinner after 4 seconds
      this.loader = false;
    }, 4000);
  }

  ngAfterViewInit(): void {
    $(document).ready(() => {
        $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<', '>'], // Set custom navigation text
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
      });
    });
  }
}