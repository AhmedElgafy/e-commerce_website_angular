import { Component, DoCheck, input, output } from '@angular/core';
import { SvgIconComponent } from './svgComp.component';
import { Color } from '../../../../typs/choices';
import SelectItem from '../AbstractComps/AbstractSelectItem.component';

@Component({
  imports: [SvgIconComponent],
  selector: 'app-colorPickerItem',
  template: `<div
    (click)="optionClicked()"
    class="size-[37px] rounded-full flex items-center justify-center cursor-pointer hover:opacity-50 "
    [style]="'background-color:' + option().label"
  >
    @if (selected()) {
    <app-svg-icon icon="check" [size]="15" />
    }
  </div>`,
})
export default class ColorPickerItem extends SelectItem {}
