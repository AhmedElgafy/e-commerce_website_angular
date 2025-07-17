import { CarouselResponsiveOptions } from 'primeng/carousel';

export const products: { name: string }[] = [
  { name: 'ahmed' },
  { name: 'ahmed' },
  { name: 'ahmed' },
  { name: 'ahmed' },
  { name: 'ahmed' },
];
export const responsiveOptions: CarouselResponsiveOptions[] = [
  {
    breakpoint: '1400px',
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: '767px',
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: '575px',
    numVisible: 3,
    numScroll: 1,
  },
];
