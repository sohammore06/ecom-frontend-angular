import { Component } from '@angular/core';
import { TopBannerComponent } from "../../../../Component/top-banner/top-banner.component";
import { Header06Component } from "../../../../Component/Header/header-06/header-06.component";
import { TrendingCardComponent } from "../../../../Component/trending-card/trending-card.component";
import { LookbookCardComponent } from "../../../../Component/lookbook-card/lookbook-card.component";
import { SellerCardComponent } from "../../../../Component/seller-card/seller-card.component";
import { LatestBlogComponent } from "../../../../Component/latest-blog/latest-blog.component";
import { FollowInstagramComponent } from "../../../../Component/follow-instagram/follow-instagram.component";
import { ShippingComponent } from "../../../../Component/shipping/shipping.component";
import { FooterComponent } from "../../../../Component/Footer/footer/footer.component";
import { PopupComponent } from "../../../../Component/popup/popup.component";
import { CardModelComponent } from "../../../../Component/card-model/card-model.component";
import { SwiperService } from '../../../../Services/swiper.service';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home-header-06',
    imports: [RouterLink, CommonModule, TopBannerComponent, Header06Component, TrendingCardComponent, LookbookCardComponent, SellerCardComponent, LatestBlogComponent, FollowInstagramComponent, ShippingComponent, FooterComponent, PopupComponent, CardModelComponent],
    templateUrl: './home-header-06.component.html',
    styleUrl: './home-header-06.component.scss'
})
export class HomeHeader06Component {
  constructor(private swiperService: SwiperService) { }
  ngAfterViewInit() {
    this.swiperService.initSwiper('.header6Swiper', 1, 0, 3000, 1, 1, 1);
  }
}
