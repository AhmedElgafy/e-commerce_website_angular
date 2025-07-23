import { Component } from '@angular/core';
import AbstractCounter from '../AbstractComps/AbstractCounter.component';
import { SvgIconComponent } from './svgComp.component';

@Component({
  selector: 'app-counter',
  template: `<div
    class="flex grow items-center w-fit gap-[38px]  rounded-[62px] bg-[#F0F0F0] p-[16px_20px]"
  >
    <app-svg-icon
      icon="minus"
      class="cursor-pointer"
      [size]="20"
      (click)="action('decrement')"
    />
    <h1 class="text-lg ">{{ counter() }}</h1>
    <app-svg-icon
      class="cursor-pointer "
      icon="plus"
      [size]="20"
      (click)="action('increment')"
    />
  </div>`,
  imports: [SvgIconComponent],
})
export default class Counter extends AbstractCounter {}
