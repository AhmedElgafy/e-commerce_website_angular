export interface navItem {
  label: string;
  href: string;
  type: 'direct';
}
export interface nevItemSelect {
  label: string;
  type: 'select';
  options: navItem[];
}
