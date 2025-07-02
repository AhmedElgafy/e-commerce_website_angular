import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SvgIconComponent } from '../UI/svgComp.component';

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
  imports: [RouterLink, SvgIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  navItems: (navItem | nevItemSelect)[] = [
    {
      label: 'Shop',
      type: 'select',
      options: [],
    },
    {
      label: 'On Sale',
      type: 'direct',
      href: 'on-sale',
    },
    {
      label: 'New Arrivals',
      type: 'direct',
      href: 'new-arrivals',
    },
    {
      label: 'Brands',
      type: 'direct',
      href: 'brands',
    },
  ];
  showOptions = signal(false);
  closeOptions() {
    this.showOptions.set(false);
  }
  openOptions() {
    this.showOptions.set(true);
  }
  ngDoCheck() {
  }
}
