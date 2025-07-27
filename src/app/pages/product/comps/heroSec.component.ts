import { Component, DoCheck, signal } from '@angular/core';
import RateStars from '../../../components/shared/UI/starRate.component';
import PriceUI from '../../../components/shared/UI/price.component';
import ColorPickerItem from '../../../components/shared/UI/colorPickerItem.component';
import Choices from './choices.component';
import { Color, Option, Size } from '../../../../typs/choices';
import SizePicker from '../../../components/shared/UI/sizePicker.component';
import { DividerModule } from 'primeng/divider';
import Counter from '../../../components/shared/UI/counter.component';
import ProductGallery from './productsGallery.component';
import ProductTabs from './taps/taps.component';

@Component({
  selector: 'app-product-heroSec',
  imports: [
    ProductGallery,
    Choices,
    RateStars,
    PriceUI,
    ColorPickerItem,
    SizePicker,
    Counter,
    DividerModule,
  ],

  templateUrl: `./productHeroSec.component.html`,
  // styleUrl: './product.component.css',
})
export class ProductHeroSecComponent {
  colors: Option[] = [
    { value: 1, label: '#FF5733' }, // Vibrant red-orange
    { value: 2, label: '#33C1FF' }, // Sky blue
    { value: 3, label: '#28A745' }, // Green
    { value: 4, label: '#FFC107' }, // Amber
  ];
  sizes: Option[] = [
    { label: 'Small', value: 'S' },
    { label: 'Medium', value: 'M' },
    { label: 'Large', value: 'L' },
    { label: 'Extra Large', value: 'XL' },
  ];
  selectedColor = signal<Option | null>(null);
  colorClicked(color: Option) {
    this.selectedColor.set(color);
  }
  selectedSize = signal<Option | null>(null);
  sizeClicked(size: Option) {
    this.selectedSize.set(size);
  }
}
