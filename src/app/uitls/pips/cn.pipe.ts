import { Pipe, PipeTransform } from '@angular/core';
import { cn, formatWithDotSeparator } from '../functions';
import { ClassNameValue } from 'tailwind-merge';

@Pipe({
  name: 'cn',
  pure: true, // default; ensures good performance
})
export class CnPipe implements PipeTransform {
  transform(...values: ClassNameValue[]): string {
    return cn(values);
  }
}
