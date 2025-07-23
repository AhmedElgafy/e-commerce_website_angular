import { Component, DoCheck, input, output, signal } from '@angular/core';

@Component({ template: `<div></div>` })
export default class AbstractCounter implements DoCheck {
  counterInput = input<number>(0);
  counterOutput = output<number>();
  counter = signal<number>(0);
  constructor() {
    if (this.counterInput()) {
      this.counter.set(this.counterInput());
    }
  }
  action(actionType: 'increment' | 'decrement') {
    if (actionType == 'increment') {
      this.counter.update((prev) => prev + 1);
    } else {
      this.counter() != 0 && this.counter.update((prev) => prev - 1);
    }
  }
  ngDoCheck(): void {
    this.counterOutput.emit(this.counter());
  }
}
