import { Component } from '@angular/core';

@Component({
  selector: 'app-product-gallery',
  template: `<div class="flex gap-[14px]">
    <div class="flex-[20%] *:rounded-[4px] flex flex-col justify-between">
      <img src="https://dummyimage.com/250/" alt="" />
      <img src="https://dummyimage.com/250/" alt="" />
      <img src="https://dummyimage.com/250/" alt="" />
    </div>
    <div class="*:rounded-[20px] flex-[72%] object-fill">
      <img src="https://dummyimage.com/250/" class="w-full" alt="" />
    </div>
  </div>`,
})
export default class ProductGallery {}
