import { Component } from '@angular/core';
import { ButtonComp } from '../../../components/shared/UI/Button.component';
import { NumberCounter } from '../../../components/shared/UI/numberCounter.component';
import { DotSeparatorPipe } from '../../../uitls/pips/format-with-dot-separator.pipe';
import { SvgIconComponent } from '../../../components/shared/UI/svgComp.component';

@Component({
  selector: 'app-hero-section',
  imports: [ButtonComp, DotSeparatorPipe, SvgIconComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {
  statisticsData: { number: number; about: string }[] = [
    {
      number: 200,
      about: 'International Brands',
    },
    {
      number: 2000,
      about: 'High-Quality Products',
    },
    {
      number: 30000,
      about: 'Happy Customers',
    },
  ];
}
