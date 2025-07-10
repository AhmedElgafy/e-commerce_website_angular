import { Component } from '@angular/core';
import { SvgIconComponent } from '../../../components/shared/UI/svgComp.component';
import { cn } from '../../../uitls/functions';
import { ClassNameValue } from 'tailwind-merge';
import { CnPipe } from '../../../uitls/pips/cn.pipe';

@Component({
  selector: 'app-subscribe',
  imports: [SvgIconComponent,CnPipe],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.css',
})
export class SubscribeComponent {
  
}
