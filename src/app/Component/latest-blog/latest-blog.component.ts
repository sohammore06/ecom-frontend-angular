import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SwiperService } from '../../Services/swiper.service';

@Component({
    selector: 'app-latest-blog',
    imports: [RouterLink,],
    templateUrl: './latest-blog.component.html',
    styleUrl: './latest-blog.component.scss'
})
export class LatestBlogComponent {
  constructor(private swiperService: SwiperService) { }

  ngAfterViewInit() {
    this.swiperService.initSwiper('.BlogSwiper', 1, 0, 3000, 1, 2, 3);
  }
}
