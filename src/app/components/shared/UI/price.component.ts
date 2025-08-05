import { Component, input, computed, signal, effect } from '@angular/core';
@Component({
  selector: 'app-priceComp',
  imports: [],
  template: `<div class="flex gap-[12px] items-center">
    <h1 class="text-[32px] font-[500]">{{ '$' + finalPrice }}</h1>
    @if(discountP()){
    <h1 class="text-[32px] font-[500] opacity-30 line-through">
      {{ '$' + oldPrice() }}
    </h1>
    <div
      class="text-red-500 text-[16px] bg-red-600/10 rounded-2xl  flex h-fit items-center p-[6px_14px] justify-center "
    >
      {{ -(discountP() * 100) + '%' }}
    </div>
    }
  </div>`,
})
export default class PriceUI {
  price = input<number>(0);
  discountP = input<number>(0);
  oldPrice = signal<number>(0);
  finalPrice = 0;
  constructor() {
    effect(() => {
      if (this.discountP()) {
        this.oldPrice.set(this.price());
        this.finalPrice = this.price() - this.discountP() * this.price();
        return;
      }
      this.finalPrice = this.price();
      return;
    });
  }
}
