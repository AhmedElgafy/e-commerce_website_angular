import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../../typs/product';

@Injectable({ providedIn: 'root' })
export class APIsService {
  private baseUrl = 'http://localhost:3001/';
  private http = inject(HttpClient);
  getProducts<T>(url: string) {
    return this.http.get<T>(this.baseUrl + url);
  }
}
