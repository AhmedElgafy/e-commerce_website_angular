import { Component, inject, OnInit, viewChild, DoCheck } from '@angular/core';
import { APIsService } from '../../../services/apis.service';
import ReviewI from '../../../../typs/reivew';
import ReviewCard from './reviewCard.component';
import { SvgIconComponent } from '../../../components/shared/UI/svgComp.component';
import {
  Carousel,
  CarouselModule,
  CarouselResponsiveOptions,
} from 'primeng/carousel';
import { CnPipe } from '../../../uitls/pips/cn.pipe';
import { products } from './data';

@Component({
  selector: 'app-reviews',
  imports: [ReviewCard, SvgIconComponent, CarouselModule, CnPipe],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
})
export class ReviewsComponent implements OnInit {
  private http = inject(APIsService);
  reviews: ReviewI[] = [];
  isBtnDisabled: { next: boolean; prev: boolean } = {
    next: false,
    prev: true,
  };

  carousel = viewChild<Carousel>('Carousel');
  products: { name: string }[] = products;
  responsiveOptions: CarouselResponsiveOptions[] | undefined;
  getReviews() {
    this.http.getProducts<ReviewI[]>('reviews').subscribe({
      next: (value) => {
        this.reviews = value;
      },
      error(err) {
        console.log(`something wrong : ${err}`);
      },
    });
  }

  getButton(className: string): HTMLButtonElement | null {
    const ele = this.carousel();
    const button = (ele?.el.nativeElement as HTMLElement).querySelector(
      className
    );
    return button as HTMLButtonElement;
  }
  goNext() {
    this.getButton('.p-carousel-next-button')?.click();

    this.isBtnDisabled = {
      prev: false,
      next:
        this.getButton('.p-carousel-next-button')?.getAttribute(
          'ng-reflect-disabled'
        ) == 'true',
    };
  }
  goPrev() {
    this.getButton('.p-carousel-prev-button')?.click();
    this.isBtnDisabled = {
      next: false,
      prev:
        this.getButton('.p-carousel-prev-button')?.getAttribute(
          'ng-reflect-disabled'
        ) == 'true',
    };
  }
  ngOnInit() {
    this.getReviews();
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
