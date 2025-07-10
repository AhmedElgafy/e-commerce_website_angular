import { Component, inject } from '@angular/core';
import { ButtonComp } from '../../../components/shared/UI/Button.component';
import ProductCard from '../../../components/shared/UI/productCard.component';
import { Product } from '../../../../typs/product';
import { APIsService } from '../../../services/apis.service';
import SectionCreator from '../../root/sectionCreator.component';

@Component({
  selector: 'app-top-selling',
  imports: [SectionCreator],
  templateUrl: './top-selling.component.html',
  styleUrl: './top-selling.component.css',
})
export class TopSellingComponent {
  private http = inject(APIsService);
  products: Product[] = [];
  getProducts() {
    this.http.getProducts<Product[]>('topSelling').subscribe({
      next: (values) => {
        this.products = values;
      },
      error(err) {
        console.log("can't get top selling products");
      },
    });
  }
  ngOnInit() {
    this.getProducts();
  }
}
