import {
  Component,
  inject,
  ElementRef,
  viewChild,
  ViewChild,
  AfterViewInit,
  signal,
} from '@angular/core';
import { cn } from '../../../uitls/functions';
import { ClassNameValue } from 'tailwind-merge';
import { APIsService } from '../../../services/apis.service';
import ReviewI from '../../../../typs/reivew';
import ReviewCard from './reviewCard.component';
import { SvgIconComponent } from '../../../components/shared/UI/svgComp.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-reviews',
  imports: [ReviewCard, SvgIconComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
})
export class ReviewsComponent implements AfterViewInit {
  private http = inject(APIsService);
  // saveButton = viewChild<ElementRef<HTMLElement>>('reviewCard');
  @ViewChild('reviewCard') myDiv!: ElementRef<HTMLDivElement>;
  reviews: ReviewI[] = [];
  doc = inject(DOCUMENT);
  divEls = viewChild<ElementRef<HTMLElement>>('reviewCard');
  curIndex = signal<number>(0);
  // @ViewChildren('reviewCard') refii!: QueryList<ElementRef>;
  ngAfterViewInit(): void {
    // console.log(this.doc.getElementById('review-3'));
    console.log(this.divEls()?.nativeElement.querySelector('#review-3'));
  }
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
  cn(...inputs: ClassNameValue[]) {
    return cn(inputs);
  }

  goNext() {
    // this.doc.getElementById('review-5')?.scrollIntoView({ behavior: 'smooth' });
    this.divEls()
      ?.nativeElement.querySelectorAll('#review')
      .forEach((ele) => {
        console.log(ele.getClientRects().item(0));
      });
  }

  ngOnInit() {
    this.goNext();
    this.getReviews();
  }
}
