import { Component, inject, ViewEncapsulation } from '@angular/core';
import { APIsService } from '../../../services/apis.service';
import { Product } from '../../../../typs/product';
import { cn } from '../../../uitls/functions';
import { ClassNameValue } from 'tailwind-merge';
import ProductCard from '../../../components/shared/UI/productCard.component';
import { ButtonComp } from '../../../components/shared/UI/Button.component';
import SectionCreator from '../../root/sectionCreator.component';

@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [SectionCreator],
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.css',
})
export class NewArrivalsComponent {
  private http3 = inject(APIsService);
  products: Product[] = [];
  doSomeThink() {
    return this.http3.getProducts<Product[]>('newArrivals').subscribe({
      next: (value) => {
        this.products = value;
      },
      error: (err) => {
        console.log('this are an error');
      },
    });
  }
  cn(...inputs: ClassNameValue[]) {
    return cn(...inputs);
  }
  ngOnInit() {
    try {
      this.doSomeThink();
    } catch {
      console.log('there are an error ');
    }
  }
}
