import { Component, OnInit, signal } from '@angular/core';
import { SvgIconComponent } from '../../components/shared/UI/svgComp.component';
import { Divider } from 'primeng/divider';
import { Option } from '../../../typs/choices';
import { FilterItem } from './filterItem.component';

@Component({
  selector: 'app-filter',
  template: `<div class="">
    <div class="flex justify-between items-center sticky top-0 bg-white">
      <h1 class="text-[20px] font-semibold">Filter</h1>
      <app-svg-icon icon="filter" [size]="24" />
    </div>
    <p-divider />
    <div class="flex flex-col gap-[20px]">
      @for (option of filterOptions; track $index) {
      <app-filter-item
        [option]="option"
        [selected]="selectedCat()?.value == option.value"
        (selectedOption)="optionClicked($event)"
      />
      }
    </div>
  </div>`,
  imports: [SvgIconComponent, Divider, FilterItem],
})
export class Filter implements OnInit {
  constructor() {}
  selectedCat = signal<null | Option>(null);

  ngOnInit() {}
  filterOptions: Option[] = [
    { label: 'T-shirt', value: 'T-shirt' },
    { label: 'Jeans', value: 'Jeans' },
    { label: 'Jacket', value: 'Jacket' },
    { label: 'Dress', value: 'Dress' },
    { label: 'Skirt', value: 'Skirt' },
    { label: 'Shorts', value: 'Shorts' },
    { label: 'Sweater', value: 'Sweater' },
    { label: 'Hoodie', value: 'Hoodie' },
    { label: 'Blazer', value: 'Blazer' },
    { label: 'Skirt', value: 'Skirt' },
    { label: 'Shorts', value: 'Shorts' },
    { label: 'Sweater', value: 'Sweater' },
    { label: 'Hoodie', value: 'Hoodie' },
    { label: 'Blazer', value: 'Blazer' },
  ];
  optionClicked(p: Option) {
    this.selectedCat.set(p);
  }
}
