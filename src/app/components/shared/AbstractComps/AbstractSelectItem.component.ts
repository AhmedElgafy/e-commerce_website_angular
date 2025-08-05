import { Component, input, output } from '@angular/core';
import { Color, Option } from '../../../../typs/choices';
@Component({
  template: `<div></div>`,
})
export default class SelectItem {
  option = input.required<Option>();
  selected = input<boolean>(false);
  selectedOption = output<Option>();

  optionClicked() {
    this.selectedOption.emit(this.option());
  }
}
