import { Component, Input } from '@angular/core';
import { SvgIconComponent } from '../../../components/shared/UI/svgComp.component';
import RateStars from '../../../components/shared/UI/starRate.component';
import ReviewI from '../../../../typs/reivew';

@Component({
  selector: 'app-review-card',
  imports: [RateStars, SvgIconComponent],
  template: ` <div
    class="p-[28px_32px] flex flex-col  justify-center gap-[10px] border-[1px] border-[#000000]/10 rounded-[20px] w-[400px] h-[240px]"
  >
    <div>
      <rate-stars [rate]="review.rate"></rate-stars>
    </div>
    <div class="flex items-center gap-[6.25px]">
      <h1 class="font-semibold text-[20dp]">{{ review.name }}</h1>
      <app-svg-icon icon="verify" [size]="18"></app-svg-icon>
    </div>
    <p class="text-[#000000]/60 text-[16dp]">"{{ review.message }}”</p>
  </div>`,
})
export default class ReviewCard {
  @Input({ required: true }) review!: ReviewI;
}
