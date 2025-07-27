import {
  Component,
  input,
  output,
  signal,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Option } from '../../../../typs/choices';
import { CnPipe } from '../../../uitls/pips/cn.pipe';

@Component({
  selector: 'app-tabs',
  template: `<div
    class="grid grid-cols-3 relative content-center  border-b-[.5px] border-solid border-black/20"
    [style]="
      'grid-template-columns: repeat(' + taps.length + ', minmax(0, 1fr);'
    "
  >
    @for (tap of taps(); track $index) {
    <div
      (click)="setActive(+tap.value)"
      class=" py-[24px] text-center cursor-pointer text-black/60 hover:text-black transition-colors"
    >
      <h1
        [class]="
          ['text-center  ', tap.value == activeTap() && 'text-black'] | cn
        "
      >
        {{ tap.label }}
      </h1>
    </div>
    }
    <div
      class="bg-black  h-[.5px] absolute  bottom-0 transition-[left] duration-300 ease-in-out"
      [style.width]="100 / taps().length + '%'"
      [style.left]="((activeTap() - 1) / taps().length) * 100 + '%'"
    ></div>
  </div>`,
  imports: [CnPipe],
})
export default class Taps implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.activeTap.set(this.defaultActiveTap());
  }
  taps = input.required<Option[]>();
  activeTap = signal<number>(1);
  onActiveChange = output<number>();
  defaultActiveTap = input<number>(1);
  setActive(n: number) {
    this.onActiveChange.emit(n);
    this.activeTap.set(n);
  }
}
