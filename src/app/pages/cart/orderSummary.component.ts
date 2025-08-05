import { Component, OnInit } from '@angular/core';
import { Divider } from 'primeng/divider';
import { SvgIconComponent } from '../../components/shared/UI/svgComp.component';

@Component({
  selector: 'app-order-summary',
  template: ` <div class="space-y-[24px]">
    <h1 class="text-[24px] font-semibold">Order Summary</h1>
    <div
      class="[&_div]:flex [&_div]:justify-between space-y-[20px] [&_*]:text-[20px] [&_h1]:text-black/60 [&_h2]:font-semibold"
    >
      <div>
        <h1>Subtotal</h1>
        <h2>$565</h2>
      </div>
      <div>
        <h1>Discount (-20%)</h1>
        <h2 class="text-red-600">-$113</h2>
      </div>
      <div>
        <h1>Delivery Fee</h1>
        <h2>$15</h2>
      </div>
      <p-divider />
      <div>
        <h3>Total</h3>
        <h2>$467</h2>
      </div>
    </div>
    <div class="flex gap-[12px]">
      <div
        class="w-full bg-[#F0F0F0] flex gap-[12px] items-center rounded-[62px] p-[12px_16px]"
      >
        <app-svg-icon icon="promo" [size]="24" />
        <input
          type="text"
          class="w-full placeholder:text-black/40 h-full outline-0"
          placeholder="Add promo code"
        />
      </div>
      <button class="flex-1/3 bg-black text-white p-[12px_16px] rounded-[62px]">
        Apply
      </button>
    </div>
    <button class="bg-black text-white w-full p-[16px_54px] rounded-[62px]">
      Go to checkout
    </button>
  </div>`,
  imports: [Divider, SvgIconComponent],
})
export class NameComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
