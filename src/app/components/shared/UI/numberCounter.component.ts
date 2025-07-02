import { Component, Input } from '@angular/core';
import { formatWithDotSeparator } from '../../../uitls/functions';
import { DotSeparatorPipe } from '../../../uitls/pips/format-with-dot-separator.pipe';

@Component({
  selector: 'number-counter',
  template: `<h1>{{ number | dotSeparator }} +</h1>`,
  imports: [DotSeparatorPipe],
})
export class NumberCounter {
  @Input() number: number = 0;
}
