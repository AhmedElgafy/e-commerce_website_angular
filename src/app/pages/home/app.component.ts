import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/shared/header/header.component';
import { FooterComponent } from '../../components/shared/footer/footer.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    NewArrivalsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'e-commerce_website';
}
