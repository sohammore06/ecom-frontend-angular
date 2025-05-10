import { Component } from '@angular/core';
import { TopBannerComponent } from "../../../../Component/top-banner/top-banner.component";
import { Header04Component } from "../../../../Component/Header/header-04/header-04.component";
import { TrendingCardComponent } from "../../../../Component/trending-card/trending-card.component";
import { LookbookCardComponent } from "../../../../Component/lookbook-card/lookbook-card.component";
import { SellerCardComponent } from "../../../../Component/seller-card/seller-card.component";
import { LatestBlogComponent } from "../../../../Component/latest-blog/latest-blog.component";
import { ShippingComponent } from "../../../../Component/shipping/shipping.component";
import { FollowInstagramComponent } from "../../../../Component/follow-instagram/follow-instagram.component";
import { FooterComponent } from "../../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../../Component/popup/popup.component";
import { CardModelComponent } from "../../../../Component/card-model/card-model.component";
import { SwiperService } from '../../../../Services/swiper.service';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home-header-04',
    imports: [RouterLink, CommonModule, TopBannerComponent, Header04Component, TrendingCardComponent, LookbookCardComponent, SellerCardComponent, LatestBlogComponent, ShippingComponent, FollowInstagramComponent, FooterComponent, PopupComponent, CardModelComponent],
    templateUrl: './home-header-04.component.html',
    styleUrl: './home-header-04.component.scss'
})
export class HomeHeader04Component {
  constructor(private swiperService: SwiperService) { }
  ngAfterViewInit() {
    this.swiperService.initSwiper('.header4Swiper', 1, 0, 3000, 1, 1, 1);
  }
}
