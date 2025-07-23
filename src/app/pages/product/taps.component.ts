import { Component, signal } from '@angular/core';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-product-taps',
  imports: [TabsModule],
  template: `<section>
    <div>
      
    </div>
  </section>`,
})
export default class ProductTabs {
  curTap = signal<number>(0);
  setCurTap(n: number) {
    this.curTap.set(n);
  }
}
