import { Component, OnInit } from '@angular/core';
import ReviewI from '../../../../../typs/reivew';
import { SvgIconComponent } from '../../../../components/shared/UI/svgComp.component';
import RateStars from '../../../../components/shared/UI/starRate.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reviews-tap',
  template: `<section>
    <div class="flex justify-between items-center my-[24px]">
      <h1 class="text-[24px] font-semibold capitalize">
        all reviews
        <span class="text-[16px] text-black/60"> ({{ reviews.length }}) </span>
      </h1>
      <div class="flex h-[48px] *:cursor-pointer gap-[10px]">
        <div
          class="bg-[#F0F0F0] rounded-full size-[48px] flex items-center justify-center"
        >
          <app-svg-icon icon="filter" [size]="24" />
        </div>

        <button
          class="bg-[#F0F0F0] px-[20px] rounded-[62px] flex  items-center gap-[10px]"
        >
          latest
          <span>
            <app-svg-icon icon="dropDownArrow" [size]="16" />
          </span>
        </button>
        <button class="text-white rounded-[62px] bg-black px-[20px]">
          Write a Review
        </button>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-[20px]">
      @for (item of reviews; track $index) {
      <div class="border-[.5px] border-black/20 rounded-[20px] p-[28px_32px]">
        <div
          class="flex mb-[15px] items-center justify-between cursor-pointer "
        >
          <rate-stars [rate]="item.rate" />
          <app-svg-icon icon="dots" [size]="20" />
        </div>
        <div class="mb-[12px] flex items-center gap-[5px]">
          <h1 class="text-[20px] font-semibold">{{ item.name }}</h1>
          <app-svg-icon icon="verify" [size]="20" />
        </div>
        <p class="text-black/60 mb-[24px]">"{{ item.message }}"</p>
        <p class="text-black/60">posted on {{ item.date | date }}</p>
      </div>
      }
    </div>
  </section>`,
  imports: [SvgIconComponent, RateStars, DatePipe],
})
export default class ReviewTap {
  date(d: string) {
    const date = new Date();
  }
  reviews: ReviewI[] = [
    {
      id: 1,
      name: 'Alice Johnson',
      message:
        'I absolutely love this product! The design is sleek and the materials used feel premium. It fits perfectly into my daily routine and has genuinely improved my workflow.',
      rate: 5,
      date: '2025-07-01T14:23:00Z',
    },
    {
      id: 2,
      name: 'Bob Smith',
      message:
        'The product is decent for the price. It functions as expected, though I wish the build quality was slightly better. That said, customer support was helpful when I had questions.',
      rate: 4,
      date: '2025-06-28T09:12:00Z',
    },
    {
      id: 3,
      name: 'Clara Lee',
      message:
        'Unfortunately, this product didn’t meet my expectations. While it looks nice in the photos, the actual feel and durability are lacking. I wouldn’t recommend it for daily use.',
      rate: 2,
      date: '2025-07-15T18:45:00Z',
    },
    {
      id: 4,
      name: 'David Kim',
      message:
        'Amazing experience! The packaging was thoughtful and the product quality is outstanding. It’s rare to find something that exceeds expectations, but this definitely did.',
      rate: 5,
      date: '2025-07-12T13:00:00Z',
    },
    {
      id: 5,
      name: 'Ella Martinez',
      message:
        'The design is beautiful and it looked great when I first received it. However, after a week of use, I noticed some wear and tear. Still, it might work well for light or occasional use.',
      rate: 3,
      date: '2025-07-10T11:05:00Z',
    },
    {
      id: 6,
      name: 'Frank Green',
      message:
        'One of the best purchases I’ve made in a while. It’s stylish, functional, and performs exactly as advertised. I’ve already recommended it to several of my friends.',
      rate: 5,
      date: '2025-06-30T20:15:00Z',
    },
    {
      id: 7,
      name: 'Grace Liu',
      message:
        'Good overall value for the money. While there are some minor drawbacks, it delivers on its core promises and has proven useful in my day-to-day activities.',
      rate: 4,
      date: '2025-07-02T16:30:00Z',
    },
    {
      id: 8,
      name: 'Henry Walker',
      message:
        'I had high hopes for this, but was let down. The item arrived later than expected and the box was damaged. The actual product didn’t match the online description closely.',
      rate: 1,
      date: '2025-07-05T08:50:00Z',
    },
    {
      id: 9,
      name: 'Isabella Zhang',
      message:
        'This product has been a fantastic addition to my collection. It’s both practical and well-designed. The attention to detail is obvious and really sets it apart from similar items.',
      rate: 5,
      date: '2025-07-18T14:10:00Z',
    },
  ];
}
