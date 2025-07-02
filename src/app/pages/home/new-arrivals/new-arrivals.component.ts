import { Component, inject, ViewEncapsulation } from '@angular/core';
import { APIsService } from '../../../services/apis.service';
import { Product } from '../../../../typs/product';

@Component({
  selector: 'app-new-arrivals',
  imports: [],
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.css',
  encapsulation: ViewEncapsulation.None
  
})
export class NewArrivalsComponent {
  private http3 = inject(APIsService);
  products: Product[] = [];
  doSomeThink() {
    return this.http3.getNewArrivals().subscribe({
      next: (value) => {
        this.products = value;
      },
      error: (err) => {
        console.log('this are an error');
      },
    });
  }
  ngOnInit() {
    try {
      this.doSomeThink();
    } catch {
      console.log('there are an error ');
    }
  }
}
