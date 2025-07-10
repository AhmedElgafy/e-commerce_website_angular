import { Component, Input, input } from '@angular/core';
import { CnPipe } from '../../../uitls/pips/cn.pipe';

@Component({
  selector: 'button-comp',
  imports: [CnPipe],
  template: `<div
    [class]="
      [
        'text-white w-[210px] h-[52px] flex cursor-pointer items-center justify-center text-[16px] font-medium rounded-[62px] bg-black ',
        class
      ] | cn
    "
    
  >
    {{ text }}
  </div>`,
})
export class ButtonComp {
  @Input() text: string = 'default Btn text';
  @Input() class: string = '';
  getDimensions(x: number, name: 'width' | 'height') {
    return `${name}: ${x}px`;
  }
}
