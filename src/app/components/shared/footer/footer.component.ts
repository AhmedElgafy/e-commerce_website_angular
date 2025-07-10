import { Component } from '@angular/core';
import { SubscribeComponent } from '../../../pages/home/subscribe/subscribe.component';
import { FooterItemsI, Link } from '../../../../typs/footerItems';
import { RouterLink } from '@angular/router';
import { SvgIconComponent } from '../UI/svgComp.component';
import { footerItems, paymentMethods, socialMedia } from './data';

@Component({
  selector: 'app-footer',
  imports: [SubscribeComponent, RouterLink, SvgIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  footerItems = footerItems;
  socialMedia = socialMedia;
  paymentMethods = paymentMethods;
}
