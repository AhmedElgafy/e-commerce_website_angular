import { Component } from '@angular/core';
import { navItems } from './data';

@Component({
  selector: 'app-mobile-menu',
  template: `<section class="fixed w-full h-screen top-0 bg-white z-10">
    @for (item of navItems; track $index) {
    <div>
      <h1>{{ item.label }}</h1>
    </div>
    }
  </section>`,
})
export default class MobileMenu {
  navItems = navItems;
}
