import { Component, OnInit } from '@angular/core';
import SelectItem from '../../components/shared/AbstractComps/AbstractSelectItem.component';
import { SvgIconComponent } from '../../components/shared/UI/svgComp.component';
import { CnPipe } from '../../uitls/pips/cn.pipe';

@Component({
  selector: 'app-filter-item',
  template: ` <div
    (click)="optionClicked()"
    class="flex items-center cursor-pointer group justify-between"
  >
    <h1
      [class]="
        ['text-black/60 group-hover:text-black', selected() && 'text-black']
          | cn
      "
    >
      {{ option().label }}
    </h1>
    <app-svg-icon
      icon="dropDownArrow"
      [class]="
        [
          'fill-black/60 group-hover:fill-black rotate-270',
          selected() && 'fill-black'
        ] | cn
      "
      [size]="16"
    />
  </div>`,
  imports: [SvgIconComponent, CnPipe],
})
export class FilterItem extends SelectItem {}
