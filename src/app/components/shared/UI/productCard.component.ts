import { Component, Input } from '@angular/core';
import RateStars from './starRate.component';
import { Product } from '../../../../typs/product';

@Component({
  selector: 'product-card',
  imports: [RateStars],
  template: `<div class="w-[clamp(200px,20vw,295px)]">
    <img [src]="product.image" alt="" />
    <h1 class="text-[20px] font-[400]">{{ product.name }}</h1>
    <rate-stars [rate]="product.rate"></rate-stars>
    <h1 class="text-[24px] font-semibold">$ {{ product.price }}</h1>
  </div>`,
})
export default class ProductCard {
  // @Input({ required: true }) imageSrc: String = '';
  // @Input({ required: true }) name: String = '';
  // @Input({ required: true }) price: number = 0;
  // @Input({ required: true }) rate: number = 7;
  @Input({ required: true }) product!: Product;
}
