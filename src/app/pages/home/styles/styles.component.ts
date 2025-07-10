import { Component } from '@angular/core';
import { cn } from '../../../uitls/functions';
import { ClassNameValue } from 'tailwind-merge';

@Component({
  selector: 'app-styles',
  imports: [],
  templateUrl: './styles.component.html',
  styleUrl: './styles.component.css',
})
export class StylesComponent {
  categories: { image: string; width: string; title: string }[] = [
    { image: 'image 11', title: 'casual', width: '407' },
    { image: 'image 13', title: 'formal', width: '684' },
    { image: 'image 12', title: 'party', width: '684' },
    { image: 'image 14', title: 'gym', width: '407' },
  ];
  cn(...inputs: ClassNameValue[]) {
    return cn(inputs);
  }
}
