import { Component, Input, input } from '@angular/core';
import { CnPipe } from '../../../uitls/pips/cn.pipe';

@Component({
  selector: 'button-comp',
  imports: [CnPipe],
  template: `<div
    [class]="
      [
        'text-white flex cursor-pointer items-center justify-center text-[16px] font-medium rounded-[62px] bg-black ',
        class
      ] | cn
    "
    [style]="
      getDimensions(width, 'width') + ';' + getDimensions(hight, 'height')
    "
  >
    {{ text }}
  </div>`,
})
export class ButtonComp {
  @Input() width: number = 210;
  @Input() hight: number = 52;
  @Input() text: string = 'default Btn text';
  @Input() class: string = '';
  getDimensions(x: number, name: 'width' | 'height') {
    return `${name}: ${x}px`;
  }
}
