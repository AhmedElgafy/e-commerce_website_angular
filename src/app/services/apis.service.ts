import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../../typs/product';

@Injectable({ providedIn: 'root' })
export class APIsService {
  private baseUrl = 'http://localhost:3000/';
  private http = inject(HttpClient);
  getNewArrivals() {
    return this.http.get<Product[]>(this.baseUrl + 'newArrivals');
  }
}
