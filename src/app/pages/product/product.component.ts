import { Component } from '@angular/core';
import ProductGallery from './productsGallery.component';

@Component({
  selector: 'app-product',
  imports: [ProductGallery],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {}
