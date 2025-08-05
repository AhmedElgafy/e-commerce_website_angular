import { Routes } from '@angular/router';
import { AppComponent } from './pages/root/app.component';
import { ProductsComponent } from './pages/products/products.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import HomeComponent from './pages/home/home.component';
import path from 'path';
import { ProductComponent } from './pages/product/product.component';
import { Category } from './pages/category/category.component';
import { CartComponent } from './pages/cart/cart.component';
import { RenderMode } from '@angular/ssr';

export const routes: Routes = [
  {
    title: 'Home',
    path: '',
    component: HomeComponent,
  },
  {
    title: 'Products',
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'products/:id',
    component: ProductComponent,
  },
  {
    title: 'Category',
    path: 'category',
    component: Category,
  },
  {
    title: 'Cart',
    path: 'cart',
    component: CartComponent,
  },
  {
    title: 'Not Found',
    path: '**',
    component: NotFoundComponent,
  },
];
