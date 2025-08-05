import { Component, OnInit, signal } from '@angular/core';
import { Product } from '../../../typs/product';
import { Products } from './data';
import ProductCard from '../../components/shared/UI/productCard.component';
import { Filter } from './filter.component';
import { SvgIconComponent } from '../../components/shared/UI/svgComp.component';
import { CnPipe } from '../../uitls/pips/cn.pipe';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  imports: [ProductCard, Filter, SvgIconComponent, CnPipe],
})
export class Category implements OnInit {
  constructor() {}

  ngOnInit() {}
  products: Product[] = Products;
  showFilter = signal<boolean>(false);
  setShowFilter(value: boolean) {
    this.showFilter.set(value);
  }
  clickOut(ev: MouseEvent) {
    const ele = ev.target as HTMLDivElement;
    if (ele?.id == 'outClick') {
      this.setShowFilter(false);
    }
  }
}
