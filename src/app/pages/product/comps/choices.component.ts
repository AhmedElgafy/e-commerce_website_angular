import { Component, input } from '@angular/core';

@Component({
  selector: 'app-choices',
  template: `<div class="space-y-[16px]">
    <h1 class="text-black/60">{{ title() }}</h1>
    <div class="flex flex-wrap items-center gap-[16px]">
      <ng-content></ng-content>
    </div>
  </div>`,
})
export default class Choices {
  title = input<string>('this is default');
}
