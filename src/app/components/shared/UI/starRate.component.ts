import { Component, Input } from '@angular/core';

@Component({
  selector: 'rate-stars',
  standalone: true,
  template: `<div class="flex items-center gap-1">
    <div
      class="w-[90px] h-[1rem]"
      style="mask-image: url(/assets/icons/starRate.svg);"
    >
      <div
        [style]="'width: ' + getRate() + ' ;'"
        class=" bg-amber-600 w-[50%] h-[1rem]"
      ></div>
    </div>
    <p>{{ rate }}/{{ baseRate }}</p>
  </div> `,
})
export default class RateStars {
  @Input({ required: true }) rate: number = 0;
  baseRate: number = 5;
  getRate() {
    return `${(this.rate / 5) * 100}%`;
  }
}
