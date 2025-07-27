import { Component, DoCheck, signal } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import Taps from '../../../../components/shared/UI/taps.component';
import { Option } from '../../../../../typs/choices';
import ReviewTap from './reviews.component';

@Component({
  selector: 'app-product-taps',
  imports: [TabsModule, Taps, ReviewTap],
  template: `<section>
    <app-tabs
      [taps]="taps"
      [defaultActiveTap]="2"
      (onActiveChange)="onActiveChange($event)"
    />
    @if (activeTap()==2) {
    <app-reviews-tap />
    }
  </section>`,
})
export default class ProductTabs {
  curTap = signal<number>(0);
  setCurTap(n: number) {
    this.curTap.set(n);
  }
  taps: Option[] = [
    { label: 'Product Details', value: 1 },
    { label: 'Rating & Reviews', value: 2 },
    { label: 'FAQs', value: 3 },
  ];
  activeTap = signal<number>(1);
  onActiveChange(n: number) {
    this.activeTap.set(n);
  }
}
