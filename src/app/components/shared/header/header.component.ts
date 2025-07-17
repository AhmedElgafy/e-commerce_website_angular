import { Component, computed, signal, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SvgIconComponent } from '../UI/svgComp.component';
import MobileMenu from './menu.component';
import { navItems } from './data';

interface navItem {
  label: string;
  href: string;
  type: 'direct';
}
interface nevItemSelect {
  label: string;
  type: 'select';
  options: navItem[];
}
@Component({
  selector: 'app-header',
  imports: [RouterLink, MobileMenu, SvgIconComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  navItems = navItems;
  showOptions = signal(false);
  closeOptions() {
    this.showOptions.set(false);
  }
  openOptions() {
    this.showOptions.set(true);
  }
  toggleMobNav() {
    console.log('hi clicked parent');
    this.someData.toggleNav();
  }
  @ViewChild(MobileMenu) someData!: MobileMenu;
  ngDoCheck() {}
}
