import { Component, Input } from '@angular/core';
import { Product } from '../../../typs/product';
import { ButtonComp } from '../../components/shared/UI/Button.component';
import ProductCard from '../../components/shared/UI/productCard.component';
import { CnPipe } from '../../uitls/pips/cn.pipe';

@Component({
  selector: 'app-section-creator',
  imports: [ProductCard, ButtonComp,CnPipe],
  template: `<section>
    <h1 [class]="['section-title','text-[clamp(32px,5vw,48px)]']|cn">{{ title }}</h1>
    <div
      style="scrollbar-width: none;"
      class="flex max-w-full md:justify-center max-md:px-[16px] gap-[20px] overflow-x-scroll"
    >
      @for (product of products; track $index) {
      <product-card [product]="product"></product-card>
      }
    </div>
    <button-comp
      class="text-black mx-auto bg-white mt-[31px] border-black/10 border-[1px] hover:text-white hover:bg-black"
      text="View All"
    ></button-comp>
  </section> `,
})
export default class SectionCreator {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) products!: Product[];
  @Input({ required: true }) forMoreUrl!: string;
}
