import { Component, Input } from '@angular/core';
import RateStars from './starRate.component';
import { Product } from '../../../../typs/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'product-card',
  imports: [RateStars, RouterLink],
  template: `<a
    routerLink="/products/123"
    class="w-[clamp(200px,20vw,295px)] object-cover"
  >
    <img [src]="product.image" alt="" class="rounded-[20px]" />
    <h1 class="text-[20px] font-[400]">{{ product.name }}</h1>
    <rate-stars [rate]="product.rate"></rate-stars>
    <h1 class="text-[24px] font-semibold">$ {{ product.price }}</h1>
  </a>`,
})
export default class ProductCard {
  @Input({ required: true }) product!: Product;
}
