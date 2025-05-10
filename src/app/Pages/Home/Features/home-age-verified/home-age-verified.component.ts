import { Component } from '@angular/core';
import { TopBannerComponent } from "../../../../Component/top-banner/top-banner.component";
import { HeaderComponent } from "../../../../Component/Header/header/header.component";
import { TrendingCardComponent } from "../../../../Component/trending-card/trending-card.component";
import { LookbookCardComponent } from "../../../../Component/lookbook-card/lookbook-card.component";
import { LatestBlogComponent } from "../../../../Component/latest-blog/latest-blog.component";
import { FollowInstagramComponent } from "../../../../Component/follow-instagram/follow-instagram.component";
import { ShippingComponent } from "../../../../Component/shipping/shipping.component";
import { PopupComponent } from "../../../../Component/popup/popup.component";
import { CardModelComponent } from "../../../../Component/card-model/card-model.component";
import { FooterComponent } from "../../../../Component/Footer/footer/footer.component";
import { SellerCardComponent } from "../../../../Component/seller-card/seller-card.component";
import { SwiperService } from '../../../../Services/swiper.service';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home-age-verified',
    imports: [RouterLink, CommonModule, TopBannerComponent, HeaderComponent, TrendingCardComponent, LookbookCardComponent, LatestBlogComponent, FollowInstagramComponent, ShippingComponent, PopupComponent, CardModelComponent, FooterComponent, SellerCardComponent],
    templateUrl: './home-age-verified.component.html',
    styleUrl: './home-age-verified.component.scss'
})
export class HomeAgeVerifiedComponent {
  constructor(private swiperService: SwiperService) { }
  ngAfterViewInit() {
    this.swiperService.initSwiper('.ageSwiper', 1, 0, 3000, 1, 1, 1);
  }
}
