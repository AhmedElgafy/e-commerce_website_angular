import { Routes } from '@angular/router';
import { AppComponent } from './pages/root/app.component';
import { ProductsComponent } from './pages/products/products.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import HomeComponent from './pages/home/home.component';
import path from 'path';
import { ProductComponent } from './pages/product/product.component';

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
    title: 'Not Found',
    path: '**',
    component: NotFoundComponent,
  },
];
