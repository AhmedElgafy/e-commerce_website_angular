import { Pipe, PipeTransform } from '@angular/core';
import { formatWithDotSeparator } from '../functions';

@Pipe({
  name: 'dotSeparator',
  pure: true, // default; ensures good performance
})
export class DotSeparatorPipe implements PipeTransform {
  transform(value: number): string {
    return formatWithDotSeparator(value);
  }
}
