import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  template: `
    <svg
      [class]="class"
      attr.width="{{ width }}px"
      attr.height="{{ height }}px"
      attr.fill="{{ fill || 'black' }}"
      attr.class="{{ class }}"
      attr.size="{{ size }}"
    >
      <use
        attr.size="{{ size }}"
        attr.width="{{ width }}px"
        attr.height="{{ height }}px"
        attr.xlink:href="assets/icons/{{ icon }}.svg"
      ></use>
    </svg>
  `,
})
export class SvgIconComponent implements OnInit {
  @Input({ required: true }) icon!: string;
  @Input() width?: number;
  @Input() height?: number;
  @Input() size?: number = 200;
  @Input() fill?: string;
  @Input() class?: string;

  ngOnInit(): void {
    if (!this.width || !this.height) {
      this.width = this.size;
      this.height = this.size;
    }
  }
}
