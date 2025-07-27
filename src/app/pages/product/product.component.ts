import { Component } from '@angular/core';
import ProductTabs from './comps/taps/taps.component';
import { ProductHeroSecComponent } from './comps/heroSec.component';

@Component({
  selector: 'app-product',
  imports: [ProductHeroSecComponent, ProductTabs],

  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {}
