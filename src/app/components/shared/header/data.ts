import { navItem, nevItemSelect } from '../../../../typs/navBar';

export const navItems: (navItem | nevItemSelect)[] = [
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
