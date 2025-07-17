import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { TopSellingComponent } from './top-selling/top-selling.component';
import { StylesComponent } from './styles/styles.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';

@Component({
  imports: [
    HeroSectionComponent,
    NewArrivalsComponent,
    TopSellingComponent,
    StylesComponent,
    ReviewsComponent,
    ButtonModule,
    CarouselModule,
  ],
  template: `<app-hero-section></app-hero-section>
    <div class="mx-[16px] md:mx-[100px]">
      <app-new-arrivals></app-new-arrivals>
      <div class="w-[80%] h-[1px] bg-black/10 mx-auto"></div>
      <app-top-selling></app-top-selling>
      <app-styles></app-styles>
      <app-reviews></app-reviews>
    </div> `,
})
export default class HomeComponent {}
