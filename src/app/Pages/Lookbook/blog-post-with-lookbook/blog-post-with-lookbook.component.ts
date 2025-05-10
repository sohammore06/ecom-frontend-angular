import { Component } from '@angular/core';
import { TopBannerComponent } from "../../../Component/top-banner/top-banner.component";
import { HeaderComponent } from "../../../Component/Header/header/header.component";
import { CardModelComponent } from "../../../Component/card-model/card-model.component";
import { FooterComponent } from "../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../Component/popup/popup.component";

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SwiperService } from '../../../Services/swiper.service';

@Component({
    selector: 'app-blog-post-with-lookbook',
    imports: [RouterLink, CommonModule, TopBannerComponent, HeaderComponent, CardModelComponent, FooterComponent, PopupComponent],
    templateUrl: './blog-post-with-lookbook.component.html',
    styleUrl: './blog-post-with-lookbook.component.scss'
})
export class BlogPostWithLookbookComponent {
  constructor(private swiperService: SwiperService) { }

  ngAfterViewInit() {
    this.swiperService.initSwiper('.lookbookSwiper', 1, 10, 3000, 1, 2, 3);
  }
}
