import { Component } from '@angular/core';

@Component({
  selector: 'app-product-gallery',
  template: `<div class="flex gap-[14px]">
    <div
      class="flex-[20%] *:rounded-[20px] gap-[14px] *:object-cover *:flex-1/3 flex flex-col justify-between"
    >
      <img src="https://dummyimage.com/1000/" alt="" />
      <img src="https://dummyimage.com/1000/" alt="" />
      <img src="https://dummyimage.com/1000/" alt="" />
    </div>
    <div class="*:rounded-[20px] *:object-cover flex-[80%] object-fill">
      <img src="https://dummyimage.com/1000/" class="w-full" alt="" />
    </div>
  </div>`,
})
export default class ProductGallery {}
