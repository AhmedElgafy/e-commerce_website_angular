import { Component } from '@angular/core';
import SelectItem from '../AbstractComps/AbstractSelectItem.component';
import { CnPipe } from '../../../uitls/pips/cn.pipe';

@Component({
  selector: 'app-size-picker',
  template: `<div
    (click)="optionClicked()"
    [class]="
      [
        'p-[12px_24px] hover:bg-black hover:text-white cursor-pointer transition-colors text-black/60 rounded-[62px] bg-[#F0F0F0]',
        selected() && 'bg-black text-white'
      ] | cn
    "
  >
    {{ option().label }}
  </div>`,
  imports: [CnPipe],
})
export default class SizePicker extends SelectItem {}
