import { navItem } from './../../../../typs/navBar';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  signal,
  ElementRef,
  viewChild,
} from '@angular/core';
import { navItems } from './data';
import { SvgIconComponent } from '../UI/svgComp.component';
import { CnPipe } from '../../../uitls/pips/cn.pipe';

@Component({
  selector: 'app-mobile-menu',
  imports: [SvgIconComponent, CnPipe],
  styleUrl: './header.component.css',
  template: `<section
    #section
    [class]="
      [
        'fixed w-full openPhoneMenu gap-[25px] h-screen top-0 bg-white z-10 flex p-[20px] flex-col',
        !open() && 'hidden'
      ] | cn
    "
  >
    <div class="flex justify-between items-center">
      <h1 class="text-[20px] font-bold ">Menu</h1>
      <app-svg-icon
        (click)="toggleNav()"
        icon="exit"
        class="cursor-pointer hover:stroke-2"
        [size]="16"
      ></app-svg-icon>
    </div>
    <div class="w-full h-[1px] bg-black/20"></div>
    @for (item of navItems; track $index) {
    <div
      class="hover:translate-x-3 hover:text-black hover:font-bold relative transition-transform cursor-pointer duration-300"
    >
      <h1 class="text-black/60 text-[16px]">{{ item.label }}</h1>
    </div>
    }
  </section>`,
})
export default class MobileMenu {
  navItems = navItems;
  section = viewChild<ElementRef<HTMLButtonElement>>('section');
  open = signal<boolean>(false);
  toggleNav() {
    if (this.open()) {
      this.section()?.nativeElement.classList.add('closePhoneMenu');
      setTimeout(() => {
        this.section()?.nativeElement.classList.remove('closePhoneMenu');
        this.open.set(!this.open());
      }, 900);
    } else {
      this.open.set(!this.open());
    }
  }
}
