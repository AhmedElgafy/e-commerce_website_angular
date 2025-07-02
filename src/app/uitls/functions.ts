import { ClassNameValue, twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';
export function formatWithDotSeparator(number: number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
export function cn(...inputs: ClassNameValue[]) {
  return twMerge(clsx(inputs));
}
