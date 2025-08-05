import { Component, OnInit } from '@angular/core';
import { CartItem } from './cartItem.component';
import { Divider } from 'primeng/divider';
import { SvgIconComponent } from '../../components/shared/UI/svgComp.component';
import { NameComponent } from './orderSummary.component';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  imports: [CartItem, Divider, NameComponent],
})
export class CartComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
