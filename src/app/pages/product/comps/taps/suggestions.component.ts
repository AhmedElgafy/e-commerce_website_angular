import { Component, OnInit } from '@angular/core';
import ProductCard from '../../../../components/shared/UI/productCard.component';
import SectionCreator from '../../../root/sectionCreator.component';
import { Product } from '../../../../../typs/product';

@Component({
  selector: 'app-suggestions',
  template: `
    <!-- <h1 class="section-title uppercase">You might also like</h1> -->
    <app-section-creator
      title="You might also like"
      forMoreUrl=""
      [products]="products"
    />
  `,
  imports: [SectionCreator],
})
export class NameComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  products: Product[] = [
    {
      id: 1,
      name: "Men's Cotton T-Shirt",
      description: 'Soft and comfortable cotton t-shirt for men.',
      price: 19.99,
      category: 'men',
      size: ['S', 'M', 'L', 'XL'],
      color: ['black', 'white', 'blue'],
      image: '/images/products/product(5).png',
      stock: 50,
      rate: 4,
    },
    {
      id: 2,
      name: "Women's Denim Jacket",
      description: 'Trendy and durable denim jacket for women.',
      price: 49.99,
      category: 'women',
      size: ['S', 'M', 'L'],
      color: ['blue', 'black'],
      image: '/images/products/product(6).png',
      stock: 30,
      rate: 4,
    },
    {
      id: 3,
      name: 'Unisex Hoodie',
      description: 'Warm unisex hoodie with front pocket.',
      price: 39.99,
      category: 'unisex',
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: ['grey', 'black', 'green'],
      image: '/images/products/product(7).png',
      stock: 60,
      rate: 4,
    },
    {
      id: 4,
      name: 'Unisex Hoodie',
      description: 'Warm unisex hoodie with front pocket.',
      price: 39.99,
      category: 'unisex',
      size: ['S', 'M', 'L', 'XL', 'XXL'],
      color: ['grey', 'black', 'green'],
      image: '/images/products/product(1).png',
      stock: 60,
      rate: 4,
    },
  ];
}
