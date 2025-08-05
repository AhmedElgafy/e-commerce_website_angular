import { SvgIconComponent } from './../../components/shared/UI/svgComp.component';
import { Component, input, OnInit } from '@angular/core';
import { CartItemI } from '../../../typs/cartItem';
import Counter from '../../components/shared/UI/counter.component';

@Component({
  selector: 'app-cart-item',
  template: `<div class="flex gap-[16px] ">
    <div class="w-[124px]   object-cover">
      <img [src]="cartItem().img" alt="" />
    </div>
    <div class="w-full space-y-[16px] flex justify-between">
      <div>
        <div class="[&_p]:text-black/60 [&_p]:text-[14px]">
          <h1 class="text-[20px] font-semibold">{{ cartItem().name }}</h1>
          <p>Size: {{ cartItem().size }}</p>
          <p>Color: {{ cartItem().color }}</p>
        </div>
        <p class="text-[24px] font-semibold">{{ '$' + cartItem().price }}</p>
      </div>
      <div class="flex flex-col justify-between items-end">
        <app-svg-icon icon="bin" [size]="24" />
        <app-counter />
      </div>
    </div>
  </div>`,
  imports: [SvgIconComponent, Counter],
})
export class CartItem implements OnInit {
  cartItem = input<CartItemI>({
    color: 'White',
    count: 1,
    id: 2,
    img: 'https://dummyimage.com/1000',
    name: 'Gradient Graphic T-shirt',
    price: 213,
    size: 'Large',
  });

  constructor() {}
  ngOnInit() {}
}
