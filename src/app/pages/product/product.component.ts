import { Component } from '@angular/core';
import ProductTabs from './comps/taps/taps.component';
import { ProductHeroSecComponent } from './comps/heroSec.component';
import { NameComponent } from "./comps/taps/suggestions.component";

@Component({
  selector: 'app-product',
  imports: [ProductHeroSecComponent, ProductTabs, NameComponent],

  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {}
